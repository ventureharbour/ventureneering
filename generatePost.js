const fs = require("fs");
const readline = require("readline");

const generateTemplate = (author, title, description, slug, tags) => {
  return `
---
authors: ${author}
title: ${title}
description: ${description}
slug: ${slug}
tags: [${tags.join(", ")}]
---
`;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Post title > ", function (title) {
  rl.question("Author > ", function (author) {
    rl.question("Description > ", function (description) {
      rl.question("Tags > ", function (tags) {
        const postTags = tags.split(" ");
        const slug = title
          .replace(/[^-0-9a-z ]/gi, "")
          .trim()
          .replace(/\s+/g, '-')
          .toLowerCase()
        const template = generateTemplate(author, title, description, slug, postTags);
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const fileName = `${year}-${month}-${day}-${slug}.mdx`;

        fs.writeFileSync(`blog/${fileName}`, Buffer.from(template, "utf-8"))
        rl.close();
      });
    });
  });
});

rl.on("close", function () {
  console.log("Successfully created post!");
  process.exit(0);
});
