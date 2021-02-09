import React from 'react'
import './App.css'
import Home from './screens/Home/Home'
// import Products from './screens/Products/Products'
// import ProductCreate from './screens/ProductCreate/ProductCreate'
// import ProductEdit from './screens/ProductEdit/ProductEdit'
// import ProductDetail from './screens/ProductDetail/ProductDetail'
import { Route, Switch } from 'react-router-dom'
import About from './screens/About/About'
import Portfolio from './screens/Portfolio/Portfolio'
import Resume from './screens/Resume/Resume'
import Contact from './screens/Contact/Contact'

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        {/* <Route exact path="/products/:id/edit" component={ProductEdit} />
        <Route exact path="/products/:id" component={ProductDetail} /> */}
      </Switch>
    </div>
  )
}

export default App