import React, { useEffect, useState, useContext } from "react";
import { IconRound, ReadMore } from "../Start/StartPage";
import ArrowWhite from "../../Assets/ArrowWhite.svg";
import "./AboutMe.css";
import Me from "../../Assets/TheMan.jpg";
import MeSmall from "../../Assets/MeSmall.jpg";
import Plus from "../../Assets/plus.svg";
import { Context } from "../../App";
import { pageVariantsIn } from "../../Framer";
import { motion } from "framer-motion";

const AboutMe = () => {
  const [myImage, setMyImage] = useState(Me);
  const { setSmallScreen } = useContext(Context);

  const handleResize = () => {
    if (window.innerWidth < 840) {
      setMyImage(MeSmall);
    } else {
      setMyImage(Me);
    }
  };
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    setSmallScreen(false);
    handleResize();
    document.title = `About`;
  }, []);

  return (
    <motion.div
      className="about-me"
      variants={pageVariantsIn}
      initial="initial"
      animate="animate"
    >
      <IconRound />
      <div className="about-me-top flex space-between">
        <h1>
          Work <br /> Frontend Web Development
        </h1>
        <ReadMore
          Arrow={ArrowWhite}
          text={"Latest portfolio"}
          link={"portfolio"}
        />
      </div>
      <div className="my-picture flex space-between">
        <p className="bluish capitalize">
          Individual <br /> projects for <br /> multiple global <br />
          companies
        </p>
        <img src={myImage} alt="This is me" className="me" />
      </div>
      <div className="my-description flex space-between">
        <h3>About Me</h3>
        <div className="flex space-between">
          <div className="bs-about-me">
            <p>
              My Name is Amos Machora! I am a professional frontend web
              developer.
            </p>
            <p>
              I have over 4 years learning + working experience in developing
              clean, maintainable, responsive and fast UI .
            </p>
            <p>
              I`m a positive minded and eager to learn individual who works
              fantastically well under pressure to produce highly credible
              results.
            </p>
            <p>
              I am very passionate about the field of programming in general
              with little experience in backend development using Java and its
              Spring framework but backend is not my focus as at now.
            </p>
          </div>
          <p className="capitalize bluish arrange">
            Let's arrange a <br /> conversation <br /> about that project!
          </p>
        </div>
      </div>
      <div className="tech-stack flex space-between align-center">
        <div className="tech-stack-left">
          <h2>
            TECHNOLOGY <br /> STACK
          </h2>
          <div className="language-icons flex-v align-center">
            <svg
              fill="#ff5c00"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="160px"
              height="160px"
              className="figma"
            >
              <path
                fill="none"
                stroke="#ff5c00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M29,75L29,75c-6.627,0-12-5.373-12-12l0,0c0-6.627,5.373-12,12-12h12v12C41,69.627,35.627,75,29,75z"
              />
              <path
                fill="none"
                stroke="#ff5c00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M52.5,28H41V5h11.5C58.851,5,64,10.149,64,16.5l0,0C64,22.851,58.851,28,52.5,28z"
              />
              <path
                fill="none"
                stroke="#ff5c00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M29.5,28H41V5H29.5C23.149,5,18,10.149,18,16.5l0,0C18,22.851,23.149,28,29.5,28z"
              />
              <path
                fill="none"
                stroke="#ff5c00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M29.5,51H41V28H29.5C23.149,28,18,33.149,18,39.5l0,0C18,45.851,23.149,51,29.5,51z"
              />
              <circle
                cx="53.478"
                cy="40.5"
                r="10.5"
                fill="none"
                stroke="#ff5c00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path d="M36,57c-0.27,0-0.52-0.101-0.71-0.29C35.1,56.52,35,56.27,35,56c0-0.26,0.11-0.521,0.29-0.71c0.38-0.37,1.04-0.37,1.42,0 C36.89,55.479,37,55.74,37,56c0,0.27-0.1,0.52-0.29,0.71C36.52,56.899,36.27,57,36,57z" />
              <path d="M27.17,70.79L27.17,70.79c-0.54-0.13-0.87-0.67-0.75-1.2l0,0c0.13-0.54,0.67-0.88,1.2-0.75l0,0l0,0l0,0 c0.54,0.13,0.87,0.67,0.75,1.2l0,0c-0.11,0.46-0.52,0.77-0.97,0.77l0,0C27.32,70.81,27.24,70.8,27.17,70.79z" />
              <path d="M30.3,69.95c-0.17-0.521,0.11-1.091,0.63-1.271l0,0l0,0l0,0c0.52-0.18,1.09,0.101,1.27,0.63l0,0 c0.18,0.521-0.1,1.09-0.63,1.26l0,0c-0.1,0.04-0.21,0.061-0.32,0.061l0,0C30.84,70.63,30.45,70.37,30.3,69.95z" />
              <path d="M23.32,68.63c-0.39-0.39-0.39-1.03,0.01-1.42l0,0c0.39-0.391,1.02-0.38,1.41,0.01l0,0c0.39,0.39,0.39,1.03,0,1.42l0,0 c-0.2,0.19-0.45,0.29-0.71,0.29l0,0C23.77,68.93,23.52,68.83,23.32,68.63z" />
              <path d="M33.79,68.2c-0.43-0.351-0.49-0.98-0.14-1.41l0,0c0.35-0.431,0.98-0.49,1.4-0.141l0,0c0.43,0.351,0.49,0.98,0.14,1.41l0,0 c-0.19,0.24-0.48,0.36-0.77,0.36l0,0C34.2,68.42,33.97,68.35,33.79,68.2z" />
              <path d="M35.82,64.87c-0.55-0.07-0.94-0.57-0.87-1.12l0,0c0.07-0.54,0.57-0.931,1.12-0.86l0,0c0.55,0.07,0.94,0.57,0.87,1.12l0,0 c-0.07,0.5-0.5,0.87-0.99,0.87l0,0C35.9,64.88,35.86,64.88,35.82,64.87z" />
              <path d="M35,59.97c0-0.55,0.45-1,1-1l0,0c0.55,0,1,0.45,1,1l0,0c0,0.55-0.45,1-1,1l0,0C35.45,60.97,35,60.52,35,59.97z" />
              <g>
                <path d="M46,11c-0.13,0-0.26-0.03-0.38-0.08c-0.12-0.05-0.23-0.12-0.33-0.21c-0.09-0.101-0.16-0.21-0.21-0.33 C45.03,10.26,45,10.13,45,10c0-0.26,0.11-0.521,0.29-0.71c0.1-0.09,0.21-0.16,0.33-0.21C45.8,9,46,8.979,46.2,9.02 c0.06,0.011,0.12,0.03,0.18,0.061c0.06,0.02,0.12,0.05,0.18,0.09c0.05,0.03,0.1,0.08,0.15,0.12C46.89,9.479,47,9.74,47,10 c0,0.27-0.1,0.52-0.29,0.71c-0.1,0.09-0.21,0.16-0.33,0.21S46.13,11,46,11z" />
                <path d="M58,16.52c0-0.56,0.45-1,1-1l0,0c0.56,0,1,0.45,1,1l0,0c0,0.55-0.45,1-1,1l0,0C58.44,17.52,58,17.069,58,16.52z" />
                <path d="M56.91,13.22c-0.33-0.439-0.23-1.07,0.21-1.4l0,0c0.44-0.329,1.07-0.239,1.4,0.211l0,0c0.33,0.439,0.24,1.069-0.21,1.399 l0,0c-0.18,0.13-0.39,0.19-0.59,0.19l0,0C57.41,13.62,57.11,13.479,56.91,13.22z" />
                <path d="M54.07,11.229c-0.53-0.16-0.83-0.72-0.67-1.25l0,0c0.16-0.529,0.71-0.83,1.24-0.67l0,0c0.53,0.16,0.83,0.721,0.67,1.25 l0,0c-0.13,0.431-0.52,0.71-0.96,0.71l0,0C54.26,11.27,54.17,11.26,54.07,11.229z" />
                <path d="M49.21,10c0-0.55,0.45-1,1-1l0,0c0.55,0,1,0.45,1,1l0,0c0,0.55-0.45,1-1,1l0,0C49.66,11,49.21,10.55,49.21,10z" />
              </g>
              <path d="M51.29,46.62c-0.52-0.181-0.79-0.75-0.6-1.271l0,0c0.18-0.52,0.76-0.8,1.28-0.609l0,0c0.51,0.189,0.79,0.76,0.6,1.279l0,0 c-0.14,0.41-0.53,0.66-0.94,0.66l0,0C51.52,46.68,51.4,46.66,51.29,46.62z M54.45,46.01c-0.19-0.52,0.07-1.1,0.59-1.29l0,0 c0.52-0.189,1.09,0.07,1.28,0.59l0,0c0.2,0.521-0.07,1.09-0.59,1.29l0,0c-0.11,0.04-0.23,0.061-0.34,0.061l0,0 C54.98,46.66,54.6,46.41,54.45,46.01z M57.75,44.1c-0.47-0.28-0.64-0.89-0.36-1.37l0,0c0.27-0.479,0.88-0.64,1.36-0.37l0,0 c0.48,0.28,0.64,0.891,0.37,1.37l0,0c-0.19,0.32-0.52,0.5-0.87,0.5l0,0C58.08,44.229,57.91,44.189,57.75,44.1z M57.91,39.71 L57.91,39.71c-0.1-0.55,0.26-1.07,0.81-1.16l0,0c0.54-0.1,1.06,0.26,1.16,0.81l0,0c0.09,0.54-0.27,1.061-0.81,1.15l0,0 c-0.06,0.01-0.12,0.021-0.18,0.021l0,0C58.42,40.53,57.99,40.189,57.91,39.71z M56.37,37.05c-0.43-0.36-0.48-0.99-0.13-1.41l0,0 c0.35-0.42,0.99-0.479,1.41-0.13l0,0c0.42,0.36,0.48,0.99,0.12,1.41l0,0c-0.19,0.24-0.48,0.36-0.76,0.36l0,0 C56.78,37.28,56.55,37.2,56.37,37.05z" />
            </svg>
            <svg
              fill="#ff5c00"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
              className="js"
            >
              <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="100px"
              height="100px"
              className="react"
            >
              <circle cx="78" cy="14" r="1" fill="#f1bc19" />
              <circle cx="50" cy="50" r="38" fill="#f9dbd2" />
              <circle cx="84" cy="16" r="4" fill="#f1bc19" />
              <circle cx="14" cy="26" r="2" fill="#ee3e54" />
              <circle cx="78" cy="77" r="2" fill="#fbcd59" />
              <circle cx="17" cy="78" r="4" fill="#fbcd59" />
              <circle cx="24" cy="83" r="2" fill="#ee3e54" />
              <circle cx="66.5" cy="78.5" r="2.5" fill="#fff" />
              <circle cx="16" cy="48" r="1" fill="#fff" />
              <circle cx="86" cy="31" r="1" fill="#f1bc19" />
              <circle cx="80" cy="66" r="2" fill="#fff" />
              <path
                fill="#77cbd2"
                d="M50,63c-16,0-28-5.6-28-13s12-13,28-13c16,0,28,5.6,28,13S66,63,50,63z M50,40.9c-14.3,0-24.3,4.8-24.3,9.1 s10,9.1,24.3,9.1s24.3-4.8,24.3-9.1S64.3,40.9,50,40.9z"
              />
              <path
                fill="#472b29"
                d="M50,63.7c-16.4,0-28.7-5.9-28.7-13.7S33.6,36.3,50,36.3c16.4,0,28.7,5.9,28.7,13.7S66.4,63.7,50,63.7z M50,37.7C34.4,37.7,22.7,43,22.7,50S34.4,62.3,50,62.3S77.3,57,77.3,50S65.6,37.7,50,37.7z M50,59.8c-14.9,0-25-5.1-25-9.8 s10-9.8,25-9.8s25,5.1,25,9.8S64.9,59.8,50,59.8z M50,41.6c-14.6,0-23.6,4.9-23.6,8.4s9,8.4,23.6,8.4s23.6-4.9,23.6-8.4 S64.6,41.6,50,41.6z"
              />
              <path
                fill="#77cbd2"
                d="M39.5,75.2c-1.3,0-2.4-0.3-3.4-0.9c-6.1-3.6-4.8-16.7,3.1-30.6c5.5-9.7,12.9-17,18.9-18.6 c2.2-0.6,4.2-0.4,5.8,0.5c6.1,3.6,4.8,16.7-3.1,30.6c-5.5,9.7-12.9,17-18.9,18.6C41.1,75.1,40.3,75.2,39.5,75.2z M60.5,28.5 c-0.4,0-0.9,0.1-1.5,0.2c-4.9,1.3-11.6,8.1-16.6,16.8c-6.9,12.1-8,23.4-4.5,25.5c0.7,0.4,1.7,0.5,3,0.2c4.9-1.3,11.6-8.1,16.6-16.8 c6.9-12.1,8-23.4,4.5-25.5C61.6,28.7,61.1,28.5,60.5,28.5z"
              />
              <path
                fill="#472b29"
                d="M39.5,75.9c-1.4,0-2.7-0.3-3.8-1c-6.5-3.8-5.3-17.4,2.8-31.6c5.6-9.9,13.2-17.3,19.3-18.9 c2.4-0.6,4.6-0.4,6.4,0.6c6.5,3.8,5.3,17.4-2.8,31.6c-5.6,9.9-13.2,17.3-19.3,18.9C41.2,75.8,40.4,75.9,39.5,75.9z M60.5,25.5 c-0.7,0-1.5,0.1-2.2,0.3c-5.8,1.5-13,8.7-18.4,18.2c-7.6,13.3-9,26.3-3.3,29.7c1.4,0.8,3.3,1,5.3,0.5c5.8-1.5,13-8.7,18.4-18.2 c7.6-13.3,9.1-26.3,3.3-29.6C62.6,25.8,61.6,25.5,60.5,25.5z M39.5,72.2c-0.7,0-1.3-0.2-1.9-0.5c-4.4-2.5-2.4-14.9,4.2-26.5 c5.1-8.9,11.9-15.8,17-17.1c1.4-0.4,2.6-0.3,3.5,0.2c4.4,2.5,2.4,14.9-4.2,26.5c-5.1,8.9-11.9,15.8-17,17.1 C40.6,72.1,40,72.2,39.5,72.2z M60.5,29.2c-0.4,0-0.8,0.1-1.3,0.2c-4.8,1.3-11.3,7.9-16.2,16.5c-7.1,12.5-7.6,22.9-4.7,24.6 c0.6,0.3,1.4,0.4,2.4,0.1c4.8-1.3,11.3-7.9,16.2-16.5c7.1-12.5,7.6-22.9,4.7-24.6C61.3,29.3,60.9,29.2,60.5,29.2z"
              />
              <path
                fill="#77cbd2"
                d="M60.5,75.2c-0.8,0-1.6-0.1-2.4-0.3c-5.9-1.6-13.3-8.9-18.9-18.6c-7.9-13.9-9.2-27-3.1-30.6	c1.6-0.9,3.6-1.1,5.8-0.5c5.9,1.6,13.3,8.9,18.9,18.6c7.9,13.9,9.2,27,3.1,30.6C62.9,74.9,61.7,75.2,60.5,75.2z M39.5,28.5	c-0.6,0-1.1,0.1-1.5,0.4c-3.6,2.1-2.4,13.5,4.5,25.5c5,8.7,11.6,15.5,16.6,16.8c1.2,0.3,2.2,0.3,3-0.2c3.6-2.1,2.4-13.5-4.5-25.5	c-5-8.7-11.6-15.5-16.6-16.8C40.4,28.6,40,28.5,39.5,28.5z"
              />
              <path
                fill="#472b29"
                d="M60.5,75.9c-0.8,0-1.7-0.1-2.6-0.4c-6.1-1.6-13.7-9.1-19.3-18.9c-8.1-14.2-9.3-27.8-2.8-31.6	c1.8-1,4-1.3,6.4-0.6c6.1,1.6,13.7,9.1,19.3,18.9c8.1,14.2,9.3,27.8,2.8,31.6C63.1,75.6,61.9,75.9,60.5,75.9z M39.5,25.5	c-1.1,0-2.2,0.3-3.1,0.8c-5.7,3.3-4.2,16.4,3.3,29.6c5.4,9.5,12.7,16.7,18.4,18.2c2,0.5,3.8,0.4,5.3-0.5c5.7-3.3,4.2-16.4-3.3-29.7	c-5.4-9.5-12.7-16.7-18.4-18.2C41,25.6,40.2,25.5,39.5,25.5z M60.5,72.2c-0.5,0-1-0.1-1.6-0.2c-5.1-1.4-11.9-8.3-17-17.1	c-6.6-11.6-8.6-23.9-4.2-26.5c0.9-0.5,2.1-0.6,3.5-0.2c5.1,1.4,11.9,8.3,17,17.1c6.6,11.6,8.6,23.9,4.2,26.5	C61.8,72,61.2,72.2,60.5,72.2z M39.5,29.2c-0.5,0-0.9,0.1-1.2,0.3c-2.8,1.7-2.4,12.1,4.7,24.6c4.9,8.6,11.4,15.2,16.2,16.5	c1,0.3,1.9,0.2,2.4-0.1c2.8-1.7,2.4-12.1-4.7-24.6C52,37.3,45.6,30.7,40.8,29.4C40.3,29.3,39.9,29.2,39.5,29.2z"
              />
              <g>
                <circle cx="50" cy="50" r="5.5" fill="#77cbd2" />
                <path
                  fill="#472b29"
                  d="M50,56c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S53.3,56,50,56z M50,45c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5 S52.8,45,50,45z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M50,53.8c-0.1,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3c0.4,0,0.7-0.1,1.1-0.2c0.5-0.2,0.9-0.5,1.3-0.8 c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4c-0.4,0.4-0.9,0.8-1.5,1C50.9,53.7,50.4,53.8,50,53.8z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M53.1,51.8c0,0-0.1,0-0.1,0c-0.1-0.1-0.2-0.2-0.1-0.3c0.2-0.4,0.3-0.9,0.3-1.4c0-1.3-0.7-2.4-1.8-2.9 c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1c1.3,0.6,2.1,1.9,2.1,3.4c0,0.6-0.1,1.1-0.4,1.7C53.3,51.7,53.2,51.8,53.1,51.8z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M48.1,47.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1,0-0.3,0.1-0.3c0.6-0.4,1.3-0.6,2-0.6c0.1,0,0.3,0.1,0.3,0.3 s-0.1,0.3-0.3,0.3c-0.6,0-1.2,0.2-1.8,0.5C48.2,47.3,48.2,47.3,48.1,47.3z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M53.5,36.8c-0.1,0-0.1,0-0.2-0.1c-3.7-4.6-7.2-7.6-10.4-8.9c-0.1-0.1-0.2-0.2-0.1-0.3c0.1-0.1,0.2-0.2,0.3-0.1 c3.3,1.4,6.8,4.5,10.6,9.1c0.1,0.1,0.1,0.3,0,0.4C53.6,36.7,53.6,36.8,53.5,36.8z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M36.5,27.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c0.3-0.2,1.9-1.3,4.8-0.7c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.2,0.2-0.3,0.2c-2.7-0.6-4.1,0.4-4.3,0.6C36.6,27.7,36.6,27.8,36.5,27.8z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M73.3,55.5c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4c2.3-1.9,3.2-4.1,2.7-6.6c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,2.6-0.4,5.1-2.9,7.1C73.4,55.5,73.3,55.5,73.3,55.5z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M69,57.9c-0.1,0-0.2-0.1-0.2-0.2c0-0.1,0-0.3,0.2-0.3c0,0,1.4-0.5,2.9-1.4c0.1-0.1,0.3,0,0.3,0.1 c0.1,0.1,0,0.3-0.1,0.3C70.5,57.4,69.1,57.8,69,57.9C69,57.9,69,57.9,69,57.9z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M39.1,73.6C39.1,73.6,39.1,73.6,39.1,73.6c-2.7-0.1-4.4-2.1-5-5.7c0-0.1,0.1-0.3,0.2-0.3 c0.1,0,0.3,0.1,0.3,0.2c0.6,3.4,2.1,5.2,4.5,5.3c0.1,0,0.2,0.1,0.2,0.3C39.4,73.5,39.3,73.6,39.1,73.6z"
                />
              </g>
              <g>
                <path
                  fill="#472b29"
                  d="M34.1,65.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-2.3,0.2-4.3,0.3-4.6c0-0.1,0.2-0.2,0.3-0.2c0.1,0,0.2,0.2,0.2,0.3 c0,0.1-0.4,2.1-0.3,4.4C34.4,65.6,34.3,65.7,34.1,65.7C34.1,65.7,34.1,65.7,34.1,65.7z"
                />
              </g>
            </svg>
            <svg
              fill="#ff5c00"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="100px"
              height="100px"
              className="github"
            >
              <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z" />
            </svg>
          </div>
        </div>
        <div className="tech-stack-right">
          <p className="tech-stack-main">
            I have a tech stack in which i have gained years of experience on
            and in which i have built most of my projects on.
          </p>
          <div className="flex languages-tools space-between align-center">
            <div>
              <div className="flex">
                <p>REACT JS</p>
                <p>UI Library / Framework</p>
              </div>
              <div className="flex">
                <p>HTML 5</p>
                <p>Markup Language</p>
              </div>
              <div className="flex">
                <p>CSS 3</p>
                <p>Styling</p>
              </div>
              <div className="flex">
                <p>Figma</p>
                <p>UI/UX Design software</p>
              </div>
              <div className="flex">
                <p>Tailwind CSS</p>
                <p>CSS Library</p>
              </div>
            </div>
            <img src={Plus} alt="Plus" className="plus" />
            <div>
              <div className="flex">
                <p>Vanilla JavaScript</p>
                <p>Dynamism</p>
              </div>
              <div className="flex">
                <p>JSON</p>
                <p>Data Transfer</p>
              </div>
              <div className="flex">
                <p>GIT & GitHub</p>
                <p>Version Control</p>
              </div>
              <div className="flex">
                <p>TypeScript</p>
                <p>JavaScript with handcuffs</p>
              </div>
            </div>
          </div>
          <p className="greyish">
            * I however would like to reiterate that this are just personal
            preferences and that nothing is set in stone.I am a flexible and
            fast learning developer not afraid to take on any new technologies.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
