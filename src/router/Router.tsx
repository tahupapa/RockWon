import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import App from "../App";
import Loading from "../assets/Loading";

const Home = lazy(() => import("../pages/Home"));
const SignIn = lazy(() => import("../pages/Auth/SignIn"));
const SignUp = lazy(() => import("../pages/Auth/SignUp"));
const Detail = lazy(() => import("../pages/Detail"));
const MyPage = lazy(() => import("../pages/MyPage"));
const ProductRegister = lazy(() => import("../pages/ProductRegister"));

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "signin",
        element: (
          <Suspense fallback={<Loading />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "detail",
        element: (
          <Suspense fallback={<Loading />}>
            <Detail />
          </Suspense>
        ),
      },
      {
        path: "mapage",
        element: (
          <Suspense fallback={<Loading />}>
            <MyPage />
          </Suspense>
        ),
      },
      {
        path: "productregister",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductRegister />
          </Suspense>
        ),
      },
    ],
  },
]);

export default Router;
