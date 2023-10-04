import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useNavigate,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Posts from "./components/Post/Posts";
import PostLists from "./components/Post/PostLists";
import Post from "./components/Post/Post";
import { useState } from "react";
import Login from "./components/User/Login";
import Stats from "./components/User/Stats";
import ProtectRoute from "./components/User/ProtectRoute";

const AppLayout = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const logOut = () => {
    setUser(null);
    navigate("/");
  };

  // const Routes = () =>
  //   useRoutes([
  //     { path: "/", element: <Home /> },
  //     { path: "/about", element: <About /> },
  //     {
  //       path: "/posts",
  //       element: <Posts />,
  //       children: [
  //         { index: true, element: <PostLists /> },
  //         { path: ":slug", element: <Post /> },
  //       ],
  //     },
  //     { path: "*", element: <NotFound /> },
  //   ]);

  return (
    <>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ margin: 5 }}>
          Home
        </Link>
        <Link to="/posts" style={{ margin: 5 }}>
          Posts
        </Link>
        <Link to="/about" style={{ margin: 5 }}>
          About
        </Link>
        <span> | </span>
        {user && (
          <Link to="/stats" style={{ padding: 5 }}>
            Stats
          </Link>
        )}
        {!user && (
          <Link to="/login" style={{ padding: 5 }}>
            Login
          </Link>
        )}
        {user && (
          <span onClick={logOut} style={{ padding: 5, cursor: "pointer" }}>
            Logout
          </span>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/login" element={<Login onLogin={setUser} />} />
        {/* <Route path="/stats" element={<Stats user={user} />} /> */}
        <Route
          path="/stats"
          element={
            <ProtectRoute user={user}>
              <Stats />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
