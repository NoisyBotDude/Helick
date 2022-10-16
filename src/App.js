import './App.css';
import Header from './components/Header/Header';
import Background from './components/Background/Background';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './sections/Home/Home';
import Contact from './sections/Contact/Contact';
import About from './sections/About/About';
import Product from './sections/Product/Product';

function App() {
  return (
    <Router>
      <Header />
      <Background />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
