import React from "react";
import CreatePostSection from "./CreatePostSection";
import Feed from "./Feed";

function MainSection() {
  return (
    <main className="wrapper">
      <section className="create-post-section">
        {/* <!-- Go to create-post-section.html for the template --> */}
        <CreatePostSection />
      </section>
      <section className="feed">
        {/* <!-- Go to feed.html for the template --> */}
        <Feed />
      </section>
    </main>
  );
}

export default MainSection;
