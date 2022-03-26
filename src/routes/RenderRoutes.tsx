import { Login } from "@mui/icons-material";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MessagesPage from "../pages/Messages/Messages";
import RoutesAuth from "./RoutesAuth";

const RenderRoutes = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RoutesAuth element={<Login />} titleId="Login" />} />
          <Route path="/" element={<RoutesAuth element={<MessagesPage />} titleId="Home" auth={true} />} >
            <Route path="home" element={<RoutesAuth element={<MessagesPage />} titleId="Home" auth={true} />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default RenderRoutes;