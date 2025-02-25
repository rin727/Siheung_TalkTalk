import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/page/_Layout.jsx";
import MainPage from "./components/page/MainPage.jsx";
import BigButton from "./components/ui/Common/BigButton.jsx";
import FestivalListPage from "./components/page/FestivalListPage.jsx";
import FestivalDetail from "./components/page/FestivalDetail.jsx";
import ReviewDetail from "./components/page/ReviewDetail.jsx";
import CreateReview from "./components/page/CreateReview.jsx";
import ReviewList from "./components/page/ReviewList.jsx";
import FestivalForm from "./components/page/festivalForm.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />, //
      },
      {
        path: "/FestivalList",
        element: <FestivalListPage />, //
      },
      {
        path: "/FestivalDetail/:id",
        element: <FestivalDetail />, //
      },
      {
        path: "/reviewList",
        element: <ReviewList />, //
      },
      {
        path: "/ReviewDetail/:id",
        element: <ReviewDetail />, //
      },
      {
        path: "/CreateReview/:id",
        element: <CreateReview />, //
      },
      {
        path: "/CreateReview/",
        element: <CreateReview />, //
      },
      {
        path: "/input",
        element: <FestivalForm />, //
      },
    ],
  },
]);

export const pages = [];
