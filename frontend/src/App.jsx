import React, { createContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./page/Home.jsx";
import { MemberSignup } from "./page/member/MemberSignup.jsx";
import { MemberLogin } from "./page/member/MemberLogin.jsx";
import { MemberList } from "./page/member/MemberList.jsx";
import { MemberEdit } from "./page/member/MemberEdit.jsx";
import { BoardWrite } from "./page/board/BoardWrite.jsx";
import { BoardList } from "./page/board/BoardList.jsx";
import { BoardView } from "./page/board/BoardView.jsx";
import { BoardEdit } from "./page/board/BoardEdit.jsx";
import { DiaryHome } from "./page/diary/diarySrc/diaryPage/DiaryHome.jsx";
import { DiaryBoardWrite } from "./page/diary/diarySrc/diaryPage/diaryBoard/DiaryBoardWrite.jsx";
import { DiaryBoardList } from "./page/diary/diarySrc/diaryPage/diaryBoard/DiaryBoardList.jsx";
import { DiaryBoardView } from "./page/diary/diarySrc/diaryPage/diaryBoard/DiaryBoardView.jsx";
import { DiaryBoardEdit } from "./page/diary/diarySrc/diaryPage/diaryBoard/DiaryBoardEdit.jsx";
import { DiaryCommentList } from "./page/diary/diarySrc/diaryPage/diaryComment/DiaryCommentList.jsx";
import { PlaceMap } from "./page/place/PlaceMap.jsx";
import { PlaceReview } from "./page/place/PlaceReview.jsx";
import { AIChat } from "./component/chat/AIChat.jsx";
import { MainPage } from "./page/MainPage.jsx";

const LoginContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <MainPage /> }, // 메인페이지 렌더링
      { path: "diary/comment", element: <DiaryCommentList /> }, // 사진첩 목록
      { path: "diary/list", element: <DiaryBoardList /> }, // 사진첩 목록
      { path: "diary/edit/:id", element: <DiaryBoardEdit /> }, // 사진첩 수정
      { path: "diary/view/:id", element: <DiaryBoardView /> }, //
      { path: "diary/write/:id", element: <DiaryBoardWrite /> }, // 사진첩 쓰기
      { path: "diary/home", element: <DiaryHome /> }, // 다이어리 홈
      { path: "member/signup", element: <MemberSignup /> }, // 회원 가입
      { path: "member/login", element: <MemberLogin /> }, // 회원 로그인
      { path: "member/list", element: <MemberList /> }, // 회원 목록
      { path: "member/edit/:id", element: <MemberEdit /> }, // 회원 정보 수정 및 탈퇴
      { path: "board/write", element: <BoardWrite /> }, //게시판 글쓰기
      { path: "board/list", element: <BoardList /> }, //게시판 목록
      { path: "board/:id", element: <BoardView /> }, //게시글 보기
      { path: "place/map", element: <PlaceMap /> }, // 지도 보기
      { path: "place/:id", element: <PlaceReview /> }, // 병원 정보 보기
      { path: "edit/:id", element: <BoardEdit /> }, //게시글 수정
      { path: "aichat", element: <AIChat /> }, // 챗봇 기능
    ],
  },
]);

function LoginProvider({ children }) {
  return <LoginContext.Provider value={null}>{children}</LoginContext.Provider>;
}

function App(props) {
  return (
    <LoginProvider value={null}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </LoginProvider>
  );
}

export default App;
