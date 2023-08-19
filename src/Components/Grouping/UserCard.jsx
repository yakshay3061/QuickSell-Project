import React from "react";
import {
  BsFillExclamationSquareFill,
  BsCircleHalf,
  BsCircle,
  BsFillCircleFill,
  BsFillPersonFill,
} from "react-icons/bs";
import {
  AiFillStop,
  AiOutlineCloseCircle,
  AiFillCheckCircle,
  AiOutlineDash,
  AiOutlinePlus,
  AiOutlineEllipsis,
} from "react-icons/ai";

import {
  PiCellSignalLowBold,
  PiCellSignalHighBold,
  PiCellSignalFullBold,
} from "react-icons/pi";

const priorityIcon = [
  <PiCellSignalLowBold
    style={{  color: "#808080" , background: 'white',  fontSize: "12.5px"}}
  />,
  <PiCellSignalHighBold
    style={{ color: "#808080",  background: 'white',  fontSize: "12.5px"}}
  />,
  <PiCellSignalFullBold
    style={{  color: "#808080", background: 'white',  fontSize: "12.5px"}}
  />,
  <BsFillExclamationSquareFill
    style={{
     
      fontSize: "12.5px",
      color: "#ff5722",
      background: 'white',
   

    }}
  />,
  <AiOutlineDash
    style={{  color: "#808080", background: 'white',  fontSize: "12.5px" }}
  />,
];

const cardIcon = {
  Backlog: (
    <AiFillStop
      style={{ marginRight: "5px", color: "#ff4444", background: "white" }}
    />
  ),
  Todo: (
    <BsCircle
      style={{
        marginRight: "5px",
        fontSize: "15px",
        color: "#D3D3D3",
        background: "white",
      }}
    />
  ),
  "In progress": (
    <BsCircleHalf
      style={{ marginRight: "5px", color: "#CCCC00", background: "white" }}
    />
  ),
  Done: (
    <AiFillCheckCircle
      style={{ color: "#1E90FF", marginRight: "5px", background: "white" }}
    />
  ),
  Canceled: (
    <AiOutlineCloseCircle style={{ marginRight: "5px", background: "white" }} />
  ),
};

const UserCard = ({ id, title, tag, status, priority }) => {
  return (
    <div className="status__card">
      <span
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "white",
        }}
      >
        <span style={{ background: "white" }} className="statusCard__id">
          {id}
        </span>
        <BsFillPersonFill
          style={{ background: "white", marginRight: "5px", color: "#ff4444" }}
        />
      </span>
      <span style={{ background: "white", display: "flex" }}>
        <div style={{ background: "white" }}>{cardIcon[status]}</div>

        <p className="statusCard__title">{title}</p>
      </span>

      <div className="statusCard__feature">
        <span >
         

          {priorityIcon[priority]}
        </span>

        <span>
          <BsFillCircleFill
            style={{
              color: "#D3D3D3",
              backgroundColor: "white",
              marginTop: "2px",
            }}
          />
          <span>{tag}</span>
        </span>
      </div>
    </div>
  );
};

export default UserCard;
