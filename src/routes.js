import { asyncComponent } from 'react-async-component';

const Home = asyncComponent({ resolve: () => import('./views') });
const Demo1 = asyncComponent({ resolve: () => import('./views/demo1') });
const Demo1_Sub = asyncComponent({ resolve: () => import('./views/demo1/subpage') });
const Demo2 = asyncComponent({ resolve: () => import('./views/demo2') });
const Demo3 = asyncComponent({ resolve: () => import('./views/demo3') });
const Demo4 = asyncComponent({ resolve: () => import('./views/demo4') });

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
    },
    {
        path: '/demo3',
        component: Demo3,
    },
    {
        path: '/demo4',
        component: Demo4,
    }
]