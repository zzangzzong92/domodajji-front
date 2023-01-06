import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import styled from "styled-components";

// interface NavbarProps {
//   navContent: "reservation" | "album" | "cacl" | "setting";
// }

const DashboardNav: React.FC = () => {
  // const param = useParams();
  const navigate = useNavigate();
  const [openMypage, setOpenMypage] = useState<boolean>(false);
  // const [selectedMenu, setSelectedMenu] = useState<string>("");

  // const MenuLink = styled(Link)`
  //   background-color: ${(props) => (props.current ? "#526dee" : "")};
  // `;

  const myPageHandler = () => {
    setOpenMypage(!openMypage);
  };

  const clickHome = () => {
    navigate("home");
  };

  const clickReservation = () => {
    navigate("reservation");
    // setSelectedMenu("reservation");
  };

  const clickAlbum = () => {
    navigate("album");
    // setSelectedMenu("album");
  };

  const clickSetting = () => {
    navigate("setting");
    // setSelectedMenu("setting");
  };

  return (
    <NavbarLayout>
      <NavWrapper>
        <Logo>들어온 그룹</Logo>
        <MenuBox>
          <MenuWrapper>
            <MenuItem id="home" onClick={clickHome}>
              <MenuIconBox>{/* <Task /> */}</MenuIconBox>
              <MenuName>홈</MenuName>
            </MenuItem>

            <MenuItem id="reservation" onClick={clickReservation}>
              <MenuIconBox>{/* <Task /> */}</MenuIconBox>
              <MenuName>약속</MenuName>
            </MenuItem>

            <MenuItem id="album" onClick={clickAlbum}>
              <MenuIconBox></MenuIconBox>
              <MenuName>앨범</MenuName>
            </MenuItem>

            <MenuItem id="setting" onClick={clickSetting}>
              <MenuIconBox></MenuIconBox>
              <MenuName>설정</MenuName>
            </MenuItem>
          </MenuWrapper>
        </MenuBox>
        <MyPageSection onClick={myPageHandler}>
          <UserName>짱쫑</UserName>
          <MyPageIconBox></MyPageIconBox>
        </MyPageSection>
        {openMypage && <div>마이페이지</div>}
      </NavWrapper>
    </NavbarLayout>
  );
};

export default DashboardNav;

const NavbarLayout = styled.div`
  width: 100%;
  height: 92px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
`;

const NavWrapper = styled.section`
  width: 100%;
  min-width: 768px;
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  padding: 0 64px;
`;

const Logo = styled.div`
  height: 48px;
  line-height: 48px;
  font-weight: bold;
  cursor: pointer;
`;

const MenuBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MenuWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  appearance: none;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const MenuItem = styled.li`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  :hover {
    background-color: #526dee;
    color: #fff;
  }

  &.active {
    background-color: #526dee;
    color: #fff;
  }
`;

const MenuIconBox = styled.div`
  width: 28px;
  height: 28px;
  fill: none;
`;

const MenuName = styled.div`
  width: fit-content;
  display: inline-block;
  vertical-align: middle;
  text-align: unset;
  font-size: 12px;
  color: rgba(175, 186, 204);
  cursor: inherit;
`;

const MyPageSection = styled.button`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  border: 1px solid black;
  background-color: #ffffff;

  cursor: pointer;
`;

const UserName = styled.div`
  width: fit-content;
  display: inline-block;
  vertical-align: middle;
  margin-right: 8px;
  font-size: 14px;
  text-align: unset;
  color: #333840;
  cursor: inherit;
`;

const MyPageIconBox = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: inherit;
`;
