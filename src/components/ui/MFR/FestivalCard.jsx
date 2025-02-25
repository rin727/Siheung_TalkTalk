import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 334px;
  height: 334px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 10px;
  flex: 0 0 auto;
`;

const PageNum = styled.div`
  width: 40px;
  height: 20px;
  box-sizing: border-box;
  border-radius: 50px;
  margin-left: 282px;
  background: rgba(0, 0, 0, 0.44);
  margin-top: 12px;

  display: flex;
  justify-content: center;

  font-family: "Pretendard";
  font-size: 12px;
  line-height: 20px;
  color: #cccccc;
`;

const NowPage = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #ffffff;
  margin-right: 3px;
  font-family: "Pretendard";
`;

const Title = styled.div`
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box; /* Flexbox와 유사한 레이아웃 모드 사용 */
  -webkit-line-clamp: 2; /* 두 줄까지만 표시 */
  -webkit-box-orient: vertical; /* Flexbox의 방향 설정 */
  line-height: 1.2; /* 줄 높이 설정 */
  font-size: 28px;
  color: #fff;
  font-family: "Jalnan Gothic";
  /* TODO: 폰트 적용 확인  */
  margin-left: 20px;
  margin-top: 190px;
  white-space: pre-line; /* 줄바꿈 적용 */
`;

const SubTitle = styled.div`
  font-size: 14px;
  color: #fff;
  margin-left: 20px;
  font-family: "Pretendard";
`;

function FestivalCard(props) {
  const navigate = useNavigate();
  return (
    <Wrapper
      onClick={() => navigate(`/FestivalDetail/${props.id}`)}
      url={props.imgUrl}
    >
      <PageNum>
        <NowPage>{props.pagenum}</NowPage> / {props.length}
      </PageNum>
      <Title>{props.title}</Title>
      {/* <SubTitle>{props.subtitle}</SubTitle> */}
    </Wrapper>
  );
}

export default FestivalCard;
