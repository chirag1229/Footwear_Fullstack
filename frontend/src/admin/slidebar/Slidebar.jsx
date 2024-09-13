import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css'; // Import the CSS file

const Slidebar = () => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setCategoryOpen(!isCategoryOpen);
  };

  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-secondary navbar-dark">
        <a href="index.html" className="navbar-brand mx-4 mb-3 ">
          <h3 className="">
            <i className="fa fa-user-edit me-2" />
            Admin
          </h3>
          <span><i class="fa-solid fa-bars"></i></span>
        </a>

        <div className="navbar-nav w-100">
          <a href="index.html" className="nav-item nav-link active">
            <i className="fa fa-tachometer-alt me-2" />
            Dashboard
          </a>

          <div className="nav-item">
            <a
              href="#"
              className="nav-link"
              onClick={toggleCategoryDropdown}
              aria-expanded={isCategoryOpen}
            >
              <i className="fa fa-th me-2" />
              Category
              <i className={`fa ms-2 ${isCategoryOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
            </a>
            {isCategoryOpen && (
              <div className="dropdown-menu d-block">
                <a href="category1.html" className="dropdown-item">
                  <i className="fa fa-tag me-2" />
                   MEN Category 
                </a>
                <a href="category2.html" className="dropdown-item ">
                  <i className="fa fa-tag me-5" />
                    WOMEN Category 
                </a>
                
              </div>
            )}
          </div>

          <a href="form.html" className="nav-item nav-link">
            <i className="fa fa-keyboard me-2" />
            Forms
          </a>
          <a href="table.html" className="nav-item nav-link">
            <i className="fa fa-table me-2" />
            Tables
          </a>

        </div>
      </nav>
    </div>
  );
};

export default Slidebar;
