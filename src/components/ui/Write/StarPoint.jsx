import { useState } from "react";
import styled from "styled-components";
import FullStar from "../../../assets/img/star.png";
import EmptyStar from "../../../assets/img/star_empty.png";

const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StarPointContainer = styled(Container)`
  /* height: 112px; */
  margin-bottom: 12px;
`;

const StarPointChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StarPointText = styled.div`
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  margin-bottom: 16px;
`;

const RatingLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StarImg = styled.img`
  margin: -4px;
  width: 44px;
`;

export default function StarPoint({ handleRating }) {
  const [starPoint, setStartPoint] = useState(0);
  const [hoverStarPoint, setHoverStarPoint] = useState(0);
  const [isHover, setIsHover] = useState(false);

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

  const setStarImage = (index) => {
    if (isHover) {
      if (index >= hoverStarPoint) {
        return EmptyStar;
      } else {
        return FullStar;
      }
    } else {
      if (index >= starPoint) {
        return EmptyStar;
      } else {
        return FullStar;
      }
    }
  };

  return (
    <StarPointContainer>
      <StarPointChoice>
        <StarPointText>평점을 선택해주세요.{isHover}</StarPointText>
        <RatingLayout>
          {[...Array(5)].map((_, index) => {
            return (
              <StarImg
                key={index}
                onClick={() => setRating(index)}
                src={setStarImage(index)}
                onMouseOver={() => setHoverRating(index)}
                onMouseLeave={setLeaveHover}
              ></StarImg>
            );
          })}
        </RatingLayout>
      </StarPointChoice>
    </StarPointContainer>
  );
}
