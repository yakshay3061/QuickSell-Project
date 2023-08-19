import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { BsSliders2, BsChevronDown } from "react-icons/bs";

const Nav = () => {
  const navigate = useNavigate();

  const handleRouting = (e) => {
    navigate(`${e.target.value}`);
    setDropdown(!dropdown);
  };

  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="navbar">
      <div onClick={toggleDropdown} className="navbar__slider">
        <BsSliders2 style={{ background: "white", marginRight: "5px" }} />
        <span style={{fontWeight: 500}}>Display</span>
        <BsChevronDown
          style={{ background: "white", marginLeft: "5px", color: "#808080" }}
        />
      </div>

      {dropdown && (
        <div className="dropdown__menu">
          <div className="dropdown__item">
            <label
              style={{ fontWeight: 700, fontSize: "18px", color: "#D3D3D3", marginBottom: '10px' }}
              htmlFor="group"
            >
              Grouping
            </label>
            <select onChange={handleRouting} id="group">
              <option value="/">--Options--</option>
              <option value="/">Status</option>
              <option value="/user">User</option>
            </select>
          </div>

          <div className="dropdown__item">
            <label
              style={{ fontWeight: 700, fontSize: "18px", color: "#D3D3D3" , marginBottom: '10px'}}
              htmlFor="order"
            >
              Ordering
            </label>
            <select onChange={handleRouting} id="order">
              <option value="/">--Options--</option>
              <option value="/priority">Priority</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
