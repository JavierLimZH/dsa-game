import React from 'react';
import { Grid } from '@material-ui/core';

const LabPage: React.FC = () => {
  return (
    <div style={{height: '100vh'}}>
      <Grid container alignItems='stretch'>
        <Grid item xs={12} md={8} style={{height: '100vh'}}>
          <iframe
            title='turtle trinket'
            src="https://trinket.io/embed/python/f7ffec70b0?showInstructions=true"
            width="100%"
            height="100%"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            allowFullScreen
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <iframe
            title='lab gform'
            width="100%"
            height="100%"
            src= "https://forms.office.com/Pages/ResponsePage.aspx?id=cnEq1_jViUiahddCR1FZKmVkqqw0knpLqI3ZUBtQS1ZURTRKMU9BTllBM1RZSkpBSEdVM0pKRzBKTC4u&embed=true"
            frameBorder="0"
            marginWidth={0}
            marginHeight={0}
            style={{border: 'none', maxWidth: '100%', maxHeight: '100vh', minHeight: '100vh'}}
            allowFullScreen />
        </Grid>
      </Grid>
    </div>
  );
};

export default LabPage;
