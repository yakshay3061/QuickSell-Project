import React from "react";
import "./Status.css";
import StatusCard from "./StatusCard";
import { BsCircleHalf, BsCircle } from "react-icons/bs";
import { useAppContext } from "../Data/AppContext";

import {
  AiFillStop,
  AiOutlineCloseCircle,
  AiFillCheckCircle,
  AiOutlineDash,
  AiOutlinePlus,
  AiOutlineEllipsis,
} from "react-icons/ai";

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
            <AiFillStop
              style={{ marginRight: "5px", color: "#ff4444", marginTop: "3px" }}
            />
            <span>Backlog </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.status === "Backlog").length}
            </span>
          </div>
          <div>
            <AiOutlinePlus />

            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag } = ticket;

          return (
            <div key={ticket?.id}>
              {ticket?.status === "Backlog" && (
                <StatusCard id={id} title={title} tag={tag} />
              )}
            </div>
          );
        })}
      </div>

      <div className="todo">
        <div className="status__nav">
          <div>
            <BsCircle
              style={{
                marginRight: "5px",
                fontSize: "15px",
                color: "#D3D3D3",
                marginTop: "3px",
              }}
            />
            <span>Todo </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.status === "Todo").length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />{" "}
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag } = ticket;

          return (
            <div key={ticket?.id}>
              {ticket?.status === "Todo" && (
                <StatusCard id={id} title={title} tag={tag} />
              )}
            </div>
          );
        })}
      </div>

      <div className="in__progress">
        <div className="status__nav">
          <div>
            <BsCircleHalf
              style={{ marginRight: "5px", color: "#CCCC00", marginTop: "3px" }}
            />
            <span>In progress </span>
            <span className="card__count">
              {
                tickets?.filter((ticket) => ticket.status === "In progress")
                  .length
              }
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag } = ticket;

          return (
            <div key={ticket?.id}>
              {ticket?.status === "In progress" && (
                <StatusCard id={id} title={title} tag={tag} />
              )}
            </div>
          );
        })}
      </div>

      <div className="done">
        <div className="status__nav">
          <div>
            <AiFillCheckCircle
              style={{ color: "#1E90FF", marginRight: "5px", marginTop: "3px" }}
            />
            <span>Done </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.status === "Done").length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag } = ticket;

          return (
            <div key={ticket?.id}>
              {ticket?.status === "Done" && (
                <StatusCard id={id} title={title} tag={tag} />
              )}
            </div>
          );
        })}
      </div>

      <div className="canceled">
        <div className="status__nav">
          <div>
            <AiOutlineCloseCircle
              style={{ marginRight: "5px", marginTop: "3px" }}
            />
            <span>Canceled </span>
            <span className="card__count">
              {tickets?.filter((ticket) => ticket.status === "Canceled").length}
            </span>
          </div>

          <div>
            <AiOutlinePlus />
            <AiOutlineEllipsis />
          </div>
        </div>

        {tickets?.map((ticket) => {
          const { id, title, tag } = ticket;

          return (
            <div key={ticket?.id}>
              {ticket?.status === "Canceled" && (
                <StatusCard id={id} title={title} tag={tag} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Status;
