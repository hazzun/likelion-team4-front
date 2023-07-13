import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
import Sidebar from "../../components/NavigationBar/Sidebar";
import SidebarValue from "../../SidebarValue";
import styled from "styled-components";
import axios from "axios";
import { convertImage } from "../../utils/convertImage";

const Mainpage = () => {
  const [videos, setVideos] = useState([]);
  const [users, setUsers] = useState([]);
  const [videosInUser, setVideosInUser] = useState([]);
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  useEffect(() => {
    axios
      .get(`${PROXY}/api/videos/`)
      .then((response) => {
        setVideos(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/users/`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (users && videos) {
      const newVideos = videos.map((video) => {
        const user = users.filter((u) => u.id === video.user);
        return {
          ...video,
          user: user.length === 1 ? user[0] : video.user,
        };
      });
      setVideosInUser(newVideos);
      console.log("user정보 추가 -> ", videosInUser);
    }
  }, [videos, users]);
  // console.log(videos);
  return (
    <SidebarValue.Consumer>
      {({ openSidebar }) => (
        <section id={openSidebar ? "mainSection" : "mainSectionSmall"}>
          <Sidebar />
          <MainPlayList>
            {videosInUser.map((data) => (
              <VideoInfo key={data.id}>
                <Link to={`watch/${data.id}`}>
                  <img
                    src={convertImage(data.thumbnail)}
                    class="thumbnail"
                    alt="thumbnail"
                  />
                </Link>
                {data.user instanceof Object && (
                  <div class="content">
                    <img
                      src={convertImage(data.user.profile_image)}
                      class="channel-icon"
                      alt="channelicon"
                    />
                    <div class="info">
                      <Link to="./watch" style={{ textDecoration: "none" }}>
                        <h1 class="title">{data.title}</h1>
                      </Link>
                      <p class="channel-name">{data.user.name}</p>
                      <p class="channel-view">{`조회수 ${data.view_count} 회`}</p>
                    </div>
                  </div>
                )}
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
