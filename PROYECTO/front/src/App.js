import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import NosotrosPage from './pages/NosotrosPage';


function App() {
  return (
    <div className="App">
    <Header/>
    <BrowserRouter>
    <Nav/>
<Routes>
  <Route path="nosotros" element={<NosotrosPage />}/>
</Routes>
</BrowserRouter>
    <Main/>
    <Footer/>
    </div>
  );
}

export default App;
