// import { useState } from 'react'
// // import 
// // import {}
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App

// // import { Link } from 'react-router-dom'
// // import { Routes, Route } from 'react-router-dom'




// // import { Home } from "./components/Home";
// // import { Login } from "./components/Login";
// // import { Logout } from "./components/Logout";
// // // import { NewOrder } from "./components/NewOrder";
// // // import { Orders } from "./components/Orders";
// // // import { ProtectedRoute } from "./components/ProtextedRoute";

// // function App() {
// //   return (
// //     <div className="App">
// //       <div>
// //         <Link className="nav-home" to="/">
// //           Home
// //         </Link>
// //         {/* Show either login or logout below */}
// //         <Link className="nav-logout" to="/logout">
// //           Logout
// //         </Link>
// //         <Link className="nav-login" to="/login">
// //           Login
// //         </Link>
// //       </div>

// //       <Routes>
// //         <Route path='/' element={<Home />}></Route>
// //         <Route path='/login' element={<Login />}></Route>
// //         <Route path='/logout' element={<Logout />}></Route>
// //         {/* Routes are as follows:
// //         Route      Component
// //         /           Home
        
// //         /login      Login
// //         /logout     Logout
// //         /orders     Orders    Protected
// //         /neworder   NewOrder  Protected
// //         */}
// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;


import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
// import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import {Link} from "react-router-dom";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
        */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />

        <Route path="/orders" element={<Orders/>} />
        {/* <Route path="/neworder" element={<NewOrder/>} /> */}


      </Routes>
    </div>
  );
}

export default App;