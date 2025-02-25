import React from "react";
import styled from "styled-components";

import FestivalPost from "../ui/MFR/FestivalPost";

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-content: space-around;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 336px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

function FestivalList({ list }) {
  console.log(list);
  return (
    <Wrapper>
      {list.map((festival, index) => (
        <FestivalPost
          id={festival.id}
          key={festival.id}
          title={festival.title}
          reivew={festival.reivew}
          festival={festival.festivalName}
          rating={festival.rating}
          num={index + 1}
          img={festival.backgroundUrl}
          keywords={festival.keywords}
        ></FestivalPost>
      ))}
    </Wrapper>
  );
}

export default FestivalList;
