import { 
    Home,
    Catalog,
    Child,
    Collections,
    Mymovies,
    NewMovie } from "../pages"

export default [
    {
        path: '/',
        exact: true,
        component: <Home/>
    },
    {
        exact: true,
        path: '/catalog',
        component: <Catalog/>
    },
    {
        exact: true,
        path: '/child',
        component: <Child/>
    },
    {
        exact: true,
        path: '/collections',
        component: <Collections/>
    },
    {
        exact: true,
        path: '/mymovies',
        component: <Mymovies/>
    },
    {
        exact: true,
        path: '/newmovies',
        component: <NewMovie/>
    },
]