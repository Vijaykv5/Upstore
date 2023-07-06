import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App.jsx'
import Product from './pages/Product.jsx'
import { Outlet, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import { productsData } from './api/api.jsx'
import OneProduct from './components/OneProduct.jsx'
// import { Provider } from 'react-redux'
// import { store } from './redux/store.js'

const AppLayout=()=>{
  return(
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const AppRouter = createBrowserRouter(
  [
  {
    path:'/',
    element:<AppLayout/>,
    
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:productsData,
      },
      {
        path:'/product',
        element:<Product/>,  
      },
      {
        path:'/product/:id',
        element:<OneProduct/>,
        
      },
    ]
  }
]
)

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
 <RouterProvider router={AppRouter}/>
 </React.StrictMode>
 );