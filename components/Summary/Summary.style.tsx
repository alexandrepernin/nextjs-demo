import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30vw;
  padding-right: 30vw;
`;

const Title = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #a3c9fe;
  border-color: #6699ff;
  border: solid;
  border-radius: 15px;
  height: 50px;
  max-width: 100%;
`;

export default { Container, Title };
