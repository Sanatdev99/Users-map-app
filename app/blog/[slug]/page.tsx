import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const filePath = path.join(
    process.cwd(),
    "content",
    "blog",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link href="/blog" className="text-blue-600 mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <Link
        href="/blog"
        className="inline-flex items-center text-blue-600 mb-6 font-medium"
      >
        ← Back to Blog
      </Link>

      <div className="bg-white p-10 rounded-2xl shadow mb-12">
        <div className="flex gap-3 text-sm text-gray-500 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
            {data.category}
          </span>
          <span>{data.date}</span>
          <span>{data.author}</span>
        </div>

        <h1 className="text-4xl font-extrabold mb-4">{data.title}</h1>
        <p className="text-gray-600 text-lg">{data.excerpt}</p>
      </div>

      <article
        className="prose prose-lg max-w-none bg-blue-50 p-10 rounded-2xl"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  );
}
