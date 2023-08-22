import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";
import { useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";
import Pagination from "../components/Pagination";

function Home() {
  const [users, setUsers] = useState<IUsersTable[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  async function getUsers() {
    try {
      await api.get<IGetResponse>("?nat=us,br&exc=gender,location,registered&page=1&results=50&seed=de68d2afd5c8563e").then(res => {
        setUsers(res.data.results);
        console.log(res.data.results);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);
  

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <Title>List Users</Title>
      <SearchBox />
      <UsersTable users={currentPosts} />
      <Pagination
        totalPosts={users.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;