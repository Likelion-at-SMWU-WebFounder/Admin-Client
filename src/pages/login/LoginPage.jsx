import React, { useState } from "react";
import styled from "styled-components";

const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .logo {
    width: 311px;
    margin-bottom: 90px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 45px;
`;

const Div = styled.div`
  color: #fff;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.515px;
`;

const StyledInput = styled.input`
  width: 306px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid #fefefe;
  background: rgba(254, 254, 254, 0);
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* letter-spacing: -1.212px; */
  outline: none;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1px solid #eb9537;
  }
`;

const LoginButton = styled.button`
  margin-top: 70px;
  width: 190px;
  height: 57.881px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #eb9537 5.52%, #ecc08f 96.15%);
  border-radius: 10px;
  border: none;
  color: #000;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.263px;
`;

const LoginPage = () => {
  const [values, setValues] = useState({
    user_id: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <LoginLayout>
      <img
        src={`${process.env.PUBLIC_URL}/Logo.svg`}
        alt="Logo"
        className="logo"
      />
      <InputWrapper>
        <Div>아이디</Div>
        <StyledInput
          type="id"
          id="user_id"
          name="user_id"
          value={values.user_id}
          onChange={handleChange}
        ></StyledInput>
      </InputWrapper>
      <InputWrapper>
        <Div>비밀번호</Div>
        <StyledInput
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        ></StyledInput>
      </InputWrapper>
      <LoginButton>로그인</LoginButton>
    </LoginLayout>
  );
};

export default LoginPage;
