import { Route, Switch } from 'react-router-dom'
import routerList from 'config/router'
import React from 'react'

// TODO: 路由可以放在一个配置文件内
function Main() {
  return (
    <main style={{ width: '100%' }}>
      <Switch>
        {
          routerList.map((router, index) => {
            if (router.exact) {
              return (
                <Route
                  exact
                  key={index}
                  path={router.path}
                  render={(props) => (
                    <router.component {...props} routes={router.routes} /> //routes是传给子路由的数据
                  )}
                />
              )
            } else {
              return (
                <Route
                  key={index}
                  path={router.path}
                  render={(props) => (
                    <router.component {...props} routes={router.routes} />
                  )}
                />
              )
            }
          })
        }
      </Switch>
    </main>
  )
}

export default Main
