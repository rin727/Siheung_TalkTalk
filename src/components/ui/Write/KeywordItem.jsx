import React, { useEffect } from "react";
import styled from "styled-components";

const KeywordWrapper = styled.div`
  > * {
    margin-bottom: 8px;
  }
  flex-direction: column;
  align-items: flex-start;
`;

const KeywordEmoticon = styled.img`
  width: 18px;
  height: 18px;
`;

const KeywordText = styled.div`
  background-color: ${(props) => (props.selected ? "#d1eaff" : "#f5f6f8")};
  font-size: ${(props) => props.fontsize || "12px"};
  padding: 4px 8px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
  border-radius: 4px;
  width: auto;
  color: #444444;
  display: flex;
  align-items: center;
`;

function KeywordItem(props) {
  const { title, icon, fontsize } = props;

  useEffect(() => {
    console.log(fontsize);
  }, [fontsize]);

  return (
    <KeywordWrapper>
      <KeywordText fontsize={props.fontsize}>
        <KeywordEmoticon src={process.env.PUBLIC_URL + "/feedback/" + icon} />
        {title || null}
      </KeywordText>
    </KeywordWrapper>
  );
}

export default KeywordItem;
