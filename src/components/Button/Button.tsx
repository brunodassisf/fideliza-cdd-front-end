import React from 'react';
import { Box, Button } from '@material-ui/core';
import { IButton } from './Button.types';

import { useStyles } from './Button.styles';

export function CoreButton({
  children,
  align,
  ...props
}: IButton): JSX.Element {
  const classes = useStyles(props);
  const { mt, mb } = props;

  return (
    <Box textAlign={align} mt={mt} mb={mb}>
      <Button className={classes.button} {...props}>
        {children}
      </Button>
    </Box>
  );
}
