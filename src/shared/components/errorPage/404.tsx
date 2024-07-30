import React, { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import NotFound from './NotFound.svg';

function ErrorPage404(): ReactElement {

  return (
    <div>
      <Box width={'100%'} height={'calc(100vh - 150px)'} display="flex" justifyContent="center">
        <Box display="flex" justifyContent="center" flexDirection="column" width="25vw">
          <Box height="40vh">
            <img src={NotFound} width="100%" height="100%" />
          </Box>
          <Box mt={4} style={{ textAlign: 'center' }}>
            <Typography variant="h4" style={{ fontFamily: 'Poppins', fontWeight: 500 }}>
              Not Found
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*</Layout>*/}
    </div>
  );
}

export default ErrorPage404;
