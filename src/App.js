import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import SecondPage from "./components/secondPage/SecondPage"
import Entertaiment from "./components/entertaiment/Entertaiment"
import ThirdPage from "./components/secondPage/ThirdPage"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/secondpage/:id' exact component={SecondPage} />
          <Route path='/secondpage/:id' exact component={ThirdPage} />
          <Route exact path='/entertaiment' component={Entertaiment} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
