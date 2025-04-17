import { createBrowserRouter } from "react-router-dom";

import {
    HomePage,
    AboutMePage,
    ContactsPage,
    ProjectsPage,
    ErrorPage,
    HomeLayoutPage,
} from "./pages/index";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayoutPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '/aboutme',
                element: <AboutMePage />,
            },
            {
                path: '/contacts',
                element: <ContactsPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPage />,
            },
        ],
    }
]);

export default router;