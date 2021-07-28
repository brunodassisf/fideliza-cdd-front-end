import React from 'react';
import { useHistory } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Button from '../../../components/Button';
import Text from '../../../components/Text';

import { useStyle } from './Home.styles';
import ImgHome from '../../../assets/img/imgHome.svg';

const Home: React.FC = () => {
  const history = useHistory();
  const classes = useStyle();

  const redirectAcess = () => {
    history.push('/login');
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.gridContainer}
    >
      <Grid item xs={12} md={5}>
        <Text
          shouldLoadColor="secondary"
          weight="800"
          variant="h1"
          align="center"
          mb={1}
        >
          Comprando, você ja participa!
        </Text>

        <Text
          shouldLoadColor="secondary"
          weight="600"
          variant="h6"
          align="center"
          mb={3}
        >
          Ao comprar você já fideliza e participa!
        </Text>
        <Button
          color="primary"
          variant="contained"
          align="center"
          sizeText={20}
          px={40}
          onClick={redirectAcess}
        >
          Começar
        </Button>
      </Grid>
      <Grid item xs={12} md={5}>
        <img src={ImgHome} alt="" />
      </Grid>
      <Box className={classes.wave} />
    </Grid>
  );
};

export default Home;
