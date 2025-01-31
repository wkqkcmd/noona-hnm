import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  let navigate = useNavigate();

  const [width, setWidth] = useState(0);

  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  const products = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  return (
    <div className="header">
      <div className="top-area">
        <FontAwesomeIcon
          className="bar hide"
          onClick={() => {
            setWidth(250);
          }}
          icon={faBars}
        />
        <span
          className="login-area"
          onClick={() => {
            if (authenticate === true) {
              setAuthenticate(false);
            } else {
              navigate("/login");
            }
          }}
        >
          <FontAwesomeIcon icon={faUser} />
          {authenticate ? "로그아웃" : "로그인"}
        </span>
      </div>
      <div className="side-menu" style={{ width: width }}>
        <FontAwesomeIcon
          className="closebtn"
          onClick={() => {
            setWidth(0);
          }}
          icon={faX}
        />
        {products.map((menu, index) => (
          <div key={index} className="menu-list">
            {menu}
          </div>
        ))}
      </div>

      <Container>
        <div className="logo">
          <img
            width={100}
            src="https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg"
          ></img>
        </div>
        <div className="menu-area">
          {products.map((menu, index) => (
            <div key={index} className="menu-list">
              {menu}
            </div>
          ))}
          <div className="search-box">
            <FontAwesomeIcon icon={faSearch} />
            <input placeholder="제품검색" onKeyDown={onCheckEnter}></input>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
