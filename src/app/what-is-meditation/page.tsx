import { getArticleBySlug } from "@/lib/content";
import ArticleLayout from "@/components/ArticleLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Meditation",
};

export default async function Page() {
  const article = await getArticleBySlug("what-is-meditation");
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
