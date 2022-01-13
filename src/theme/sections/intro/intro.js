import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Container from "./../../components/container/container";

export default function Intro() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const component = "shift-intro";

  return (
    <div className={component}>
      <Container componentClass={component} size={"medium"}>
        <div
          className={`${component}__title`}
          dangerouslySetInnerHTML={{
            __html: "We ❤️<br />to build",
          }}
        ></div>
        <div className={`${component}__image`}>
          <img
            className={`${component}__image-bg`}
            src={useBaseUrl("img/ic-intro.svg")}
          />
          <img
            className={`${component}__image-img`}
            src={useBaseUrl("img/fork.svg")}
          />
        </div>
        <div className={`${component}__content`}>{siteConfig.tagline}</div>
      </Container>
    </div>
  );
}
