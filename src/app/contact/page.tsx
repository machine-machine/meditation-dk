import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="page-transition">
      <div className="bg-gradient-to-b from-sage-50 to-warm-50 dark:from-sage-900 dark:to-sage-950 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold text-sage-900 dark:text-warm-50 mb-8"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Contact
          </h1>
          <div
            className="text-lg text-sage-700 dark:text-warm-300 space-y-6 leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            <p>
              My name is <strong>Gunnar Mühlmann</strong>.
            </p>
            <p>
              You&apos;re welcome to reach out with questions, reflections, or
              just to say hello.
            </p>
            <p>
              <a
                href="mailto:gunnars@mail.com"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline underline-offset-4 decoration-teal-300 dark:decoration-teal-600 transition-colors text-xl"
              >
                gunnars@mail.com
              </a>
            </p>
            <div className="mt-12 pt-8 border-t border-sage-200 dark:border-sage-700">
              <p className="italic text-sage-600 dark:text-warm-400">
                &ldquo;This is not a school. There are no levels in which you
                can become a PhD in spirituality. No methods to buy. What I
                offer is lived experience, shared freely. If it resonates, take
                what you need. If not, find your cloud. It&apos;s all part of
                the same sky.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
