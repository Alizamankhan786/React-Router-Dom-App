import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Product.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Contact from './Pages/Contact.jsx'
import Singlestudent from './Pages/Singlestudent.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



const router = createBrowserRouter([
    {
        path:`/`,
        element:<Product />,
        children:[
            {
                path: ``,
                element: <Home />
            },
            {
                path: `about`,
                element: <About />
            },
            {
                path: `contact`,
                element: <Contact />
            },
            {
                path: `services`,
                element: <Services />
            },
            {
                path: `/singlestudent/:id`,
                element: <Singlestudent />
            },
            {
                path: `*`,
                element: <h1>NOT FOUND!</h1>
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>

    </RouterProvider>
)
