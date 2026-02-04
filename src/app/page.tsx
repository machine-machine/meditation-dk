import Link from "next/link";
import { sections, type SectionKey } from "@/lib/navigation";

const sectionRoutes: Record<SectionKey, string> = {
  consciousness: "/consciousness/consciousness-and-evolution",
  ouroboros: "/ouroboros/atman-job-son-of-shame",
  fields: "/fields/meditative-pixelation",
  adversity: "/adversity/integral-suffering-and-happiness",
  love: "/love/the-glue-of-love",
  civilization: "/civilization/inner-and-outer-person",
  inspirators: "/spiritual-inspirators",
};

const sectionIcons: Record<SectionKey, string> = {
  consciousness: "◎",
  ouroboros: "◉",
  fields: "◈",
  adversity: "◇",
  love: "♡",
  civilization: "◆",
  inspirators: "✦",
};

export default function Home() {
  return (
    <div className="page-transition">
      {/* Hero */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-warm-50 to-teal-50/30 dark:from-sage-950 dark:via-sage-900 dark:to-teal-950/30" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-sage-900 dark:text-warm-50 mb-8 leading-tight"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            meditation<span className="text-teal-600">.dk</span>
          </h1>

          <div
            className="max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <p className="text-xl md:text-2xl text-sage-600 dark:text-warm-300 italic leading-relaxed mb-6">
              &ldquo;What is taken in by contemplation
              <br />
              must be given out in love&rdquo;
            </p>
            <p className="text-sm text-sage-500 dark:text-warm-500">
              — Meister Eckhart
            </p>
          </div>

          <p className="text-lg text-sage-700 dark:text-warm-200 max-w-2xl mx-auto leading-relaxed mb-4">
            A personal exploration of consciousness, meditation, and the inner
            life — from nearly 50 years of continuous spiritual practice.
          </p>
          <p className="text-base text-sage-500 dark:text-warm-400 max-w-xl mx-auto">
            By Gunnar Mühlmann
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/what-is-meditation"
              className="inline-flex items-center justify-center px-8 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Begin Reading
            </Link>
            <Link
              href="/consciousness/consciousness-and-evolution"
              className="inline-flex items-center justify-center px-8 py-3 bg-white dark:bg-sage-800 text-sage-700 dark:text-warm-200 rounded-lg hover:bg-sage-50 dark:hover:bg-sage-700 transition-colors font-medium border border-sage-200 dark:border-sage-700"
            >
              Start with Consciousness
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto excerpt */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg text-sage-700 dark:text-warm-300 leading-relaxed space-y-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <p className="text-xl leading-relaxed">
              I am not a guru. I am not &lsquo;enlightened&rsquo;.
            </p>
            <p>
              I am not interested in organized teaching spirituality or
              meditation. I have no commercial interest in this website. My goal
              is, as far as I know myself, to inspire and be inspired.
            </p>
            <p>
              I have been doing all kinds of spiritual practices continuously
              for almost 50 years now. I lived in India for more than seven
              years in search of &lsquo;spiritual software&rsquo;. Now at the
              tender age of 70, I feel better, stronger, and happier than ever
              before.
            </p>
            <p className="text-lg italic text-sage-600 dark:text-warm-400">
              What is mine, belongs to you.
            </p>
            <p>
              As a natural extension of this, I offer free guidance on
              meditation, not as a teacher, but as a tour guide. I was a tour
              guide in the Far East for ten years. Time and again, I led groups
              to the Taj Mahal. But I do not claim the Taj Mahal as mine.
            </p>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/what-is-meditation"
              className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium inline-flex items-center gap-2 transition-colors"
            >
              Read the full manifesto
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Read */}
      <section className="py-16 bg-sage-50/50 dark:bg-sage-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold text-sage-800 dark:text-warm-100 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            How to Read
          </h2>
          <p
            className="text-lg text-sage-600 dark:text-warm-300 leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            This site can be approached in two ways: through a{" "}
            <strong>linear path</strong>, starting with Consciousness &amp;
            Evolution, or through a <strong>nonlinear journey</strong>, following
            internal links that loop across themes, allowing intuition to guide
            exploration. Both approaches are valid.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-sage-800 dark:text-warm-100 text-center mb-12"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Explore the Chapters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Object.keys(sections) as SectionKey[]).map((key) => {
              const section = sections[key];
              return (
                <Link
                  key={key}
                  href={sectionRoutes[key]}
                  className="section-card group"
                >
                  <div className="text-3xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    {sectionIcons[key]}
                  </div>
                  <h3
                    className="text-xl font-bold text-sage-800 dark:text-warm-100 mb-2"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {section.title}
                  </h3>
                  <p className="text-sm text-sage-500 dark:text-warm-400 leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Audio */}
      <section className="py-16 bg-sage-50/50 dark:bg-sage-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-bold text-sage-800 dark:text-warm-100 mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Symphony of Ouroboros
          </h2>
          <p className="text-sage-600 dark:text-warm-400 mb-6">
            An original musical composition accompanying the explorations.
          </p>
          <audio
            controls
            className="mx-auto"
            src="https://meditation.dk/musik/SymphonyOfOuroboros.mp3"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>
    </div>
  );
}
