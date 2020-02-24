import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'

import Error from './components/pages/error/Error'
import Home from './components/pages/homepage/Home'

import Navbar from './components/reusable/common/Navbar'
import Footer from './components/reusable/common/Footer'

import GlobalStyle from './components/styled/GlobalStyle';
import Wrapper from './components/styled/Wrapper';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/*' component={Error} />
          </Switch>
        </main>
        <Footer />
      </Wrapper>
      
    </BrowserRouter>
  )
}

export default App