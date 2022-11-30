import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FormRegister = styled.div`
  width: 100vw;
  height: 800px;
  background-color: #121214;
  color: #868e96;
  font-size: 10px;

  .divContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgLogo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 10px 0;
  }

  form {
    width: 95%;
    background: #212529;
    box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  h2 {
    color: #f8f9fa;
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
  }
  h3 {
    color: #868e96;
    font-size: 12px;
    text-align: center;
  }
  label {
    color: #f8f9fa;
    font-size: 14px;
    margin: 20px 0 8px 0;
  }
  input,
  textarea,
  select {
    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: #868e96;
    font-family: "Inter";
  }
  textarea {
    padding-top: 10px;
  }
  .buttonSubmit {
    width: 100%;
    height: 38px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    color: white;
    font-size: 12px;
    margin-top: 20px;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .divContainer {
      width: 400px;
    }
    form {
      height: 720px;
      padding: 0 15px;
    }

    p {
      padding-top: 5px;
      color: #ff577f;
    }
  }
`;

export const Link = styled(LinkRouter)`
  background-color: #212529;
  color: white;
  width: 80px;
  height: 30px;
  font-size: 10px;
  border-radius: 4px;
  text-align: center;
  padding-top: 8px;
`;
