import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import * as Entity from "../types/index";

interface GroupCardInfo {
  grouInfo: Entity.GroupInfo;
}

const GroupCard: React.FC<GroupCardInfo> = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const goToDetail = () => {
    navigate(`/group/${props.grouInfo.id}`);
  };

  return (
    <GroupCardLayout onClick={goToDetail}>
      <CardBody>
        <CardTop>
          <GroupTitle>{props.grouInfo.name}</GroupTitle>
          <GroupPeople>
            <PeopleIcon></PeopleIcon>
            <PeopleNumber>{props.grouInfo.member_acount}명</PeopleNumber>
          </GroupPeople>
        </CardTop>
        <CardBottom>
          <GroupMaster>{props.grouInfo.host}</GroupMaster>
          <JoinDate>{props.grouInfo.created_at}</JoinDate>
        </CardBottom>
      </CardBody>
    </GroupCardLayout>
  );
};

export default GroupCard;

const GroupCardLayout = styled.div`
  width: 80%;
  height: 150px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0 0 45px 0 rgb(0 0 0 / 12%); */
  border-radius: 4px;
  background-color: #ffffff;

  :hover {
    color: white;
    background-color: #526dee;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTop = styled.div`
  display: flex;
  border: 1px solid black;
`;

const GroupTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const GroupPeople = styled.div`
  width: 70px;
  height: 40px;
  display: flex;
`;

const PeopleIcon = styled.div``;

const PeopleNumber = styled.div`
  font-size: 14px;
  font-weight: bold;
  border: 1px solid red;
`;

const CardBottom = styled.div`
  display: flex;
  margin-top: 50px;
  border: 1px solid blue;
`;

const GroupMaster = styled.span`
  font-size: 14px;
`;

const JoinDate = styled.span`
  font-size: 14px;
`;
