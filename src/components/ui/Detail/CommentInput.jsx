import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  margin: 0;
  padding: 16px 26px;
  width: 208px;
  font-size: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  resize: none;
  font-family: "Pretendard";
  overflow: hidden;
  line-height: 120%;

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
  }
`;

function CommentInput({ comment, setComment }) {
  return (
    <StyledTextArea
      value={comment}
      placeholder="댓글을 작성해주세요."
      onChange={(e) => setComment(e.target.value)}
    ></StyledTextArea>
  );
}

export default CommentInput;
