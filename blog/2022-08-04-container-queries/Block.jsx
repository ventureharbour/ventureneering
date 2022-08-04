import React from "react";

const Block = () => {
  return (
    <div class="block-container">
      <article class="block">
        <header>
          <img
            src="https://www.placecage.com/c/460/300"
            alt="Nick cage. Need there be anything else?"
          />
          <h2>Blog Title</h2>
        </header>
        <section>
          <p>
            This is the introduction to the blog post that
            will draw your eyes and make you want to click
            on the link below
          </p>
          <a href="#">Read more about "Blog Title"</a>
        </section>
      </article>
    </div>
  );
};

export default Block;
