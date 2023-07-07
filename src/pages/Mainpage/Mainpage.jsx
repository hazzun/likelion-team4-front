import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Sidebar from "../../components/NavigationBar/Sidebar";
import SidebarValue from "../../SidebarValue";

const Mainpage = () => {
  return (
    <SidebarValue.Consumer>
      {({ openSidebar }) => (
        <section id={openSidebar ? "mainSection" : "mainSectionSmall"}>
          <Sidebar />
          <div className="mainContent">
            <Link to="/watch">
              <img src={"./afterlike.png"} />
            </Link>
          </div>
        </section>
      )}
    </SidebarValue.Consumer>
  );
};

export default Mainpage;
