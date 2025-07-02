import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./navigation/About";
import AppLayout from "./AppLayout";
import ContactUs from "./navigation/ContactUs";
import Error from "./navigation/Error";
import Home from "./navigation/Home";
import UserRegistrationForm from "./user-registration/UserRegistrationForm";
import {
    ABOUT_US,
    CONTACT_US,
    HOME_PATH,
    REGISTER_NEW_USER_PATH,
    USER_CARD,
} from "./utils/constants";

const UserCardContainer = lazy(() => import('./user-card/UserCardContainer'));
const UserDetail = lazy(() => import('./user-detail/UserDetail'))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <UserRegistrationForm />,
      },
      {
        path: HOME_PATH,
        element: <Home />,
      },
      {
        path: REGISTER_NEW_USER_PATH,
        element: <UserRegistrationForm />,
      },
      {
        path: ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: CONTACT_US,
        element: <ContactUs />,
      },
      {
        path: USER_CARD,
        element: <Suspense fallback={<h1>LOADING....</h1>}><UserCardContainer /></Suspense>,
        // children: [
        //   {
        //     path: "user/:id",
        //     index: false,
        //     element: <Suspense fallback={<h1>LOADING....</h1>}><UserDetail /></Suspense>
        //   },
        // ],
      },
      {
        path: "user/:id",
        element: <Suspense fallback={<h1>LOADING....</h1>}><UserDetail /></Suspense>,
      }
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
