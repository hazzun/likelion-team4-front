import React, { useContext } from "react";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import { BiMusic, BiMovie } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { GrStorage } from "react-icons/gr";
import { TbClockRecord } from "react-icons/tb";
import {
  MdOutlineAppShortcut,
  MdOutlineUnsubscribe,
  MdContentCopy,
} from "react-icons/md";
import { Link } from "react-router-dom";
import SidebarValue from "../../SidebarValue";

export default function Sidebar() {
  return (
    <SidebarValue.Consumer>
      {({ openSidebar }) => (
        <>
          {openSidebar ? (
            <aside id="sidebar">
              <button className="sideBtn">
                <AiFillHome size={24} />
                <span>홈</span>
              </button>
              <button className="sideBtn">
                <MdOutlineAppShortcut size={24} />
                <span>Shorts</span>
              </button>
              <button className="sideBtn">
                <MdOutlineUnsubscribe size={24} />
                <span>구독</span>
              </button>
              <button className="sideBtn">
                <BiMusic size={24} />
                <span>TouTube Music</span>
              </button>
              <button className="sideBtn">
                <MdContentCopy size={24} />
                <span>보관함</span>
              </button>
              <button className="sideBtn">
                <TbClockRecord size={24} />
                <span>시청 기록</span>
              </button>
              <button className="sideBtn">
                <GoVideo size={24} />
                <span>내 동영상</span>
              </button>
              <button className="sideBtn">
                <BiMovie size={24} />
                <span>내 영화</span>
              </button>
              <button className="sideBtn">
                <GrStorage size={24} />
                <span>나중에 볼 동영상</span>
              </button>
              <button className="sideBtn">
                <BsDownload size={24} />
                <span>오프라인 저장 동영상</span>
              </button>
              <button className="sideBtn"></button>
            </aside>
          ) : (
            <aside className="miniSidebar">
              <button className="sideBtn">
                <AiFillHome size={24} />
              </button>
              <button className="sideBtn">
                <MdOutlineAppShortcut size={24} />
              </button>
              <button className="sideBtn">
                <MdOutlineUnsubscribe size={24} />
              </button>
              <button className="sideBtn">
                <BiMusic size={24} />
              </button>
              <button className="sideBtn">
                <MdContentCopy size={24} />
              </button>
              <button className="sideBtn">
                <TbClockRecord size={24} />
              </button>
              <button className="sideBtn">
                <GoVideo size={24} />
              </button>
              <button className="sideBtn">
                <BiMovie size={24} />
              </button>
              <button className="sideBtn">
                <GrStorage size={24} />
              </button>
              <button className="sideBtn">
                <BsDownload size={24} />
              </button>
              <button className="sideBtn"></button>
            </aside>
          )}
        </>
      )}
    </SidebarValue.Consumer>
  );
}
