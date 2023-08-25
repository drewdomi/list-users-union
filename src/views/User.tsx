import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";
import UserTabs from "../components/UserTabs";
import api from "../services/api";
import { IGetResponse, IUsersTable } from "../services/models/IUserData";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
import Title from "../components/Title";

function User() {
  const uuid = window.location.pathname.slice(6);

  function searchByUuid(uuid: string, users: IUsersTable[]) {
    return users.find(
      (user: IUsersTable) => user.login.uuid.includes(uuid)
    );
  };

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      if (!localStorage.getItem("users")) {
        api.get<IGetResponse>("").then(res => {
          localStorage.setItem("users", JSON.stringify(res.data.results));
          return searchByUuid(uuid, res.data.results);
        });
      } else {
        const userFound = JSON.parse(localStorage.getItem("users") || "{}");
        return searchByUuid(uuid, userFound);
      }
    }
  });

  if (userQuery.isLoading) return <Loader />;
  if (!userQuery.data) {
    setTimeout(() => window.location.href = "/", 3000)
    return (
      <>
        <ReturnHomeButton />
        <Title>User not Found</Title>
        <p>Returning to Home</p>
      </>)
  }

  return (
    <>
      <ReturnHomeButton />
      <UserCard
        image={userQuery.data.picture.large}
        altImage={`Photo of ${userQuery.data.name.title} ${userQuery.data.name.last}`}
        name={`${userQuery.data.name.first} ${userQuery.data.name.last}`}
        title={`${userQuery.data.name.title}`}
      />
      <UserTabs userInfo={userQuery.data} />
    </>
  );
}

export default User;