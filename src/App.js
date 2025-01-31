import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router";
import Login from "./page/Login"
import ProductAll from "./page/ProductAll"
import NavBar from "./component/NavBar";
import { useState } from "react";
import PrivateRoute from "./Route/PrivateRoute";

//https://github.com/legobitna/hnm-react-router 데모

function App() {
  const [authenticate,setAuthenticate] = useState(false);

  return (
    <div>
      <NavBar authenticate = {authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />}></Route>
        <Route path="/" element={<ProductAll authenticate={authenticate}/>}></Route>
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate} />}></Route>
      </Routes>

    </div>
  );
}

export default App;
