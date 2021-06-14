import styled from 'styled-components';
import { IoCalendarOutline } from 'react-icons/io5';
import { colors } from '../../../theme/color';
import waveImg from '../../../assets/img/img01.svg';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Wave = styled.div`
    display: block;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100vh;
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1350 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(244, 241, 222, 1)" d="M 0 83 C 256 83 256 139 512 139 L 512 139 L 512 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 511 139 C 930.5 139 930.5 428 1350 428 L 1350 428 L 1350 0 L 511 0 Z" stroke-width="0"></path> </svg>');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #81b29a;
`;

export const Image01 = styled.img.attrs({
    src: `${waveImg}`,
})`
    width: 220px;
    height: auto;
`;

export const Content = styled.div`
    max-width: 600px;
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    color: ${colors.FONTS};
    font-size: 1.3em;
    font-family: NunitoRegular;
    text-align: center;
    margin-top: 22px;
`;

export const SubTitle = styled.h4`
    color: ${colors.FONTS};
    font-size: 0.7em;
    font-family: NunitoRegular;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 25px;
`;

export const IconCalendar = styled(IoCalendarOutline)`
    width: 100%;
    margin-top: 5px;
    color: ${colors.FONTS};
    font-size: 1.4em;
`;
