import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 334px;
  height: 92px;
  background-color: #f5f6f8;
  border-radius: 16px;
`;

const FestaBox = styled.div`
  margin: 0 0 0 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;
const FestaContain = styled.div`
  border-radius: 50px;
  background-color: #eee;
  font-weight: 500;
  padding: 6px 15px;

  & > * {
    margin: 0;
  }
`;

const FestaInfo = styled.p`
  margin: 0 0 0 16px;
  font-weight: 300;
`;

const DateBox = styled.div`
  margin: 8px 0 0 16px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const DateContain = styled.div`
  border-radius: 50px;
  background-color: #eee;
  font-weight: 500;
  padding: 6px 15px;

  & > * {
    margin: 0;
  }
`;

const DateInfo = styled.p`
  margin: 0 0 0 16px;
  font-weight: 300;
`;

const DateChange = styled.button`
  padding: 2px 10px;
  font-size: 12px;
  color: #999999;
  background-color: #eee;
  border-radius: 30px;
  border: none;
  margin-left: 12px;
  font-weight: 700;
  opacity: ${(props) => props.changebuttonOpacity};
`;

function FestaDetailFestivalInfo(props) {
  const { changebuttonOpacity, onClick, name } = props;
  const [path, setPath] = useState(window.location.pathname);

  return (
    <Wrap>
      <FestaBox>
        <FestaContain>
          <p>축제</p>
        </FestaContain>
        <FestaInfo>{props.name}</FestaInfo>
      </FestaBox>
      <DateBox>
        <DateContain>
          <p>방문 일자</p>
        </DateContain>
        <DateInfo>2024.05.26</DateInfo>
        <DateChange
          onClick={() => {
            setPath(window.location.pathname);
            // console.log(path)
            if (path == "/CreateReview") {
              navigate("");
            } else {
            }
          }}
          changebuttonOpacity={path == "/CreateReview" ? "1" : "0"}
        >
          변경
        </DateChange>
      </DateBox>
    </Wrap>
  );
}

export default FestaDetailFestivalInfo;
