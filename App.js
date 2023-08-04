// import logo from './logo.svg';
// import './App.css';
// import Functonals from './TwoComponents/Functonals';
// import Class from './TwoComponents/Class';
// // import Calc from './Components/Calc';
// // import Bmi from './BmiComponents/Bmi';
// import Array from './Arrays/Array';
// import Emoji from './Emoji/Emoji';
// import Emojipicker from  'emoji-picker-react';
// import Clickcounter from "./Hover/Clickcounter";
// import Navbar from "./BmiComponents/BootStramp/Navbar";
// import Hover from "./Hover/Hover";
import React from "react";
import ComponentD from "./Component-usecontext/ComponentD";
import ClassComponentCounter from "./Hooks/ClassComponentCounter";
import FunctionalComponentCounter from "./Hooks/FunctionalComponentCounter";
import Mousepointer from "./Hooks/Mousepointer";
import Mousepointerfunc from "./Hooks/Mousepointerfunc";
import TimeUp from "./Timer/TimeUp";
import Timer from "./Timer/Timer";
import TimerFunctional from "./Timer/TimerFunctional";
import Beat from "./Game/Beat";
import Apple from "./Game/Apple";
export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {
        // <Calc/>
        // <Bmi/>
      }
        {/* <Functonals/>
        <Class/> */}
      {/* <Array></Array> */}
      {/* <Emoji></Emoji> */}
      {/* <Emojipicker></Emojipicker> */}
       {/* <Navbar></Navbar>   
       <Clickcounter></Clickcounter>    
      <Hover></Hover>
      <ClassComponentCounter></ClassComponentCounter>
      <FunctionalComponentCounter></FunctionalComponentCounter>
      <Mousepointer></Mousepointer>
      <Mousepointerfunc></Mousepointerfunc>
      <Timer></Timer>
      <TimerFunctional></TimerFunctional>
      <TimeUp></TimeUp> */}
      {/* <UserContext.Provider value={'keep smiling'}>
      <ComponentD></ComponentD>
       
      </UserContext.Provider> */}
      {/* <Beat></Beat> */}
      <Apple></Apple>
    </div>
  );
}

export default App;
