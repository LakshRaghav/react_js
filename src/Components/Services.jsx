import React from "react";
import { Link, Outlet,Route,Routes } from "react-router-dom";
import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';


export default class Services extends React.Component {
    render() {
        return (
            <>
                <h1>Services</h1>

                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="Service1">Service1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Service2">Service2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Service3">Service3</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            {/* <Outlet /> */}
                            <Routes>
                                <Route path="Service1" element={<Service1 />}></Route>
                                <Route path="Service2" element={<Service2 />}></Route>
                                <Route path="Service3" element={<Service3 />}></Route>
                            </Routes>    
                        </div>
                    </div>
                </div>
            </>
        )
    }
}