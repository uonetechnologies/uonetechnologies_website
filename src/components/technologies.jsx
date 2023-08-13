import React from "react";
import {
  ReactIcon,
  DjangoIcon,
  NodeJsIcon,
  JavaScriptIcon,
  TypeScriptIcon
} from "../assets/icons";
import StyledIcon from "./StyledIcon";
import { useState } from "react";

const selectIcon = (icon) => {
  switch (icon) {
    case 'django':
      return <DjangoIcon />
    case 'react':
      return <ReactIcon />
    case 'nodejs':
      return <NodeJsIcon />
    case 'typescript':
      return <TypeScriptIcon />
    case 'javascript':
      return <JavaScriptIcon />
  }
}

export const Technologies = (props) => {
  return (
    <div id="technologies" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Technologies</h2>
          <p>
            Discover how we can empower your organization with the following offerings
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <StyledIcon icon={selectIcon(d.icon)} />
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
