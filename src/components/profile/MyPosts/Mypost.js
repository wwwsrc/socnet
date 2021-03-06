import React from "react";
import Post from "./Post/Post.js";
import css from "./Mypost.module.css";

const Mypost = props => {
  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let action = { type: "UPDATE-POST-TEXT", payload: text };
    // props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div className={css.postsBlock}>
      <div>
        <h3> My post</h3>
      </div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <button onClick={onAddPost}>Add post</button>
      <div>New post</div>
      <div className={css.posts}>
        <Post posts={props.posts} />
        {/* <Post message={postData[0].message} like={postData[0].likesCount} />
        <Post message={postData[1].message} like={postData[1].likesCount} /> */}
      </div>
    </div>
  );
};

export default Mypost;
