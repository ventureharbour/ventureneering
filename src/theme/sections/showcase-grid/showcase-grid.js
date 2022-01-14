import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "../../components/heading/heading";
import Container from "../../components/container/container";
import Arrow from "../../components/arrow/arrow";

export default function ShowcaseGrid() {
  const component = "showcase-grid";

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  const itemsData = shuffleArray([
    {
      image: useBaseUrl("img/showcase/leadformly.png"),
      label: "Leadformly",
      desc:
        "LeadForms incorporate 58+ form design best practices, proven to increase usability and completion rates – from asking questions over multiple steps, to sizing fields to the average adult finger pad size.",
      link: "https://leadformly.com/",
    },
    {
      image: useBaseUrl("img/showcase/truenorth.png"),
      label: "TrueNorth",
      desc:
        "TrueNorth is the Growth Marketing Platform to focus, align, and track marketing in one place, with everything and everyone working towards your goal.",
      link: "https://truenorth.io/",
    },
    {
      image: useBaseUrl("img/showcase/serene.png"),
      label: "Serene",
      desc:
        "Serene is a macOS app that gives you productivity superpowers by layering three proven techniques to boost focus.",
      link: "https://sereneapp.com/",
    },
  ]);

  const items = itemsData.map((item, index) => {
    const { image, label, link, desc } = item;

    const icons = ["yellow", "blue", "green", "red", "purple"];

    const random = Math.floor(Math.random() * icons.length);

    return (
      <div className={`${component}__item`} key={index}>
        <a
          className={`${component}__link`}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${component}__icon`}>
            <img
              className={`${component}__img`}
              src={image}
              alt={label}
              title={label}
            />
          </div>
          <div
            className={`${component}__label ${component}__label--${icons[random]}`}
          >
            {label}
          </div>
          <div className={`${component}__desc`}>{desc}</div>
          <Arrow componentClass={component} />
        </a>
      </div>
    );
  });

  return (
    <div className={component}>
      <Container componentClass={component}>
        <Heading
          componentClass={component}
          title={"Showcase"}
          subtitle={
            "See some of the awesome projects our engineers have built."
          }
        />
        <div className={`${component}__content`}>{items}</div>
      </Container>
      <Container componentClass={component} size={"smaller"}>
        <Heading
          componentClass={component}
          title={"Want to showcase your project?"}
          subtitle={
            'If you want to show case your project on this list please open an issue on on the <a target="_blank" rel="noopener noreferrer" rel="nofollow" href="https://github.com/infinum/eightshift-docs/issues">Eightshift-Docs github</a>'
          }
        />
      </Container>
    </div>
  );
}
