import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { colors } from '../../theme/color';

interface IStyleInput extends InputHTMLAttributes<HTMLInputElement> {
    borderStyle?: string;
}

const checkLengthString = (val?: string) => {
    if (val) return true;
    return false;
};

export const Container = styled.div`
    height: 61px;
`;

export const InputStyle = styled.input<IStyleInput>`
    border: 2px solid
        ${(props) =>
            checkLengthString(props.borderStyle)
                ? colors.ERROR
                : colors.BORDER};
    color: ${colors.COLOR_INPUT};
    border-radius: 20px;
    padding: 10px 20px;
    &:focus-visible {
        outline: none;
    }
    &::placeholder {
        font-size: 14px;
        font-family: NunitoRegular;
        color: ${colors.COLOR_INPUT};
    }
`;

export const Error = styled.p`
    font-size: 14px;
    color: ${colors.ERROR};
    margin-bottom: 0px;
    padding-top: 3px;
    padding-left: 12px;
    font-family: NunitoRegular;
`;
