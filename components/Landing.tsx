import LangLink from "@/components/LangLink";
import ShowcaseTabs from "@/components/ShowcaseTabs";
import TildeMark from "@/components/TildeMark";
import {
  content,
  DOWNLOAD_URL,
  GITHUB_URL,
  LANG_HOME,
  LICENSE_URL,
  type Lang,
} from "@/lib/content";

export default function Landing({ lang }: { lang: Lang }) {
  const t = content[lang];

  return (
    <>
      <header className="nav">
        <a className="nav-brand" href={LANG_HOME[lang]}>
          <TildeMark className="nav-tilde" />
          Tilde
        </a>
      </header>

      <main>
        <section className="hero">
          <TildeMark className="hero-mark" />
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={DOWNLOAD_URL}>
              {t.hero.download}
            </a>
            <a className="button button-secondary" href={GITHUB_URL}>
              {t.hero.viewSource}
            </a>
          </div>
          <p className="hero-fineprint">{t.hero.fineprint}</p>
          <p className="hero-fineprint hero-appstore">{t.hero.appStoreNote}</p>
        </section>

        <section className="showcase">
          <ShowcaseTabs
            items={t.showcase.items}
            ariaLabel={t.showcase.ariaLabel}
            defaultId={t.showcase.defaultId}
          />
        </section>

        <section className="values" aria-labelledby="values-heading">
          <h2 id="values-heading" className="sr-only">
            {t.values.heading}
          </h2>
          <ul>
            {t.values.items.map((v) => (
              <li key={v.name}>
                <p className="value-name">{v.name}</p>
                <p className="value-line">{v.line}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="features">
          <h2 className="section-heading">{t.features.heading}</h2>
          <div className="features-grid">
            {t.features.items.map((f) => (
              <div className="feature" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="nongoals">
          <h2 className="section-heading">{t.nonGoals.heading}</h2>
          <ul className="nongoals-list">
            {t.nonGoals.list.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
          <p className="nongoals-closing">{t.nonGoals.closing}</p>
        </section>

        <section className="privacy">
          <h2 className="section-heading">{t.privacy.heading}</h2>
          <ul className="privacy-list">
            {t.privacy.items.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="privacy-closing">{t.privacy.closing}</p>
        </section>

        <section className="outro">
          <p className="outro-line">{t.outro.line}</p>
          <a className="button button-primary" href={DOWNLOAD_URL}>
            {t.outro.download}
          </a>
        </section>
      </main>

      <footer className="footer">
        <TildeMark className="footer-tilde" />
        <p>
          {t.footer.license} <a href={LICENSE_URL}>{t.footer.licenseName}</a>
          {t.footer.licenseSuffix}
        </p>
        <p className="footer-links">
          <a href={GITHUB_URL}>{t.footer.github}</a>
          {t.nav.otherLangs.map((l) => (
            <span key={l.hreflang}>
              <span aria-hidden="true"> · </span>
              <LangLink href={l.href} hreflang={l.hreflang}>
                {l.label}
              </LangLink>
            </span>
          ))}
        </p>
      </footer>
    </>
  );
}
