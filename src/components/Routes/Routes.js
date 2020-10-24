import React from 'react'
import { Route, Switch } from "react-router-dom";
import MainPage from "../Main/MainPage.container";
import ProductCard from "../Main/ProductCard";
export default function Routes() {
    return (      
        <Switch>
          <Route path="/product" component={ProductCard} />
          <Route path="/" component={MainPage} />
        </Switch>
    );
}
