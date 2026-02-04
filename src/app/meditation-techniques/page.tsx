import { getArticleBySlug } from "@/lib/content";
import ArticleLayout from "@/components/ArticleLayout";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meditation Techniques",
};

export default async function Page() {
  const article = await getArticleBySlug("meditation-techniques");
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
