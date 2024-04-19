import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="sidebar">
            <h2>Payroll Management System</h2>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="bi bi-house-door"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/employee" className="nav-link">
                  <i className="bi bi-people"></i> Management Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/add_category" className="nav-link">
                  <i className="bi bi-people"></i> Add Category
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/payment" className="nav-link">
                  <i className="bi bi-list-task"></i> Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/logout" className="nav-link">
                  <i className="bi bi-box-arrow-right"></i> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Payroll Management System</h4>
          </div>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
