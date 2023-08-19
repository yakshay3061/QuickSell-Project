import React from "react";
import "./Status.css";
import UserCard from "./UserCard";
import { BsCircleHalf, BsCircle, BsFillPersonFill } from "react-icons/bs";

import {
  AiFillStop,
  AiOutlineCloseCircle,
  AiFillCheckCircle,
  AiOutlineDash,
  AiOutlinePlus,
  AiOutlineEllipsis,
} from "react-icons/ai";
import { useAppContext } from "../Data/AppContext";

const User = () => {
  const { data, setData } = useAppContext();
  const { tickets, users } = data;

  tickets?.sort((a, b) => {
    if (a.priority === b.priority) {
      return a.title < b.title ? -1 : 1;
    } else {
      return a.priority > b.priority ? -1 : 1;
    }
  });

  return (
    <div className="status">
      {users?.map((user) => {
        return (
          <div key={user.id} className="backlog">
            <div className="status__nav">
              <div>
                <BsFillPersonFill
                  style={{
                    marginRight: "5px",
                    color: "#ff4444",
                    marginTop: "3px",
                  }}
                />
                <span>{user.name}</span>
                <span className="card__count">
                  {
                    tickets?.filter((ticket) => ticket.userId === user.id)
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
              const { id, title, tag, status, priority } = ticket;

              return (
                <div key={ticket?.id}>
                  {ticket?.userId === user.id && (
                    <UserCard id={id} title={title} tag={tag} status={status} priority = {priority} />
                  )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default User;
