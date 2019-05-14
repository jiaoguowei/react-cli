import React from 'react'
import { Route, Switch } from 'react-router-dom';

// import Home from './pages/Home'
// import Page from './pages/Page'
// import Counter from 'pages/Counter'

import loadable from 'react-loadable';  // react-loadable按需加载，安路由加载
import Loading from 'components/Loading'

const Home = loadable({
    loader: () => import('pages/Home'),
    loading: Loading,
    timeout: 10000,
})
const Page = loadable({
    loader: () => import('pages/Page'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const Counter = loadable({
    loader: () => import('pages/Counter'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

const NotFound = loadable({
    loader: () => import('pages/NotFound'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

const UserInfo = loadable({
    loader: () => import('pages/UserInfo'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})



const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page" component={Page}/>
        <Route exact path="/counter" component={Counter}/>
        <Route path="/userinfo" component={UserInfo}/>
        <Route component={NotFound}/>
    </Switch>
)

export default getRouter;