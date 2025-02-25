import { startTransition, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const KeywordContainer = styled(Container)`
  /* height: 368px; */
  padding: 20px 28px 0px 28px;
  font-size: 16px;
  gap: 22px;
`;

const GuideTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: 700;
  color: #222;
  /* margin: 12px 0px; */
`;

const GuideText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  color: #444444;
`;

const ChoiceKeywordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  /* margin: 12px 0px; */
`;

const KeywordWrapper = styled.div`
  > * {
    margin-bottom: 9px;
  }
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const KeywordKindText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #222;
`;

const KeywordText = styled.div`
  background-color: ${(props) => (props.selected ? "#7883F4" : "#f5f6f8")};
  font-size: 12px;
  padding: 4px 8px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  border-radius: 4px;
  width: auto;
  color: ${(props) => (props.selected ? "#fff" : "#444")};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const KeywordEmoticon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function FeedBackKeyword({
  selectedKeywords = [],
  setSelectedKeywords,
}) {
  const keywordlist = [
    {
      kind: "분위기",
      keywords: ["신나는 분위기에요", "잔잔한 분위기에요", "사진이 잘나와요"],
      emoticon: ["./feedback1-1.png", "./feedback1-2.png", "./feedback1-3.png"],
    },
    {
      kind: "질서",
      keywords: ["질서정연해요", "질서가 안지켜져요", "여유로워요"],
      emoticon: ["./feedback2-1.png", "./feedback2-2.png", "./feedback2-3.png"],
    },
    {
      kind: "체험",
      keywords: [
        "체험이 많이 없어요",
        "다양한 체험이 있어요",
        "볼거리가 많아요",
      ],
      emoticon: ["./feedback3-1.png", "./feedback3-2.png", "./feedback3-3.png"],
    },
    {
      kind: "편의시설",
      keywords: [
        "화장실이 깨끗해요",
        "편의시설이 깔끔해요",
        "편의시설이 불편해요",
      ],
      emoticon: ["./feedback4-1.png", "./feedback4-2.png", "./feedback4-3.png"],
    },
  ];

  const handleKeywordClick = (text) => {
    setSelectedKeywords((prev) => {
      if (prev.includes(text)) {
        return prev.filter((keyword) => keyword !== text);
      } else if (prev.length < 5) {
        return [...prev, text];
      }
      return prev;
    });
  };

  return (
    <KeywordContainer>
      <GuideTextContainer>
        축제는 어떠셨나요?(1개~5개)
        <GuideText>축제에서 느꼈던 생각을 골라주세요</GuideText>
      </GuideTextContainer>
      <ChoiceKeywordContainer>
        {keywordlist.map((keywords) => {
          return (
            <KeywordWrapper>
              <KeywordKindText>{keywords.kind}</KeywordKindText>
              {keywords.keywords.map((keyword, idx) => {
                return (
                  <KeywordText
                    key={keyword}
                    selected={selectedKeywords.includes(keyword)}
                    onClick={() => handleKeywordClick(keyword)}
                  >
                    {keywords.emoticon && keywords.emoticon[idx] && (
                      <KeywordEmoticon
                        src={
                          process.env.PUBLIC_URL +
                          "/feedback/" +
                          keywords.emoticon[idx]
                        }
                        alt={`emoticon-${idx}`}
                        // 이 부분에 emoticon 이미지 넣기 실패함. 이미지명은 Feedback1.png 이런 형식의 이름
                      />
                    )}
                    {keyword}
                  </KeywordText>
                );
              })}
            </KeywordWrapper>
          );
        })}
      </ChoiceKeywordContainer>
    </KeywordContainer>
  );
}
