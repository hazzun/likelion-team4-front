import React from "react";

import {
  RelatedvideoItem,
  Related_Video,
  Relatedvideo_content,
  Relatedvideocontent_Title,
} from "./RelatedVedio";
import { Link } from "react-router-dom";

function Relatedvideo({ data }) {
  return (
    <RelatedvideoItem>
      <a href={`/watch/${data.id}`}>
        <Related_Video src={data.thumbnail}></Related_Video>
      </a>

      <Relatedvideo_content>
        <Relatedvideocontent_Title>{data.title}</Relatedvideocontent_Title>
      </Relatedvideo_content>
    </RelatedvideoItem>
  );
}

export default Relatedvideo;
