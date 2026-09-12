import BrewCommand from "@/components/BrewCommand";
import DownloadActions from "@/components/DownloadActions";
import LangLink from "@/components/LangLink";
import ShowcaseTabs from "@/components/ShowcaseTabs";
import TildeMark from "@/components/TildeMark";
import {
  APP_STORE_URL,
  BREW_COMMAND,
  content,
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
        <a className="nav-link" href={GITHUB_URL}>
          {t.nav.github}
        </a>
      </header>

      <main>
        <section className="hero">
          <TildeMark className="hero-mark" />
          <h1>{t.hero.title}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <div className="hero-actions">
            <DownloadActions hero={t.hero} />
          </div>
          <p className="hero-fineprint">
            {t.hero.fineprint}
            {!APP_STORE_URL && (
              <span className="hero-fineprint-note">
                <span aria-hidden="true" className="hero-fineprint-dot">
                  {" · "}
                </span>
                {t.hero.appStoreNote}
              </span>
            )}
          </p>
          <BrewCommand
            command={BREW_COMMAND}
            copyLabel={t.hero.copy}
            copiedLabel={t.hero.copied}
          />
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
          <ul className="values-list">
            {t.values.items.map((v) => (
              <li key={v.name} title={v.line}>
                {v.name}
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
          <p className="features-also">{t.features.also}</p>
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
          <div className="outro-actions">
            <DownloadActions
              hero={{ ...t.hero, download: t.outro.download }}
              primaryOnly
            />
          </div>
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
