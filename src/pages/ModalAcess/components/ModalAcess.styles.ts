import styled from 'styled-components';
import WaveBottom from '../../../assets/img/waveBottom.svg';
import { colors } from '../../../theme/color';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

export const Wave = styled.img.attrs({
    src: WaveBottom,
})`
    position: fixed;
    bottom: 0;
    @media (max-width: 768px) {
        bottom: 120px;
    }
`;

export const BackBottom = styled.div`
    position: fixed;
    bottom: 0;
    height: 121px;
    width: 100%;
    background-color: ${colors.MAIN};
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 600px;
    position: absolute;
    top: 25%;
    border: 1px solid #eee;
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
