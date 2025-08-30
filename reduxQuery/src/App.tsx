import {useState,} from "react";
import { useGetPostsQuery ,useNewPostMutation} from "./redux/api";
const App = () => {
  const { data, error, isLoading } = useGetPostsQuery("");
  const [newPost] = useNewPostMutation();

  const [title,setTitle] = useState("");
  const [body,setBody] = useState("");

const submitHandler = (e:React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  const post:Post={ title, body,userId:Math.random()*1000,id:Math.random()*1000};
  newPost(post);
  setTitle("");
  setBody("");
};

  return (
    <div>
      <h1>Redux Query Example</h1>
      <p>This is a simple example demonstrating the use of Redux Query.</p>

      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Body..." value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ul>
        {data && data.map((post) => (
          <li key={post.id}>{post.title} {post.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default App