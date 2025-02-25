import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-size: 10px;
  font-weight: 500;
  font-family: "Pretendard";
  line-height: 150%;
  text-align: center;
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
  cursor: pointer;
`;

const ButtonIcon = styled.div`
  width: 32px;
  height: 32px;
  background: ${(props) => props.icon};
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
`;

function NavButton(props) {
  const { title, color, icon, onClickEvent } = props;

  return (
    <StyledButton color={color || "#CCCCCC"} onClick={onClickEvent}>
      <ButtonIcon
        icon={icon || "url('https://i.postimg.cc/T1Hksxyt/home.png')"}
      />
      {title || "홈"}
    </StyledButton>
  );
}

export default NavButton;
