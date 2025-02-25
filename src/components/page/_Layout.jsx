import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  min-height: 1200px;
`;

export default function Layout() {
  return (
    <Wrapper>
      <Outlet />
      {/* TODO: 네비게이션 추가  */}
    </Wrapper>
    //TODO: 스타일 설정하기
  );
}
