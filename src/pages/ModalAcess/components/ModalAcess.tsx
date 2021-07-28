import React from 'react';

import Grid from '@material-ui/core/Grid';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

import SignUp from '../../SignUp/components';
import SignIn from '../../SignIn/components';

import { useStyles } from './ModalAcess.styles';

function TabPanel(props: {
  [x: string]: any;
  children: any;
  value: any;
  index: any;
}) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const ModalAcess = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (
    _event: any,
    newValue: React.SetStateAction<number>,
  ) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="center" className={classes.gridContainer}>
      <Grid item xs={11} md={5}>
        <Text
          shouldLoadColor="secondary"
          weight="800"
          align="center"
          variant="h1"
          mb={4}
        >
          Junte, comece a fidelizar
        </Text>
        <Box bgcolor="info.contrastText" pb={3} className={classes.boxModal}>
          <Grid container justifyContent="space-around">
            <AppBar
              position="static"
              color="default"
              className={classes.appBar}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Cadastre-se" {...a11yProps(1)} />
              </Tabs>
            </AppBar>

            <Grid item xs={11} md={11}>
              <TabPanel value={value} index={0}>
                <SignIn />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SignUp />
              </TabPanel>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Box className={classes.wave} />
    </Grid>
  );
};

export default ModalAcess;
