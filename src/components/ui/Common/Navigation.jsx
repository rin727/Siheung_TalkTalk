import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavButton from "./NavButton";
import { useLocation, useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 390px;
  height: 60px;
  background: #fff;
  border-top: 0.5px solid #ccc;
  position: fixed;
  bottom: 0px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Btn = styled.div`
  width: 32px;
  height: 60px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeIcon = styled.div`
  width: 32px;
  height: 32px;
  /* background: url('https://i.postimg.cc/268WSw4R/home-off.png'); */
  background: url("https://i.postimg.cc/T1Hksxyt/home.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
`;

const FestivalIcon = styled.div`
  width: 32px;
  height: 32px;
  /* background: url('https://i.postimg.cc/1tJpGT93/celebration-on.png'); */
  background: url("https://i.postimg.cc/mZFBF0ZS/celebration.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
`;

const MypageIcon = styled.div`
  width: 32px;
  height: 32px;
  background: url("https://i.postimg.cc/pLyHR7S8/account-circle.png");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: auto;
  margin-right: auto;
`;

function Navigation(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper>
      <NavButton
        title="홈"
        icon={
          path === "/"
            ? "url('https://i.postimg.cc/T1Hksxyt/home.png')"
            : "url('https://i.postimg.cc/268WSw4R/home-off.png')"
        }
        color={path === "/" ? "#5C67DC" : "#ccc"}
        onClickEvent={() => navigate("/")}
      />
      <NavButton
        title="축제"
        icon={
          path.includes("Festival") || path.includes("Review")
            ? "url('https://i.postimg.cc/1tJpGT93/celebration-off.png')"
            : "url('https://i.postimg.cc/mZFBF0ZS/celebration.png')"
        }
        color={
          path.includes("Festival") || path.includes("Review")
            ? "#5C67DC"
            : "#ccc"
        }
        onClickEvent={() => navigate("/FestivalList")}
      />
      <NavButton
        title="마이페이지"
        icon="url('https://i.postimg.cc/pLyHR7S8/account-circle.png')"
      />
    </Wrapper>
  );
}

export default Navigation;
