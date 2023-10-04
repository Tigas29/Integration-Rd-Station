import styled from "styled-components";

const Media = {
  PhoneLarge: "@media(max-width:600px)",
  Laptop: "@media(max-width:1150px)",
  Tablet: "@media(max-width:1000px)",
  PhoneSmall: "@media(max-width:320px)",
};

export const Container = styled.section`
  min-height: 100vh;
  width: 70%;
  max-width: 80rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 1rem;
  padding: 2rem; /* Espaçamento interno */

  ${Media.Tablet} {
    width: 90%;
    max-width: 90rem;
  }

  ${Media.PhoneLarge} {
    width: 90%;
    max-width: 90rem;
  }

  .col {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  .containerText {
    width: 50%;
    gap: 1rem;
    color: #333; /* Cor do texto */
    font-family: Arial, sans-serif; /* Fonte padrão do sistema */

    ${Media.Tablet} {
      width: 100%;
    }

    h3 {
      font-weight: bold;
      font-size: 1.5rem; /* Tamanho da fonte */
    }

    p {
      font-weight: normal;
      font-size: 1rem; /* Tamanho da fonte */
    }
  }

  .form {
    width: 50%;
    gap: 0.8rem;
    background-color: #f0f0f0;
    padding: 1rem; /* Cor de fundo do formulário */
    border-radius: 10px; /* Arredondamento das bordas */

    ${Media.Tablet} {
      width: 100%;
    }

    input {
      border-radius: 4px; /* Cantos arredondados */
      border: 1px solid #006d40; /* Cor da borda */
      background: #fff; /* Cor de fundo do campo */
      padding: 1rem;
      font-size: 1.2rem;
      width: 60%;

      ${Media.Tablet} {
        width: 80%;
      }
    }

    label {
      color: #006d40;
      font-family: Arial, sans-serif;
      font-weight: bold;
      font-size: 1.5rem;

      ${Media.PhoneLarge} {
        font-size: 1rem;
      }
    }

    button {
      border-radius: 4px;
      background: #006d40; /* Cor de fundo do botão */
      color: #fff; /* Cor do texto do botão */
      font-family: Arial, sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
      width: 60%;
      padding: 1rem;

      ${Media.PhoneLarge} {
        font-size: 1rem;
        width: 100%;
      }
    }
  }
`;
