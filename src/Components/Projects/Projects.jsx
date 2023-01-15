import React, { useState } from "react";
import "./Projects.css";

import {
  
  SiHtml5,
 
  SiJavascript,
  
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

import pharmeasy from "../../Assets/images/pharmeasy.png";
import ideakart from "../../Assets/images/ideakart.png";
import cozy from "../../Assets/images/cozy.png"
export const Projects = () => {


  return (
    <>
      
        <h2 className="section__title different" data-aos="fade-right" id="projects">
          Projects
        </h2>

        {/* Pharmeasy*/}

        <div className="projects_container" >
          


          <div className="project"  >
                <img
                className="imgp"
                  src={pharmeasy}
                  alt="abc"
                />
            <h4 style={{marginTop:"20px"}}>PharmEasy.com | Clone</h4>
              <p>
              Groups Project: 04 Collaborators | Duration: 04 Days
              </p>
              
                <h3>Tech Stack:</h3>
                <h5>HTML | CSS | JS </h5>
              <div style={{display:"flex",width:"fit-content",margin:"auto"}}>
             <a
                  href="https://euphonious-profiterole-0d7e49.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                
                
                <a
                  href="https://github.com/shiivaniiawasthii/jumpy-pigs-3147"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn--outline">
                    View Code
                  </button>
                </a>
              </div>
            
          </div>


          {/* cozytrip */}
          <div className="project" >

          <img
                className="imgp"
                  src={cozy}
                  alt="abc"
                />
            <h4 style={{marginTop:"20px"}}>Cozytrip</h4>
              <p>
              Cozytrip is online Holiday Home Rental Companies from there you can book hotels , make your trip plan.
              </p>
              
                <h3>Tech Stack:</h3>
                <h5>React JS| Redux | Node JS | Express JS | Mongo DB |HTML | CSS | JS </h5>
              <div style={{display:"flex",width:"fit-content",margin:"auto"}}>
             <a
                  href="https://frontend-shvaniawsthi001-gmailcom.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn--outline onbt">
                    See this Live
                  </button>
                </a>
                
                
                <a
                  href="https://github.com/rahulkr-dev/tripVilla_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button type="button" className="btn btn--outline">
                    View Code
                  </button>
                </a>

          </div>
          </div>

{/* ideakart */}

          <div className="project" border="1px solid blue">

<img
      className="imgp"
        src={ideakart}
        alt="abc"
      />
  <h4 style={{marginTop:"20px"}}>Ideakart</h4>
    <p>
    Ideakart is a site that gives yoy an idea and a platform for the book you want. They offer a huge collection of books in diverse categories
    </p>
    
      <h3>Tech Stack:</h3>
      <h5>HTML | CSS | JS </h5>
    <div style={{display:"flex",width:"fit-content",margin:"auto"}}>
   <a
        href="https://luminous-nougat-2006e1.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn--outline onbt">
          See this Live
        </button>
      </a>
      
      
      <a
        href="https://github.com/shiivaniiawasthii/U2-CW-Ideacart_Project"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn--outline">
          View Code
        </button>
      </a>

</div>
</div>

{/* <div className="project" border="1px solid blue">

<img
      className="imgp"
        src={pharmeasy}
        alt="abc"
      />
  <h4 style={{marginTop:"20px"}}>PharmEasy.com | Clone</h4>
    <p>
    Groups Project: 04 Collaborators | Duration: 04 Days
    </p>
    
      <h3>Tech Stack:</h3>
      <h5>HTML | CSS | JS </h5>
    <div style={{display:"flex",width:"fit-content",margin:"auto"}}>
   <a
        href="https://euphonious-profiterole-0d7e49.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn--outline onbt">
          See this Live
        </button>
      </a>
      
      
      <a
        href="https://github.com/Ankur982/-profuse-yak-8322/tree/main/Ankur_Singh_fw_19_0272"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="btn btn--outline">
          View Code
        </button>
      </a>

</div>
</div> */}


     

      
    

</div>
    </>
  );
};
