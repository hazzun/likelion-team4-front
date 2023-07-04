import React, { Fragment } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header id="header">
      <Link to="/">
        <button>메인페이지</button>
      </Link>
      <p>header</p>
    </header>
  );
}
