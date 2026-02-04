import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sage-50 dark:bg-sage-900 border-t border-sage-100 dark:border-sage-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3
              className="text-lg font-bold text-sage-800 dark:text-warm-100 mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              meditation<span className="text-teal-600">.dk</span>
            </h3>
            <p className="text-sm text-sage-600 dark:text-warm-400 leading-relaxed">
              A personal exploration of consciousness, meditation, and the inner
              life. Written by Gunnar Mühlmann from nearly 50 years of
              continuous spiritual practice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-sage-700 dark:text-warm-200 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {[
                { label: "What is Meditation", href: "/what-is-meditation" },
                { label: "Consciousness & Evolution", href: "/consciousness/consciousness-and-evolution" },
                { label: "Ouroboros Consciousness", href: "/ouroboros/ouroboros-consciousness" },
                { label: "Fields of Consciousness", href: "/fields/fields-of-consciousness" },
                { label: "Spiritual Inspirators", href: "/spiritual-inspirators" },
                { label: "Western Mystics", href: "/western-mystics" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sage-500 dark:text-warm-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-sage-700 dark:text-warm-200 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-sm text-sage-600 dark:text-warm-400 mb-2">
              Gunnar Mühlmann
            </p>
            <a
              href="mailto:gunnars@mail.com"
              className="text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
            >
              gunnars@mail.com
            </a>
            <p className="text-sm text-sage-500 dark:text-warm-500 mt-4 italic" style={{ fontFamily: "var(--font-serif)" }}>
              What is taken in by contemplation must be given out in love.
            </p>
            <p className="text-xs text-sage-400 dark:text-warm-600 mt-1">
              — Meister Eckhart
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-100 dark:border-sage-800">
          <p className="text-xs text-sage-400 dark:text-warm-600 text-center">
            Originally published at meditation.dk · All content by Gunnar Mühlmann
          </p>
        </div>
      </div>
    </footer>
  );
}
