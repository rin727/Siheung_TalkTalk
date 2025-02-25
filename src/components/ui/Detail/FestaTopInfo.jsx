import React from "react";
import styled from "styled-components";
import { IoEyeOutline } from "react-icons/io5";

const Wrap = styled.div`
  width: 334px;
  padding: 0 28px;
  color: white;
  position: absolute;
  top: 200px;
  z-index: 999;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FestaWriteDate = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 140%;
`;
const ViewBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ViewIcon = styled(IoEyeOutline)`
  width: 16px;
  height: 16px;
`;

const ViewCount = styled.p`
  margin: 0 0 0 4px;
  font-size: 12px;
`;

const Title = styled.p`
  margin: 8px 0 0 0;
  font-family: "Jalnan Gothic";
  font-size: 24px;
`;

function FestaTopInfo({ title, date }) {
  return (
    <Wrap>
      <SubInfo>
        <FestaWriteDate>{date}</FestaWriteDate>
        <ViewBox>
          <ViewIcon />
          <ViewCount>24</ViewCount>
        </ViewBox>
      </SubInfo>
      <Title>{title}</Title>
    </Wrap>
  );
}

export default FestaTopInfo;
