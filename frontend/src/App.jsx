import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MemberSignup } from "./page/member/MemberSignup.jsx";
import { MemberInfo } from "./page/member/MemberInfo.jsx";
import { MemberEdit } from "./page/member/MemberEdit.jsx";
import { MemberList } from "./page/member/MemberList.jsx";
import { MemberLogin } from "./page/member/MemberLogin.jsx";
import { Home } from "./page/Home.jsx";
import { BoardWrite } from "./page/board/BoardWrite.jsx";
import { BoardList } from "./page/board/BoardList.jsx";
import { BoardView } from "./page/board/BoardView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "member/signup", element: <MemberSignup /> }, // 회원 가입
      { path: "member/info/:id", element: <MemberInfo /> }, // 회원 정보
      { path: "member/edit/:id", element: <MemberEdit /> }, // 회원 수정 및 삭제
      { path: "member/list", element: <MemberList /> }, // 회원 목록
      { path: "member/login", element: <MemberLogin /> }, // 회원 로그인
      { path: "write", element: <BoardWrite /> }, //게시판 글쓰기
      { path: "board", element: <BoardList /> }, //게시판 목록
      { path: "board/:id", element: <BoardView /> }, //게시글 보기
    ],
  },
]);

function App(props) {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
