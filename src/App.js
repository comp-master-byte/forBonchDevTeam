import React from "react"
import { Navigation } from "./components/Navigation";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import './styles/main.scss'
import { Categories } from "./pages/Categories";
import { Hits } from "./pages/Hits";
import { NewsAndBrand } from "./pages/NewsAndBrand";
import { Delivery } from "./pages/Delivery";
import Footer from "./components/Footer";

const Section = styled.section`
  max-width: 1040px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`

function App() {
  return (
      <Router>
        <Section>  
          <Navigation/>
          <Switch>
            <Route path='/categories' component={Categories}/>
            <Route path='/hits' component={Hits}/>
            <Route path='/news' component={NewsAndBrand}/>
            <Route path='/delivery' component={Delivery} />
            <Redirect to='/categories'/>
          </Switch>
        </Section>
          <Footer/>
      </Router>
    
  );
}

export default App;
