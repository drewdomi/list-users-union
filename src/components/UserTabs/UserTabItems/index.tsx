import "./styles.scss";
import { tabs } from "..";
import { IUsersTable } from "../../../services/models/IUserData";

type Props = {
  tab: string | typeof tabs[number];
  userInfo: IUsersTable;
};

type TabContent = {
  [key in Props["tab"]]: JSX.Element;
};

function UserTabItems({ tab, userInfo }: Props) {

  const tabContents: TabContent = {
    info: (
      <>
        <li>
          <h4>Name</h4>
          <p>{userInfo.name.first} {userInfo.name.last}</p>
        </li>
        <li>
          <h4>BirthDay</h4>
          <p>{userInfo.dob.date}8</p>
        </li>
        <li>
          <h4>Nationality</h4>
          <p>{userInfo.nat}</p>
        </li>

        <li>
          <h4>Phones</h4>
          <p>{userInfo.phone}</p>
          <p>{userInfo.cell}</p>
        </li>
        <li>
          <h4 className="id-name">{userInfo.id.name}</h4>
          <p>{userInfo.id.value}</p>
        </li>
      </>
    ),
    location: (
      <>
        <li>
          <h4>Country</h4>
          <p>{userInfo.location.country}</p>
        </li>
        <li>
          <h4>State</h4>
          <p>{userInfo.location.state}</p>
        </li>
        <li>
          <h4>City</h4>
          <p>{userInfo.location.city}</p>
        </li>
        <li>
          <h4>Street</h4>
          <address>{userInfo.location.street.name}, {userInfo.location.street.number}</address>
        </li>
      </>
    ),
    login: (
      <>
        <li>
          <h4>UUID</h4>
          <p>{userInfo.login.uuid}</p>
        </li>
        <li>
          <h4>Username</h4>
          <p>{userInfo.login.username}</p>
        </li>
        <li>
          <h4>Email</h4>
          <p>{userInfo.email}</p>
        </li>
        <li>
          <h4>Password</h4>
          <p>{userInfo.login.password}</p>
        </li>
      </>
    ),
  };

  return (
    <div className="tab-items">
      <ul>
        {tabContents[tab]}
      </ul>
    </div>
  );

}

export default UserTabItems;