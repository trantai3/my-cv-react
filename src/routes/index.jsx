import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LayoutMain = lazy(() => import("../components/layout"));
const Home = lazy(() => import("../pages/home"));
const router = createBrowserRouter([
  {
    element: <LayoutMain />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

const Router = () => {
  return (
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
