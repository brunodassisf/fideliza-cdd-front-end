import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import React from 'react';

import Menu from '../../../components/Menu';
import Text from '../../../components/Text';
import { useStyles } from './Dashboard.styles';

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Card className={classes.boxUserInfos}>
          <Box bgcolor="info.contrastText">
            <Text shouldLoadColor="secondary" weight="800" align="left">
              Fulano
            </Text>
          </Box>
        </Card>
        <Box className={classes.wave} />
      </div>
    </>
  );
};

export default Dashboard;
