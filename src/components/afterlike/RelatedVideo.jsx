import React from "react";

import {
  RelatedvideoItem,
  Related_Video,
  Relatedvideo_content,
  Relatedvideocontent_Title,
} from "./RelatedVedio";
import { Link } from "react-router-dom";
import { convertImage } from "../../utils/convertImage";

function Relatedvideo({ data }) {
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  return (
    <RelatedvideoItem>
      <Link to={`./${data.id}`}>
        <Related_Video src={convertImage(data.thumbnail)}></Related_Video>
      </Link>

      <Relatedvideo_content>
        <Relatedvideocontent_Title>{data.title}</Relatedvideocontent_Title>
      </Relatedvideo_content>
    </RelatedvideoItem>
  );
}

export default Relatedvideo;
