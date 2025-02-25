import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SmallButton from "../ui/Common/SmallButton";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  height: 44px;
  margin: 0;
  margin-left: 28px;
  padding: 0;
  gap: 8px;

  overflow-x: auto;
  font-family: "Pretendard";
  list-style: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EachButtons = [
  { title: "전체" },
  { title: "봄(3~5월)" },
  { title: "여름(6~8월)" },
  { title: "가을(9~10월)" },
  { title: "겨울(11~2월)" },
];

function SeasonKeywordList({ filter, setFilter }) {
  const EachButtons = [
    { title: "전체", value: "all" },
    { title: "봄(3~5월)", value: "spring" },
    { title: "여름(6~8월)", value: "summer" },
    { title: "가을(9~10월)", value: "fall" },
    { title: "겨울(11~2월)", value: "winter" },
  ];

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <Wrapper>
      {EachButtons.map((button, index) => (
        <SmallButton
          id={index}
          title={button.title}
          isClicked={filter === button.value}
          onClick={() => setFilter(button.value)}
        ></SmallButton>
      ))}
    </Wrapper>
  );
}

export default SeasonKeywordList;
