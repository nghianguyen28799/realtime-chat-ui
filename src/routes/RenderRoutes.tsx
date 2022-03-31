import { Login } from "@mui/icons-material";
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Home from "../components/Home/Home";
import OutletComponent from "../components/Outlet/Outlet";
import MessagesPage from "../pages/MessagesPage/MessagesPage";
import NotFound from "../pages/NotFound/NotFound";
import RoutesAuth from "./RoutesAuth";

const routeList: any = [
  {
    path: "/login",
    element: <RoutesAuth element={<Login />} titleId="Login" wrapper />,
  },
  {
    path: "/",
    element: <RoutesAuth element={<OutletComponent />} titleId="Home" wrapper />,
    children: [
      {
        path: "home",
        element: <RoutesAuth element={<Home />} titleId="Home" />,
      },
      {
        path: "conversation/:conversId",
        element: <RoutesAuth element={<MessagesPage />} titleId="Conversation" />,
      },
      {
        path: "group/:groupId",
        element: <RoutesAuth element={<MessagesPage />} titleId="Group" />,
      },
    ],
  },
  {
    path: '*',
    element: <RoutesAuth element={<NotFound />} titleId="Not found" wrapper/>
  }
];

const RenderRoutes: React.FC = () => {
  const element = useRoutes(routeList);
  return <Suspense fallback={""}>{element}</Suspense>;
};

export default RenderRoutes;
