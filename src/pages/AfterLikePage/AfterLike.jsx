import React, { useEffect, useState } from "react";
import "./AfterLike.css";
import DetailContent from "../../components/afterlike/DetailContent";
import Relatedvideo from "../../components/afterlike/RelatedVideo.jsx";
import Comment from "../../components/afterlike/Comment.jsx";
import { useParams } from "react-router-dom";
import axios from "axios";

const AfterLike = () => {
  let { id } = useParams();
  const [rdVideo, setRdVideo] = useState([]);
  const [userId, setUserId] = useState([]);
  useEffect(() => {
    axios
      .get("/api/rdvideos/?video_id=2")
      .then((response) => setRdVideo(response.data[0].recommended_videos))
      .catch((error) => error);
  }, []);
  useEffect(() => {
    axios
      .get("/api/videos/")
      .then((response) => setUserId(response.data[id - 2].user))
      .catch((error) => error);
  }, []);
  // console.log(userId);

  return (
    <>
      <div class="wrap">
        <div>
          <DetailContent id={id} userId={userId}></DetailContent>
          <Comment></Comment>
        </div>

        <div class="RelatedVideoList">
          {rdVideo.map((data) => (
            <Relatedvideo data={data}></Relatedvideo>
          ))}
        </div>
      </div>
    </>
  );
};

export default AfterLike;
