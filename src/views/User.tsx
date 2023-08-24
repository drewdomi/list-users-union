import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";
import UserTabs from "../components/UserTabs";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";
import Title from "../components/Title";
import Loader from "../components/Loader";

function User() {
  const uuid = window.location.pathname.slice(6);
  const [user, setUser] = useState<IUsersTable[]>([]);
  const [loader, setLoader] = useState(true);

  function searchByUuid(uuid: string, users: IUsersTable[]) {
    return users.filter(
      (user: IUsersTable) => user.login.uuid.includes(uuid)
    );
  };

  async function getUser() {
    try {
      if (!localStorage.getItem("users")) {
        const response = await api.get<IGetResponse>("");
        localStorage.setItem("users", JSON.stringify(response.data.results));
        setUser(searchByUuid(uuid, response.data.results));
      }
      else {
        const userFound = JSON.parse(localStorage.getItem("users") || "{}");
        setUser(searchByUuid(uuid, userFound));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };
    fetchData().finally(() => {
      setLoader(false);
    });
  }, []);

  return (
    <>
    {loader && (
        <Loader/>
      )}
      <ReturnHomeButton />
      {!loader && user.length > 0 && (
        <>
          <UserCard
            image={user[0].picture.large}
            altImage={`Photo of ${user[0].name.first} ${user[0].name.last}`}
            name={`${user[0].name.first} ${user[0].name.last}`}
            title={`${user[0].name.title}`}
          />
          <UserTabs userInfo={user[0]} />
        </>
      )}
      {!loader && user.length === 0 && (
        <>
          <Title>User not found</Title>
        </>
      )}
    </>
  );
}

export default User;