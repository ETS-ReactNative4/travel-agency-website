import React, { Component } from 'react';
import './../App.css';
import ServicesPageBg from "./../Assets/brand/cwtB.png";
import DomesticTour from "./../Assets/TourPics/domestic.jpg"
import InternationalTour from "./../Assets/TourPics/intern.jpg"
import UmrahTour from "./../Assets/TourPics/Umrah.jpg"
import DomTickets from "./../Assets/TourPics/domTickets.jpg"
import AirTickets from "./../Assets/TourPics/airTickets.jpg"
import TrainTickets from "./../Assets/TourPics/train.jpg"

export default class Services extends Component {

    render() {

        return (
            <div id="servicesContainer">
                <div id="bgContainer">
                    <img src={ServicesPageBg} alt="Background" />
                </div>

                <div id="packages" className="container-fluid">
                    
                    <h3 id="tourism">Tourism &amp; Consultancy</h3>

                    <div className="row justify-content-center cardGrid">
                        <div className="card">
                            <img className="card-img-top" src={DomesticTour} alt="National Tour" />
                            <div className="card-body">
                                <h5 className="card-title">National Tours</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={InternationalTour} alt="International Tour" />
                            <div className="card-body">
                                <h5 className="card-title">International Tours</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={UmrahTour} alt="Umrah" />
                            <div className="card-body">
                                <h5 className="card-title">Umrah</h5>
                            </div>
                        </div>
                    </div>

                    <h3 id="tickets">Tickets</h3>
                    
                    <div className="row justify-content-center cardTickets">
                        <div className="card">
                            <img className="card-img-top" src={DomTickets} alt="Domestic Tickets" />
                            <div className="card-body">
                                <h5 className="card-title">Domestic Tickets</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={AirTickets} alt="International Tickets" />
                            <div className="card-body">
                                <h5 className="card-title">International Tickets</h5>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={TrainTickets} alt="Train Tickets" />
                            <div className="card-body">
                                <h5 className="card-title">Train Tickets</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}