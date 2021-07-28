import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useStyles } from './Text.style';
import { IText } from './Text.types';

const Text: React.FC<IText> = ({ children, ...props }: IText): JSX.Element => {
  const classes = useStyles(props);
  const { mt, mb, pt, pb, pl, pr } = props;

  return (
    <Box mt={mt} mb={mb} pt={pt} pb={pb} pl={pl} pr={pr}>
      <Typography className={classes.title} {...props}>
        {children}
      </Typography>
    </Box>
  );
};

export default Text;
