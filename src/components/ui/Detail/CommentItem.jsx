import React from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io";

const CommentWrap = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: 0.5px solid #f2f4f6;
`;

const Wrap = styled.div`
  margin: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentUserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const CommentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
  margin: 0 0 0 10px;
`;

const CommentTextTop = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: 300;
  color: #999;
`;

const CommentUserName = styled.p`
  margin: 0;
`;

const CommentWriteDate = styled.p`
  margin: 0;
`;

const CommentContext = styled.p`
  margin: 7px 0 0 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentLikeIcon = styled(IoMdHeart)`
  width: 16px;
  height: 16px;
  color: ${(props) => (props.selected ? "#7883F4" : "#CDCDCD")};
`;

const CommentLikeCount = styled.p`
  margin: 0 0 0 4px;
  font-size: 12px;
  color: #999;
`;

function CommentItem({ comment, selected, onLikeClick }) {
  return (
    <CommentWrap>
      <Wrap>
        <CommentBox>
          <CommentUserImg
            src={process.env.PUBLIC_URL + "/" + "CommentUserImg.png"}
          />
          <CommentTextBox>
            <CommentTextTop>
              <CommentUserName>편안한 도롱이</CommentUserName>
              <CommentWriteDate> · 3일 전</CommentWriteDate>
            </CommentTextTop>
            <CommentContext>{comment.content}</CommentContext>
          </CommentTextBox>
        </CommentBox>
        <LikeBox>
          <CommentLikeIcon onClick={onLikeClick} selected={selected} />
          <CommentLikeCount>6</CommentLikeCount>
        </LikeBox>
      </Wrap>
    </CommentWrap>
  );
}

export default CommentItem;
