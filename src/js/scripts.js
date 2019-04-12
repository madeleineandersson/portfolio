"use strict";

const swTravel = {
  name: "SW Travel",
  tools: ["HTML5", "Sass", "JavaScript", "gulp", "npm", "UI Design"],
  description:
    "SW Travel is an attempt at making a regular search form a liittle bit more fun. It uses the Star Wars API to fetch Star Wars planet names and lets the user “travel” to a chosen destination. Check it out by visiting the website linked below, or take a look at the code on GitHub if you're into ES6 and stuff.",
  img: "img/sw-travel-mockup.png",
  altText: "SW Travel prototype mockup",
  buttonText: "View code",
  secondButtonText: "View website",
  link: "https://github.com/madeleineandersson/sw-travel",
  secondLink: "https://sw-travel.netlify.com/",
  gridItem: 2,
  createSecondButton: function () {
    const project = document.getElementsByClassName("grid-item-" + this.gridItem)[0],
      button = project.getElementsByTagName("a")[0].cloneNode(false);
    button.appendChild(document.createTextNode(this.secondButtonText));
    button.setAttribute("href", this.secondLink);
    project.querySelector(".project-buttons").appendChild(button);
  }
},
  sprouts = {
    name: "Sprouts",
    tools: ["UI Design", "UX Research", "Design Thinking", "Figma"],
    description: "Sprouts is an app idea and prototype made with the goal of making it easier for consumers to make more environmentally friendly decisions while grocery shopping. As part of a small team at Accenture Interactive I was responsible for the UI/UX design work. Watch the video pitch that we made for Sprouts using the button below.",
    img: "img/sprouts-logo.png",
    altText: "Sprouts logo",
    buttonText: "View video",
    link: "#",
    gridItem: 3
  },
  normative = {
    name: "Normative",
    tools: ["HTML5", "Stylus", "JavaScript", "Jekyll", "gulp", "yarn", "Git"],
    description: "Normative is a startup company that has created a sustainability reporting platform by harnessing the power of artificial intelligence and using it on sustainability. During the summer of 2017 I worked at Normative developing their new company website as one of two front-end developers. The website was replaced in 2019 but you can see the version that I worked on if you follow the link below.",
    img: "img/normative-mockup.png",
    altText: "Normative website mockup",
    buttonText: "View website",
    link: "https://normative-io.netlify.com/",
    gridItem: 4
  }, datatjej = {
    name: "DataTjej",
    tools: ["WordPress", "UI Design", "Google Analytics"],
    description: "DataTjej is a Swedish non-profit organization formed in 1998 that aims to further people who identify as women within the IT industry. I designed and developed a new WordPress website for the DataTjej together with Jane Bertheim. The website is no longer maintained by us so the button below takes you to an article about the makeover which includes a before and after picture of the landing page.",
    img: "img/datatjej-mockup.png",
    altText: "DataTjej website mockup",
    buttonText: "View article",
    link: "https://datatjej.se/datatjej-hemsida-2017/",
    gridItem: 5
  }, beast = {
    name: "BEAST Tournament Series",
    tools: ["HTML5", "CSS3", "jQuery", "Bootstrap", "UI Design"],
    description:
      "BEAST Tournament Series are the organizers of BEAST - one of Europe's biggest tournaments in the video game Super Smash Brothers Melee. For the seventh installment of BEAST, I worked together with Walid Sodki to create a website for the tournament. ",
    img: "img/beast-logo.png",
    altText: "Beast website mockup",
    buttonText: "View website",
    link: "https://beast-series.netlify.com/",
    gridItem: 6
  },
  main = document.getElementsByTagName("main")[0],
  footer = document.getElementsByTagName("footer")[0];

function createProject(project) {
  const template = document.getElementsByTagName("template")[0].content.cloneNode(true);
  template.querySelector("div").classList.add("grid-item-" + project.gridItem);
  template.querySelector("h2").appendChild(document.createTextNode(project.name));
  template.querySelector("p").appendChild(document.createTextNode(project.description));
  template.querySelector("a").appendChild(document.createTextNode(project.buttonText));
  template.querySelector("a").setAttribute("href", project.link);
  template.querySelector("img").setAttribute("src", project.img);
  template.querySelector("img").setAttribute("alt", project.altText);
  project.tools.map(tool => {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(tool));
    template.querySelector(".project-tools").appendChild(li);
  });
  main.insertBefore(template, footer);
}

function createAllProjects(...params) {
  params.map(project => {
    if (!project.createSecondButton) {
      createProject(project);
    } else {
      createProject(project);
      project.createSecondButton();
    }
  });
}

createAllProjects(swTravel, sprouts, normative, datatjej, beast);