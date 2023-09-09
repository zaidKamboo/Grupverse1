import React, { useState } from "react";
import "./CSS/Home.css";
import pf1 from "../Images/pf1.png"
import tt from "../Images/tt.png"
import List from "./List";
import fb from "../Images/fb.jpg"
import ig from "../Images/ig.jpg"
import lin from "../Images/lin.png"
import twt from "../Images/twt.png"
import pf2 from "../Images/pf2.png"
import pf3 from "../Images/pf3.png"
import pf4 from "../Images/pf4.png"
import pf5 from "../Images/pf5.png"
import pf6 from "../Images/pf6.png"
import pf7 from "../Images/pf7.png"
import img1 from "../Images/GlobalUsers/img1.png"
import img2 from "../Images/GlobalUsers/img2.png"
import img3 from "../Images/GlobalUsers/img3.png"
import img4 from "../Images/GlobalUsers/img4.png"
import img5 from "../Images/GlobalUsers/img5.png"
import defaultpf from "../Images/defaultpf.png"
import Scrollbar from "./Scrollbar";
import News from "./News";

const Home = () => {
  let apikey = "d6bb853b0c674d0387e9d18bdf972f0c";
  const [progress, setProgress] = useState(0);
  const teams = [{ "name": "Quill on Canvas", "logo": pf1, "type": "Join" }, { "name": "norMEME", "logo": pf2, "type": "Join" }, { "name": "Space", "logo": pf3, "type": "Join" }, { "name": "Current Affairs", "logo": defaultpf, "type": "Join" }, { "name": "Aiims Bhubneshwar", "logo": pf4, "type": "Join" }, { "name": "Fashion", "logo": defaultpf, "type": "Join" }, { "name": "Med Terms", "logo": pf5, "type": "Join" }, { "name": "Photography", "logo": pf6, "type": "Join" }, { "name": "Indian Politics", "logo": defaultpf, "type": "Join" }, { "name": "AI", "logo": pf7, "type": "Join" }, { "name": "AIIMS Canteen", "logo": defaultpf, "type": "Join" }, { "name": "Football Memes", "logo": defaultpf, "type": "Join" }, { "name": "Stock Market01", "logo": defaultpf, "type": "Join" }, { "name": "Night Club", "logo": defaultpf, "type": "Join" }, { "name": "Team 1", "logo": defaultpf, "type": "Join" }, { "name": "Shankar Bidya Niketan Baharghat", "logo": defaultpf, "type": "Join" }, { "name": "Bbbbb", "logo": defaultpf, "type": "Join" }, { "name": "Mausam Lahkar", "logo": defaultpf, "type": "Join" }, { "name": "AIIMS group", "logo": defaultpf, "type": "Join" }, { "name": "DSR Nalibari", "logo": defaultpf, "type": "Join" }];
  const globalusers = [{ "name": "Omniscent", "logo": img1, "type": "Follow" }, { "name": "Bighnesh", "logo": defaultpf, "type": "Follow" }, { "name": "Madhuriya", "logo": defaultpf, "type": "Follow" }, { "name": "Dono Maria", "logo": img2, "type": "Follow" }, { "name": "Haripriya", "logo": defaultpf, "type": "Follow" }, { "name": "nuhmanpt", "logo": defaultpf, "type": "Follow" }, { "name": "Maheshwar", "logo": img3, "type": "Follow" }, { "name": "MiaBardot", "logo": img4, "type": "Follow" }, { "name": "Ritu", "logo": img5, "type": "Follow" }, { "name": "Ravibharati", "logo": defaultpf, "type": "Follow" }];
  return (
    <div className="parentContainer">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <List />
            <img src={tt} className="ttimg" alt="" />
            <center><p>Top software for designers</p></center>
            <div className="images">
              <img src={fb} alt="" className="img" />
              <img src={ig} alt="" className="img" />
              <img src={lin} alt="" className="img" />
              <img src={twt} alt="" className="img" />
            </div>
          </div>
          <div className="col-6">
            <News
              setProgress={setProgress}
              apikey={apikey}
              key="general"
              pagesize={1}
              category="general"
              country="in"
            />
          </div>
          <div className="col">
            <h3>Top teams of the weak</h3>
            <div className="card ">
              <Scrollbar items={teams} />
            </div>
            <h3 className="mt-4">Top teams of the weak</h3>
            <div className="card ">
              <Scrollbar items={globalusers} />
            </div>
          </div>
        </div>

      </div>
    </div >
  );
};

export default Home;
