import React, { useEffect } from "react";
import styled from "styled-components";
import "../../index.css";
import ReviewCard from "../ui/MFR/ReviewCard";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function ReviewCardList({ ReviewList }) {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {ReviewList.map((review) => (
        <ReviewCard
          key={review.id}
          title={review.title}
          review={review.review}
          festival={review.festival}
          rating={review.rating}
          keyword={review.keyWord}
          img={review.image}
          onClickEvent={() => navigate(`/ReviewDetail/${review.id}`)}
        />
      ))}
      {ReviewList.length === 0 && <div>리뷰가 없습니다.</div>}
    </Wrapper>
  );
}

export default ReviewCardList;
