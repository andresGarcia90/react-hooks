import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { signInWithEmail, startGoogleSignIn } from '../../store/auth/thunks';

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, formState, onInputChange, onReset } = useForm({
    email: 'andres@gmail.com',
    password: '6123456',
  });

  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signInWithEmail({email, password}))
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout>
        <form onSubmit={onSubmit} className='animate__animated animate__fadeIn animate__faster'>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="john_doe@mail.com"
                fullWidth
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                fullWidth
                onChange={onInputChange}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} display={ !!errorMessage ? '' : 'none'}>
                <Alert severity='error'> {errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
