import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Forgotpassword from './Pages/Forgotpassword';
import Tickpage from './Pages/Tickpage';
import CreatePassword from './Pages/Createpassword';
import Confirmationcode from './Pages/Confirmationcode';
import Createnewpassword from './Pages/Createnewpassword';
import Successfull from './Pages/Successfull';
import Home from './Pages/Home';
import Templatecolors from './Pages/Templatecolors';
import About from './Pages/About';
import Johndoecv from './Pages/Johndoecv';
import Joinus from './Pages/Joinus';
import Mainpage from './Pages/Mainpage';
import Effects from './Pages/Effects';
import Coverletter from './Pages/Coverletter';
import Shareresume from './Pages/Shareresume';
import ResumePreview from './Pages/ResumePreview';
import Profile from './Pages/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
        <Route path="/Tickpage" element={<Tickpage/>}/>
        <Route path="/Createpassword" element={<CreatePassword/>}/>
        <Route path="/Confirmationcode" element={<Confirmationcode/>}/>
        <Route path="/Createnewpassword" element={<Createnewpassword/>}/>
        <Route path="/Successfull" element={<Successfull/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Templatecolors" element={<Templatecolors/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Johndoecv" element={<Johndoecv/>}/>
        <Route path="/Joinus" element={<Joinus/>}/>
        <Route path="/Mainpage" element={<Mainpage/>}/>
        <Route path="/Effects" element={<Effects/>}/>
        <Route path="/Coverletter" element={<Coverletter/>}/>
        <Route path="/Shareresume" element={<Shareresume/>}/>
        <Route path="/ResumePreview" element={<ResumePreview/>}/>
        <Route path="/profile/:uid" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
