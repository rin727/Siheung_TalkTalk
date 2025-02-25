import React from "react";
import styled from "styled-components";


const Wrap = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 334px;
    height: 92px;
    background-color: #F5F6F8;
    border-radius: 16px;
`;

const FestaBox = styled.div`
    margin: 0 0 0 16px;
    display: flex;
    align-items: center;
    font-size: 12px;
`
const FestaContain = styled.div`
    border-radius: 50px;
    background-color: #EEE;
    font-weight: 500;
    padding: 6px 15px;

    & > * {
        margin: 0;
    }
`

const FestaInfo = styled.p`
    margin: 0 0 0 16px;
    font-weight: 300;
`

const DateBox = styled.div`
    margin: 8px 0 0 16px;
    display: flex;
    align-items: center;
    font-size: 12px;
`

const DateContain = styled.div`
    border-radius: 50px;
    background-color: #EEE;
    font-weight: 500;
    padding: 6px 15px;

    & > * {
        margin: 0;
    }
`

const DateInfo = styled.p`
    margin: 0 0 0 16px;
    font-weight: 300;
`


function ReviewBoxFestivalInfo(props) {
    return (
        <Wrap>
            <FestaBox>
                <FestaContain>
                    <p>축제</p>
                </FestaContain>
                <FestaInfo>제7회 시흥염전소금제</FestaInfo>
            </FestaBox>
            <DateBox>
                <DateContain>
                    <p>방문일자</p>
                </DateContain>
                <DateInfo>2024.05.26</DateInfo>
            </DateBox>
        </Wrap>
    );
}

export default ReviewBoxFestivalInfo;