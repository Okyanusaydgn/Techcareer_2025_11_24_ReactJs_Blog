// rfce => TAB

// I18N
import { withTranslation } from "react-i18next";

// ROUTER
import { Link } from "react-router-dom";

// REACT
import React from "react";

// CSS DARK MODE
import DarkMode from "./DarkMode/DarkMode";
import OtherLanguageReusability from "../internationalization/OtherLanguageReusability";

// FUNCTION
function HeaderComponent(props) {
    // Object Destructuring
    const { t } = props; // i18n

    // RETURN
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <div className="container">
                    {/* LOGO */}
                    <Link className="navbar-brand" style={{ color: "#123" }} to="/">
                        <i className={props.logo}></i>
                    </Link>

                    {/* TOGGLER */}
                    <button
                        className="navbar-toggler d-lg-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId"
                        aria-controls="collapsibleNavId"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* NAVBAR CONTENT */}
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        {/* SOL MENU (LINKLER) */}
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog/category/list">
                                    Blog Category
                                </Link>
                            </li>

                            <li className="nav-item ms-3">
                                <Link className="nav-link" to="/blog/list">
                                    Blog
                                </Link>
                            </li>
                        </ul>

                        {/* SAĞ TARAF: Dark Mode + Dil + Login + Arama */}
                        <ul className="navbar-nav mt-2 mt-lg-0">
                            {/* Dark Mode Button */}
                            <li className="nav-item d-flex align-items-center me-3">
                                <DarkMode />
                            </li>

                            {/* Language Dropdown */}
                            <li className="nav-item dropdown me-3">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="languageDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {t("language")}
                                </a>

                                <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="languageDropdown"
                                >
                                    <OtherLanguageReusability />
                                </div>
                            </li>

                            {/* Login Dropdown */}
                            <li className="nav-item dropdown me-3">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="loginDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {t("login")}
                                </a>

                                <div
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="loginDropdown"
                                >
                                    <Link className="dropdown-item" to="/login">
                                        {t("login")}
                                    </Link>
                                    <Link className="dropdown-item" to="/register/create">
                                        {t("register")}
                                    </Link>
                                </div>
                            </li>

                            {/* Search Form */}
                            <li className="nav-item">
                                <form className="d-flex my-2 my-lg-0">
                                    <input
                                        type="text"
                                        id="tags"
                                        className="form-control me-sm-2"
                                        placeholder={t("search")}
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-outline-success my-2 my-sm-0"
                                    >
                                        {t("search")}
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar sabit olduğu için üstte boşluk bırak */}
            <span style={{ marginBottom: "2rem", display: "block" }} />
        </header>
    );
}

export default withTranslation()(HeaderComponent);
