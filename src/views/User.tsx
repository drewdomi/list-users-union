import ReturnHomeButton from "../components/ReturnHomeButton";
import UserCard from "../components/UserCard";

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
    </>
  );
}

export default User;