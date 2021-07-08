import React from 'react';
import { Box, Button } from '@material-ui/core';
import { IButton } from './Button.types';

import { useStyles } from './Button.styles';

export function CoreButton({
    hasMarginTop,
    hasMarginBottom,
    weight,
    fontSize,
    height,
    isUpperCase,
    ...props
}: IButton): JSX.Element {
    const { children, color, disabled } = props;

    const classProps = {
        hasMarginTop,
        hasMarginBottom,
        color,
        weight,
        fontSize,
        isUpperCase,
        height,
    };

    const classes = useStyles(classProps);

    return (
        <Box className={classes.container}>
            <Button className={classes.button} {...props}>
                {children}
            </Button>
        </Box>
    );
}
