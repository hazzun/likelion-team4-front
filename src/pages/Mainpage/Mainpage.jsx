import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Sidebar from "../../components/NavigationBar/Sidebar";

const Mainpage = () => {
  return (
    <section id="mainSection">
      <Sidebar />
      <div>
        <div>This is Mainpage</div>
        <Link to="/watch">
          <button>After Like</button>
        </Link>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
        <div className="test">test</div>
      </div>
    </section>
  );
};

export default Mainpage;
