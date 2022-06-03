import React from "react";
import Header from "./Header";
import Company from "./Company";
import Portfoliyo from "./Portfoliyo";
import Member from "./Members";
import Contact from "./Contact";
import Footer from "./Footer";

class Home extends React.Component{
    render(){
        return(
            <div>
               <Header/>
               <Company/>
               <Portfoliyo/>
                <Member/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
} 

export default Home;


