import React, { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
  border-radius: 50px;
  background-color: ${(props) => props.backcolor};
  border: 1px solid ${(props) => props.bordercolor};
  color: ${(props) => props.fontcolor};
  padding: 10px 16px;
  line-height: 24px;

  font-family: "Pretendard";
  font-weight: 500;
  text-align: center;

  display: inline-block; // 버튼이 내용에 따라 크기가 조정되도록 함
  width: auto; // 너비를 내용에 맞게 자동으로 조정
`;
function SmallButton(props) {
  const { title, isClicked, onClick } = props;

  // 초기 클릭 상태를 false로 설정

  return (
    <StyledButton
      backcolor={isClicked ? "#5C67DC" : "#fff"}
      bordercolor={isClicked ? "" : "#ccc"}
      fontcolor={isClicked ? "#fff" : "#ccc"}
      onClick={onClick}
    >
      #{title || null}
    </StyledButton>
  );
}

export default SmallButton;
