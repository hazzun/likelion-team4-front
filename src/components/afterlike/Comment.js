import styled from "styled-components";

export const Comment_Wrapper = styled.div`
  width: 700px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`;
export const Comment_Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  margin: 5px;
`;
export const Comment_Title = styled.div`
  margin: 0px 6px 0px 8px;
  font-size: 20px;
`;
export const Comment_Count = styled.div`
  font-size: 20px;
`;

export const Comment_Body = styled.div`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;
export const Profile_Picture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid red;
  text-align: center;
  margin: 10px;
  font-size: 12px;
`;

export const NameInput = styled.input`
  margin: 2px 2px;
  width: 90%;
  height: 100%;
  border: none;
  text-align: center;
  outline: none;
`;
export const Profile_Input = styled.input`
  outline: none;
  margin: 2px 2px;
  width: 80%;
  border: none;
  border-bottom: 1px solid gray;
`;
export const Profile_Input_Button = styled.button`
  background-color: white;
  padding: 5px 10px;
  border-radius: 4px;

  &:hover {
    background-color: lightgray;
  }
`;
export const Comment_Footer = styled.div`
  width: 100%;
  height: 70%;
`;
