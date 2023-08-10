import "./App.css";
import Post from "./Components/Post/Post";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          Virtual DOMinators Blog
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default App;
