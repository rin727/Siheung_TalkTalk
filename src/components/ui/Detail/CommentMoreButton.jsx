import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const Wrap = styled.button`
  width: 100%;
  background-color: #f2f3fc;
  color: #5c67dc;
  border: none;
  border-radius: 50px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 0;
`;

const ButtonText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
`;

const ButtonIcon = styled(MdKeyboardArrowRight)`
  width: 18px;
  height: 18px;
`;

function CommentMoreButton({ number, onClick }) {
  return (
    <Wrap onClick={onClick}>
      <ButtonBox>
        <ButtonText>{number - 3}개의 댓글 더보기</ButtonText>
        <ButtonIcon />
      </ButtonBox>
    </Wrap>
  );
}

export default CommentMoreButton;
