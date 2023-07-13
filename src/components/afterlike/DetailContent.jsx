import React, { useEffect, useState } from "react";
import {
  Fullplayer,
  Margin_bottom,
  Grow,
  Detailcontent_playerContent,
  Detailcontent_btn2,
  Detailcontent_btn,
  Detailcontent_flex,
  Detailcontent_Title,
  Player,
  Detailcontent_profile,
} from "./RelatedVedio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { convertImage } from "../../utils/convertImage";

function DetailContent(props) {
  const [videoInfo, setVideoInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  useEffect(() => {
    axios.get(`${PROXY}/api/videos/${props.id}/`).then((response) => {
      // console.log(response.data);
      setVideoInfo(response.data);
    });
  }, []);
  useEffect(() => {
    if (videoInfo?.user) {
      axios.get(`${PROXY}/api/users/${videoInfo.user}`).then((response) => {
        setUserInfo(response.data);
      });
    }
  }, [videoInfo]);
  // console.log("vidoe = ", videoInfo);
  console.log("userInfo = ", userInfo);
  return (
    <>
      <Fullplayer>
        {/* <Link to={videoInfo.video_url}>
          <Player src={videoInfo.thumbnail}>{}</Player>
        </Link> */}
        <iframe
          id={videoInfo.id}
          title={videoInfo.title}
          width="854px"
          height="480px"
          src={videoInfo.video_url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Detailcontent_Title>{videoInfo.title}</Detailcontent_Title>

        <Detailcontent_flex>
          {userInfo.profile_image && (
            <Detailcontent_profile
              src={convertImage(userInfo.profile_image)}
            ></Detailcontent_profile>
          )}

          <div>
            <Margin_bottom>starshipTV</Margin_bottom>
            <p>구독자 600만명</p>
          </div>

          <Detailcontent_btn>구독</Detailcontent_btn>

          <Grow></Grow>

          <Detailcontent_btn2>
            <FontAwesomeIcon icon="fa-light fa-thumbs-up" />
            <span>267만</span>
            <img></img>
          </Detailcontent_btn2>

          <Detailcontent_btn2>
            <img></img>
            <span>공유</span>
          </Detailcontent_btn2>

          <Detailcontent_btn2>
            <img></img>
            <span>오프라인 저장</span>
          </Detailcontent_btn2>

          <Detailcontent_btn2>
            <span>어쩌구</span>
          </Detailcontent_btn2>
        </Detailcontent_flex>

        <Detailcontent_playerContent>
          <p>{videoInfo.description}</p>
        </Detailcontent_playerContent>
      </Fullplayer>
    </>
  );
}

export default DetailContent;
