const Post = (props) => {
  return (
    <div className="post" id={`post-${props.id}`}>
      <h2>{props.title}</h2>
      <h5>Author:  {props.author}</h5>
      <h6>date: {props.date}</h6>
      <p>
          {props.content}
      </p>
    </div>
  );
}

export default Post;
