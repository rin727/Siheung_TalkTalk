import React from "react";
import styled from "styled-components";
import { MdOutlineStarPurple500 } from "react-icons/md";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  color: #444;
`;

const StarPoint = styled.div`
  display: flex;
  align-items: center;
`;
const StarIcon = styled(MdOutlineStarPurple500)`
  width: 16px;
  height: 16px;
`;

const StarPointAvg = styled.p`
  font-size: 10px;
`;

const Keyword = styled.button`
  height: 100%;
  padding: 5px 10px;
  background-color: #f5f6f8;
  border: none;
  border-radius: 100px;
`;

const KeywordContext = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 500;
  line-height: 160%;
  font-family: "pretendard";
`;

function ReviewBoxTopInfo({ rating, hashTag }) {
  return (
    <Wrap>
      <StarPoint>
        <StarIcon />
        <StarPointAvg>{rating}</StarPointAvg>
      </StarPoint>
      <Keyword>
        <KeywordContext>#{hashTag}</KeywordContext>
      </Keyword>
    </Wrap>
  );
}

export default ReviewBoxTopInfo;
