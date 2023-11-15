import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '../auth/routes/AuthRoute'
import { JournalRoute } from '../journal/routes/JournalRoute'
import { CheckingAuth } from '../ui/'
import { useCheckAuth } from '../hooks'

export const AppRouter = () => {

  const { status } = useCheckAuth()

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        <Route path="/*" element={<JournalRoute />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoute />} />
      )}

      <Route path="/*" element={<Navigate to={'auth/login'} />} />

      {/* Login y Registro */}
      {/* <Route path='/auth/*' element={<AuthRoute />}/> */}
      {/* JournalAPP */}
      {/* <Route path='/*' element={<JournalRoute />}/> */}
      <Route />
    </Routes>
  );
}
