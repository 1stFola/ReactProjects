import logo from './Assets/logo192.png';
// import './App.css';
// import './MyApp.css';
import Counter from './components/Counter';
import Budget from './Budget';

import BirthdayApp from './BirthdayApp';
import './BirthdayApp.css';
import SideEffect from './components/SideEffect/SideEffect';




function App() {
  return (
    //  <div className="App">
     <div className="app-container">
         {/* <Budget/>     */}

       <BirthdayApp />
       
        {/* <SideEffect /> */} 
     
        {/* <Counter />  */}
    </div>
  );
}

export default App;
