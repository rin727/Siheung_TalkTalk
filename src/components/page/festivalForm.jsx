import React, { useState } from "react";
import { db } from "../../firebase";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const FestivalForm = () => {
  const [festivalData, setFestivalData] = useState({
    content: "",
    date: "",
    festivalName: "",
    imgUrl: "",
    keywords: [
      { count: 0, keyword: "신나는 분위기에요" },
      { count: 0, keyword: "잔잔한 분위기에요" },
      { count: 0, keyword: "사진이 잘나와요" },
      { count: 0, keyword: "질서정연해요" },
      { count: 0, keyword: "질서가 안지켜져요" },
      { count: 0, keyword: "여유로워요" },
      { count: 0, keyword: "체험이 많이 없어요" },
      { count: 0, keyword: "다양한 체험이 있어요" },
      { count: 0, keyword: "볼거리가 많아요" },
      { count: 0, keyword: "화장실이 깨끗해요" },
      { count: 0, keyword: "편의시설이 깔끔해요" },
      { count: 0, keyword: "편의시설이 불편해요" },
    ],
    link: "",
    ratingNumber: 0,
    ratingSum: 0,
    season: "",
    title: "",
    view: 0,
    location: "",
    backgroundUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFestivalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let timestamp = new Date().getTime().toString();
    let formattedDate = new Date()
      .toISOString()
      .split("T")[0]
      .replace(/-/g, ".");

    db.collection("festivals")
      .doc(timestamp)
      .set({
        ...festivalData,
        date: formattedDate,
      })
      .then(() => {
        alert("Data added successfully!");
        setFestivalData({
          content: "",
          date: "",
          festivalName: "",
          imgUrl: "",
          keywords: [
            { count: 0, keyword: "신나는 분위기에요" },
            { count: 0, keyword: "잔잔한 분위기에요" },
            { count: 0, keyword: "사진이 잘나와요" },
            { count: 0, keyword: "질서정연해요" },
            { count: 0, keyword: "질서가 안지켜져요" },
            { count: 0, keyword: "여유로워요" },
            { count: 0, keyword: "체험이 많이 없어요" },
            { count: 0, keyword: "다양한 체험이 있어요" },
            { count: 0, keyword: "볼거리가 많아요" },
            { count: 0, keyword: "화장실이 깨끗해요" },
            { count: 0, keyword: "편의시설이 깔끔해요" },
            { count: 0, keyword: "편의시설이 불편해요" },
          ],
          link: "",
          ratingNumber: 0,
          ratingSum: 0,
          season: "",
          title: "",
          view: 0,
          location: "",
          backgroundUrl: "",
        });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <Wrapper>
      <h1>Add Festival Data</h1>
      <Form onSubmit={handleSubmit}>
        <textarea
          type="text"
          name="content"
          value={festivalData.content}
          onChange={handleChange}
          placeholder="게시물 내용"
        />
        <Input
          type="text"
          name="date"
          value={festivalData.date}
          onChange={handleChange}
          placeholder="날짜"
        />
        <Input
          type="text"
          name="festivalName"
          value={festivalData.festivalName}
          onChange={handleChange}
          placeholder="축제 이름"
        />
        <Input
          type="text"
          name="imgUrl"
          value={festivalData.imgUrl}
          onChange={handleChange}
          placeholder="이미지 URL"
        />
        <Input
          type="text"
          name="link"
          value={festivalData.link}
          onChange={handleChange}
          placeholder="블로그 링크"
        />
        <Input
          type="text"
          name="season"
          value={festivalData.season}
          onChange={handleChange}
          placeholder="계절 영어로 spring, summer, fall, winter"
        />
        <Input
          type="text"
          name="title"
          value={festivalData.title}
          onChange={handleChange}
          placeholder="게시물 제목"
        />
        <Input
          type="text"
          name="location"
          value={festivalData.location}
          onChange={handleChange}
          placeholder="위치"
        />
        <Input
          type="text"
          name="backgroundUrl"
          value={festivalData.backgroundUrl}
          onChange={handleChange}
          placeholder="배경 이미지 URL"
        />
        <Button type="submit">Add Festival</Button>
      </Form>
    </Wrapper>
  );
};

export default FestivalForm;
