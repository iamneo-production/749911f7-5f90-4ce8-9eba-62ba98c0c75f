import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/style.css";
import Post from './Post';

const DB_URL = process.env.REACT_APP_DB_URL

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`${DB_URL}/posts`,)
        setPosts(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  return (<>
  {loading && <div>Loading...</div>}
  {!loading && (
    <>
    {posts.map((post,index) => (
      <Post key={index} title={post.title} content={post.content} tags={post.tags} author={post.author} id={post.id} date={post.date}/>
    ))}
    </>)}
  </>)
  }

export default Home;
