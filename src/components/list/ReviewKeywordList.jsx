import React, { useState } from "react";
import styled from "styled-components";
import SmallButton from "../ui/Common/SmallButton";

const Wrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;
  gap: 8px;
  margin-left: 28px;
  overflow-x: auto;
  font-family: "Pretendard";
  list-style: none;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const EachButtons = [
  { title: "#가족과 함께" },
  { title: "#친구과 함께" },
  { title: "#활기찬" },
  { title: "#연인과 함께" },
  { title: "#차분한" },
  { title: "#다채로운" },
];

function ReviewKeywordList({ filter, setFilter }) {
  const keywords = [
    "가족과 함께",
    "친구와 함께",
    "활기찬",
    "차분한",
    "다채로운",
  ];

  return (
    <Wrapper>
      {keywords.map((keyword, index) => (
        <SmallButton
          key={index}
          title={keyword}
          isClicked={keyword === filter}
          onClick={() => setFilter(keyword)}
        ></SmallButton>
      ))}
    </Wrapper>
  );
}

export default ReviewKeywordList;
