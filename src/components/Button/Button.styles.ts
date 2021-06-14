import styled from 'styled-components';
import { colors } from '../../theme/color';
import { ButtonProps } from './Button.types';

const backColor = (val: string | undefined) => {
    switch (val) {
        case 'primary': {
            return colors.PRIMARY;
        }
        case 'secondary': {
            return colors.SECONDARY;
        }
        default: {
            return colors.PRIMARY;
        }
    }
};

const fontColor = (val: string | undefined) => {
    switch (val) {
        case 'primary': {
            return colors.WHITE;
        }
        case 'secondary': {
            return colors.FONTS;
        }
        default: {
            return colors.WHITE;
        }
    }
};

export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    outline: none;
    color: ${(props) => fontColor(props.color)};
    background-color: ${(props) => backColor(props.color)};
    padding: 5px 35px;
    border: 0;
    border-radius: 35px;
    font-size: 0.5em;
    text-transform: uppercase;
    cursor: pointer;
    font-family: NunitoRegular;
    letter-spacing: 1px;
    &:hover {
        opacity: ${(props) => (props.disabled ? 1 : 0.85)};
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Container = styled.div`
    text-align: center;
`;
