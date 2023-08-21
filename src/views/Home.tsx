import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsers } from "../services/models/IUserData";

function Home() {
  const [users, setUsers] = useState<IUsers[]>([]);
  async function getUsers() {
    try {
      await api.get<IGetResponse>("?page=1&results=10").then(res => {
        setUsers(res.data.results);
        // console.log(res.data.results);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Title>List Users</Title>
      <SearchBox />
      <UsersTable users={users} />
    </>
  );
}

export default Home;