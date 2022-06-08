import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

function Register(){
  const [input, setInput]=useState({
    firstname:"",
    email:"",
    mobile:"",
    password:"",
    message:"",

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
    firstname: input.firstname,
    email: input.email,
    mobile: input.mobile,
    password: input.password,
    message: input.message,
  }
  // Navigate("/Login")
  
  axios.post("http://localhost:3001/create",newUser)

}
// let Navigate=useNavigate();

  return(
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
<section id="contact">
<div className="container-consult">
<h5>Don't Hesitate To Ask</h5>
<h2>FREE CONSULTATION</h2>
</div>
<div className="contact-content">
<div className="row">
<div className="col-lg-6">
{/* form start */}

<div className="container">
  <form action="#">
    <label htmlFor="fname">Name</label>
    <input onChange={ handleChange } type="text" id="fname"  name="firstname" value={input.firstname}  autoComplete="off"  className="form-control" />
    <label htmlFor="lname">Email</label>
    <input onChange={ handleChange } type="email" id="email"  name="email" value={input.email} autoComplete="off" className="form-control" />
    <label htmlFor="lname">Phone Number</label>
    <input onChange={ handleChange } type="text" id="mobile"  name="mobile" value={input.mobile}  autoComplete="off" className="form-control"/>
    <label htmlFor="lname">Password</label>
    <input onChange={ handleChange } type="password" id="password"  name="password" value={input.password}  autoComplete="off" className="form-control"/>
    <label htmlFor="subject">Message</label>
    <input onChange={ handleChange } type="text" id="message"  name="message" value={input.message}  autoComplete="off" className="form-control"/>
    <button onClick={ handleClick } className="Reg-btn" type="submit">Register</button>

  </form>
  <p><br />
              By clicking the Register button,you agree to our <br />
              <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        
              Already have an account?<Link to= "/Login" style={{textDecoration:"none",paddingLeft:"10px"}}>Login
                                            </Link>
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
<section className="info">
<div className="container info_content">
<div>
<div className="row">
<div className="col-md-6">
  <div className="row">
    <div className="col-md-6">
      <h5>
        About Us
      </h5>
      <ul>
        <li>
          <a href>
            It is a long established
          </a>
        </li>
        <li>
          <a href>
            fact that a reader will be
          </a>
        </li>
        <li>
          <a href>
            distracted by the read
          </a>
        </li>
        <li>
          <a href>
            able LoremIt is a long es
          </a>
        </li>
        <li>
          <a href>
            tablished fact that a
          </a>
        </li>
        <li>
          <a href>
            reader will be distracted
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-6">
      <h5>
        Contact Us
      </h5>
      <ul>
        <li>
          <a href>
            It is a long established
          </a>
        </li>
        <li>
          <a href>
            fact that a reader will be
          </a>
        </li>
        <li>
          <a href>
            distracted by the read
          </a>
        </li>
        <li>
          <a href>
            able LoremIt is a long es
          </a>
        </li>
        <li>
          <a href>
            tablished fact that a
          </a>
        </li>
        <li>
          <a href>
            reader will be distracted
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="form_container mt-5">
    <form action>
      <input type="email" placeholder="Enter Your email" />
      <button type="submit">
        SUBSCRIBE
      </button>
    </form>
  </div>
</div>
<div className="col-md-6">
  <div className="info_img-box">
    <img src="assets/images/map.png" alt="" />
  </div>
  <div className="d-flex justify-content-end pr-5">
    <div className="social-box">
      <a href>
        <img src="assets/images/fb.png" alt="" />
      </a>
      <a href>
        <img src="assets/images/twitter.png" alt="" />
      </a>
      <a href>
        <img src="assets/images/linkedin1.png" alt="" />
      </a>
      <a href>
        <img src="assets/images/instagram1.png" alt="" />
      </a>
    </div>
  </div>
</div>
</div>
</div>
</div>
</section>
{/* end info*/}
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
  )
}

export default Register;


