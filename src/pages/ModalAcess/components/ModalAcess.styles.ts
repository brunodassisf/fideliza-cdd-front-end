import styled from 'styled-components';
import WaveBottom from '../../../assets/img/waveBottom.svg';
import { colors } from '../../../theme/color';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
`;

export const Title = styled.h1`
    font-size: 25px;
    font-family: NunitoRegular;
    font-weight: 700;
    color: ${colors.DARK};
    text-align: center;
    margin: 20px 0px;
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
    box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    z-index: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 600px;
    position: absolute;
    top: 20%;
`;
