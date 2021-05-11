import { useEffect, useState } from "react";
import "./App.css";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { Route } from "react-router-dom";

function App() {
  // fetch('https://jsonplaceholder.typicode.com/posts')
  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <main>
        <Route
          path="/"
          exact
          render={() => {
            return <PostList posts={posts} />;
          }}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => {
            return <PostDetail match={routerProps.match} />;
          }}
          // render={PostDetail}
        />
      </main>
    </div>
  );
}

export default App;
