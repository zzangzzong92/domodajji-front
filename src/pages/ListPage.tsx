import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import GroupCard from "../components/GroupCard";
import * as Entity from "../types/index";

const ListPage = () => {
  const [groupInfo, setGroupInfo] = useState<Entity.GroupInfo[]>([]);

  useEffect(() => {
    const loadGroupData = async () => {
      try {
        const groupData = await axios.get(
          // "http://172.30.1.90:8000/gathering/list",
          "localhost:3000/data/groupData.json",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIyMTgwMDYsInVzZXJfaWQiOjEwfQ.TriG_aQIbzBoAZjds5aYt73UGukP-qhwLcBKwZSN7Ns7SUDRYg23tTdrHu9SU7dJGSbvUgoy0a5voRBfypbj0w`,
            },
          }
        );
        setGroupInfo(groupData.data);
      } catch (error) {
        console.log("axios error" + error);
      }
    };
    loadGroupData();
    // fetch("http://172.30.1.90:8000/gathering/list", {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIyMTgwMDYsInVzZXJfaWQiOjEwfQ.TriG_aQIbzBoAZjds5aYt73UGukP-qhwLcBKwZSN7Ns7SUDRYg23tTdrHu9SU7dJGSbvUgoy0a5voRBfypbj0w`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => setGroupInfo(result));
  }, []);

  console.log(groupInfo);

  return (
    <ListPageLayout>
      <ListTopSection>
        <UserCard>
          <UserInfoSection>
            <UserName>님, 안녕하세요 !</UserName>
            <UserProfileImg></UserProfileImg>
          </UserInfoSection>

          <HorizontalLine />

          <CreateGroupButton>모임생성</CreateGroupButton>
        </UserCard>
      </ListTopSection>

      <ListBottomSection>
        {groupInfo?.map((groupData) => (
          <GroupCard key={groupData.id} grouInfo={groupData} />
        ))}
      </ListBottomSection>
    </ListPageLayout>
  );
};

export default ListPage;

const ListPageLayout = styled.section`
  width: 652px;
  height: 100vh;
  margin: 0 auto;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0 0 45px 0 rgb(0 0 0 / 12%);

  &::-webkit-scrollbar {
    width: 0;
  }
`;

const ListTopSection = styled.section`
  width: 652px;
  height: 150px;
  position: fixed;
  display: flex;
  background: #f5f7fa;
`;

const UserCard = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const UserInfoSection = styled.section`
  width: 80%;
  height: fit-content;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
`;

const UserName = styled.div`
  width: fit-content;
  flex-wrap: nowrap;
  margin-top: 20px;
  color: black;
`;

const UserProfileImg = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid black;
`;

const HorizontalLine = styled.hr`
  width: 80%;
  background-color: gray;
`;

// const PlusIcon = styled.div``;

const CreateGroupButton = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  line-height: 40px;
  margin-left: 70px;
  justify-content: center;
  color: #ffffff;
  background-color: #526dee;
  cursor: pointer;
`;

// const CreateSpan = styled.span`
//   font-size: 15px;
//   font-weight: bold;
// `;

const ListBottomSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: #f5f7fa;
  padding-top: 150px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
