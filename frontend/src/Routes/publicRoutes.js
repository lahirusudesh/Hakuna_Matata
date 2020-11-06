
import Home from "../components/Home/Home";
import Confirm from "../components/User/Confirm";
import Login from "../components/User/Login";
import PasswordReset from "../components/User/PasswordReset";
import Register from "../components/User/Register";

const GetPublicRoutes = () => {
    return [
        {
            path: "/",
            exact: true,
            component: Home,
        },
        {
            path: "/login",
            exact: true,
            component: Login,
        },
        {
            path: "/signup",
            exact: true,
            component: Register,
        },
        {
            path: "/confirm/:code",
            exact: true,
            component: Confirm,
        },
        {
            path: "/reset/:code",
            exact: true,
            component: PasswordReset,
        }
    ]
};


export default GetPublicRoutes;