import React from 'react'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Head from "next/head"
import CodeEditor from './components/editor/CodeEditor'
import 'animate.css';
import Project from './components/projects/Project'
import Hireme from './components/hire/Hireme'
import QnA from './components/QnA/QnA'

function index() {
  return <>
    <Head>
      <title>Ujjawal Rachhoya</title>
    </Head>
    <Home />
    <Skills />
    <CodeEditor />
    <Project />
    <Hireme />
    <QnA />
  </>
}

export default index