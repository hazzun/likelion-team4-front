import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Sidebar from "../../components/NavigationBar/Sidebar";
import SidebarValue from "../../SidebarValue";
import styled from "styled-components";
import axios from "axios";

const Mainpage = () => {
  const [videos, setVideos] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("/api/videos/")
      .then((response) => {
        setVideos(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("/api/users/")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data[9].profile_image);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <SidebarValue.Consumer>
      {({ openSidebar }) => (
        <section id={openSidebar ? "mainSection" : "mainSectionSmall"}>
          <Sidebar />
          <MainPlayList>
            {videos.map((data) => (
              <VideoInfo key={data.id}>
                <Link to={data.video_url}>
                  <img src={data.thumbnail} class="thumbnail" alt="thumbnail" />
                </Link>
                <div class="content">
                  <img
                    src={users[data.user - 1].profile_image}
                    class="channel-icon"
                    alt="channelicon"
                  />
                  <div class="info">
                    <Link to="./watch" style={{ textDecoration: "none" }}>
                      <h1 class="title">{data.title}</h1>
                    </Link>
                    <p class="channel-name">{users[data.user - 1].name}</p>
                    <p class="channel-view">{`조회수 ${data.view_count} 회`}</p>
                  </div>
                </div>
              </VideoInfo>
            ))}
          </MainPlayList>
        </section>
      )}
    </SidebarValue.Consumer>
  );
};

const MainPlayList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: 20px;
  margin-right: 30px;
`;

const VideoInfo = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export default Mainpage;
