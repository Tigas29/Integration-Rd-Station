// import * as Styled from "./style.js";
import * as Styled from "./style.js";

export default function Home() {
  return (
    <Styled.Container>
      <form
        className="form col"
        method="post"
        action="__SEU LINK QUE LEVA PARA A API__"
      >
        <label> Nome</label>
        <input
          className="fromControl"
          id="name"
          name="Nome"
          type="name"
          for="name"
          placeholder="Coloque seu nome"
          required
        />
        <label> E-mail</label>

        <input
          className="fromControl"
          id="email"
          name="E-mail"
          type="email"
          for="email"
          Pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          placeholder="Coloque seu email"
          required
        />
        <label> Telefone</label>

        <input
          className="fromControl"
          id="phone"
          name="Telefone"
          type="tel"
          for="phone"
          placeholder="Coloque seu telefone"
          required
        />
        <button value="Submit" type="submit">
          Enviar
        </button>
      </form>
    </Styled.Container>
  );
}
