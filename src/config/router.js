//引入具体的路由页面
import Welcome from "views/home/home";
import Page1 from "views/page1/page1";
import Page2 from "views/page2/page2";
import Page3 from "views/page3/page3";
import Selects from "components/Hook-Demo/select";

const routerList = [
    {
        path: "/",
        component: Welcome,
        exact: true
    },
    {
        path: "/Page1",
        component: Page1,
        exact: true
    },
    {
        path: "/Page2",
        component: Page2,
        exact: true
    },
    {
        path: "/Page3",
        component: Page3,
        routes:[
            {
                path: "/Page3/Selects",
                component: Selects
            },
        ]
    },
]

export default routerList