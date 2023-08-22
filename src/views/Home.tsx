import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsers } from "../services/models/IUserData";
import Pagination from "../components/Pagination";

function Home() {
  const [users, setUsers] = useState<IUsers[]>([]);
  async function getUsers() {
    try {
      // https://randomuser.me/api/?nat=us,br&exc=gender,location,registered&page=10&results=10
      await api.get<IGetResponse>("?page=1&results=10&seed=drewdomi").then(res => {
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
      <Pagination/>
    </>
  );
}

export default Home;