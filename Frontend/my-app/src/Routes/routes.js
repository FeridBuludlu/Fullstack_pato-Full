import Add from "../pages/admin/Add/Add";
import AdminRoot from "../pages/admin/AdminRoot";
import Shop from "../pages/site/Shop/Shop";
import Detail from "../pages/site/Detail/Detail";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";
import Basket from "../pages/site/Basket/Basket"
const ROUTES = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "detail/:id",
        element: <Detail />,
      },{
        path: "basket",
        element: <Basket/>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Add />,
      },
    ],
  },
];

export default ROUTES;
