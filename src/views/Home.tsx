import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";
import { ChangeEvent, useState } from "react";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";
import Pagination from "../components/Pagination";
import { fixDate } from "../snippets/fixDataFromApi";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [inputText, setInputText] = useState("");

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => {
      if (!localStorage.getItem("users")) {
        api.get<IGetResponse>("").then(res => {
          localStorage.setItem("users", JSON.stringify(res.data.results));
          return res.data.results;
        });
      } else {
        return JSON.parse(localStorage.getItem("users") || "");
      }
    }
  });

  if (usersQuery.isLoading) return <Loader />;
  if (usersQuery.isError) return <h1>Error</h1>;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filterUser = (text: string) => {
    if (text === "") return usersQuery.data;
    else {
      return usersQuery.data.filter(
        (user: IUsersTable) =>
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

  return (
    <>
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
