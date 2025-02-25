import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FestivalCard from "../ui/MFR/FestivalCard";

const Wrapper = styled.div`
  display: flex;
  padding-left: 18px;
  overflow-x: hidden;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const Title = styled.div`
  font-family: "Jalnan Gothic";
  white-space: pre-line; /* 줄바꿈 적용 */
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translateValue}px);
`;

function Banner({ list }) {
  const [translateValue, setTranslateValue] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const wrapperRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
  }, [list]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateValue((prevValue) => {
        const newValue = prevValue - cardWidth;
        if (Math.abs(newValue) >= cardWidth * list.length) {
          return 0;
        }
        return newValue;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [cardWidth, list.length]);

  return (
    <Wrapper ref={wrapperRef}>
      <SlideContainer translateValue={translateValue}>
        {list.map((festival, index) => (
          <div ref={cardRef} key={index}>
            <FestivalCard
              length={list.length}
              pagenum={index + 1}
              title={festival.title}
              subtitle="시화 중심 해양레저 체험"
              imgUrl={festival.backgroundUrl}
              id={festival.id}
            />
          </div>
        ))}
      </SlideContainer>
    </Wrapper>
  );
}

export default Banner;
