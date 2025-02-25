import React from "react";
import styled from "styled-components";
import { IoLinkOutline } from "react-icons/io5";

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeasonKeyword = styled.div`
  height: 100%;
  padding: 6px 15px;
  color: #fff;
  background-color: #5c67dc;
  border: none;
  border-radius: 100px;
`;

const SeasonContext = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
`;

const ToLink = styled.a`
  height: 100%;
  padding: 4px 16px;
  background-color: #f5f6f8;
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #444;
`;
const LinkIcon = styled(IoLinkOutline)`
  width: 18px;
  height: 18px;
`;

const LinkContext = styled.p`
  margin: 0 0 0 4px;
  font-size: 10px;
  font-weight: 700;
  line-height: 160%;
  font-family: "pretendard";
`;

function FestaDetailTopInfo({ link }) {
  return (
    <Wrap>
      <SeasonKeyword>
        <SeasonContext>봄(3~5월)</SeasonContext>
      </SeasonKeyword>
      <ToLink href={link}>
        <LinkIcon />
        <LinkContext>오늘도 시흥행</LinkContext>
      </ToLink>
    </Wrap>
  );
}

export default FestaDetailTopInfo;
