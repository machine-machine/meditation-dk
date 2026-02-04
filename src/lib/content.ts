import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { sections, type SectionKey } from "./navigation";

const contentDirectory = path.join(process.cwd(), "content");

export interface ArticleMeta {
  title: string;
  slug: string;
  route: string;
  section: string;
  originalFile: string;
  youtubeEmbeds: string[];
  images: string[];
}

export interface Article extends ArticleMeta {
  content: string;
  htmlContent: string;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(contentDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return data as ArticleMeta;
    });
}

export function getArticlesBySection(section: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.section === section);
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const filePath = path.join(contentDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // Clean up content artifacts from scraping
  let cleanContent = content
    .replace(/^\*{1,4}\s*$/gm, "")
    .replace(/^\*{1,4}\s*\*{1,4}\s*$/gm, "")
    .replace(/\*\*\s*\*\*/g, "")
    .replace(/\n{4,}/g, "\n\n\n")
    .replace(/^[\s*]+\n/, "");

  const processed = await remark().use(html, { sanitize: false }).process(cleanContent);
  let htmlContent = processed.toString();

  // YouTube embeds
  htmlContent = htmlContent.replace(
    /&lt;YouTube id="([^"]+)" \/&gt;/g,
    '<div class="youtube-embed"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  );
  htmlContent = htmlContent.replace(
    /<YouTube id="([^"]+)" \/>/g,
    '<div class="youtube-embed"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
  );

  return {
    ...(data as ArticleMeta),
    content: cleanContent,
    htmlContent,
  };
}

export function getSlugsForSection(section: string): string[] {
  return getArticlesBySection(section).map((a) => a.slug);
}

export { sections, type SectionKey };
