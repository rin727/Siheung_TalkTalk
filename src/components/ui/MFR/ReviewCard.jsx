import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  width: 334px;
  height: 149px;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 1px solid rgba(204, 204, 204, 0.16);
  box-shadow: 0 0 12px 0 rgba(92, 103, 220, 6%);
`;

const TopInfo = styled.div`
  color: #ccc;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-bottom: 12px;
  line-height: 16px;
  align-items: center;
  font-size: 10px;
  gap: 2px;

  height: 16px;
`;

const Stars = styled.p`
  display: flex;
  align-items: center;
`;

const FestivalName = styled.p`
  display: flex;
  align-items: center;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 302px;
  justify-content: start;
`;

const LeftInfo = styled.div`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 197px;
  height: 117px;
`;

const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #222222;
  line-height: 16px;

  font-family: "Pretendard";
  font-weight: 600;
  margin-top: 0px;
`;

const CardContent = styled.p`
  font-size: 12px;
  font-weight: 300;
  color: #444444;
  line-height: 12px;

  font-family: "Pretendard";
  line-height: 160%;
  margin-top: 0px;
  margin-bottom: 8px;
`;

const CardKeyword = styled.div``;

const RightImg = styled.img`
  border-radius: 16px;
  width: 89px;
  height: 89px;
`;

const KeyWord = styled.div`
  background: #f5f6f8;
  border-radius: 4px;
  margin-left: 0px;
  padding: 4px 8px;

  display: flex;
  justify-content: left;
`;

const KeyWord2 = styled.div`
  background: #f5f6f8;
  border-radius: 4px;
  margin-left: 4px;
  padding: 4px 8px;

  display: flex;
  justify-content: left;
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
  margin-left: 0px;
  margin-top: 0px;
`;

const keywordList = [
  "신나는 분위기에요",
  "잔잔한 분위기에요",
  "사진이 잘나와요",
  "질서정연해요",
  "질서가 안지켜져요",
  "여유로워요",
  "체험이 많이 없어요",
  "다양한 체험이 있어요",
  "볼거리가 많아요",
  "화장실이 깨끗해요",
  "편의시설이 깔끔해요",
  "편의시설이 불편해요",
];

const getkeywordImg = (keyword) => {
  const index = keywordList.indexOf(keyword);

  if (index === -1) {
    return "키워드가 목록에 없습니다.";
  }

  const value = index + 1;
  const firstIndex = Math.floor(value / 4) + 1;
  const secendIndex = value % 4;

  console.log(firstIndex, secendIndex);

  return { firstIndex, secendIndex };
};

function ReviewCard({
  title,
  festival,
  review,
  rating,
  onClickEvent,
  keyword,
  img,
}) {
  return (
    <Card onClick={onClickEvent}>
      <TopInfo>
        <Stars>
          <img
            src={"https://i.postimg.cc/tJsWzqJk/star.png"}
            width="16px"
            height="16px"
          />
          {rating}
        </Stars>
        <p>·</p>
        <FestivalName>{festival}</FestivalName>
      </TopInfo>
      <BottomInfo>
        <LeftInfo>
          <CardTitle>{title}</CardTitle>
          <CardContent>{review.slice(0,12)}</CardContent>
          <BottomBox>
            <KeyWord>
              <KeyImg></KeyImg>
              <KeyText>{keyword[0]}</KeyText>
            </KeyWord>
            {keyword.length > 1 && (
              <KeyWord2>
                <KeyText>+{keyword.length - 1}</KeyText>
              </KeyWord2>
            )}
          </BottomBox>
        </LeftInfo>
        {img && <RightImg src={img} />}
      </BottomInfo>
    </Card>
  );
}

export default ReviewCard;

{
  /* <KeyImg                 icon={`./feedback${getkeywordImg(keyword).firstIndex}-${
  getkeywordImg(keyword).secendIndex
}.png`}></KeyImg> */
}
