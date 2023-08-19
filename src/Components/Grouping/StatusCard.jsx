import React from "react";
import "./StatusCard.css";
import { BsFillExclamationSquareFill, BsFillCircleFill } from "react-icons/bs";
import { BiSolidColor } from "react-icons/bi";
import {
  PiCellSignalLowBold,
  PiCellSignalHighBold,
  PiCellSignalFullBold,
} from "react-icons/pi";

import {
  AiFillStop,
  AiOutlineCloseCircle,
  AiFillCheckCircle,
  AiOutlineDash,
  AiOutlinePlus,
  AiOutlineEllipsis,
} from "react-icons/ai";

const priorityIcon = [
  <PiCellSignalLowBold
    style={{  color: "#808080" , background: 'white', fontSize: "13.5px"}}
  />,
  <PiCellSignalHighBold
    style={{ color: "#808080",  background: 'white',  fontSize: "13.5px"}}
  />,
  <PiCellSignalFullBold
    style={{  color: "#808080", background: 'white',  fontSize: "13.5px"}}
  />,
  <BsFillExclamationSquareFill
    style={{
     
      fontSize: "13.5px",
      color: "#ff5722",
      background: 'white',
     

    }}
  />,
  <AiOutlineDash
    style={{ color: "#808080", background: 'white', fontSize: "13.5px" }}
  />,
];

const StatusCard = ({ id, title, tag , priority}) => {
  return (
    <div className="status__card">
      <p className="statusCard__id">{id}</p>

      <p className="statusCard__title">{title}</p>

      <div className="statusCard__feature">
        <span style={{ fontSize: "13.5px" }}>
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

export default StatusCard;
