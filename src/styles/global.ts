import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue: #7a85fd;
    --blue-dark: #4652d6;
    --blue-dark-hover: #5863da;

    --red: #f15555;

    --green: #13AC35;

    --white: #FFFFFF;

    --primary-shape: #242528;
    --primary-shape-hover: #424242;
    --background: #121418;
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

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 36rem;
    background: var(--primary-shape);
    padding: 3rem;
    position: relative;
    border-radius: 0.3125rem;
  }
`
