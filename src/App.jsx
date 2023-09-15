import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminLayout, AuthLayout } from './layout';
import { Login, ConfirmarCuenta, OlvidePassword, Registrar, NuevaContraseña, AdministrarPacientes } from './paginas';
import { AuthProvider } from './context/AuthProvider';
import { PacientesProvider } from './context/PacientesProvider';

export const App = () => {


  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProvider>
          {/* RUTAS PUBLICAS */}
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
              <Route path='login' element={<Login />} />
              <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
              <Route path='olvide-password' element={<OlvidePassword />} />
              <Route path='olvide-password/:token' element={<NuevaContraseña />} />
            </Route>

          </Routes>

          {/* RUTAS PRIVADAS */}
          <Routes >
            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<AdministrarPacientes />} />
            </Route>


          </Routes>
        </PacientesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
