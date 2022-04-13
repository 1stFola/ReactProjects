import logo from './Assets/logo192.png';
// import './App.css';
// import './MyApp.css';
import Counter from './components/Counter';

import Login from './Login';
import Budget from './Budget';
import React, { useState } from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {BrowserRouter, Routes, Route,} from "react-router-dom";


// import BirthdayApp from './BirthdayApp'; // Notice: This brought in the pink css
import SideEffect from './components/SideEffect/SideEffect';
import Authentication from './Authentication';




function App() {

  return (
    //  <div className="App">
     <div className="app-container">

          <Budget />    
          {/* <Authentication /> */}

         {/* <Login />     */}

       {/* <BirthdayApp /> */}
       
        {/* <SideEffect /> */} 
     
        {/* <Counter />  */}
    </div>
  );
}

export default App;















  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  // return (
  //   <div>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/budget" element={<Budget />}>
  //         <Budget/>
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
// }


// export default App;
