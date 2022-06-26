import React from 'react'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Head from "next/head"
import CodeEditor from './components/editor/CodeEditor'
import 'animate.css';
import Project from './components/projects/Project'
import Hireme from './components/hire/Hireme'
function index() {
  return <>
    <Head>
      <title>Home</title>
    </Head>
    <Home />
    <Skills />
    <CodeEditor />
    <Project />
    <Hireme />
  </>
}

export default index