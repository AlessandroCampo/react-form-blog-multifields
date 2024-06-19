import { useEffect, useState } from "react";
import CreatePost from "./components/PostComponents/CreatePost"
import Post from "./components/PostComponents/Post";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const app = () => {
  const [postList, setPostList] = useState([]);
  const user = {
    username: 'Aleks'
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const body = document.getElementsByTagName('body')[0];
      const computedStyles = window.getComputedStyle(body);
      const curr_bg_color = computedStyles.backgroundColor;

      body.style.backgroundColor = curr_bg_color === 'rgb(18, 18, 18)' ? '#F0F0F0' : '#121212';
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const notifyError = (errorText) => {
    toast.error(errorText)
  }

  return (
    <>
      <ToastContainer
        theme="dark"
        hideProgressBar
      />

      <div className="home-container">
        <CreatePost
          user={user}
          setPostList={setPostList}
          notifyError={notifyError}
        />
        <div className="posts-container">
          {
            postList.map((p, i) => {
              return (
                p.visible &&
                <Post
                  user={user}
                  key={p.id || `post-${i}`}
                  post={p}
                  setPostList={setPostList}

                />
              )

            })
          }
        </div>

      </div>

    </>
  )
}

export default app;