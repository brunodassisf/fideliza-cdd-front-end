import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from './Text.style';
import { IText } from './Text.types';

const Text = ({
    children,
    hasMarginTop,
    hasMarginBottom,
    shouldLoadColor,
    weight,
    size,
    isUpperCase,
    ...props
}: IText): JSX.Element => {
    const classProps = {
        shouldLoadColor,
        hasMarginTop,
        hasMarginBottom,
        weight,
        size,
        isUpperCase,
    };
    const classes = useStyles(classProps);

    return (
        <Box className={classes.container}>
            <Typography className={classes.title} {...props}>
                {children}
            </Typography>
        </Box>
    );
};

export default Text;
