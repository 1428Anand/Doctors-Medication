import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Registrationpage from './pages/registrationpage';
import Pprofilepage from './pages/pprofilepage';
import Dprofilepage from './pages/dprofilepage';
import Raisequerypage from './pages/raisequerypage';
import Querypage from './pages/querypage';
import Plistpage from './pages/plistpage';
import Dlistpage from './pages/dlistpage';
import Drlogin from './pages/drloginpage';
import Dashboardpage from './pages/dashboardpage';
import Prescriptionpage from './pages/prescriptionpage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/login1' element={<Drlogin/>}/>
        {/* <Route path='/registration' element={<Registrationpage/>}/> */}
        <Route path='/updateprofile/:id' element={<Registrationpage/>}/>
        <Route path='/profile' element={<Pprofilepage/>}/>
        <Route path='/dashboard' element={<Dashboardpage/>}/>
        <Route path='/dprofile' element={<Dprofilepage/>}/>
        <Route path='/raisequery' element={<Raisequerypage/>}/>
        <Route path='/querypage' element={<Querypage/>}/>
        <Route path='/patientlist' element={<Plistpage/>}/>
        <Route path='/doctorslist' element={<Dlistpage/>}/>
        <Route path='/updatequery/:id' element={<Raisequerypage/>}/>
        <Route path='/prescription' element={<Prescriptionpage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
