import "./styles.scss";
import { fixId, fixDate } from "../../snippets/fixDataFromApi";
import { IUsersTable } from "../../services/models/IUserData";

type Props = {
  users: IUsersTable[];
};

function UsersTable({ users }: Props) {

  return (
    <div className="users-table">
      <div className="table">
        <div className="table-header trow">
          <h3>ID</h3>
          <h3>First Name</h3>
          <h3>Last Name</h3>
          <h3>Title</h3>
          <h3>Date</h3>
          <h3>Age</h3>
          <h3>Actions</h3>
        </div>
        {users.map((user, key) => {
          return (
            <div key={key} className="table-data trow">
              <p>{fixId(user.login.uuid)}</p>
              <p>{user.name.first}</p>
              <p>{user.name.last}</p>
              <p>{user.name.title}</p>
              <p>{fixDate(user.dob.date)}</p>
              <p>{user.dob.age}</p>
              <p className="user-link">
                <a href={`/user/${user.login.uuid}`}>View profile</a>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsersTable;