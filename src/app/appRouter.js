import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import AboutUs from "./navigation/About";
import ContactUs from "./navigation/ContactUs";
import Error from "./navigation/Error";
import Home from "./navigation/Home";
import UserRegistrationForm from "./user-registration/UserRegistrationForm";
import {
  ABOUT_US,
  CONTACT_US,
  HOME_PATH,
  REGISTER_NEW_USER_PATH,
  SAVED_USERS,
  USER_CARD,
  USER_DETAIL,
} from "./utils/constants";

const UserCardContainer = lazy(() => import("./user-card/UserCardContainer"));
const UserDetail = lazy(() => import("./user-detail/UserDetail"));
const SavedUsers = lazy(() => import("./navigation/SavedUsers"));

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
        element: (
          <Suspense fallback={<h1>LOADING....</h1>}>
            <UserCardContainer />
          </Suspense>
        ),
        // children: [
        //   {
        //     path: "USER_DETAIL/:id",
        //     index: false,
        //     element: <Suspense fallback={<h1>LOADING....</h1>}><UserDetail /></Suspense>
        //   },
        // ],
      },
      {
        path: USER_DETAIL + "/:id",
        element: (
          <Suspense fallback={<h1>LOADING....</h1>}>
            <UserDetail />
          </Suspense>
        ),
      },
      {
        path: SAVED_USERS,
        element: <SavedUsers />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default appRouter;
