import React, {useState} from "react";
import "../Components/landing.css"
import buy from "./buy";
import {Link} from 'react-router-dom';
import img from './img.svg'


function Main(){

    
    return(
        <div class="main">
            <div class="navbar">
                <div class="icon">
                    <h2 class="logo">Landkit.</h2>
                </div>
                <div class="menu">
                
                <ul>
                    <li><a href="">Langdins</a></li>
                    <li><a href="">Pages</a></li>
                    <li><a href="">Accounts</a></li>
                    <li><a href="">documentation</a></li>   
                    <button class="btn"><Link to={buy}>Buy now</Link></button>
                    
                </ul>
               
            </div>
            </div>

            <div className="page">
      <div className="page1">
        <h1>
          Welcome to <span>Landkit</span>, <p>Develop anything</p>
        </h1>
        <p>
          Bulid a beautiful, modern website with flexible </p><p>Bootstrap components
          built from scratch
        </p>

        <button className="bttn view">View all Pages</button>
        <button className="bttn ">Documentation</button>
      </div>
      <div className="page2">
        <img src={img} alt="Image" />
      </div>
    </div>
        </div>

    );
}

export default Main;

