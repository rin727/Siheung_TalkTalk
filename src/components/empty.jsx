import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import SmallButton from "../ui/smallButton";
import SelectBox from "../components/ReviewList/ui/Dropdown";
import ReviewKeywordList from "../components/common/ReviewKeywordList";

const Wrapper = styled.div`
    box-sizing: border-box;
    width: 390px;
    height: 844px;
    gap: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    `;

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

function ReviewList(props) {
    const [selectedValue, setSelectedValue] = useState("all");
    const OPTIONS = [
        { value: "all", name: "전체" },
        { value: "spring", name: "봄" },
        { value: "summer", name: "여름" },
        { value: "athum", name: "가을" },
        { value: "winter", name: "겨울" },
];

const [festivalList, setFestivalList] = useState();

    useEffect(() => {
        //페스티벌 리스트 가져오는 코드
        console.log("리스트가져오는 중");
}, []);

    return (
        <Wrapper>
        <SelectWrapper>
            <SelectBox
            options={OPTIONS}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            />
            {selectedValue !== "all" ? (
            <SelectBox
                options={festivalList}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
            ) : (
            ""
            )}
        </SelectWrapper>
        {/* <ReviewKeywordList /> */}
        </Wrapper>
    );
}

export default ReviewList;
