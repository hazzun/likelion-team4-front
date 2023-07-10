import React from "react";

import {
  RelatedvideoItem,
  Related_Video,
  Relatedvideo_content,
  Relatedvideocontent_Title,
  Relatedvideocontent_name,
  Relatedvideocontent_viewsDate,
  Margin_bottom,
} from "./RelatedVedio";

function Relatedvideo() {
  return (
    <RelatedvideoItem>
      <Related_Video></Related_Video>

      <Relatedvideo_content>
        <Relatedvideocontent_Title>
          Dua Lipa - Levitating Featuring DaBaby (Official Music Video)
        </Relatedvideocontent_Title>
        <Relatedvideocontent_name>Dua Lipa </Relatedvideocontent_name>
        <Margin_bottom></Margin_bottom>
        <Relatedvideocontent_viewsDate>
          조회수 7.5억회 2년 전
        </Relatedvideocontent_viewsDate>
      </Relatedvideo_content>
    </RelatedvideoItem>
  );
}

export default Relatedvideo;
