import Login from '~/components/Auth/Login';
import UserManager from '~/components/UserManager/UserManager';
import Home from '~/pages/Home';

const publicRoutes = [
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/user-manager',
        component: UserManager,
    },
    {
        path: '/home',
        component: Home,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
