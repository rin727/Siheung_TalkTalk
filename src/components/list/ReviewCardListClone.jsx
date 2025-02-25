import React from "react";
import styled from "styled-components";
import ReviewCard from "../ui/MFR/ReviewCard";
import "../../index.css";

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function ReviewCardList(props) {
  return (
    <Wrapper>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
    </Wrapper>
  );
}

export default ReviewCardList;
