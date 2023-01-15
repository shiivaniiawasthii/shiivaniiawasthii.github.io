import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

import DescriptionIcon from "@material-ui/icons/Description";

import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right">
          Hi, I am <span className="about__name">Shivani Awasthi</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          A Passionate and Quick learner Full Stack Web Developer with 1200+ hours hands on Coding experience and  having an experience of building Web applications with JavaScript | Reactjs | Nodejs | MongoDb | Redux
          and some other cool libraries and frameworks.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/shiivaniiawasthii"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:shvaniawsthi001@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
       
         
          <a
            href="https://www.linkedin.com/in/shivani-awsthi/"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1-0BBI7IdfdwCDlYZ3dcD9m11krdDvbei/view?usp=sharing"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <DescriptionIcon />
          </a>
          <a
            href="https://www.google.com/maps/place/Burger+%26+Chowmein+Point/@26.801109,83.3975589,17z/data=!4m18!1m12!4m11!1m3!2m2!1d83.3997047!2d26.8008408!1m6!1m2!1s0x399145161eabc53d:0x4b1c906e6901b832!2sGyan+International+School,+Semra+No.2,+Medical+College+Road,+behind+Chargawan+Block,+Gorakhpur,+Uttar+Pradesh+273013!2m2!1d83.3997476!2d26.801109!3m4!1s0x399145a88676b519:0x9e3e09d258f29b40!8m2!3d26.7999553!4d83.4000014"
            aria-label="github"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            
          </a>
        </div>
      </div>
      <Introduction />
      <section id="#timeline">
      <Timeline />
      </section>
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
