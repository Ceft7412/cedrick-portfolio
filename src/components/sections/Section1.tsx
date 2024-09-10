import React from "react";
import { firstname, lastname } from "../../constants/name";
export default function Section1() {
  return (
    <section className="section-one">
      <div className="wrapper-1">
        <div className="">
          <div className="keyboard">
            <div className="greeting">
              <span>HI, I'M</span>
            </div>
            <div className="keyboard__container">
              {firstname.map((letter: string, index: number) => (
                <span key={index} className="key">
                  {letter}
                </span>
              ))}
            </div>
            <div className="keyboard__container">
              {lastname.map((letter: string, index: number) => (
                <span key={index} className="key">
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="tech-container">
          <span className="shadow">
            FRONTEND <br /> WEB DEVELOPER
          </span>
          <span className="shadow">
            FRONTEND <br /> WEB DEVELOPER
          </span>
          <span className="shadow">
            FRONTEND <br /> WEB DEVELOPER
          </span>
        </div>
      </div>
    </section>
  );
}
