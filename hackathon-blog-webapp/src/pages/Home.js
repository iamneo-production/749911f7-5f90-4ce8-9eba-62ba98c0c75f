import React from 'react'
import "./style.css"
import Post from "../Components/Post/Post"

const Home = () => (
  <main>
    <header>
      <a href="" className="logo">
        Virtual DOMinators Blog
      </a>
      <nav>
        <a href="">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
    <Post />
    <Post />
    <Post />
  </main>
)

export default Home
