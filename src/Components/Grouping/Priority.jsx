import React from "react";
import "./Status.css";
import PriorityCard from "./PriorityCard";
import {
  BsCircleHalf,
  BsCircle,
  BsFillExclamationSquareFill,
} from "react-icons/bs";
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
import { useAppContext } from "../Data/AppContext";

const Status = () => {
  const { data, setData } = useAppContext();
  const { tickets } = data;

  tickets?.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.title < b.title ? -1 : 1;
    } else {
      return a.priority > b.priority ? -1 : 1;
    }
  });

  return (
    <div className="status">
      <div className="backlog">
        <div className="status__nav">
          <div>
            <AiOutlineDash
              style={{ marginRight: "5px", color: "#808080", marginTop: "3px" }}
            />
            <span>No priority</span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.priority === 0).length}
            </span>
          </div>
          <div>
            <AiOutlinePlus />

            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag, status, priority } = ticket;

          return (
            <div key={ticket?.id}>
              {priority === 0 && (
                <PriorityCard id={id} title={title} tag={tag} status={status} />
              )}
            </div>
          );
        })}
      </div>

      <div className="todo">
        <div className="status__nav">
          <div>
            <BsFillExclamationSquareFill
              style={{
                marginRight: "5px",
                fontSize: "15px",
                color: "#ff5722",
                marginTop: "3px",
              }}
            />
            <span>Urgent </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.priority === 4).length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />{" "}
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag, status, priority } = ticket;

          return (
            <div key={ticket?.id}>
              {priority === 4 && (
                <PriorityCard id={id} title={title} tag={tag} status={status} />
              )}
            </div>
          );
        })}
      </div>

      <div className="in__progress">
        <div className="status__nav">
          <div>
            <PiCellSignalFullBold
              style={{ marginRight: "5px", color: "#808080", marginTop: "3px" }}
            />
            <span>High </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.priority === 3).length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>
        {tickets?.map((ticket) => {
          const { id, title, tag, status, priority } = ticket;

          return (
            <div key={ticket?.id}>
              {priority === 3 && (
                <PriorityCard id={id} title={title} tag={tag} status={status} />
              )}
            </div>
          );
        })}
      </div>

      <div className="done">
        <div className="status__nav">
          <div>
            <PiCellSignalHighBold
              style={{ color: "#808080", marginRight: "5px", marginTop: "3px" }}
            />
            <span>Medium </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.priority === 2).length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>
        {tickets?.map((ticket) => {
          const { id, title, tag, status, priority } = ticket;

          return (
            <div key={ticket?.id}>
              {priority === 2 && (
                <PriorityCard id={id} title={title} tag={tag} status={status} />
              )}
            </div>
          );
        })}
      </div>

      <div className="canceled">
        <div className="status__nav">
          <div>
            <PiCellSignalLowBold
              style={{ marginRight: "5px", color: "#808080", marginTop: "3px" }}
            />
            <span>Low </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.priority === 1).length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag, status, priority } = ticket;

          return (
            <div key={ticket?.id}>
              {priority === 1 && (
                <PriorityCard id={id} title={title} tag={tag} status={status} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
