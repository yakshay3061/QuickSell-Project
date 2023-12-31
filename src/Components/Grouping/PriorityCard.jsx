import React from "react";
import "./StatusCard.css";
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

const PriorityCard = ({ id, title, tag, status }) => {
  // console.log(cardIcon[status]);

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
        {/* <span >
            <BsFillExclamationSquareFill style={{color: '#808080'}} />
        </span> */}

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

export default PriorityCard;
