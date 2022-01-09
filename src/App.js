import { createContext } from "react";
import "./App.css";
// import ConA from "./Components/ConA";
import ConA from "./Components/Pokemon/ConA";
// import Effcet from "./Components/Effcet";


const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <div className="App">
      {/* <FirstName.Provider value={"Md Hafijul"}>
        <LastName.Provider value={"Islam"}>
          <ConA />
        </LastName.Provider>
      </FirstName.Provider> */}
      {/* <Effcet /> */}
      <ConA />
    </div>
  );
}

export default App;
export { FirstName, LastName };
