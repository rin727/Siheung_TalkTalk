import React from "react";
import styled from "styled-components";

const Wrap = styled.button`
  width: 66px;
  background-color: #5c67dc;
  color: #fff;
  border: none;
  border-radius: 16px;
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  padding: 15px auto;
`;

function CommentSaveButton({ onClick }) {
  return (
    <Wrap onClick={onClick}>
      <ButtonText>등록</ButtonText>
    </Wrap>
  );
}

export default CommentSaveButton;
