import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import NunitoRegular from '../assets/font/Nunito-Regular.ttf';
import { colors } from './color';

export const GlobalStyle = createGlobalStyle`
    ${reset};

    html {
        box-sizing: border-box;
        }
        *, *:before, *:after {
        box-sizing: inherit;
        }

        body {
            font-size: 20px;
            background-color: ${colors.BACK_APP};
        }

    @font-face {
        font-family: NunitoRegular;
        src: url(${NunitoRegular});
    }
`;
