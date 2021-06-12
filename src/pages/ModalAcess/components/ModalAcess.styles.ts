import styled from 'styled-components';
import { colors } from '../../../theme/color';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

export const Wave = styled.div`
    display: block;
    position: absolute;
    height: 65vh;
    bottom: 0px;
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1360 230" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(244, 241, 222, 1)" d="M 0 0 C 148.8 0 223.2 146 372 146 L 372 146 L 372 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 371 146 C 583.4 146 689.6 64 902 64 L 902 64 L 902 0 L 371 0 Z" stroke-width="0"></path> <path fill="rgba(47, 73, 94, 1)" d="M 901 64 C 1084.6 64 1176.4 163 1360 163 L 1360 163 L 1360 0 L 901 0 Z" stroke-width="0"></path></svg>');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    z-index: 2;
    background-color: #81b29a;
`;

export const Content = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 600px;
    position: absolute;
    top: 25%;
    border: 1px solid #ccc;
    z-index: 3;
`;

export const Divider = styled.div`
    font-size: 18px;
    color: ${colors.FONTS};
    font-family: NunitoRegular;
    font-weight: 600;
    &:before {
        content: '';
        border-left: 1px solid ${colors.FONTS};
        display: block;
        height: 130px;
        width: 1px;
        margin: auto;
        margin-bottom: 15px;
    }

    &:after {
        content: '';
        border-left: 1px solid ${colors.FONTS};
        display: block;
        height: 130px;
        width: 1px;
        margin: auto;
        margin-top: 15px;
    }
`;

export const Title = styled.h1`
    color: ${colors.FONTS};
    font-family: NunitoRegular;
    font-weight: 700;
    font-size: 40px;
    position: absolute;
    top: 12%;
`;
