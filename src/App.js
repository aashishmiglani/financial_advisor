import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from './Pages/MainPage';
import Login from "./Comp/Login"
import ContactList from './Comp/ContactList';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/get-contacts" element={<ContactList />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
