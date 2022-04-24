import logo from './Assets/logo192.png';
// import './App.css';
// import './MyApp.css';
import Counter from './components/Counter';

import Budget from './Budget';
import React, { useState } from 'react';
// import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// import BirthdayApp from './BirthdayApp'; // Notice: This brought in the pink css
import SideEffect from './components/SideEffect/SideEffect';
import Authentication from './Authentication';
import Login from './components/Authentication/Login';




function App() {

// const [show, setShow] = useState(false)
    
return (

  <div className="app-container">
  <Router> 
  
        <Switch>
          <Route exact path="/">
              <Authentication/>
            </Route>
  
          <Route path="/dashboard/:identity">
              <Budget />
            </Route>   
               
       </Switch>
  
  </Router>
  </div>
      // {/* </div> */}
    );
  }
  
  export default App;




  //  const [owner, setOwner] = useState("") 

//   return (

// <div className="app-container">
// <Router> 

//       <Switch>
//         <Route exact path="/">
//             <Authentication  setOwner={setOwner} />
//           </Route>

//         <Route path="/dashboard/:identity">
//             <Budget  owner={owner} />
//           </Route>   
             
//      </Switch>

// </Router>
// </div>
//     // {/* </div> */}
//   );
// }

// export default App;





//   return (
//     //  <div className="App">
//      <div className="app-container">

//           {/* <Budget />     */}

//           <Router>
//           <Authentication />
//           </Router>
          
//          {/* <Login />     */}

//        {/* <BirthdayApp /> */}
       
//         {/* <SideEffect /> */} 
     
//         {/* <Counter />  */}
//     </div>
//   );
// }

// export default App;















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
