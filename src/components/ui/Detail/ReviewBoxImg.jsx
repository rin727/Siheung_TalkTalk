import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  position: relative;
  margin-top: 24px;
  width: 334px;
  height: 334px;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
`;

const ImgCountBox = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 44%);
  border-radius: 50px;
  z-index: 999;
`;

const ImgCount = styled.p`
  margin: 0;
  color: #fff;
  line-height: 120%;
  font-size: 12px;
`;

function ReviewBoxImage({ img }) {
  return (
    <Wrap>
      <ReviewImg src={img} />
    </Wrap>
  );
}

export default ReviewBoxImage;
