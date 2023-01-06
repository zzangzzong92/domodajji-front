import React from "react";
import styled from "styled-components";

// const ALLOW_FILE_EXTENSIONS = "jpg, jpeg, png";
// const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024; //5mb

const Album: React.FC = () => {
  // const [pictures, setPictures] = useState<File>();

  //업로드할 파일에 대한 validation 및 state에 저장
  // const fileUploadValidHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = e.currentTarget;
  //   const files = (target.files as FileList)[0];

  //   if (files === undefined) {
  //     return;
  //   }
  //   //확장자체크
  //   if (!fileExtensionValid(files)) {
  //     target.value = "";
  //     alert(
  //       `업로드가 불가능한 확장자입니다. [가능한 확장자 : ${ALLOW_FILE_EXTENSIONS}]`
  //     );
  //     return;
  //   }
  //   //용량체크
  //   if (files.size > FILE_SIZE_MAX_LIMIT) {
  //     target.value = "";
  //     alert("업로드 가능 최대 용량을 초과하였습니다.");
  //     return;
  //   }
  //   setPictures(files);
  // };

  //파일 확장자 검사
  // const fileExtensionValid = ({ name }: { name: string }): boolean => {
  //   const extension = removeFileName(name);

  //   if (!(ALLOW_FILE_EXTENSIONS.indexOf(extension) > -1) || extension === "") {
  //     return false;
  //   }
  //   return true;
  // };

  //.제거한 순수 파일 확장자 return
  // const removeFileName = (originalFileName: string): string => {
  //   const lastIndex = originalFileName.lastIndexOf(".");

  //   if (lastIndex < 0) {
  //     return "";
  //   }
  //   return originalFileName.substring(lastIndex + 1).toLowerCase();
  // };

  //파일 업로드 버튼 핸들러
  // const fileUploadHandler = async () => {
  //   if(file !== undefined) {
  //     try {
  //       const formData = new FormData();
  //       formData.append("file", file);

  //       const axiosResponse = await axiosDefaultInstance.post<ApiResponse<FileUploadResponse>>("/files", formData, {"headers" : {"content-type" : "multipart/form-data"}})
  //     }
  // };

  return (
    <AlbumLayout>
      <AlbumInfoWrapper>
        <AlbumInfoSection>
          <AlbumTitle>앨범</AlbumTitle>
          <PicUploadButton>업로드</PicUploadButton>
        </AlbumInfoSection>
        <PictureCount>
          총 <p>3</p>개의 사진이 있습니다.
        </PictureCount>
      </AlbumInfoWrapper>
      <PictureList>
        {/* {pictures?.map((picture) => (
          <PictureItem
            key={picture.id}
            onClick={() => {
              setPictures(picture);
            }}
          >
            {picture}
          </PictureItem>
        ))} */}
      </PictureList>
    </AlbumLayout>
  );
};

export default Album;

const AlbumLayout = styled.div`
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #e7eaed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 0.95rem 2rem rgb(56 65 74 / 3%);
`;

const AlbumInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #c8d1e0;
`;

const AlbumInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const PictureCount = styled.span`
  font-size: 14px;
  display: flex;
  padding-left: 0.2rem;
  margin-bottom: 20px;

  p {
    color: #526dee;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const AlbumTitle = styled.span`
  font-size: 20px;
`;

const PicUploadButton = styled.div`
  width: 77px;
  height: 30px;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background-color: #526dee;
  cursor: pointer;
`;

const PictureList = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
`;

// const PictureItem = styled.div``;
