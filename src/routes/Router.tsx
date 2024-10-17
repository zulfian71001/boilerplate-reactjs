import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import NoutFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
    {
        path: "*",
        element: <NoutFound />,
    },
]);