import React, { useState } from "react";
import './Main.css';
import $ from "jquery"; // Import jQuery
import Header from '../header/Header';
import Dashboard from '../Pages/Dashboard';
import Form from "../Pages/Form";

function Main() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar state
    const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false); // Manage dropdown state
    const [activeTab, setActiveTab] = useState('home'); // Manage active tab state

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        $("#sidebar").toggleClass("sidebar-closed");
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setIsCategoryDropdownOpen(false); // Close dropdown after selection
    };

    return (
        <>
            <div className="d-flex align-items-start">
                <aside
                    id="sidebar"
                    className={`p-3 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
                >
                    <div className="title">
                        <h4 className="d-flex justify-content-between">
                            {isSidebarOpen && <span>Admin</span>}
                            <span onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                                <i className={`bi bi-${isSidebarOpen ? "list" : "x-lg"}`}></i>
                            </span>
                        </h4>
                    </div>
                    <div
                        className="nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <button
                            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected={activeTab === 'home'}
                            onClick={() => handleTabChange('home')}
                        >
                            <span>
                                <i className="bi bi-house-door"></i> {''}
                                {isSidebarOpen && "Dashboard"}
                            </span>
                        </button>
                        {isSidebarOpen && <p>Pages</p>}
                        <button
                            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected={activeTab === 'profile'}
                            onClick={() => handleTabChange('profile')}
                        >
                            <span>
                                <i className="bi bi-table"></i> {''}
                                {isSidebarOpen && "form"}
                            </span>
                        </button>
                        <div className="nav-link" onClick={toggleCategoryDropdown} style={{ cursor: "pointer" }}>
                            <span>
                                <i className="bi bi-book"></i> {''}
                                {isSidebarOpen && "Category"}
                            </span>
                            <i className={`bi bi-chevron-${isCategoryDropdownOpen ? "up" : "down"}`} style={{ marginLeft: '8px' }}></i>
                        </div>
                        {isCategoryDropdownOpen && (
                            <div className="category-dropdown">
                                <button
                                    className={`dropdown-item ${activeTab === 'men' ? 'active' : ''}`}
                                    id="v-pills-men-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-men"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-men"
                                    aria-selected={activeTab === 'men'}
                                    onClick={() => handleTabChange('men')}
                                >
                                    Men
                                </button>
                                <button
                                    className={`dropdown-item ${activeTab === 'women' ? 'active' : ''}`}
                                    id="v-pills-women-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#v-pills-women"
                                    type="button"
                                    role="tab"
                                    aria-controls="v-pills-women"
                                    aria-selected={activeTab === 'women'}
                                    onClick={() => handleTabChange('women')}
                                >
                                    Women
                                </button>
                            </div>
                        )}
                        <button
                            className={`nav-link ${activeTab === 'settings' ? 'active' : ''}`}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected={activeTab === 'settings'}
                            onClick={() => handleTabChange('settings')}
                        >
                            <span>
                                <i className="bi bi-person-circle"></i> {''}
                                {isSidebarOpen && "User"}
                            </span>
                        </button>
                        {isSidebarOpen && <p>Data</p>}
                    </div>
                </aside>
                <div className="tab-content maina w-100" id="v-pills-tabContent">
                    <Header />
                    <div
                        className={`tab-pane fade ${activeTab === 'home' ? 'show active' : ''}`}
                        id="v-pills-home"
                        role="tabpanel"
                        aria-labelledby="v-pills-home-tab"
                    >
                        <Dashboard />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'profile' ? 'show active' : ''}`}
                        id="v-pills-profile"
                        role="tabpanel"
                        aria-labelledby="v-pills-profile-tab"
                    >
                        <Form/>
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'men' ? 'show active' : ''}`}
                        id="v-pills-men"
                        role="tabpanel"
                        aria-labelledby="v-pills-men-tab"
                    >
                        Men
                        {/* Men category content */}
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'women' ? 'show active' : ''}`}
                        id="v-pills-women"
                        role="tabpanel"
                        aria-labelledby="v-pills-women-tab"
                    >
                        Women
                        {/* Women category content */}
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'settings' ? 'show active' : ''}`}
                        id="v-pills-settings"
                        role="tabpanel"
                        aria-labelledby="v-pills-settings-tab"
                    >
                        {/* <User /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
