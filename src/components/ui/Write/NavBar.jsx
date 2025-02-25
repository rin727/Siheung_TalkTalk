import React from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { IoBookmarkOutline } from "react-icons/io5";

const Wrap = styled.div`
  width: 334px; //width 보기 좋게 수정
  padding: 18px 28px;
  /* position: fixed;
  top: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  color: ${props => props.color};  /* 색상 설정 */
  box-shadow: ${props => props.boxshadow};  /* 박스섀도우 적용 */
   /* 필요시에 박스 섀도우 0px 0px 12px 0px rgba(0, 0, 0, 0.10) 적용 */
  background-color: ${props => props.backgroundcolor};
  /* 축제리스트, 리뷰리스트, 리뷰작성 페이지에 #FCFCFC 적용시키기 */
`;

const ArrowLeftIcon = styled(SlArrowLeft)`
  width: 24px;
  height: 24px;
  opacity: ${props=> props.lefticonopacity}; /* 왼쪽 아이콘 opacity */
`;
const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin:0;
`
const BookMarkIcon = styled(IoBookmarkOutline)`
  width: 24px;
  height: 24px;
  opacity: ${props=> props.righticonopacity}; /* 오른쪽 아이콘 opacity */
`;

function NavBar(props) {
  const {title, color, lefticonopacity, righticonopacity, boxshadow, backgroundcolor} = props;

  return (
    <Wrap color={color} boxshadow={boxshadow} backgroundcolor={backgroundcolor}>
      <ArrowLeftIcon lefticonopacity={lefticonopacity}></ArrowLeftIcon>
      <Title >{title||null}</Title>
      <BookMarkIcon righticonopacity={righticonopacity}></BookMarkIcon>
    </Wrap>
  );
}

export default NavBar;
