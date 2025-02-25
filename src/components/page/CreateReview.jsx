import { useEffect, useState } from "react";
import styled from "styled-components";
import StarPoint from "../ui/Write/StarPoint";
import ReviewKeyword from "../ui/Write/ReviewKeyword";
import FeedBackKeyword from "../ui/Write/FeedBackKeyword";
import NavBar from "../ui/Write/NavBar";
import Input from "../ui/Write/Input";
import FestaDetailFestivalInfo from "../ui/Detail/FestaDetailFestivalInfo";
import Navigation from "../ui/Common/Navigation";
import { db } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";

const Layout = styled.div`
  height: 1560px;
  display: flex;
  flex-direction: column;
  background-color: #f2f4f6;
  vertical-align: baseline;
  border: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  border: none;
`;

const Container = styled.div`
  width: 390px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FestivalInfoContainer = styled(Container)`
  height: 120px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 20px 0;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  /* height: 372px; */
  margin-bottom: 12px;
  gap: 16px;
  align-items: center;
  padding-bottom: 28px;
`;

const AddPictureButton = styled.label`
  box-sizing: border-box;
  width: 334px;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #d9d9d9;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`;

const HiddenInput = styled.input`
  display: none;
`;

const FeedBackContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 28px 16px 24px;
  gap: 16px;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  box-sizing: border-box;
  /* height: 278px; */

  p {
    color: #444;
    font-size: 12px;
    font-weight: 400;
    margin-top: -8px;
  }
`;

const ImageGroup = styled.div`
  display: flex;
  width: 390px;
`;

const ImagePreview = styled.img`
  margin-left: 28px;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  object-fit: cover;
  text-align: center;
`;

const AddReviewButton = styled.div`
  cursor: pointer;
  width: 334px;
  height: 54px;
  background-color: #5c67dc;
  border-radius: 50px;
  margin: 0px 28px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const AddReviewContainer = styled(Container)`
  padding-bottom: 80px;
`;

export default function CreateReview() {
  const navigate = useNavigate();

  const festivalId = useParams().id;
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [feedback, setFeedback] = useState("");
  const [choiceKeyword, setChoiceKeyword] = useState(-1);
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [image, setImage] = useState(null);
  const [festivalName, setFestivalName] = useState("");

  useEffect(() => {
    const fetchFestivalName = async () => {
      try {
        const festivalDoc = await db
          .collection("festivals")
          .doc(festivalId)
          .get();

        if (festivalDoc.exists) {
          setFestivalName(festivalDoc.data().festivalName);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching festival name: ", error);
      }
    };

    fetchFestivalName();
  }, [festivalId]);

  const keywords = [
    "가족과 함께",
    "친구와 함께",
    "활기찬",
    "차분한",
    "다채로운",
  ];

  const PostReview = async () => {
    let timestamp = new Date().getTime().toString();
    try {
      await db
        .collection("post")
        .doc(timestamp)
        .set({
          id: timestamp,
          likeNumber: 0,
          title: title,
          visitedAt: timestamp,
          review: content,
          festivalId: festivalId,
          festival: festivalName,
          comment: [],
          hashTag:
            choiceKeyword === -1 ? "가족과 함께" : keywords[choiceKeyword],
          nickName: "행복한 유저",
          keyWord: selectedKeywords,
          createdAt: timestamp,
          rating: rating,
          feedback: feedback,
          image: image,
        });

      const festivalDoc = await db
        .collection("festivals")
        .doc(festivalId)
        .get();
      if (festivalDoc.exists) {
        const festivalData = festivalDoc.data();
        const keywords = festivalData.keywords;
        const sum = festivalData.ratingSum;
        const number = festivalData.ratingNumber;

        selectedKeywords.forEach((selectedKeyword) => {
          const keywordObj = keywords.find(
            (keyword) => keyword.keyword === selectedKeyword
          );
          if (keywordObj) {
            keywordObj.count += 1;
          }
        });

        await db
          .collection("festivals")
          .doc(festivalId)
          .update({
            ratingNumber: number + 1,
            ratingSum: sum + rating,
            keywords: keywords,
          }).then(() => navigate(`/ReviewDetail/${timestamp}`))

        alert("리뷰가 등록되었습니다.");
      } else {
        console.log("No such festival document!");
      }
    } catch (error) {
      console.error("Error posting review: ", error);
      alert("리뷰 등록에 실패했습니다.");
    }
  };

  const handleImageChange = (e) => {
    const selectedIamge = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result;
      setImage(base64String);
    };
    reader.readAsDataURL(selectedIamge);
    setImage(URL.createObjectURL(selectedIamge));
  };

  return (
    <Layout>
      <NavBar
        color="#222"
        boxshadow="0px 0px 12px 0px rgba(0, 0, 0, 0.10)"
        righticonopacity="0"
        title="리뷰 작성"
        backgroundcolor="#FCFCFC"
      />
      <FestivalInfoContainer>
        <FestaDetailFestivalInfo name={festivalName} />
      </FestivalInfoContainer>
      <StarPoint handleRating={setRating}></StarPoint>
      <ReviewKeyword
        choiceKeyword={choiceKeyword}
        handleChoiceKeyword={setChoiceKeyword}
      ></ReviewKeyword>
      <InputContainer>
        <Input
          placeholder={"제목을 작성해주세요"}
          height={46}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder={"내용을 작성해주세요"}
          height={202}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <ImageGroup>
          {image && <ImagePreview src={image} alt="Preview" />}
        </ImageGroup>
        <AddPictureButton htmlFor="image-upload">+ 사진 추가</AddPictureButton>
        <HiddenInput
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </InputContainer>
      <FeedBackKeyword
        selectedKeywords={selectedKeywords}
        setSelectedKeywords={setSelectedKeywords}
      ></FeedBackKeyword>
      <FeedBackContainer>
        어떤점이 아쉬웠나요?
        <p>축제의 편의시설, 분위기, 질서 등은 괜찮았나요?</p>
        <Input
          placeholder={"내용을 작성해주세요"}
          height={202}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </FeedBackContainer>
      <AddReviewContainer>
        <AddReviewButton onClick={PostReview}>리뷰 등록하기</AddReviewButton>
      </AddReviewContainer>
      <Navigation />
    </Layout>
  );
}
