import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";
import UserTabs from "../components/UserTabs";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";

function User() {
  const uuid = window.location.pathname.slice(6, -1);
  const [user, setUser] = useState<IUsersTable[]>([]);
  const [loading, setLoading] = useState(true);

  async function getUser() {
    try {
      if (!localStorage.getItem("users")) {
        const response = await api.get<IGetResponse>("");
        const searchByUuid = (uuid: string) => {
          return response.data.results.filter(
            (user: any) => user.login.uuid.includes(uuid)
          );
        };
        setUser(searchByUuid(uuid));

        localStorage.setItem("users", JSON.stringify(response.data.results));
      }
      else {
        const userFound = JSON.parse(localStorage.getItem("users") || "{}");
        const searchByUuid = (uuid: string) => {
          return userFound.filter(
            (user: any) => user.login.uuid.includes(uuid)
          );
        };
        setUser(searchByUuid(uuid));
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
      setLoading(false);
    });
  }, []);

  return (
    <>
      <ReturnHomeButton />
      {!loading && (
        <>
          <UserCard
            image={user[0].picture.large || ""}
            altImage={`Photo de ${user[0].name.first} ${user[0].name.last}`}
            name={`${user[0].name.first} ${user[0].name.last}`}
            title={`${user[0].name.title}`}
          />
          <UserTabs userInfo={user[0]}/>
        </>
      )}
    </>
  );
}

export default User;