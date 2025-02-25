import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  // styled.뒤에 오는것은 html태그
  height: ${(props) => props.height}px;
  width: 334px;
  font-size: 12px;
  box-sizing: border-box;
  padding: 15px 26px;
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  background-color: #fff;
  line-height: 14px;
  color: #444444;
  min-height: 44px;
  font-family: "Pretendard";
  resize: none;

  &:focus {
    border-color: #5c67dc;
    /* border-color: ${(props) =>
      props.focuscolor}; 포커스를 받았을 때의 테두리 색상 */
    outline: none; /* 포커스 테두리 제거 */
  }

  &::placeholder {
    color: #999; /* 원하는 색상 코드로 변경하세요 */
  }
`;

const Date = styled.p`
  font-size: 12px;
  color: #adadad;
  text-align: right;
`;

function Input(props) {
  const { height, value, onChange, placeholder, focuscolor } = props;

  return (
    <StyledTextArea
      type="text"
      placeholder={placeholder}
      height={height}
      value={value}
      onChange={onChange}
      // focuscolor = {focuscolor}
      // defaultValue={date}
    ></StyledTextArea>
  );
}

export default Input;
