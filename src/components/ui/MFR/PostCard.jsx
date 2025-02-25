import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 162px;
  height: 241px;
  padding-bottom: 10px;
  margin-bottom: 16px;

  border-radius: 16px;
  background-color: #fff;
  border: 0.5px solid rgba(204, 204, 204, 0.16);
  box-shadow: 0px 0px 12px 0px rgba(92, 103, 220, 0.06);
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

const Thumbnail = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 120px;
  background: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  /* position: absolute; */
  z-index: 1;
`;

const Num = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  background: #5c67dc;

  color: #fff;
  font-size: 20px;
  line-height: 44px;
  text-align: center;
  font-family: "Jalnan Gothic";
`;

const TopBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 12px;
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-left: 10px;

  color: #cccccc;
  font-size: 8px;
`;

const Score = styled.div`
  width: 100%;
  color: #cccccc;
  font-size: 8px;
  margin: 0px;
  width: 24px;
  line-height: 12px;

  display: flex;
  justify-content: space-between;
  font-family: "Pretendard";
`;

const Star = styled.div`
  box-sizing: border-box;
  width: 12px;
  height: 12px;
  line-height: 12px;
  background: url("https://i.postimg.cc/tJsWzqJk/star.png");
  background-size: contain;
  background-repeat: no-repeat;
`;

const Location = styled.div`
  width: 100%;
  font-size: 8px;
  color: #ccc;
  line-height: 12px;
  font-family: "Pretendard";
`;

const Title = styled.h2`
  font-size: 14px;
  color: #222;
  margin-left: 10px;
  margin-top: 8px;
  margin-bottom: 0px;
  font-family: "Pretendard";
  font-weight: 600;
`;

const Preview = styled.div`
  font-size: 10px;
  color: #444;
  margin-top: 4px;
  margin-left: 10px;
  margin-right: 10px;
  line-height: 160%;
  font-family: "Pretendard";
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
  background: url("https://i.postimg.cc/HxTkHdy2/image-88.png");
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

function PostCard({ num, title, festival, review, rating, id, img }) {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/ReviewDetail/${id}`)}>
      <Thumbnail src={img || process.env.PUBLIC_URL + "/" + "FestivalImg.png"}>
        <Num>{num}</Num>
      </Thumbnail>

      <TopBox>
        <Score>
          <Star></Star>
          {rating}
        </Score>
        ·<Location>{festival}</Location>
      </TopBox>

      <Title>{title}</Title>
      <Preview>
        {review?.length > 10 ? review?.slice(0, 10) + "..." : review}
      </Preview>

      <BottomBox>
        <KeyWord>
          <KeyImg></KeyImg>
          <KeyText>볼거리가 많아요</KeyText>
        </KeyWord>
        <KeyWord>
          <KeyText>+5</KeyText>
        </KeyWord>
      </BottomBox>
    </Wrapper>
  );
}

export default PostCard;
