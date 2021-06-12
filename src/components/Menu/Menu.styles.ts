import styled from 'styled-components';
import { colors } from '../../theme/color';

export const Container = styled.div`
    z-index: 3;
    background-color: #ffffff;
    height: 89px;
    max-width: 600px;
    width: 300px;
    position: relative;
    border-radius: 35px;
    top: -40px;
    border: 1px solid #ccc;
    margin: auto;
`;

export const Content = styled.div`
    position: absolute;
    bottom: 18px;
    left: 33px;
    max-width: 600px;
    width: 270px;
`;

export const User = styled.h3`
    font-family: NunitoRegular;
    font-size: 0.7em;
`;
