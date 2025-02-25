import React, { useState } from "react";
import styled from "styled-components";
import SmallButton from "../ui/SmallButton";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  height: 44px;
  margin: 0;
  padding: 0;
  gap: 8px;
  width: 738px;
`;
const EachButtons = [
  { title: "가족과 함께" },
  { title: "친구과 함께" },
  { title: "활기찬" },
  { title: "연인과 함께" },
  { title: "차분한" },
  { title: "다채로운" },
];

function KeywordList(props) {
  const [clickedIndex, setClickedIndex] = useState(0);

  const handleButtonClick = (index) => {
    setClickedIndex(index);
    // 여기에 파이어베이스 리뷰 카드를 업데이트하는 로직을 추가할 수 있습니다.
  };

  return (
    <Wrapper>
      {EachButtons.map((button, index) => (
        <SmallButton
          id={index}
          title={button.title}
          isClicked={index === clickedIndex}
          onClickEvent={() => handleButtonClick(index)}
        >#</SmallButton>
        // 여기서 출력(클릭)되는 타이틀 값에 따라 파이어베이스의 리뷰 카드들 중에 출력이 되도록 하는게 좋을 것
      ))}
    </Wrapper>
  );
}

export default KeywordList;
