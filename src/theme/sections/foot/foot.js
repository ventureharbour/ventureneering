import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../../components/container/container";

function Foot() {
  const component = "shift-foot";

  return (
    <div className={component}>
      <Container componentClass={component}>
        <div className={`${component}__columns`}>
          <div className={`${component}__column ${component}__column--left`}>
            {"Made with 🧡 by the "}
            <a
              href="https://www.ventureharbour.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${component}__link`}
            >
              {"Venture Harbour"}
            </a>
            {" team"}
          </div>
          <div className={`${component}__column ${component}__column--right`}>
            <span className={`${component}__copy`}>
              {"© Venture Harbour. All rights reserved"}
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Foot;
