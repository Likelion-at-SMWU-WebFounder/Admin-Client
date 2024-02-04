import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Form from "../../components/Form";
import Question from "../../components/Question";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

const DocumentDetailPage = () => {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);

  useEffect(() => {
    const fetchDocumentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/recruit/docs/${id}`
        );
        setDocumentData(response.data.result);
        console.log(response.data.result);
      } catch (error) {
        console.error("Error :", error);
      }
    };

    fetchDocumentData();
  }, [id]);

  return (
    <Layout>
      <Container>
        <Form documentData={documentData} />
        <Question documentData={documentData} />
      </Container>
    </Layout>
  );
};

export default DocumentDetailPage;

const Layout = styled.div`
  display: flex;
  background-color: #111111;
`;

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding: 70px;
  margin-left: 70px;
`;
