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
  useEffect(() => {
    axios
      .get("/api/rdvideos/")
      .then((response) => console.log(response.data))
      .catch((error) => error);
  }, []);

  return (
    <>
      <div class="wrap">
        <div>
          <DetailContent id={id}></DetailContent>
          <Comment></Comment>
        </div>

        <div class="RelatedVideoList">
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
          <Relatedvideo></Relatedvideo>
        </div>
      </div>
    </>
  );
};

export default AfterLike;
