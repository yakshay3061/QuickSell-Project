import React from "react";
import "./StatusCard.css";
import { BsFillExclamationSquareFill, BsFillCircleFill } from "react-icons/bs";
import { yellow } from "@mui/material/colors";
import { BiSolidColor } from "react-icons/bi";

const StatusCard = ({ id, title, tag }) => {
  return (
    <div className="status__card">
      <p className="statusCard__id">{id}</p>

      <p className="statusCard__title">{title}</p>

      <div className="statusCard__feature">
        <span style={{ fontSize: "13.5px" }}>
          <BsFillExclamationSquareFill style={{ color: "#808080" }} />
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
