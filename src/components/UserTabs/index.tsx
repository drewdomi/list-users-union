import "./styles.scss";
import { useState } from "react";

function UserTabs() {
  const tabs = ['Info', 'Location', 'Login'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
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
  );
}

export default UserTabs;