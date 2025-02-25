import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../ui/Common/NavBar";
import FestaTopInfo from "../ui/Detail/FestaTopInfo";
import FestaDetailTopInfo from "../ui/Detail/FestaDetailTopInfo";
import FestaInfoImage from "../ui/Detail/FestaInfoImg";
import FestaDetailFestivalInfo from "../ui/Detail/FestaDetailFestivalInfo";
import BigButton from "../ui/Common/BigButton";
import ReviewKeywordList from "../list/ReviewKeywordList";
import KeywordItem from "../ui/Write/KeywordItem";
import Navigation from "../ui/Common/Navigation";
import ReviewCardList from "../list/ReviewCardList";
import ReviewCardListClone from "../list/ReviewCardListClone";
import StarPoint from "../ui/Detail/StarPoint";
import { useNavigate, useParams } from "react-router-dom";
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
  width: 390px;
  background-color: #fff;
  border-radius: 16px 16px 0 0;
  position: absolute;
  top: 317px;
`;

const Contour = styled.hr`
  width: 100%;
  height: 12px;
  border: 0;
  background-color: #f2f4f6;
`;

const FestivalImg = styled.img`
  width: 390px;
  height: 360px;
  position: fixed;
  top: 0;
  text-align: center;
  object-fit: cover;
  filter: brightness(60%);
  z-index: 0;
  background-color: #222;
`;

const FestaBox = styled.div`
  padding: 28px;
`;

const FestaInfoContext = styled.p`
  margin-top: 28px;
  width: 334px;
  font-size: 16px;
  font-weight: 300;
  line-height: 160%;
  text-align: justify;
`;

// FeedBackBox

const FeedBackBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;
`;

const FBPointTitle = styled.div`
  max-width: 34px;
  height: 100%;
  border-radius: 50px;
  background-color: #f5f6f8;
  padding: 6px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #444;
`;
const FBTitleText = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 600;
`;
const FBScore = styled.div`
  margin: 12px 0 0 0;
`;
const FBPoint = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: #222;
`;
const FBKeywordList = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  gap: 4px;
`;

const ButtonList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 24px 0 100px 0;
`;

const MoreReviewBtn = styled(BigButton)``;

const ReviewWriteBtn = styled(BigButton)``;

const keywordList = [
  "신나는 분위기에요",
  "잔잔한 분위기에요",
  "사진이 잘나와요",
  "질서정연해요",
  "질서가 안지켜져요",
  "여유로워요",
  "체험이 많이 없어요",
  "다양한 체험이 있어요",
  "볼거리가 많아요",
  "화장실이 깨끗해요",
  "편의시설이 깔끔해요",
  "편의시설이 불편해요",
];

function FestivalDetail(props) {
  const postId = useParams().id;
  const [post, setPost] = useState();
  const [filter, setFilter] = useState("");
  const [reviews, setreviews] = useState([]);
  const [viewReviews, setViewReviews] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    db.collection("festivals")
      .doc(postId)
      .get()
      .then((doc) => {
        console.log(doc.data());
        setPost(doc.data());
      });
  }, [postId]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await db
          .collection("post")
          .where("festivalId", "==", postId)
          .get();

        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setreviews(postData);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [postId]);

  useEffect(() => {
    if (filter === "") {
      setViewReviews(reviews.slice(0, 3));
    } else {
      setViewReviews(
        reviews.filter((review) => review.hashTag === filter).slice(0, 3)
      );
      console.log(viewReviews);
    }
  }, [filter, reviews]);

  const calculateAverageRating = (ratingSum, ratingNumber) => {
    if (ratingNumber === 0) {
      return "0.00";
    }
    return (ratingSum / ratingNumber).toFixed(2);
  };

  const getkeywordImg = (keyword) => {
    const index = keywordList.indexOf(keyword);

    if (index === -1) {
      return "키워드가 목록에 없습니다.";
    }
    const value = index;
    const firstIndex = Math.floor(value / 3) + 1;
    const secondIndex = (value % 3) + 1;

    console.log(firstIndex, secondIndex);

    return { firstIndex, secondIndex };
  };

  return (
    <Wrapper>
      <NavBar
        color="#fff"
        backgroundcolor="transparent"
        boxshadow="0px 0px 12px 0px rgba(0, 0, 0, 0.10)"
        righticonopacity="1"
        title=""
      />
      <FestaTopInfo title={post?.title} date={post?.date} />
      <FestivalImg src={post?.backgroundUrl} />
      <Container>
        <FestaBox>
          <FestaDetailTopInfo season={post?.season} link={post?.link} />
          <FestaInfoImage src={post?.imgUrl} />
          <FestaDetailFestivalInfo name={post?.festivalName} />
          <FestaInfoContext>{post?.content}</FestaInfoContext>
        </FestaBox>
        <Contour />
        <FeedBackBox>
          <FBPointTitle>
            <FBTitleText>총 평점</FBTitleText>
          </FBPointTitle>
          <FBScore>
            <FBPoint>
              {calculateAverageRating(post?.ratingSum, post?.ratingNumber)}
            </FBPoint>
            <StarPoint rating={post?.ratingSum / post?.ratingNumber} />
          </FBScore>
          <FBKeywordList>
            {post?.keywords
              .sort((a, b) => b.count - a.count)
              .slice(0, 3)
              .map((keyword) => (
                <KeywordItem
                  fontsize="10px"
                  icon={`./feedback${
                    getkeywordImg(keyword.keyword).firstIndex
                  }-${getkeywordImg(keyword.keyword).secondIndex}.png`}
                  title={keyword.keyword}
                />
              ))}
          </FBKeywordList>
        </FeedBackBox>
        <ReviewKeywordList filter={filter} setFilter={setFilter} />
        <ReviewCardList ReviewList={viewReviews} />
        <ButtonList>
          <MoreReviewBtn
            onClick={() => navigate("/reviewList")}
            color="#5C67DC"
            backgroundcolor="transparent"
            title="더 많은 Review 보기  →"
          />
          <ReviewWriteBtn
            id={post?.id}
            onClick={() => navigate("/CreateReview/" + postId)}
            color="#fff"
            backgroundcolor="#5C67DC"
            title="리뷰 작성하기"
            fontWeight="600"
          />
        </ButtonList>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

export default FestivalDetail;
