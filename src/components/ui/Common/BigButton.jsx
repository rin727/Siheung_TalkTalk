import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 334px;
  height: 54px;
  font-size: 16px;
  font-family: "Pretendard";
  font-weight: ${(props) => props.fontWeight || 400};
  box-sizing: border-box;
  color: ${(props) => props.fontcolor};
  background-color: ${(props) => props.backgroundcolor};
  border: 0.5px solid ${(props) => props.bordercolor};
  border-radius: 500px;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  margin-left: 10px;
`;

function BigButton({
  color,
  backgroundcolor,
  bordercolor,
  fontWeight,
  title,
  onClick,
}) {
  return (
    <StyledButton
      fontcolor={color}
      backgroundcolor={backgroundcolor}
      bordercolor={bordercolor}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {title}
      <ButtonIcon />
    </StyledButton>
  );
}

export default BigButton;
