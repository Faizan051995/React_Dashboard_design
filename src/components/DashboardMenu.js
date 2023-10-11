import React from "react";
import rendomimage from "../images/rendomimage.png";
import { Image } from "antd";
import { BsGraphUp } from "react-icons/bs";
import { VscGraphLeft } from "react-icons/vsc";
import { RiBriefcaseFill } from "react-icons/ri";
import { FaBriefcase } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";
function DashboardMenu() {
  return (
    <>
      <div className="logoImage">
        <Image src={rendomimage} width={150} />
      </div>
      <div style={{ padding: "1rem" }}>
        <div>
        <p className="menuHeading">insights</p>
        <p className="menuContent">
          <BsGraphUp style={{ marginRight: "0.8rem" }} />
          Dashboard
        </p>
        </div>

        <div>
        <p className="menuHeading">Team Management</p>
        <p className="menuContent">
          <RiBriefcaseFill style={{ marginRight: "0.8rem" }} />
          Team
        </p>
        <p className="menuContent">
          <VscGraphLeft style={{ marginRight: "0.8rem" }} />
          Department
        </p>
        </div>

        <div>
        <p className="menuHeading">Productitity</p>
        <p className="menuContent">
          <RiBriefcaseFill style={{ marginRight: "0.8rem" }} />
          Screenshorts
        </p>
        <p className="menuContent">
          <VscGraphLeft style={{ marginRight: "0.8rem" }} />
          Timesheets
        </p>
        <p className="menuContent">
          <RiBriefcaseFill style={{ marginRight: "0.8rem" }} />
          Review Apps
        </p>
        </div>

        <div>
        <p className="menuHeading">Project Management</p>
        <p className="menuContent">
          <FaBriefcase style={{ marginRight: "0.8rem" }} />
          Projects
        </p>
        <p className="menuContent">
          <VscGraphLeft style={{ marginRight: "0.8rem" }} />
          Meetings
        </p>
        </div>

        <div>
        <p className="menuHeading">Reports</p>
        <p className="menuContent">
          <VscGraphLeft style={{ marginRight: "0.8rem" }} />
          Reports
        </p>

        </div>

        <div>
        <p className="menuHeading">Configuration</p>
        <p className="menuContent">
          <AiFillSetting style={{ marginRight: "0.8rem" }} />
          Settings
        </p>
        <p className="menuContent">
          <VscGraphLeft style={{ marginRight: "0.8rem" }} />
          Billing & plans
        </p>
        </div>
      </div>
    </>
  );
}

export default DashboardMenu;
