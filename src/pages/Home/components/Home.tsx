import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '../../../components/Button';
import Text from '../../../components/Text';
import { useStyle } from './Home.styles';

const Home: React.FC = () => {
    const history = useHistory();
    const classes = useStyle();

    const redirectAcess = () => {
        history.push('/acesso');
    };

    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item xs={12}>
                <Text size={30} align="center">
                    Comprando, você ja participa!
                </Text>
            </Grid>
            <Grid item xs={12}>
                <Text size={24} hasMarginBottom={4} weight="600" align="center">
                    Ao comprar você já fideliza e participa!
                </Text>
            </Grid>
            <Grid item xs={12}>
                <Button
                    color="primary"
                    variant="contained"
                    weight="400"
                    onClick={redirectAcess}
                >
                    Começar
                </Button>
            </Grid>
            <Box className={classes.wave} />
        </Grid>
    );
};

export default Home;
