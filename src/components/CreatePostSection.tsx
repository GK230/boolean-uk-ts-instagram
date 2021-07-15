import React from "react";

function CreatePostSection() {
  return (
    <section className="create-post-section">
      <form id="create-post-form" autocomplete="off">
        <h2>Create a post</h2>
        <label htmlFor="image">Image</label>
        <input id="image" name="image" type="text" />
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" rows="2" columns="30"></textarea>
        <div className="action-btns">
          <button id="preview-btn" type="button">
            Preview
          </button>
          <button type="submit">Post</button>
        </div>
      </form>
      {/* <!-- FOR THE CHALLENGE START --> */}
      <div className="post">
        {/* <!-- Go to post.html and scroll down to the preveiw cards --> */}
      </div>
      {/* <!-- htmlFor THE CHALLENGE END --> */}
    </section>
  );
}

export default CreatePostSection;