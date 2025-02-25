import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const Wrapper = styled.div`
    width: 390px;
    height: 60px;
    background: #fff;
    border-top: 0.5px solid #ccc;
    position: fixed;
    bottom: 0px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
`

const Btn = styled.div`
    width: 130px;
    height: 60px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const HomeIcon = styled.div`
    width: 32px;
    height: 32px;
    background: url('https://i.postimg.cc/T1Hksxyt/home.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
`

const FestivalIcon = styled.div`
    width: 32px;
    height: 32px;
    background: url('https://i.postimg.cc/mZFBF0ZS/celebration.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
`

const MypageIcon = styled.div`
    width: 32px;
    height: 32px;
    background: url('https://i.postimg.cc/pLyHR7S8/account-circle.png');
    background-size: contain;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
`

const NaviText = styled.h1`
    font-size: 10px;
    color: ${props => props.color};
    text-align: center;
    margin: 0px;
`

function Navigation(props){
    return(
        <Wrapper>
            <Btn>
                <HomeIcon></HomeIcon>
                <NaviText color="#5C67DC">홈</NaviText>
            </Btn>
            <Btn>
                <FestivalIcon></FestivalIcon>
                <NaviText color="#CCCCCC">축제</NaviText>
            </Btn>
            <Btn>
                <MypageIcon></MypageIcon>
                <NaviText color="#CCCCCC">마이페이지</NaviText>
            </Btn>
        </Wrapper>
    );
}

export default Navigation;