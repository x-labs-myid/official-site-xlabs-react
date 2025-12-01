import { createBrowserRouter } from "react-router-dom";
import { LandingPageRoutes } from "./landing-page/routes";
import { XYZPanelRoutes } from "./xyz-panel/routes";

const allRoutes = [
    ...LandingPageRoutes,
    ...XYZPanelRoutes,
];

const router = createBrowserRouter(allRoutes);

export default router;