import React from "react";
import {Fullplayer,Margin_bottom, Grow, Detailcontent_playerContent, Detailcontent_btn2 , Detailcontent_btn, Detailcontent_flex, Detailcontent_Title, Player, Detailcontent_profile} from './styledComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

function DetailContent(){
    return(
        <>
        <Fullplayer>
        <Player  src={""} >동영상</Player>
        <Detailcontent_Title>IVE 아이브 'After LIKE' MV</Detailcontent_Title>



        <Detailcontent_flex>

    <Detailcontent_profile>
        <image></image>
      </Detailcontent_profile>
      
      <div>
        <Margin_bottom>starshipTV</Margin_bottom>
        <p>구독자 600만명</p>
      </div>
      
      <Detailcontent_btn>
        구독</Detailcontent_btn>
   
   

<Grow></Grow>

< Detailcontent_btn2 >
<FontAwesomeIcon icon="fa-light fa-thumbs-up" />
      <span>267만</span>
      <img></img>
    </ Detailcontent_btn2 >

<Detailcontent_btn2>
  <img></img>
  <span>공유</span>
</Detailcontent_btn2>

<Detailcontent_btn2>
  <img></img>
  <span>오프라인 저장</span>
</Detailcontent_btn2>

<Detailcontent_btn2>
<span>어쩌구</span></Detailcontent_btn2>
    </Detailcontent_flex>

    <Detailcontent_playerContent>
      <p>조회수 <strong>217,261,706</strong>회  2022. 8. 22. <strong>뮤직비디오 인기 16위</strong></p>
      <p>IVE Twitter</p>
      <p>더보기</p>
      </Detailcontent_playerContent>
      </Fullplayer>
      </>
    )
}

export default DetailContent;
