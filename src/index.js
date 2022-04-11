import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Help from './Components/Help';
import Head from './Components/Head';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Service1 from './Components/Service1';
import Service2 from './Components/Service2';
import Service3 from './Components/Service3';
import R_state from './Components/R_state';
import Func_state from './Components/r_state_func';

ReactDOM.render(
  <React.StrictMode>
  
   
   
     <Router>
    <Head />
      <Routes>
        <Route path="/" element={<R_state />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="services/*" element={<Services />}>
               <Route path="Service1" element={<Service1 />}></Route>
               <Route path="Service2" element={<Service2 />}></Route>
               <Route path="Service3" element={<Service3 />}></Route>
              <Route path=":name" element={<serv/>}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/help" element={<Help/>}></Route>
      </Routes>
    </Router> 

    {/* <Func_state/> */}


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
