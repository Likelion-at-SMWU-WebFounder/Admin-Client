import React from "react";
import styled from "styled-components";
import * as S from "../../style/LayoutStyle";
import Navbar from "../../components/Navbar";
import Logo from "../../components/Logo";

const DocumentItemsPage = () => {
  return (
    <>
      <Logo />
      <S.Layout>
        <Navbar />
        <S.Container></S.Container>
      </S.Layout>
    </>
  );
};

export default DocumentItemsPage;
