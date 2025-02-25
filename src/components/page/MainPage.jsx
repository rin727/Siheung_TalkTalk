import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navigation from "../ui/Common/Navigation";
import Banner from "../list/Banner";
import ReviewKeywordList from "../list/ReviewKeywordList";
import ReviewCardList from "../list/ReviewCardList";
import BigButton from "../ui/Common/BigButton";
import { db } from "../../firebase.js";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import BestReview from "../list/BestReview";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 390px;
  background: #fcfcfc;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #222222;
  font-family: "Jalnan Gothic";
  font-weight: 500;
  margin: 24px 0 16px 28px;
`;

const TopBar = styled.div`
  width: 390px;
  height: 60px;
  box-sizing: border-box;
  background: #fcfcfc;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 10px;
`;

const KeywordReviewBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BestReivewBox = styled.div`
  padding: 36px 0 0 0;
`;

const MoreReviewBtn = styled(BigButton)``;

const getSeason = (month) => {
  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "fall";
  } else {
    return "winter";
  }
};

function MainPage(props) {
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);
  const [bestReviews, setBestReviews] = useState([{}]);
  const [viewReviews, setViewReviews] = useState([]);
  const [filter, setFilter] = useState("가족과 함께");
  const [festivals, setFestivals] = useState([]);
  const [season, setSeason] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(data);
      setViewReviews(data.slice(0, 3));

      const q = query(collection(db, "post"), orderBy("likeNumber", "desc"));
      const querySnapshotBest = await getDocs(q);
      const bestData = querySnapshotBest.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBestReviews(bestData.slice(0, 6));
    };

    const currentMonth = new Date().getMonth() + 1;
    const currentSeason = getSeason(currentMonth);
    setSeason(currentSeason);

    const fetchFestivals = async () => {
      try {
        const querySnapshot = await db
          .collection("festivals")
          .where("season", "==", currentSeason)
          .get();

        const festivalData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFestivals(festivalData);
        console.log(festivalData);
      } catch (error) {
        console.error("Error fetching festivals: ", error);
      }
    };

    fetchData();
    fetchFestivals();
  }, []);

  useEffect(() => {
    if (filter === "") {
      setViewReviews(reviews.slice(0, 3));
    } else {
      setViewReviews(
        reviews.filter((review) => review.hashTag === filter).slice(0, 3)
      );
    }
  }, [filter, reviews]);

  return (
    <Wrapper>
      <TopBar>
        <img
          src="https://i.postimg.cc/wByq0xR4/talktalk-logo.png"
          alt="logo"
          width="90px"
          height="40px"
        />
      </TopBar>
      <Banner list={festivals} />
      <Title>키워드로 보는 Review</Title>
      <ReviewKeywordList filter={filter} setFilter={setFilter} />
      <ReviewCardList ReviewList={viewReviews} />
      <KeywordReviewBox>
        <MoreReviewBtn
          color="#5C67DC"
          backgroundcolor="transparent"
          title="더 많은 Review 보기  →"
          onClick={() => navigate("/ReviewList")}
        />
      </KeywordReviewBox>

      <BestReivewBox>
        <Title>Best Review</Title>
        <BestReview ReviewList={bestReviews} />
      </BestReivewBox>
      <Navigation />
    </Wrapper>
  );
}

export default MainPage;
