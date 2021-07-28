import React from 'react';
import { Formik, Form } from 'formik/dist';
import { Link, useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Text from '../../../components/Text';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { validations } from './SignIn.validations';
import { useStyles } from './SignIn.styles';

const SignIn: React.FC<any> = () => {
  const history = useHistory();
  const classes = useStyles();

  const onLogin = (val: any) => {
    history.push('/home');
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={11} md={4}>
        <Box bgcolor="info.contrastText" className={classes.boxLogin}>
          <Text
            shouldLoadColor="secondary"
            align="center"
            variant="h5"
            weight="800"
            mb={4}
          >
            Entre com a sua conta
          </Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={validations}
            onSubmit={onLogin}
          >
            {({ values, touched, errors, handleChange }) => (
              <Form>
                <Grid container justifyContent="center" spacing={3}>
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
                    <Button
                      color="primary"
                      variant="contained"
                      align="center"
                      mb={3}
                      px={30}
                      type="submit"
                    >
                      Entrar
                    </Button>
                    <Divider />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt={3}
                      className={classes.linkRegister}
                    >
                      Não possui cadastro?
                      <Link to="cadastro">Registre-se agora!</Link>
                    </Box>
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

export default SignIn;
