import styled from 'styled-components';
import { IoCalendarOutline } from 'react-icons/io5';
import { colors } from '../../../theme/color';

export const Container = styled.div``;

export const WaveMid = styled.div`
    display: block;
    position: absolute;
    height: 50vh;
    bottom: 50%;
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1350 268" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(244, 241, 222, 1)" d="M 0 0 C 306 0 204 99 510 99 L 510 99 L 510 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 509 99 C 717.2 99 647.8 209 856 209 L 856 209 L 856 0 L 509 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 855 209 C 1035.6 209 975.4 248 1156 248 L 1156 248 L 1156 0 L 855 0 Z" stroke-width="0"></path><path fill="rgba(244, 241, 222, 1)" d="M 1155 248 C 1272 248 1233 177 1350 177 L 1350 177 L 1350 0 L 1155 0 Z" stroke-width="0"></path></svg>');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    z-index: 2;
    background-color: #81b29a;
`;

export const WaveRotate = styled.div`
    display: block;
    position: absolute;
    height: 50vh;
    bottom: 0%;
    background-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1350 268" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="rgba(244, 241, 222, 1)" d="M 0 0 C 306 0 204 99 510 99 L 510 99 L 510 0 L 0 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 509 99 C 717.2 99 647.8 209 856 209 L 856 209 L 856 0 L 509 0 Z" stroke-width="0"></path> <path fill="rgba(244, 241, 222, 1)" d="M 855 209 C 1035.6 209 975.4 248 1156 248 L 1156 248 L 1156 0 L 855 0 Z" stroke-width="0"></path><path fill="rgba(244, 241, 222, 1)" d="M 1155 248 C 1272 248 1233 177 1350 177 L 1350 177 L 1350 0 L 1155 0 Z" stroke-width="0"></path></svg>');
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    z-index: 2;
    transform: rotate(180deg);
    background-color: #81b29a;
`;

export const Content = styled.div`
    background-color: ${colors.WHITE};
    height: 300px;
    width: 300px;
    max-width: 600px;
    position: relative;
    z-index: 3;
    margin: auto;
    border-radius: 20px;
    border: 1px solid #ccc;
`;

export const Title = styled.h1`
    color: ${colors.FONTS};
    font-size: 1em;
    font-family: NunitoRegular;
    text-align: center;
    margin-top: 22px;
`;

export const IconCalendar = styled(IoCalendarOutline)`
    width: 100%;
    margin-top: 5px;
    color: ${colors.FONTS};
    font-size: 1.4em;
`;
