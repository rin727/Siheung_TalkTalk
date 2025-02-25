import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../ui/Common/NavBar";
import ReviewBoxTopInfo from "../ui/Detail/ReviewBoxTopInfo";
import ReviewBoxBottomInfo from "../ui/Detail/ReviewBoxBottomInfo";
import ReviewBoxUser from "../ui/Detail/ReviewBoxUser";
import ReviewBoxImage from "../ui/Detail/ReviewBoxImg";
import ReviewBoxFestivalInfo from "../ui/Detail/ReviewBoxFestivalInfo";
import FeedBackBoxLike from "../ui/Detail/FeedBackBoxLike";
import CommentList from "../list/CommentList";
import CommentMoreButton from "../ui/Detail/CommentMoreButton";
import CommentInput from "../ui/Detail/CommentInput";
import CommentSaveButton from "../ui/Detail/CommentSaveButton";
import Navigation from "../ui/Common/Navigation";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import KeywordItem from "../ui/Write/KeywordItem";
import ReviewCardList from "../list/ReviewCardList";

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
  top: 265px;
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

const ReviewBox = styled.div`
  padding: 28px;
`;

const FBKeywordList = styled.div`
  width: 100%;
  margin: 16px 0 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0 4px;
`;

const ReviewBoxTitle = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 140%;
  font-weight: 700;
  width: 100%;
`;

const ReviewBoxContext = styled.p`
  margin-top: 28px;
  width: 334px;
  font-size: 16px;
  font-weight: 300;
  line-height: 160%;
  text-align: justify;
`;

const FeedBackBox = styled.div`
  padding: 28px;
`;

const FeedBackTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const FeedBackContext = styled.p`
  margin-top: 8px;
  width: 334px;
  font-size: 16px;
  font-weight: 300;
  line-height: 160%;
  text-align: justify;
`;

const CommentBox = styled.div`
  padding: 28px 28px 20px 28px;
`;

const CommentTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const CommentWriteBox = styled.div`
  margin: 16px 0 0 0;
  display: flex;
  justify-content: space-between;
  height: 44px;
`;

const OtherReviewBox = styled.div`
  padding: 28px;
  margin-bottom: 60px;
`;

const OtherReviewTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

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

function ReviewDetail(props) {
  const { id: postId } = useParams();
  const [post, setPost] = useState({
    id: 0,
    title: "",
    review: "",
    feedback: "",
    comments: [],
  });

  useEffect(() => {
    db.collection("post")
      .doc(postId)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log(data);
        setPost({
          ...data,
          comments: Array.isArray(data.comments) ? data.comments : [],
        });
      });
  }, [postId]);

  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await db
          .collection("post")
          .where("festivalId", "==", post.festivalId)
          .get();

        const postData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setreviews(postData.slice(0, 3)); // 첫 3개 포스트만 저장
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [post]);

  const [selected, setSelected] = useState(false);

  const handleLikeClick = () => {
    ClickHeart();
    setSelected((prevSelected) => !prevSelected);
  };

  const [bookmarkSelected, setBookmarkSelected] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarkSelected(!bookmarkSelected);
  };

  const [commentInput, setCommentInput] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);

  const postComment = () => {
    if (commentInput.trim()) {
      const timeStamp = new Date().getTime().toString();
      const newComment = {
        id: postId + "_" + timeStamp,
        content: commentInput,
        createdAt: timeStamp,
      };

      const updatedComments = [...(post.comments || []), newComment];

      db.collection("post")
        .doc(postId)
        .update({ comments: updatedComments })
        .then(() => {
          setPost((prevPost) => ({
            ...prevPost,
            comments: updatedComments,
          }));
          setCommentInput("");
        })
        .catch((error) => {
          console.error("Error adding comment: ", error);
        });
    }
  };

  const getkeywordImg = (keyword) => {
    const index = keywordList.indexOf(keyword);

    if (index === -1) {
      return "키워드가 목록에 없습니다.";
    }

    //0
    const value = index;
    const firstIndex = Math.floor(value / 3) + 1;
    const secondIndex = (value % 3) + 1;

    console.log(firstIndex, secondIndex);

    return { firstIndex, secondIndex };
  };

  const sortedComment = [...post.comments].sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const ClickHeart = async () => {
    try {
      await db
        .collection("post")
        .doc(postId)
        .update({
          likeNumber: post.likeNumber + 1,
        });
    } catch (error) {}
  };

  return (
    <Wrapper>
      <NavBar
        color="#fff"
        backgroundcolor="transparent"
        boxshadow="0px 0px 12px 0px rgba(0, 0, 0, 0.10)"
        righticonopacity="1"
        title=""
        selected={bookmarkSelected}
        onLikeClick={handleBookmarkClick}
      />
      <FestivalImg src={process.env.PUBLIC_URL + "/" + "FestivalImg.png"} />
      <Container>
        <ReviewBox>
          <ReviewBoxTopInfo rating={post?.rating} hashTag={post?.hashTag} />
          <ReviewBoxTitle>{post?.title}</ReviewBoxTitle>
          <ReviewBoxBottomInfo
            heart={post?.likeNumber}
            commentNumber={post.comments?.length || 0}
          />
          <ReviewBoxUser />
          {post.image && <ReviewBoxImage img={post.image} />}
          <ReviewBoxFestivalInfo />
          <ReviewBoxContext>{post?.review}</ReviewBoxContext>
        </ReviewBox>
        <Contour />
        <FeedBackBox>
          <FeedBackTitle>피드백</FeedBackTitle>
          <FeedBackContext>{post?.feedback}</FeedBackContext>
          <FBKeywordList>
            {post.keyWord?.map((keyword, index) => (
              <KeywordItem
                fontsize="12px"
                icon={`./feedback${getkeywordImg(keyword).firstIndex}-${
                  getkeywordImg(keyword).secondIndex
                }.png`}
                title={keyword}
                key={index}
              />
            ))}
          </FBKeywordList>
          <FeedBackBoxLike
            count={post?.likeNumber}
            onLikeClick={handleLikeClick}
            selected={selected}
          />
        </FeedBackBox>
        <Contour />
        <CommentBox>
          <CommentTitle>댓글</CommentTitle>
          {post?.comments && post?.comments.length === 0 ? (
            ""
          ) : (
            <>
              <CommentList
                comments={
                  showAllComments
                    ? sortedComment
                    : (sortedComment || []).slice(0, 3)
                }
                onLikeClick={handleLikeClick}
                selected={selected}
              />
              {post?.comments &&
                post?.comments.length > 3 &&
                !showAllComments && (
                  <CommentMoreButton
                    onClick={() => setShowAllComments(true)}
                    number={post?.comments.length}
                  />
                )}
            </>
          )}
          <CommentWriteBox>
            <CommentInput comment={commentInput} setComment={setCommentInput} />
            <CommentSaveButton onClick={postComment} />
          </CommentWriteBox>
        </CommentBox>
        <Contour />
        <OtherReviewBox>
          <OtherReviewTitle>이 축제의 다른 Review</OtherReviewTitle>
          <ReviewCardList ReviewList={reviews} />
        </OtherReviewBox>
        <Navigation />
      </Container>
    </Wrapper>
  );
}

export default ReviewDetail;
