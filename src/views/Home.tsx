import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";
import { ChangeEvent, useEffect, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";
import Pagination from "../components/Pagination";
import { fixDate } from "../snippets/fixDataFromApi";
import Loader from "../components/Loader";

function Home() {
  const [users, setUsers] = useState<IUsersTable[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [inputText, setInputText] = useState("");
  const [loader, setLoader] = useState(true);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  async function getUsers() {
    try {
      if (!localStorage.getItem("users")) {
        const response = await api.get<IGetResponse>("");
        setUsers(response.data.results);
        console.log(response.data.results);
        localStorage.setItem("users", JSON.stringify(response.data.results));
      } else{
        setUsers(JSON.parse(localStorage.getItem("users") || ""))
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filterUser = (text: string) => {
    if (text === "") return users;
    else {
      return users.filter(
        (user) =>
          user.name.first.toLowerCase().includes(text) ||
          user.name.last.toLowerCase().includes(text) ||
          user.name.title.toLowerCase().includes(text) ||
          user.dob.age.toString().includes(text) ||
          user.login.uuid.includes(text) ||
          fixDate(user.dob.date).includes(text)
      );
    }
  };

  const filteredUsers = filterUser(inputText);

  useEffect(() => {
    const fetchData = async () => {
      await getUsers();
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
      <Title>List Users</Title>
      <SearchBox onChange={handleSearch} />
      <UsersTable users={filteredUsers.slice(firstPostIndex, lastPostIndex)} />
      <Pagination
        totalPosts={filteredUsers.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default Home;
