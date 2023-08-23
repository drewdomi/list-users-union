import "./styles.scss";
import { tabs } from "..";

type Props = {
  tab: string | typeof tabs[number];
};

type TabContent = {
  [key in Props["tab"]]: JSX.Element;
};

const tabContents: TabContent = {
  info: (
    <>
      <li>
        <h4>Name</h4>
        <p>Lisiane Carvalho</p>
      </li>
      <li>
        <h4>BirthDay</h4>
        <p>04/07/1998</p>
      </li>
      <li>
        <h4>Nationality</h4>
        <p>Brazil</p>
      </li>

      <li>
        <h4>Phones</h4>
        <p>(54) 8404-6470</p>
        <p>(16) 3943-5872</p>
      </li>
      <li>
        <h4>CPF</h4>
        <p>085.991.343-12</p>
      </li>
    </>
  ),
  location: (
    <>
      <li>
        <h4>Country</h4>
        <p>Brazil</p>
      </li>
      <li>
        <h4>State</h4>
        <p>Paraná</p>
      </li>
      <li>
        <h4>City</h4>
        <p>Castanhal</p>
      </li>
      <li>
        <h4>Street</h4>
        <p>Rua São Paulo, <span>4938</span></p>
      </li>
    </>
  ),
  login: (
    <>
      <li>
        <h4>UUID</h4>
        <p>92f87c37-26c2-4021-bb38-c9f3387c717a</p>
      </li>
      <li>
        <h4>Username</h4>
        <p>orangepeacock618</p>
      </li>
      <li>
        <h4>Email</h4>
        <p>lisiane.carvalho@example.com</p>
      </li>
      <li>
        <h4>Password</h4>
        <p>chelsea1</p>
      </li>
    </>
  ),
};

function UserTabItems({ tab }: Props) {
  return (
    <div className="tab-items">
      <ul>
        {tabContents[tab]}
      </ul>
    </div>
  );

}

export default UserTabItems;