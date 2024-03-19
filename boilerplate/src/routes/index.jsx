import {useSelector} from 'react-redux'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import PrivateRoutesUser from '../utils/private-routes/PrivateRoutesUser'
import PrivateRoutesAdmin from '../utils/private-routes/PrivateRoutesAdmin'
const ErrorPage = React.lazy(()=> import("../components/Pages/ErrorPage/ErrorPage"))
const Layout = React.lazy(()=> import("../components/layout/Layout"))
const Home = React.lazy(()=> import("../components/Pages/Home"))
const RegisterUser = React.lazy(() => import("../components/Pages/register-user"))
const Login = React.lazy(()=> import("../components/Pages/Login"))
const Contact = React.lazy(()=> import("../components/Pages/Contact"))
const About = React.lazy(()=> import("../components/Pages/About"))
const Cart = React.lazy(()=> import("../components/Pages/Cart"))
const Admin = React.lazy(()=> import("../components/Pages/Admin"))
const Wishlist = React.lazy(()=> import("../components/Pages/Whishlist"))
const Profile = React.lazy(()=> import("../components/Pages/Profile"))
export const Router = () => {
    const role = useSelector((state)=>state.role)
    console.log(role.user)
    return createBrowserRouter([
        {
            element:<Layout/>,
            children:[
                {
                path:'/',
                element:<Home/>,
                },
                {
                    path:'/contact',
                    element:<Contact/>
                },
                {
                    element:(
                        <PrivateRoutesUser isUserAuth={role.user!==null ? true : false} />
                    ),
                    children:[
                        {
                            path:'wishlist',
                            element:<Wishlist/>
                        },
                        {
                            path:'profile',
                            element:<Profile/>
                        },
                        {
                            path:'cart',
                            element:<Cart/>
                        }
                    ]
                },
                {
                    element:(
                        <PrivateRoutesAdmin
                        isAdminAuth={role.admin !== null ? true : false}
                      />
                    ),
                    children:[
                        {
                            path:'admin',
                            element:<Admin/>
                        }
                    ]
                },
                {
                    path:'login',
                    element:<Login/>
                },
                {
                    path:'register',
                    element:<RegisterUser/>
                }
            ]
        },
        {
            path:'*',
            element: <ErrorPage/>
        },
        
    ])
}