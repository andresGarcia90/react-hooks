import { StartOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        padding: 4,
        borderRadius: 5
      }}
    >
      <Grid item xs={12}>
        <StartOutlined sx={{ fontSize: 100, color: 'white' }}></StartOutlined>
      </Grid>
      <Grid item xs={12}>
        <Typography color='white' variant='h6'>Selecciona o Crea un tema</Typography>
      </Grid>
    </Grid>
  );
};
