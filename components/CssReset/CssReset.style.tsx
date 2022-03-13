import { createGlobalStyle } from "styled-components";

const CssReset = createGlobalStyle`
  a {
  color: inherit;
  text-decoration: inherit;
}
body {
  font-family: 'Roboto Mono';
}
`;

export default CssReset;
