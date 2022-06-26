import React from 'react'
import { Home } from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Head from "next/head"
import CodeEditor from './components/editor/CodeEditor'
function index() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Home />
      <Skills />
      <CodeEditor/>
    </>
  )
}

export default index