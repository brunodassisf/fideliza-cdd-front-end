import styled from 'styled-components';
import WaveBottom from '../../../assets/img/waveBottom.svg';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
    background-color: gold;
    @media (min-width: 768px) {
        display: none;
    }
`;

export const Content = styled.div`
    background-color: #ffffff;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    -webkit-box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    -moz-box-shadow: 1px 1px 9px 2px rgba(204, 204, 204, 0.75);
    z-index: 1;
`;
