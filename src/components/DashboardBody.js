import { Button } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import {
  BsFillFileEarmarkBarGraphFill,
  BsFillBellFill,
} from "react-icons/bs";
import { AiFillSetting, AiOutlineUserAdd, AiOutlineDown } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";
import DashboardWidget from "./DashboardWidget";

function DashboardBody() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between",padding:"0 10px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{color:"#979797",fontSize:"0.8rem"}}>Download Traker App</div>
          <Button type="primary">Windows <IoMdDownload style={{ marginLeft: "0.8rem" }}/></Button>
          <Button type="primary">
            Mac <IoMdDownload style={{ marginLeft: "0.8rem" }} />
          </Button>
          <Search placeholder="search" style={{ width: 200 }} />
        </div>
        <div className="iconDiv">
          <BsFillFileEarmarkBarGraphFill size={18} />
          <AiFillSetting size={18} />
          <AiOutlineUserAdd size={18} />
          <BsFillBellFill size={18} />

          <div style={{display:"flex",alignItems:"center",gap:"10px",cursor:"pointer"}}>
            <div className="profileImage"></div>
            <div style={{}}>
            <div className="userWelcom">Wellcome</div>
            <div className="userName">User Name <AiOutlineDown style={{alignItems:"center"}}/></div>
            </div>
          </div>
        </div>
        
      </div>
      <div>
            <DashboardWidget/>
        </div>
    </>
  );
}

export default DashboardBody;
