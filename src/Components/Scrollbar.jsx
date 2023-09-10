import React from "react";
import "./CSS/Scrollbar.css";
const Scrollbar = ({ items }) => {
  return (
    <div
      style={{ height: "300px", overflowY: "scroll", overflowX: "hidden" }}
      className="sb"
    >
      <ul className="topTeams">
        {items.map((item, index) => (
          <div key={item.name} className="lis">
            <li className="topTeam">
              <div className="top">
                <div className="lim">
                  <img src={item.logo} alt="" className="log" />
                </div>
                <div className="Name mx-2">{item.name}</div>
                <div className="but">
                  <button className="bton">{item.type}</button>
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Scrollbar;
