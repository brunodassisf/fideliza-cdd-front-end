import styled from 'styled-components';
import { colors } from '../../theme/color';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
    position: relative;
    outline: none;
    color: ${colors.WHITE};
    background-color: ${colors.BUTTON};
    padding: 10px 48px;
    margin-bottom: 24px;
    border: 0;
    border-radius: 35px;
    font-size: 14px;
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
