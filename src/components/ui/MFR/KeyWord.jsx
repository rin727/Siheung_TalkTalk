import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    background: #F5F6F8;
    border-radius: 4px;
    margin-left: 4px;
    padding: 4px 8px;

    display: flex;
    justify-content: left;
    align-items: center;
`

const KeyImg = styled.div`
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background: url('https://i.postimg.cc/HxTkHdy2/image-88.png');
    background-size: contain;
    background-repeat: no-repeat;
`

const KeyText = styled.div`
    font-size: 8px;
    color: #444;
    line-height: 12px;

    font-family: 'Pretendard';
`

function KeyWord(props){
    return(
        <Wrapper>
            <KeyImg></KeyImg>
            <KeyText>볼거리가 많아요</KeyText>
        </Wrapper>
    );
}

export default KeyWord;