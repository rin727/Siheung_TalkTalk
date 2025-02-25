import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Navigation from "../ui/Common/Navigation";
import SeasonKeywordList from "../list/SeasonKeywordList";
import FestivalList from "../list/FestivalList";
import NavBar from "../ui/Common/NavBar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  margin: 20px 0 0 0;
  width: 390px;
  background-color: #fff;
  border-radius: 16px 16px 0 0;
`;

function FestivalListPage(props) {
  const [festivalList, setFestivalList] = useState([]); // 전체 축제 리스트

  const [selectedSeason, setSelectedSeason] = useState("all"); // 선택된 계절
  const [filteredFestivalList, setFilteredFestivalList] = useState([]);

  useEffect(() => {
    const fetchFestivalList = async () => {
      const querySnapshot = await getDocs(collection(db, "festivals"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setFestivalList(data);
      setFilteredFestivalList(data);
    };
    fetchFestivalList();
  }, []);

  useEffect(() => {
    console.log(selectedSeason);
  }, [selectedSeason]);

  useEffect(() => {
    if (selectedSeason === "all") {
      setFilteredFestivalList(festivalList); //전체를 보여줄 때
      return;
    } else {
      const filteredFestivals = festivalList.filter(
        (festival) => festival.season === selectedSeason
      );
      setFilteredFestivalList(filteredFestivals); //해당 시즌의 축제 리스트를 만들고
    }
  }, [selectedSeason]);

  return (
    <Wrapper>
      <NavBar
        color="#222"
        boxshadow="0px 0px 12px 0px rgba(0, 0, 0, 0.10)"
        righticonopacity="0"
        title="축제"
      />
      <Container>
        <SeasonKeywordList
          filter={selectedSeason}
          setFilter={setSelectedSeason}
        ></SeasonKeywordList>
        <FestivalList list={filteredFestivalList}></FestivalList>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

export default FestivalListPage;
