import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";

import {Main, Detail} from "../pages";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/:workId" exact component={Detail}/>

      <Route component={Main} />
    </Switch>
  );
}
