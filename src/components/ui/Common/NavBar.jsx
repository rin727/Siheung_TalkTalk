// import React from "react";
// import styled from "styled-components";
// import { SlArrowLeft } from "react-icons/sl";
// import { IoBookmarkOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// const Wrap = styled.div`
//   width: 334px; //width 보기 좋게 수정
//   padding: 18px 28px;
//   /* position: fixed;
//   top: 0; */
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   z-index: 999;
//   background-color: ${(props) => props.backgroundcolor || "#FCFCFC"};
//   color: ${(props) => props.color || "#444"};
//   box-shadow: ${(props) => props.boxshadow || "none"};
// `;

// const ArrowLeftIcon = styled(SlArrowLeft)`
//   width: 24px;
//   height: 24px;
// `;

// const NavTitle = styled.h1`
//   font-size: 20px;
//   font-weight: 600;
//   line-height: 120%;
//   margin: 0;
// `;

// const BookMarkIcon = styled(IoBookmarkOutline)`
//   width: 24px;
//   height: 24px;
//   opacity: ${(props) => props.righticonopacity || 1};
// `;

// function NavBar(props) {
//   const navigate = useNavigate();

//   const handleBack = () => {
//     navigate(-1);
//   };
//   return (
//     <Wrap
//       color={props.color}
//       backgroundcolor={props.backgroundcolor}
//       boxshadow={props.boxshadow}
//     >
//       <ArrowLeftIcon onClick={handleBack} />
//       <NavTitle>{props.title}</NavTitle>
//       <BookMarkIcon righticonopacity={props.righticonopacity} />
//     </Wrap>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const Wrap = styled.div`
  width: 334px; //width 보기 좋게 수정
  padding: 18px 28px;
  /* position: fixed;
  top: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  background-color: ${(props) => props.backgroundcolor || "#FCFCFC"};
  color: ${(props) => props.color || "#444"};
  box-shadow: ${(props) => props.boxshadow || "none"};
`;

const ArrowLeftIcon = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/arrow_back_ios.png);
  background-size: cover;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const NavTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  line-height: 120%;
  margin: 0;
`;

const BookMarkIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: ${(props) =>
    props.selected
      ? `url(${process.env.PUBLIC_URL}/bookmark_fill.png)`
      : `url(${process.env.PUBLIC_URL}/bookmark.png)`};
  background-size: cover;
  opacity: ${(props) => props.righticonopacity || 1};
`;

function NavBar(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Wrap
      color={props.color}
      backgroundcolor={props.backgroundcolor}
      boxshadow={props.boxshadow}
    >
      <ArrowLeftIcon onClick={handleBack} />
      <NavTitle>{props.title}</NavTitle>
      <BookMarkIcon
        onClick={props.onLikeClick}
        selected={props.selected}
        righticonopacity={props.righticonopacity}
      />
    </Wrap>
  );
}

export default NavBar;
