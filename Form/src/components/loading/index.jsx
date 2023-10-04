import * as Styled from "./style";
export default function Loading() {
  return (
    <Styled.Container>
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </Styled.Container>
  );
}
