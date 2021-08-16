import { Switch, Route } from "react-router-dom";
import React from "react";
//引入具体的路由页面
import Welcome from "views/home/home";
import Page1 from "views/page1/page1";
import Page2 from "views/page2/page2";
import Page3 from "views/page3/page3";
// TODO: 路由可以放在一个配置文件内
function Main() {
  return (
    <main style={{ width: "100%" }}>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
        <Route exact path="/page3" component={Page3} />
      </Switch>
    </main>
  );
}

export default Main;
