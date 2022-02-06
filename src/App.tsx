import React from 'react';
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import Routes from './Routes/routes'
import './Styles/global.css'
import { useSetupGtm } from './hooks/useSetupGtm';

const queryClient = new QueryClient()

function App() {
  useSetupGtm()

  return (
    <QueryClientProvider client={queryClient}>
        <Routes/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
        />
    </QueryClientProvider>
  );
}

export default App;
