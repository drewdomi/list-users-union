import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";
import UserTabs from "../components/UserTabs";

function User() {
  return (
    <>
      <ReturnHomeButton/>
      <UserCard
        image="https://randomuser.me/api/portraits/women/19.jpg"
        altImage="Image of Lisiane Carvalho"
        name="Lisiane Carvalho"
        title="Ms"
      />
      <UserTabs/>
    </>
  );
}

export default User;