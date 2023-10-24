import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
<div>
  <nav className="navbar navbar-expand-lg fixed-top position-absolute">
  <div className="container">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mt-3 mb-3  mb-lg-0">
        <li className="nav-item home me-4  position-relative">
          <a className="nav-link  active" aria-current="page" href="#">
            <i className="fa-solid fa-house-chimney" />
            <p>Home</p>
          </a>

        </li>
        <li className="nav-item me-4">
          <a className="nav-link  text-center " aria-current="page" href="#">
            <i className="fa-regular fa-file-lines" />
            <p>Page</p>
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link " aria-current="page" href="#">
            <i className="fa fa-graduation-cap" />
            <p>Classes</p>
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link  " aria-current="page" href="#">
            <i className="fa fa-edit" />
            <p>Blog</p>
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link  " aria-current="page" href="#">
            <i className="fa fa-info-circle" />                           <p>Shortcodes</p>
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link " aria-current="page" href="#">
            <i className="fa fa-shopping-basket" />
            <p>Shop</p>
          </a>
        </li>
        <li className="nav-item me-4">
          <a className="nav-link  " aria-current="page" href="#">
            <i className="fa fa-phone" />
            <p>Contact</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

  )
}
