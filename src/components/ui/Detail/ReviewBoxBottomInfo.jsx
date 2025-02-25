import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";
import { BiSolidComment } from "react-icons/bi";

const Wrap = styled.div`
  margin-top: 8px;
  width: 126px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #999;
  font-size: 10px;
  line-height: 140%;
`;

const ReviewDate = styled.p`
  margin: 0;
`;

const BottomInfoRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReviewHeart = styled.div`
  display: flex;
  align-items: center;
`;
const ReviewHeartIcon = styled(IoMdHeart)`
  width: 12px;
  height: 12px;
  color: #d9d9d9;
`;

const ReviewHeartCount = styled.p`
  margin: 0 0 0 4px;
`;

const ReviewComment = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const ReviewCommentIcon = styled(BiSolidComment)`
  width: 12px;
  height: 12px;
  color: #d9d9d9;
`;

const ReviewCommentCount = styled.p`
  margin: 0 0 0 4px;
`;

function ReviewBoxBottomInfo({ heart, commentNumber }) {
  return (
    <Wrap>
      <ReviewDate>2024.05.26</ReviewDate>
      <BottomInfoRight>
        <ReviewHeart>
          <ReviewHeartIcon />
          <ReviewHeartCount>{heart}</ReviewHeartCount>
        </ReviewHeart>
        <ReviewComment>
          <ReviewCommentIcon />
          <ReviewCommentCount>{commentNumber}</ReviewCommentCount>
        </ReviewComment>
      </BottomInfoRight>
    </Wrap>
  );
}

export default ReviewBoxBottomInfo;
