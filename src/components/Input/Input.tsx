import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IInput } from './Input.types';
import { useStyles } from './Input.styles';

const Input: React.FC<IInput> = ({
  label,
  name,
  value,
  onChange,
  changeFieldType,
  ...props
}) => {
  const classes = useStyles();

  const [fieldType, setFieldType] = useState('password');

  const handlerTogglePassword = () => {
    if (fieldType === 'password') setFieldType('text');
    else setFieldType('password');
  };

  const iconShow = (
    <FiEye className={classes.magicEye} onClick={handlerTogglePassword} />
  );
  const iconHide = (
    <FiEyeOff className={classes.magicEye} onClick={handlerTogglePassword} />
  );

  return (
    <Box className={classes.input}>
      <TextField
        fullWidth
        variant="outlined"
        id={name}
        name={name}
        label={label}
        value={value}
        type={changeFieldType ? fieldType : ''}
        onChange={onChange}
        color="secondary"
        {...props}
      />
      {changeFieldType
        ? fieldType === 'password'
          ? iconShow
          : iconHide
        : null}
    </Box>
  );
};

export default Input;
