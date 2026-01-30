import { createBrowserRouter } from "react-router-dom";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ index: true, element: <MainPage /> }],
  },
]);

export default root;