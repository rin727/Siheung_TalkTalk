import React from "react";
import styled from "styled-components"

const Wrapper = styled.div`
    width: 390px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 28px;
    align-items: center;
    box-sizing: border-box;
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
`
const Pagename = styled.p`
    font-size: 20px;
    font-weight: 600;
    color:#222;
`
function Topnavibar(props){
    const {Icon, title} = props;
    return(
        <Wrapper>
            <Icon src={process.env.PUBLIC_URL + "/" + 'star.png'}/>
            <Pagename>{title}</Pagename>
        </Wrapper>
    )
}

export default Topnavibar