import React, { Component } from 'react';
import $ from "jquery";
import './../App.css';
import MapImage from "./../Assets/symbols/map.png";
import TelImage from "./../Assets/symbols/tel.png";
import FaxImage from "./../Assets/symbols/fax.png";
import MobileImage from "./../Assets/symbols/mobile.png";
import EmailImage from "./../Assets/symbols/email.png";

export default class ContactUs extends Component {

    render() {

        return (
            <div id="contactUsContainer">
                <div id="contactUs">
                    <h3>Contact Us</h3>
                    
                    <div id="address">
                        <img src={MapImage} width="60px" height="60px" alt="Address" />
                        <p className="symbolMatter">Office No. 2, Plot # 2,3,4,5, Shahrah-e-Waqas, <br /> Nidwa Madarsa, Saeedabad, Baldia Town, Karachi.</p>
                    </div>
                    
                    <div id="telephone">
                        <img src={TelImage} width="50px" height="50px" alt="Telephone Number" />
                        <p className="symbolMatter">+92 (21) 32814967</p>
                    </div>
                    
                    <div id="fax">
                        <img src={FaxImage} width="50px" height="50px" alt="Fax" />
                        <p className="symbolMatter">+92 (21) 32814967</p>
                    </div>

                    <div id="mobile">
                        <img src={MobileImage} width="50px" height="50px" alt="Mobile Number" />
                        <p className="symbolMatter"><span><i className="fab fa-whatsapp"></i></span> +92 (333) 2190560</p>
                    </div>
                    
                    
                    <div id="email">
                        <img src={EmailImage} width="50px" height="50px" alt="Email Address" />
                        <p className="symbolMatter">cwt2190560@yahoo.com</p>
                    </div>
                </div>

                <div id="contactFormContainer">
                    <h3 id="talk">Let's Talk</h3>
                    <h4 id="needHelpHead">Got a query? Need help?</h4>
                    <p className="symbolMatter">We would love to hear from you! Please fill out this form.</p>
                    {$(window).width() >= 576 && $(window).width() < 767 ? null : <h2 id="ampersand">&amp;</h2>}
                    <p className="symbolMatter">Don't be surprised if you hear back from us within the hour.</p>

                    <form id="contactForm">
                        
                        <div className="form-row name">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{ margin: "auto", width: "70%" }}>
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="fas fa-user"></i></span>
                                        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Name" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row userEmail">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{ margin: "auto", width: "70%" }}>
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="fas fa-envelope-open"></i></span>
                                        <input type="email" className="form-control" id="validationDefaultUsername" placeholder="Email" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-row query">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend" style={{ margin: "auto", width: "70%" }}>
                                        <span className="input-group-text" id="inputGroupPrepend2"><i className="fas fa-question"></i></span>
                                        <textarea type="text" rows={$(window).width() <= 575 ? 1 : $(window).width() >= 576 && $(window).width() < 767 ? 3 : 5} className="form-control" id="validationDefaultUsername" placeholder="Query" aria-describedby="inputGroupPrepend2" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <button type="submit" id="submitBtn" className="btn btn-light">Submit</button>
                    </form>
                </div>
                
                <nav id="footer" className="navbar navbar-light bg-light">
                    <p className="navbar-brand">Copyright 2018 &copy; Classic World Travels. All Rights Reserved.</p>
                    <p className="navbar-brand">Designed &amp; Developed by A.M Lakhani</p>
                </nav>
            </div>
        )
    }
}