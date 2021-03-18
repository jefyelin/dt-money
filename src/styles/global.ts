import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #5665EA;    
    --red: #D92828;
    --green: #13AC35;   
    --white: #FFFFFF;
    --placeholder: #909396;
    --primary-shape: #242528;
    --background: #0E1013;

    --primary-shape-hover: #353538;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }  

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
