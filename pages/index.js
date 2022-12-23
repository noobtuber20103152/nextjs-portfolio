import React from "react";
import Home from ".././components/Home/Home";
import Skills from ".././components/Skills/Skills";
import Head from "next/head";
import CodeEditor from ".././components/editor/CodeEditor";
import "animate.css";
import Project from ".././components/projects/Project";
import Hireme from ".././components/hire/Hireme";
import QnA from ".././components/QnA/QnA";
import Contact from ".././components/contact/Contact";
import Timeline from "../components/post-timeline/timeline";
import ProjectFeatures from "../components/projects/projectFeatures";
import Script from "next/script";

function index() {
  const project = [
    {
      title: "Quiz Web App",
      description:
        "A simple Quiz App that contains a set of curated questions and its answers and checks for the correctness of the answer given by the user.",
      live: "https://telly-hackthon-quiz-app.vercel.app/",
    },
    {
      title: "Blog Web App",
      description: `A blog (a truncation of "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order so that the most recent post appears first, at the top of the web page.`,
      live: "https://blogtuber.vercel.app/",
    },
  ];
  return (
    <>
      <Head>
        <title>Ujjawal Rachhoya</title>
        {/* <script ></script> */}
        <Script
         async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5247079458292432"
         crossorigin="anonymous"
        />
      </Head>
      <Home />
      <Skills />
      <CodeEditor />

      <Hireme />
      {project.map((e, index) => {
        return (
          <>
            <ProjectFeatures
              id={index + 1}
              live={e.live}
              title={e.title}
              description={e.description}
            />
          </>
        );
      })}
      {/* <Timeline/> */}
      <QnA />
      <Contact />
    </>
  );
}

export default index;
