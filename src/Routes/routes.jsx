import AdminPanel from "../Pages/Admin-panel/AdminPanel";
import FactorV1 from "../Pages/Admin-panel/Factors/Factor-v1";
import FactorV2 from "../Pages/Admin-panel/Factors/Factor-v2";
import ClientFactorV1 from "../Pages/Client/ClientFactor-v1";
import ClientFactorV2 from "../Pages/Client/ClientFactor-v2";




const routes = [
    { path: "/client-factor-v1", element: <ClientFactorV1 /> },
    { path: "/client-factor-v2", element: <ClientFactorV2 /> },
    {
        path: "/p-admin/*",
        element: <AdminPanel /> ,
        children: [
            { path: "factor-v1", element: <FactorV1 /> },
            { path: "factor-v2", element: <FactorV2 /> },
        ]
    },
]

export default routes;