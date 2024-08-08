import { createBrowserRouter } from "react-router-dom";

import RootView from "../views/routing/RootView";
import HomeView from "../views/HomeView";
import DetailView from "../views/DetailView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'detail/:id',
        element: <DetailView />,
      },
    ],
  },
]);
