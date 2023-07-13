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
  NameInput,
} from "./Comment";

import React, { useEffect, useState } from "react";
import PersonalComment from "./PersonalComment";
import axios from "axios";

export default function Comment() {
  const [contents, setContents] = useState("");
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState([]);
  const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

  useEffect(() => {
    axios
      .get(`${PROXY}/api/comments/`)
      .then((response) => setComments(response.data));
  }, []);
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const onClickSubmit = () => {
    axios
      .post(`${PROXY}/api/comments/`, {
        name: username,
        content: contents,
        like_num: 99,
        video: 2,
        user: 2,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setContents(""); // 입력 내용 초기화
    setUsername(""); // 입력 내용 초기화
  };

  return (
    <>
      <Comment_Wrapper>
        <Comment_Header>
          <Comment_Title>댓글</Comment_Title>
          <Comment_Count>{comments.length}개</Comment_Count>
        </Comment_Header>

        <Comment_Body>
          <Profile_Picture>
            <NameInput
              type="text"
              placeholder="이름 입력"
              value={username}
              onChange={handleNameChange}
            />
          </Profile_Picture>
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
          {comments.map((comment, index) => (
            <PersonalComment
              key={index}
              name={comment.name}
              content={comment.content}
            />
          ))}
        </Comment_Footer>
      </Comment_Wrapper>
    </>
  );
}
