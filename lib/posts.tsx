// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const blogDir = path.join(process.cwd(), "content/blog");
  const files = fs.readdirSync(blogDir);

  return files.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(blogDir, filename);
    const file = fs.readFileSync(filePath, "utf8");
    const { data } = matter(file);

    return {
      slug,
      ...data,
    };
  });
}
