

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Myprofile from "./components/Myprofile";
import Guestuser from "./components/Guestuser";
import Employeedetails from "./components/Employeedetails";
import Recruitment from "./components/Recruitment";
import Training from "./components/Training";
import LoginCard from "./Login/LoginCard";
import Navbar from "./Login/Navbar";
import Login from "./Login/Login";
import Viewtraining from "./components/Viewtraining";
import Recruitmentview from "./components/Recruitmentview";
import Employeeview from "./components/Employeeview";
import GuestView from "./components/GuestView";
import Home from "./components/Home";
import Topbar from "./Topbar/Topbar";




function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Topbar/> */}
       <Routes>
       <Route path='/'element={<Navbar/>}></Route>
        <Route path='/login' element={<LoginCard/>} />
        <Route path='/adlogin'element={<Login method="get"/>}></Route>
        </Routes>
        <Topbar/>
        <Routes>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/Myprofile' element={<Myprofile/>}></Route>
       <Route path='/Guestuser' element={<Guestuser/>}></Route>
       <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
       <Route path='/Recruitment' element={<Recruitment/>}></Route>
       <Route path='/Training' element={<Training/>}></Route>
       <Route path="/TrainingView" element={<Viewtraining/>}></Route>
       <Route path="/recruitmentview" element={<Recruitmentview/>}></Route>
       <Route path="/Employeeview" element={<Employeeview/>}></Route>
       <Route path="/GuestView" element={<GuestView/>}></Route>
       </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;