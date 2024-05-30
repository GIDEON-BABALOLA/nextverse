import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from './components/common/Layout';
import Home from './Pages/Home';
import NotFound from "./Pages/NotFound"
function App() {
  return (
    <>
<Routes>
  <Route path="/" element={<Layout/>}>
<Route index element={<Home />} />
<Route  path="*" element={<NotFound />}/>
  </Route>
</Routes>
    </>
  )
}

export default App
