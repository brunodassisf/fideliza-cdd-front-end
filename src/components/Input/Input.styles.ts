import styled from 'styled-components';
import { colors } from '../../theme/color';

export const Container = styled.div`
    text-align: center;
    height: 65px;
`;

export const InputStyle = styled.input`
    border: 2px solid ${colors.BORDER};
    color: ${colors.COLOR_GRAY};
    border-radius: 20px;
    padding: 10px 20px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-size: 14px;
        font-family: NunitoRegular;
        color: ${colors.COLOR_GRAY};
    }
`;

export const Error = styled.p`
    font-size: 14px;
    color: ${colors.ERROR};
    margin-bottom: 0px;
`;
