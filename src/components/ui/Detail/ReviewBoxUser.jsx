import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
    margin-top: 12px;
    display: flex;
    align-items: center;
    color: #444;
`

const UserImg = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
`
const UserName = styled.p`
    margin: 10px;
    font-size: 12px;
    font-weight: 600;
`


function ReviewBoxUser(props) {
    return (
        <Wrap>
            <UserImg src={process.env.PUBLIC_URL + "/" + "UserImg.png"}/>
            <UserName>행복한 차노을</UserName>
        </Wrap>
    );
}

export default ReviewBoxUser;