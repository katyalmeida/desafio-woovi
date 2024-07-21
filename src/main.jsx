import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes.jsx'
import Footer from './components/footer'
import  GlobalStyles  from './styles/globalstyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
  
root.render(
  <>
    <GlobalStyles />
    <AppRoutes />
    <Footer />
  </>
);

