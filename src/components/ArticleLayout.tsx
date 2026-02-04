import Link from "next/link";
import { sections, type SectionKey } from "@/lib/navigation";
import { getArticlesBySection, type Article } from "@/lib/content";

interface ArticleLayoutProps {
  article: Article;
}

export default function ArticleLayout({ article }: ArticleLayoutProps) {
  const section = article.section as SectionKey;
  const sectionMeta = sections[section];
  const sectionArticles = sectionMeta ? getArticlesBySection(section) : [];

  return (
    <div className="page-transition">
      {/* Article header */}
      <div className="bg-gradient-to-b from-sage-50 to-warm-50 dark:from-sage-900 dark:to-sage-950 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {sectionMeta && (
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                {sectionMeta.title}
              </span>
            </div>
          )}
          <h1
            className="text-3xl md:text-5xl font-bold text-sage-900 dark:text-warm-50 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {article.title}
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main content */}
          <article className="flex-1 min-w-0">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: article.htmlContent }}
            />
          </article>

          {/* Sidebar */}
          {sectionArticles.length > 1 && (
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-24">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-500 dark:text-warm-500 mb-4">
                  In this section
                </h3>
                <nav className="space-y-1">
                  {sectionArticles.map((a) => (
                    <Link
                      key={a.slug}
                      href={a.route}
                      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                        a.slug === article.slug
                          ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-medium"
                          : "text-sage-600 dark:text-warm-400 hover:bg-sage-50 dark:hover:bg-sage-800 hover:text-sage-900 dark:hover:text-warm-100"
                      }`}
                    >
                      {a.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
