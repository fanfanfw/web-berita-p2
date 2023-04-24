import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import EnterPage1 from "./components/enterpage1/EnterPage1"
import Entertaiment from "./components/entertaiment/Entertaiment"
import SecondPage from "./components/secondpage/SecondPage"
import ThirdPage from "./components/thirdpage/ThirdPage"
import FourthPage from "./components/fourthpage/FourthPage"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route exact path='/entertaiment' component={Entertaiment} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/enterpage1/:id' exact component={EnterPage1} />
          <Route path='/secondpage/:id' exact component={SecondPage} />
          <Route path='/thirdpage/:id' exact component={ThirdPage} />
          <Route path='/fourthpage/:id' exact component={FourthPage} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
