import {
  Comment_Wrapper,
  Comment_Header,
  Comment_Title,
  Comment_Count,
  Comment_Body,
  Profile_Picture,
  Profile_Input,
  Profile_Input_Button,
  Comment_Footer,
} from "./Comment";

import React, { useState } from "react";
import PersonalComment from "./PersonalComment";

export default function Comment() {
  const [contents, setContents] = useState("");
  const [comments, setComments] = useState([]);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onClickSubmit = () => {
    const newComment = {
      name: "@team4",
      time: "방금",
      content: contents,
    };

    console.log(newComment); // 새로운 댓글 출력 혹은 원하는 동작 수행

    setComments((prevComments) => [...prevComments, newComment]); // 새로운 댓글 추가
    setContents(""); // 입력 내용 초기화
  };

  return (
    <>
      <Comment_Wrapper>
        <Comment_Header>
          <Comment_Title>댓글</Comment_Title>
          <Comment_Count>{comments.length + 4}개</Comment_Count>
        </Comment_Header>

        <Comment_Body>
          <Profile_Picture></Profile_Picture>
          <Profile_Input
            type="text"
            placeholder="댓글 추가..."
            value={contents}
            onChange={onChangeContents}
          />
          <Profile_Input_Button onClick={onClickSubmit}>
            댓글
          </Profile_Input_Button>
        </Comment_Body>

        <Comment_Footer>
          <PersonalComment
            name="@병장 2호봉"
            time="4개월전"
            content="이 노래 덕분에 군생활을 버텼어요"
          ></PersonalComment>
          <PersonalComment
            name="@Jack Love"
            time="10개월전"
            content="Music Producer killed in this!!"
          ></PersonalComment>
          <PersonalComment
            name="@멋사회장님"
            time="1개월전"
            content="멋사보다 아이브가 좋아요 ! "
          ></PersonalComment>
          <PersonalComment
            name="@team4"
            time="10개월전"
            content="Music Producer killed in this!!"
          ></PersonalComment>
          {comments.map((comment, index) => (
            <PersonalComment
              key={index}
              name={comment.name}
              time={comment.time}
              content={comment.content}
            />
          ))}
        </Comment_Footer>
      </Comment_Wrapper>
    </>
  );
}
