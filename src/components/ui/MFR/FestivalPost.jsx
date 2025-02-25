import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 162px;
  height: 231px;
  margin-bottom: 16px;

  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(204, 204, 204, 0.16);
  box-shadow: 0px 0px 12px 0px rgba(92, 103, 220, 0.06);
  overflow: hidden;

  position: relative;
`;

const Thumbnail = styled.div`
  background: url(${(props) => props.src});
  box-sizing: border-box;
  width: 100%;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: 1;
`;

const Period = styled.div`
  font-family: "Pretendard";
  margin-left: 10px;
  margin-top: 12px;
  margin-bottom: 2px;
  font-size: 8px;
  color: #444;
`;

const Title = styled.div`
  font-family: "Pretendard";
  margin-left: 10px;
  font-size: 14px;
  color: #222;
  font-weight: 600;
`;

const KeyWord = styled.div`
  background: #f5f6f8;
  border-radius: 4px;
  margin-left: 4px;
  padding: 4px 8px;

  display: flex;
  justify-content: left;
  /* align-items: center; */
`;

const KeyImg = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 4px;
  background: url("https://i.postimg.cc/rw8Q5qFB/image-92.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const KeyText = styled.div`
  font-size: 8px;
  color: #444;
  line-height: 12px;

  font-family: "Pretendard";
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: left;
  /* align-items: center; */
  margin-left: 6px;
  margin-top: 12px;
`;

function FestivalPost({
  id,
  title,
  review,
  festival,
  rating,
  num,
  img,
  keywords,
}) {
  const navigate = useNavigate();

  console.log(img);
  return (
    <Wrapper onClick={() => navigate(`/FestivalDetail/${id}`)}>
      <Thumbnail src={img}></Thumbnail>
      <Period>2024.09.27~2024.09.29</Period>
      <Title>{festival}</Title>
      <BottomBox>
        <KeyWord>
          <KeyImg></KeyImg>
          <KeyText>
            {keywords.sort((a, b) => b.count - a.count)[0].keyword}
          </KeyText>
        </KeyWord>
        <KeyWord>
          <KeyText>+{keywords.length}</KeyText>
        </KeyWord>
      </BottomBox>
    </Wrapper>
  );
}

export default FestivalPost;
