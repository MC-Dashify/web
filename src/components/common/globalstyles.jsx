import { createGlobalStyle } from "styled-components";

// https://github.com/prettier/prettier/issues/11196#issuecomment-951878725
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Pretendard JP Variable", "Pretendard Variable",
      "Pretendard JP", "Pretendard", -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
    font-feature-settings: "calt", "case", "ss06", "ss01", "ss03", "ss07",
      "ss02", "ss08";
    letter-spacing: -0.014em;
    line-height: 1.2;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }
`;

export default GlobalStyle;
