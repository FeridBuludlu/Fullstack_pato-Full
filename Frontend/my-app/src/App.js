import MainContext from "./context/context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import ROUTES from "./Routes/routes";
import axios from "axios"

function App() {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);

  useEffect(()=>{
    axios.get("http://localhost:8080/product").then(res=>setData([...res.data]))
  },[])
  const contextData = {
    data,
    setData,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} /> 
    </MainContext.Provider>
  );
}

export default App;

