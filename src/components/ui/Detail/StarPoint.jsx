import { useEffect, useState } from "react";
import styled from "styled-components";
import FullStar from "../../../assets/img/star.png";
import HalfStar from "../../../assets/img/star_empty.png";

const Container = styled.div`
  margin: 10px 0 0 0;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StarPointContainer = styled(Container)`
  /* height: 112px; */
`;

const RatingLayout = styled.div`
  width: 104px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StarImg = styled.img`
  margin: -4px;
  width: 24px;
`;

export default function StarPoint({ handleRating, rating }) {
  const [starPoint, setStartPoint] = useState(rating);
  const [hoverStarPoint, setHoverStarPoint] = useState(0);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    setStartPoint(rating);
  }, [rating]);

  const setRating = (index) => {
    setStartPoint(index + 1);
    handleRating(index + 1);
  };

  const setHoverRating = (index) => {
    setHoverStarPoint(index + 1);
    setIsHover(true);
  };

  const setLeaveHover = (index) => {
    setHoverStarPoint(0);
    setIsHover(false);
  };

  const setStartImage = (index) => {
    if (isHover) {
      if (index >= hoverStarPoint) {
        return HalfStar;
      } else {
        return FullStar;
      }
    } else {
      if (index >= starPoint) {
        return HalfStar;
      } else {
        return FullStar;
      }
    }
  };

  return (
    <StarPointContainer>
      <RatingLayout>
        {[...Array(5)].map((_, index) => {
          return <StarImg key={index} src={setStartImage(index)}></StarImg>;
        })}
      </RatingLayout>
    </StarPointContainer>
  );
}
