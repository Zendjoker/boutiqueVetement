import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
  Switch
} from "react-router-dom";
const App = () => {
  return (
  <>
    <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/productlist' component={ProductList} />
        <Route path='/product' component={Product} />
      </Switch>
  </>
  );
};

export default App;