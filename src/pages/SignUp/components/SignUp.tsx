import React from 'react';
import { Form, Formik } from 'formik';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Input from '../../../components/Input';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

import { validations } from './SingUp.validations';
import { useStyles } from './SignUp.styles';

const SignUp = () => {
  const classes = useStyles();
  const onRegister = (val: any) => {
    console.log(val);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={11} md={4}>
        <Box bgcolor="info.contrastText" className={classes.boxInfos}>
          infos
          <Divider />
          infos
          <Divider />
          infos
          <Divider />
          infos
          <Divider />
        </Box>
      </Grid>

      <Grid item xs={11} md={3}>
        <Box bgcolor="info.contrastText" className={classes.boxRegister}>
          <Text
            shouldLoadColor="secondary"
            align="center"
            variant="h5"
            weight="800"
            mb={4}
          >
            Cadastre-se agora, é rápido!
          </Text>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validations}
            onSubmit={onRegister}
          >
            {({ values, touched, errors, handleChange }) => (
              <Form>
                <Grid container justifyContent="center" spacing={3}>
                  <Grid item xs={12}>
                    <Input
                      label="Nome"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      error={touched.name && Boolean(errors.name)}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      label="E-mail"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      changeFieldType
                      label="Senha"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      changeFieldType
                      label="Confirmar senha"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      error={
                        touched.confirmPassword &&
                        Boolean(errors.confirmPassword)
                      }
                      helperText={
                        touched.confirmPassword && errors.confirmPassword
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="primary"
                      variant="contained"
                      align="center"
                      sizeText={16}
                      px={30}
                      type="submit"
                    >
                      Cadastrar
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Grid>
      <Box className={classes.wave} />
    </Grid>
  );
};

export default SignUp;
