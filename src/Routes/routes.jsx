import ClientFactor from "../Pages/Client/ClientFactor";
import AdminPanel from "../Pages/Admin-panel/AdminPanel";
import Factor from "../Pages/Admin-panel/Factor/Factor";




const routes = [
    { path: "/client-factor", element: <ClientFactor /> },
    {
        path: "/p-admin/*",
        element: <AdminPanel /> ,
        children: [
            { path: "factor-v1", element: <Factor /> },
        ]
    },
]

export default routes;