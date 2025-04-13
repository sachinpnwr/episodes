import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="main-navbar navbar">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-expanded="false">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="main-navbar collapse" id="navbarToggleExternalContent">
                <div className="p-4">
                  <h5 className="h4">Test build</h5>
                  <span className="">Toggleable via the navbar brand.</span>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;