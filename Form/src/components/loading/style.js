import styled from "styled-components";

export const Container = styled.div`
  .loader-container {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999999999999;
  }
  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #4d9476 transparent #4d9476 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
