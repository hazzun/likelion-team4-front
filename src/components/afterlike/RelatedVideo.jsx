import React from "react";

import {
  RelatedvideoItem,
  Related_Video,
  Relatedvideo_content,
  Relatedvideocontent_Title,
} from "./RelatedVedio";
import { Link } from "react-router-dom";
import { convertImage } from "../../utils/convertImage";

const Relatedvideo = ({ rdVideo }) => {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
  // Object.entries(rdVideo);

  return (
    <>
      {rdVideo.map((item, index) => (
        <RelatedvideoItem key={index}>
          <a href={`../watch/${item.id}`}>
            <Related_Video src={convertImage(item.thumbnail)}></Related_Video>
          </a>

          <Relatedvideo_content>
            <Relatedvideocontent_Title>{item.title}</Relatedvideocontent_Title>
          </Relatedvideo_content>
        </RelatedvideoItem>
      ))}
    </>
  );
};

export default Relatedvideo;
