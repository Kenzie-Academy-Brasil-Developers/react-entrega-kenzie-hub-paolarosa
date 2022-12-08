import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 800px;
  background-color: #121214;
  padding: 10px 20px 0 20px;
  position: relative;

  .imgLogo {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
  }

  h2 {
    font-size: 18px;
    color: white;
    margin: 30px 0 20px 0;
  }
  h3 {
    color: #868e96;
    font-size: 12px;
  }

  .buttonAdd {
    color: #868e96;
  }
  .buttonOut {
    width: 50px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    margin-top: 15px;
    color: white;
    font-size: 12px;
  }

  ul {
    background: #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px 5px;
  }
  .TitleTech {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    color: #f8f9fa;
    weight: 500;
  }
  .divButtonClose {
    width: 30px;
    height: 30px;
    background: #212529;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
  }
  .divButtonClose h3 {
    font-size: 18px;
    color: white;
  }

  li {
    color: white;
    background: #121214;
    border-radius: 4.06066px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    font-size: 15px;
    padding: 0 5px;
    margin: 0 px;
  }
  .divStatusTrash {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;

    .imgLogo {
      max-width: 1440px;
    }
    .divMain {
      width: 100%;
      max-width: 1440px;
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p {
      color: white;
      width: 100%;
      margin-top: 30px;
      line-height: 44px;
      font-size: 18px;
    }
    .TitleTech {
      width: 100%;
      max-width: 1440px;
    }
    ul {
      width: 100%;
      max-width: 1440px;
      padding: 15px 15px;
    }
    li {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
    }
    li:hover {
      background-color: #343b41;
    }

    li h4 {
      width: 90%;
    }

    .trash {
      color: white;
      cursor: pointer;
    }
    h5 {
      color: #868e96;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 370px;
  height: 340px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 150px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #f8f9fa;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  div {
    width: 100%;
    height: 50px;
    background-color: #343b41;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div button {
    margin-right: 20px;
    color: white;
  }
  h2,
  label {
    margin-left: 15px;
    font-size: 16px;
  }
  input,
  select {
    width: 90%;
    height: 48px;
    margin-left: 15px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: white;
    padding: 0 15px;
  }

  .buttonRegisterTechs {
    width: 90%;
    height: 48px;
    margin-left: 15px;
    background: #ff577f;
    border-radius: 4px;
    color: white;
  }
  span {
    color: #ff577f;
    font-size: 8px;
    margin-left: 15px;
  }

  .divButtonsUpdate {
    background: #212529;
    margin-top: 15px;
  }
  .buttonUpdate {
    background-color: #59323f;
    width: 200px;
    height: 48px;
    border-radius: 4px;
    margin-left: 15px;
  }
  .removeUpdate {
    background-color: #868e96;
    height: 48px;
    width: 98px;
    border-radius: 4px;
  }
`;
