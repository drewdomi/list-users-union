import SearchBox from "../components/SeachBox";
import Title from "../components/Title";
import UsersTable from "../components/UsersTable";

function Home() {
  return (
    <>
      <Title>List Users</Title>
      <SearchBox/>
      <UsersTable/>
    </>
  );
}

export default Home;