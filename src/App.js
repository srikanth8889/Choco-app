import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import BrandList from "./Components/BrandList";
import { Route, Switch } from "react-router-dom";
import ChocolateList from "./Components/ChocolateList";
import ChococlateDetails from "./Components/ChocolateDetails";
import BrandDetails from "./Components/BrandsDetails";
import SearchChoco from "./Components/search";
import home from "./home";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Switch>
        <Route path="/BRANDS" exact component={BrandList} />
        <Route path="/CHOCOLATES" exact component={ChocolateList} />
        <Route path="/chocolates/:id" exact component={ChococlateDetails} />
        <Route path="/brands/:id" exact component={BrandDetails} />}
        <Route path="/LOGIN" exact component={Login} />
        <Route path="/Signup" exact component={Signup} />
        <Route path="/Search" exact component={SearchChoco} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
//<Route path="/" exact component={() => <h1 />} />
{
  /* <Route path="/home" exact component={home} /> */
}
