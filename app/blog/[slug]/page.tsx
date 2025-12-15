import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export default async function BlogPage({ params }: PageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);

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

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <Link href="/blog" className="text-blue-600 mb-6 inline-block">
        ← Back to Blog
      </Link>

      <div className="bg-white p-10 rounded-2xl shadow mb-12">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600">{data.excerpt}</p>
        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>{data.date}</span>
          <span>{data.author}</span>
          <span>{data.category}</span>
        </div>
      </div>

      <article
        className="prose prose-lg bg-blue-50 p-10 rounded-2xl"
        dangerouslySetInnerHTML={{ __html: processedContent.toString() }}
      />
    </section>
  );
}
