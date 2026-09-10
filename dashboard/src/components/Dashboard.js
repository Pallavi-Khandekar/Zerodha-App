import React from "react";
import { useLocation } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const { pathname } = useLocation();
  const isOverview = pathname === "/" || pathname === "/dashboard";
  const searchParams = new URLSearchParams(window.location.search);
  const userName =
    searchParams.get("userName") || localStorage.getItem("userName") || "User";

  const renderSection = () => {
    switch (pathname) {
      case "/orders":
        return <Orders />;
      case "/holdings":
        return <Holdings />;
      case "/positions":
        return <Positions />;
      case "/funds":
        return <Funds />;
      case "/apps":
        return <Apps />;
      default:
        return <div className="dashboard-overview" />;
    }
  };

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
        <main className="dashboard-main">
          {isOverview && (
            <>
              <div className="dashboard-greeting">
                <h6>Hi, {userName}!</h6>
                <hr className="divider" />
              </div>
              <Summary />
            </>
          )}
          <div className="content">
            {renderSection()}
          </div>
        </main>
      </GeneralContextProvider>
    </div>
  );
};

export default Dashboard;