import { singInWithGoogle, registerUserWithEmailPassword, signInWithEmailFirebase, logOutFirebase } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await singInWithGoogle();

    if (result.ok) {
      dispatch(login(result));
    } else {
      dispatch(logout(result.errorMessage))
    }

    console.log(result);
  };
};


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};


export const signInWithEmail = ({email, password}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const {ok,  displayName, photoURL, uid, errorMessage} = await signInWithEmailFirebase({email, password});
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logOutFirebase();
    dispatch(logout())

  }
}