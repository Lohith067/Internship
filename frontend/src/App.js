// import React from 'react';
// import "./App.css";
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Login from './Pages/Auth/Login';
// import Register from './Pages/Auth/Register';
// // App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './Pages/Home/Home';
// import SetAvatar from './Pages/Avatar/setAvatar';



// const App = () => {
//   return (
    
//       <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/setAvatar" element={<SetAvatar />} />
//         </Routes>
//       </BrowserRouter>
//       </div>
//   )
// }

// export default App




// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap is installed

// // Import Pages
// import Login from './Pages/Auth/Login';
// import Register from './Pages/Auth/Register';
// import Home from './Pages/Home/Home';
// import SetAvatar from './Pages/Avatar/setAvatar';

// // Import Navbar Component
// import Navbar from './components/Navbar'; // Create a Navbar component

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         {/* Navigation Bar */}
//         <Navbar />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/setAvatar" element={<SetAvatar />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
// console.log("App component is loaded");


// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

// // Import Pages
// import Login from './Pages/Auth/Login';
// import Register from './Pages/Auth/Register';
// import Home from './Pages/Home/Home';
// import SetAvatar from './Pages/Avatar/setAvatar';

// // Import Navbar Component
// import Navbar from './components/Navbar'; // Ensure Navbar is created

// const App = () => {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         {/* Navigation Bar */}
//         <Navbar />

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/setAvatar" element={<SetAvatar />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


