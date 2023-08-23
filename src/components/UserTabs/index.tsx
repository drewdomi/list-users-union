import UserTabItems from "./UserTabItems";
import "./styles.scss";
import { useState } from "react";

export const tabs = ['info', 'location', 'login'];

function UserTabs() {
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
    </div>
      <UserTabItems tab={activeTab}/>
    </div>
  );
}

export default UserTabs;