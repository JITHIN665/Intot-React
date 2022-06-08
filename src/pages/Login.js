import React from "react";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import {useState} from "react";

function Login() {
  const [input, setInput]=useState({
    email:"",
    password:"",

  });

   function handleChange(event) {
   const {name, value} = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value,
      };

      })
    }
function handleClick(event){
  event.preventDefault();
  const newUser={
    email: input.email,
    password: input.password,
  
  }
  

  axios.post("http://localhost:3001/login",newUser)

}







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
<section id="contact">
<div className="container-consult">
<h5>Welocme Back</h5>
<h2>LOGIN TO THE FUTURE</h2>
</div>
<div className="contact-content">
<div className="row">
<div className="col-lg-6">
{/* form start */}
<div className="container">
  <form action="#">
    <label htmlFor="lname">Email</label>
    <input onChange={ handleChange } type="email" id="email"  name="email" value={input.email} autoComplete="off" className="form-control" />
    {/* <label htmlFor="lname">Phone Number</label>
    <input  type="text" id="mobile"  name="mobile"   autoComplete="off" className="form-control"/> */}
    <label htmlFor="lname">Password</label>
    <input onChange={ handleChange } type="password" id="password"  name="password" value={input.password}  autoComplete="off" className="form-control"/>
     <button onClick={ handleClick } className="Reg-btn" type="submit">Register</button>

  </form>
  <p><br />
              If you doesn't have an account then <Link to= "/Register">Register
              </Link>    <br />
              <a href="/">Terms and Condition</a> and <a href="/">Policy Privacy</a>
          </p>
</div>
{/* form end*/}
</div>
<div className="col-lg-6">
<img src="assets/images/form-img.png" className="contact-image" alt="Img" />
</div>
</div>
</div>
</section>
{/* info section */}
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


export default Login;