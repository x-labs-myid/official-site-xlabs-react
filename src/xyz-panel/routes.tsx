import type { RouteObject } from "react-router-dom";
import Dashboard from "./modules/dashboard";
import Login from "./modules/login";
import XYZPanelWrapper from "@/components/layout/XYZPanelWrapper";
import App from "../App";
import ApiLog from "./modules/api-log";
import Catalog from "./modules/catalog";
import StaticToken from "./modules/static-token";
import UserDevice from "./modules/user-device";
import Term from "./modules/term";

export const XYZPanelRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <XYZPanelWrapper><Login /></XYZPanelWrapper>
    },
    {
        path: "/dashboard",
        element: <XYZPanelWrapper><App><Dashboard /></App></XYZPanelWrapper>,
    },
    {
        path: "/api-log",
        element: <XYZPanelWrapper><App><ApiLog /></App></XYZPanelWrapper>,
    },
    {
        path: "/catalog",
        element: <XYZPanelWrapper><App><Catalog /></App></XYZPanelWrapper>,
    },
    {
        path: "/static-token",
        element: <XYZPanelWrapper><App><StaticToken /></App></XYZPanelWrapper>,
    },
    {
        path: "/user-device",
        element: <XYZPanelWrapper><App><UserDevice /></App></XYZPanelWrapper>,
    },
    {
        path: "/term",
        element: <XYZPanelWrapper><App><Term /></App></XYZPanelWrapper>,
    }
]