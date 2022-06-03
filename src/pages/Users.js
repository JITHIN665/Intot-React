import React from "react";

function Users() {
  return (
    <div>
    <section className="colored-section">
<div className="container-fluid">
<nav className="navbar navbar-expand navbar-dark">
<a className="navbar-brand" href>INTOT</a>
<div className=" navbar-collapse  ">
<ul className="navbar-nav ml-auto d-none d-lg-flex ml-auto ">
  <li className="nav-item ">
    {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/login.png" alt="login" /></span>Login</a> */}
  </li>
  <li className="nav-item">
    {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/signup.png" alt="signup" /></span>Sign Up</a> */}
  </li>
  <li className="nav-item">
    {/* <a className="nav-link" href><span className="p-4"><img src="assets/images/search-icon.png" alt="Search" /></span></a> */}
  </li>
</ul>
</div>
{/*  navbar button*/}
<div className="custom_menu-btn">
<button onclick="openNav()">
  <span className="bar1">
  </span>
  <span className="bar2">
  </span>
  <span className="bar3">
  </span>
</button>
</div>
<div id="myNav" className="overlay">
<div className="overlay-content">
  <a href="index.html">HOME</a>
  <a href="index.html">TEAM</a>
  <a href="Portfoliyo.html">PORTFOLIO</a>
  <a href="index.html">CONTACT US</a>
</div>
</div>
{/* button end*/}
</nav>
</div>
</section>
{/* Users Data */}
<section className="Users-info">
 
         <div className="container">
            <h2>Users</h2>
              <div className="row deck">
                <div className="col-md-4">
                  <div className="card">
                    <img src="assets/images/card-img-1.png" alt="card1" />
                    <h5 className="card-text">10 YEARS EXPERIENCE</h5>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                  </div>
                  <div>
                    <a className="new-btn" href>Read More</a>
                  </div>
                </div>
            
              </div>
        </div>

</section>
{/* End Users */}
{/* footer */}
<section className="footer">
<div>
<hr className="hr-footer" />
</div>
<p>
©2022 All Rights Reserved. Design by
<a href="https://www.linkedin.com/in/jithinraja/">JITHINRAJ</a>
</p>
</section>
    </div>
  );
}


export default Users;