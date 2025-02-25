import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Layout = styled(Container)`
  /* height: 156px; */
  padding: 20px 28px;
  font-size: 16px;
  color: #222222;
  font-weight: 700;
`;
const KeywordContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 16px 0px 4px 0px;
  gap: 8px;
`;

const Keyword = styled.div`
  padding: 10px 16px;
  /* margin: 4px 4px; */
  background-color: ${(props) => (props.selected ? "#5c67dc" : "white")};
  border-radius: 50px;
  box-sizing: border-box;
  color: ${(props) => (props.selected ? "white" : "#cccccc")};
  border: ${(props) =>
    props.selected ? "1px solid #5c67dc" : "1px solid #cccccc"};
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
`;

export default function ReviewKeyword({ choiceKeyword, handleChoiceKeyword }) {
  const keywords = [
    "가족과 함께",
    "친구와 함께",
    "활기찬",
    "차분한",
    "다채로운",
  ];

  return (
    <Layout>
      이 축제에 어울리는 키워드를 선택해주세요
      <KeywordContainer>
        {keywords.map((keyword, index) => (
          <Keyword
            key={index}
            selected={choiceKeyword === index}
            onClick={() => handleChoiceKeyword(index)}
          >
            #{keyword}
          </Keyword>
        ))}
      </KeywordContainer>
    </Layout>
  );
}
