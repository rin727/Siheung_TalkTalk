import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";

const Wrap = styled.div`
  width: 172px;
  margin: 28px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LikeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => (props.selected ? "#7883F4" : "#CDCDCD")};
`;

const FeedBackHeartIcon = styled(IoMdHeart)`
  width: 20px;
  height: 20px;
`;

const FeedBackLikeText = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  font-weight: 400;
`;

const FeedBackTextBox = styled.div`
  margin: 15px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FeedBackAskText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;
const FeedBackCountText = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  font-weight: 300;
`;

function FeedBackBoxLike({ selected, onLikeClick, count }) {
  return (
    <Wrap>
      <LikeButton onClick={onLikeClick} selected={selected}>
        <FeedBackHeartIcon />
        <FeedBackLikeText>좋아요</FeedBackLikeText>
      </LikeButton>
      <FeedBackTextBox>
        <FeedBackAskText>이 후기가 도움이 되셨나요?</FeedBackAskText>
        <FeedBackCountText>{count}명이 공감했어요</FeedBackCountText>
      </FeedBackTextBox>
    </Wrap>
  );
}

export default FeedBackBoxLike;
