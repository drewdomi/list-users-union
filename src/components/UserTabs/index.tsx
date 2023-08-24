import { IUsersTable } from "../../services/models/IUserData";
import UserTabItems from "./UserTabItems";
import "./styles.scss";
import { useState } from "react";

export const tabs = ['info', 'location', 'login'];

type Props = {
  userInfo: IUsersTable;
}

function UserTabs({userInfo}: Props) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
    <div className="tabs">
      <div className="tabs-selector">
        {tabs.map((tab, key) => {
          return (
            <button
              key={key}
              onClick={() => handleClick(tab)}
              className={`tab ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <UserTabItems tab={activeTab} userInfo={userInfo}/>
    </div>
    </div>
  );
}

export default UserTabs;