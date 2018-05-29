import { asyncComponent } from 'react-async-component';

const Home = asyncComponent({ resolve: () => import('./views') });
const Demo1 = asyncComponent({ resolve: () => import('./views/demo1') });
const Demo1_Sub = asyncComponent({ resolve: () => import('./views/demo1/subpage') });
const Demo2 = asyncComponent({ resolve: () => import('./views/demo2') });

export default [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/demo1',
        component: Demo1,
        routes: [
            {
                path: '/demo1/sub',
                component: Demo1_Sub,
            }
        ]
    },
    {
        path: '/demo2',
        component: Demo2,
    }
]