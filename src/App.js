import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EnterPageHero from "./components/Page/enterpagehero/EnterPageHero"
import BisnisPageHero from "./components/Page/bisnispagehero/BisnisPageHero"
import Entertaiment from "./components/entertaiment/Entertaiment"
import Bisnis from "./components/bisnis/Bisnis"
import SinglePage from "./components/Page/singlePage/SinglePage"
import SecondPage from "./components/Page/secondpage/SecondPage"
import ThirdPage from "./components/Page/thirdpage/ThirdPage"
import FourthPage from "./components/Page/fourthpage/FourthPage"
import EnterPage from "./components/Page/enterpage/EnterPage"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route exact path='/entertaiment' component={Entertaiment} />
          <Route exact path='/bisnis' component={Bisnis} />
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/enterpagehero/:id' exact component={EnterPageHero} />
          <Route path='/bisnispagehero/:id' exact component={BisnisPageHero} />
          <Route path='/secondpage/:id' exact component={SecondPage} />
          <Route path='/thirdpage/:id' exact component={ThirdPage} />
          <Route path='/fourthpage/:id' exact component={FourthPage} />
          <Route path='/enterpage/:id' exact component={EnterPage} />

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
