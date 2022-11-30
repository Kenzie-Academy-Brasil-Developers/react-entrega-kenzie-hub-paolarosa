import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 800px;
  background-color: #121214;
  padding: 10px 20px 0 20px;

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
  .buttonOut {
    width: 50px;
    height: 32px;
    background: #212529;
    border-radius: 4px;
    margin-top: 15px;
    color: white;
    font-size: 12px;
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
  }
`;
