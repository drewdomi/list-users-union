import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";
import UserTabs from "../components/UserTabs";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";

function User() {

  const [users, setUsers] = useState<IUsersTable[]>([]);
  const [user, setUser] = useState<IUsersTable[]>([]);

  async function getUsers() {
    try {
      if (!localStorage.getItem("users")) {
        const response = await api.get<IGetResponse>("");
        setUsers(response.data.results);
        console.log(response.data.results);
        localStorage.setItem("users", JSON.stringify(response.data.results));
      } else {
        setUsers(JSON.parse(localStorage.getItem("users") || ""));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function setUserByUuid(){
    try {
      const uuid = window.location.pathname.slice(6, -1);
      const searchByUuid = (uuid: string) => {
        return users.filter(
          (user) => user.login.uuid.includes(uuid)
        );
      };
      setUser(searchByUuid(uuid))
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    getUsers();
    setUserByUuid();
  }, []);

  return (
    <>
      <ReturnHomeButton />
      <UserCard
        image={""}
        altImage="Image of Lisiane Carvalho"
        name="Lisiane Carvalho"
        title="Ms"
      />
      <button onClick={() => console.log(user)}>click</button>
      <UserTabs/>
    </>
  );
}

export default User;