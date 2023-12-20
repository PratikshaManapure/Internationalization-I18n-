import React, { useEffect, useState } from "react";
import './Home.css';
import I18n from "../../utils/I18n";

function Home(){

    const usersCount = 25;

   
    
    return(
        <div>
        <h1>{I18n("welcomeMessage")}</h1>
        <p>
            {I18n("normalMessage")}
        </p>

        <h1>
            {I18n("greetingMessage")}
        </h1>

        
        <select
         defaultValue={localStorage.getItem("lang")}
         onChange={(e)=>{
            localStorage.setItem("lang", e.target.value);
            window.location.reload();
        }}>
            <option value="mr">marathi</option>
            <option value="hi">hindi</option>
            <option value="en">english</option>
        </select>
        <p>
            {I18n("userStateMessage","<studentCount>",usersCount)}
        </p>
        </div>
    )
}

export default Home;