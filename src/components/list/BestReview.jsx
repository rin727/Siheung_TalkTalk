import React, { useEffect } from "react";
import styled from "styled-components";

import PostCard from "../ui/MFR/PostCard";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 336px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 100px;
`;

function BestReview({ ReviewList }) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(ReviewList);
  });

  return (
    <Wrapper>
      {ReviewList.map((review, index) => (
        <PostCard
          key={review.id}
          title={review.title}
          review={review.review}
          festival={review.festival}
          rating={review.rating}
          num={index + 1}
          id={review.id}
          img={review.image}
        />
      ))}
    </Wrapper>
  );
}

export default BestReview;
