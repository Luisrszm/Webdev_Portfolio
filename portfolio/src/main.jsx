import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorPage: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutMe />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/resume",
                element: <Resume />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
