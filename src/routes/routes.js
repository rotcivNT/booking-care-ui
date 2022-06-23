import Login from '~/components/Auth/Login';

const publicRoutes = [
    {
        path: '/login',
        component: Login,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
