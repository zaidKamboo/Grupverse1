import React from "react";
import "./CSS/List.css";
import mf from "../Images/mf.jpg"
import mp from "../Images/mp.png"
import mtp from "../Images/mtp.png"
import mfp from "../Images/mfp.png"
import share from "../Images/share.png"
import { Link } from "react-router-dom";
const List = () => {
  return (
    <div>
      <ul className="list-group lg list-group-flush">
        <li className="list-group-item">
          <img src={mf} alt="" className="mf" /><Link style={{ textDecoration: "none", color: "black" }} to="/myFeed">My Feed</Link></li>
        <li className="list-group-item"><img src={mp} alt="" className="mp" /><Link style={{ textDecoration: "none", color: "black" }} to="/myPosts">My Posts
        </Link></li>
        <li className="list-group-item"><img src={mtp} alt="" className="mtp" /><Link style={{ textDecoration: "none", color: "black" }} to="/myTeamPosts">My team Posts
        </Link></li>
        <li className="list-group-item"><img src={mfp} alt="" className="mfp" /><Link style={{ textDecoration: "none", color: "black" }} to="/myFollowingPosts">My Following Posts
        </Link></li>
        <li className="list-group-item"><img src={share} alt="" className="share" /><Link style={{ textDecoration: "none", color: "black" }} to="/shatedPost">Shared Post
        </Link></li>
      </ul>
    </div>
  );
};

export default List;
