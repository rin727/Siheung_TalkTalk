import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  margin-top: 24px;
  width: 334px;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

function FestaInfoImage({ src }) {
  console.log(src);
  return (
    <Wrap>
      <ReviewImg src={src} alt="축제 이미지" />
    </Wrap>
  );
}

export default FestaInfoImage;
