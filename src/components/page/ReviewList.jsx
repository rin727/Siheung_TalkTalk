import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectBox from "../ui/MFR/Dropdown";
import ReviewKeywordList from "../list/ReviewKeywordList";
import ReviewCardList from "../list/ReviewCardList";
import BigButton from "../ui/Common/BigButton";
import NavBar from "../ui/Common/NavBar";
import Navigation from "../ui/Common/Navigation";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin: 0 0 12px 28px;
`;

const Container = styled.div`
  margin: 20px 0 0 0;
  width: 390px;
  background-color: #fff;
  border-radius: 16px 16px 0 0;
`;

const ButtonBox = styled.div`
  margin: 4px 0 100px 0;
  width: 100%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreReviewBtn = styled(BigButton)``;
const ReviewWriteBtn = styled(BigButton)``;

function ReviewList(props) {
  const OPTIONS = [
    { value: "all", name: "전체" },
    { value: "spring", name: "봄" },
    { value: "summer", name: "여름" },
    { value: "fall", name: "가을" },
    { value: "winter", name: "겨울" },
  ];
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([]); // 전체 리뷰 리스트(원본배열)
  const [festivalList, setFestivalList] = useState([]); // 전체 축제 리스트

  const [selectedSeason, setSelectedSeason] = useState("all"); // 선택된 계절
  const [filteredFestivalList, setFilteredFestivalList] = useState([]);
  //계절에 따라 필터링된 축제 리스트
  const [selectedFestival, setSelectedFestival] = useState(""); // 선택된 축제
  const [selectedReviewList, setSelectedReviewList] = useState([]); // 선택된 설정 대한 리뷰 리스트
  //전체 축제 리스트
  const [filter, setFilter] = useState(""); // 선택된 해시태그
  const [viewReviews, setViewReviews] = useState([]); // 보여지는 리뷰 리스트

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(data);
      setViewReviews(data.slice(0, 5));
    };

    const fetchFestivalList = async () => {
      const querySnapshot = await getDocs(collection(db, "festivals"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      setFestivalList(data);
    };

    fetchData();
    fetchFestivalList();
  }, []); // 리뷰와 축제 리스트를 가져오는 useEffect입니다

  useEffect(() => {
    if (selectedSeason === "all") {
      //시즌을 선택하지 않았을때
      setSelectedFestival(""); //선택된 축제를 초기화합니다
      setSelectedReviewList(reviews); //조건에 의해 선택된 리뷰 리스트를 초기화합니다
      setViewReviews(reviews.slice(0, 5)); // 전체 리뷰 중에서 5개를 보여줍니다
    } else {
      const filteredFestivals = festivalList.filter(
        (festival) => festival.season === selectedSeason
      ); //해당 시즌의 축제만 필터링합니다
      setFilteredFestivalList(filteredFestivals); //해당 시즌의 축제 리스트를 만듭니다

      if (selectedFestival === "") {
        //축제를 선택하지 않은 상태라면
        const filteredReviews = reviews.filter((review) =>
          filteredFestivals.some(
            (festival) => festival.id === review.festivalId
          )
        ); //해당 시즌의 축제에 대한 리뷰만 필터링합니다
        setSelectedReviewList(filteredReviews); //해당 시즌의 리뷰 리스트를 선택된 리뷰 리스트로 설정
        setViewReviews(filteredReviews.slice(0, 5)); // 해당 리뷰 중에서 5개를 보여줍니다
      } else {
        //축제가 선택된 상태라면
        const filteredReviews = reviews.filter(
          (review) => review.festivalId === selectedFestival
        );
        setSelectedReviewList(filteredReviews); // 선택된 축제의 리뷰 리스트로 설정
        setViewReviews(filteredReviews.slice(0, 5)); // 해당 리뷰 중에서 5개를 보여줍니다
      }
    }
    setFilter(""); //해시태그를 초기화합니다
  }, [selectedSeason, selectedFestival, festivalList, reviews]);
  // 계절을 선택함으로써 필터링된 축제 리스트와 해당 축제들의 리뷰를 만드는 useEffect입니다

  useEffect(() => {
    if (filter === "") {
      setViewReviews(selectedReviewList.slice(0, 5));
    } else {
      setViewReviews(
        selectedReviewList
          .filter((review) => review.hashTag === filter)
          .slice(0, 5)
      );
    }
  }, [filter, selectedReviewList]);
  // 선택된 해시태그에 따라 리뷰를 필터링하는 useEffect입니다

  return (
    <Wrapper>
      <NavBar
        color="#222"
        backgroundcolor=""
        boxshadow="0px 0px 12px 0px rgba(0, 0, 0, 0.10)"
        righticonopacity="0"
        title="리뷰"
      />
      <Container>
        <SelectWrapper>
          <SelectBox
            options={OPTIONS}
            selectedValue={selectedSeason}
            setSelectedValue={setSelectedSeason}
            borderColor="#3945BD"
          ></SelectBox>
          {selectedSeason !== "all" && (
            <SelectBox
              options={[
                { value: "", name: "전체" },
                ...filteredFestivalList.map((festival) => ({
                  value: festival.id,
                  name: festival.festivalName,
                })),
              ]}
              selectedValue={selectedFestival}
              setSelectedValue={setSelectedFestival}
              borderColor="#3945BD"
            />
          )}
        </SelectWrapper>
        <ReviewKeywordList filter={filter} setFilter={setFilter} />
        <ReviewCardList ReviewList={viewReviews} />
        <ButtonBox>
          <MoreReviewBtn
            color="#5C67DC"
            backgroundcolor="transparent"
            title="더보기"
          />
          <ReviewWriteBtn
            color="#fff"
            backgroundcolor="#5C67DC"
            title="리뷰 작성하기"
            fontWeight="600"
            onClick={() => {
              navigate("/CreateReview");
            }}
          />
        </ButtonBox>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

export default ReviewList;
