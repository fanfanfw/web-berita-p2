import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import EnterPageHero from "./components/Page/enterpagehero/EnterPageHero"
import BisnisPageHero from "./components/Page/bisnispagehero/BisnisPageHero"
import TeknonSainsPageHero from "./components/Page/teknonsainspagehero/TeknonSainsPageHero"
import BolanSportsPageHero from "./components/Page/bolansportspagehero/BolanSportsPageHero"
import FoodnTravelPageHero from "./components/Page/foodntravelpagehero/FoodnTravelPageHero"

import Entertaiment from "./components/entertaiment/Entertaiment"
import Bisnis from "./components/bisnis/Bisnis"
import TeknonSains from "./components/teknonsains/TeknonSains"
import BolanSports from "./components/bolansports/BolanSports"
import FoodnTravel from "./components/foodntravel/FoodnTravel"


import SinglePage from "./components/Page/singlePage/SinglePage"
import SecondPage from "./components/Page/secondpage/SecondPage"
import ThirdPage from "./components/Page/thirdpage/ThirdPage"
import FourthPage from "./components/Page/fourthpage/FourthPage"
import EnterPage from "./components/Page/enterpage/EnterPage"
import BisnisPage from "./components/Page/bisnispage/BisnisPage"
import TeknonSainsPage from "./components/Page/teknonsainspage/TeknonSainsPage"
import BolanSportsPage from "./components/Page/bolansportspage/BolanSportsPage"
import FoodnTravelPage from "./components/Page/foodntravelpage/FoodnTravelPage"


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepages} />
          <Route exact path='/entertaiment' component={Entertaiment} />
          <Route exact path='/bisnis' component={Bisnis} />
          <Route exact path='/teknonsains' component={TeknonSains} />
          <Route exact path='/bolansports' component={BolanSports} />
          <Route exact path='/foodntravel' component={FoodnTravel} />

          
          <Route path='/enterpagehero/:id' exact component={EnterPageHero} />
          <Route path='/bisnispagehero/:id' exact component={BisnisPageHero} />
          <Route path='/teknonsainspagehero/:id' exact component={TeknonSainsPageHero} />
          <Route path='/bolansportspagehero/:id' exact component={BolanSportsPageHero} />
          <Route path='/foodntravelpagehero/:id' exact component={FoodnTravelPageHero} />
          
          <Route path='/singlepage/:id' exact component={SinglePage} />
          <Route path='/secondpage/:id' exact component={SecondPage} />
          <Route path='/thirdpage/:id' exact component={ThirdPage} />
          <Route path='/fourthpage/:id' exact component={FourthPage} />
          <Route path='/enterpage/:id' exact component={EnterPage} />
          <Route path='/bisnispage/:id' exact component={BisnisPage} />
          <Route path='/teknonsainspage/:id' exact component={TeknonSainsPage} />
          <Route path='/bolansportspage/:id' exact component={BolanSportsPage} />
          <Route path='/foodntravelpage/:id' exact component={FoodnTravelPage} />


          
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
