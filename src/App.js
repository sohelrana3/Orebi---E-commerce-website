import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./componet/Lyaouts/RootLayout";
import About from "./pages/About";
import Contract from "./pages/Contract";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import Singup from "./pages/Singup";
import Account from "./pages/Account";

let route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
      <Route path="/Shop" element={<Shop/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Contract" element={<Contract/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
    </Route>
  )
);
function App() {
  return  <RouterProvider router={route} />}

export default App;
