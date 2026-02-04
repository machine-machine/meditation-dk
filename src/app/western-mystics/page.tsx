import { getArticleBySlug } from "@/lib/content";
import ArticleLayout from "@/components/ArticleLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Western Mystics",
};

export default async function Page() {
  const article = await getArticleBySlug("western-mystics");
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
