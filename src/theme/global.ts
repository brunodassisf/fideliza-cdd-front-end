import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import NunitoRegular from '../assets/font/Nunito-Regular.ttf';

export const GlobalStyle = createGlobalStyle`
    ${reset};

    html {
        box-sizing: border-box;
        }
        *, *:before, *:after {
        box-sizing: inherit;
        }

    @font-face {
        font-family: NunitoRegular;
        src: url(${NunitoRegular});
    }
`;
