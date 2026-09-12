"use client";

import { useState } from "react";

export interface ShowcaseItem {
  /** Matches public/app-<id>-{light,dark}.png */
  id: string;
  label: string;
  alt: string;
}

export default function ShowcaseTabs({
  items,
  ariaLabel,
  defaultId,
}: {
  items: ShowcaseItem[];
  ariaLabel: string;
  defaultId?: string;
}) {
  const [active, setActive] = useState(() =>
    Math.max(
      0,
      items.findIndex((i) => i.id === defaultId),
    ),
  );
  const item = items[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const delta = e.key === "ArrowRight" ? 1 : -1;
    const next = (active + delta + items.length) % items.length;
    setActive(next);
    document.getElementById(`showcase-tab-${items[next].id}`)?.focus();
  };

  return (
    <>
      <div
        role="tabpanel"
        id="showcase-panel"
        aria-labelledby={`showcase-tab-${item.id}`}
      >
        <div className="showcase-viewport">
          <picture key={item.id}>
          <source
            srcSet={`/app-${item.id}-dark.png`}
            media="(prefers-color-scheme: dark)"
          />
          <img
            className="showcase-shot"
            src={`/app-${item.id}-light.png`}
            width={1600}
            height={1120}
            alt={item.alt}
          />
          </picture>
        </div>
      </div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="showcase-tabs"
        onKeyDown={onKeyDown}
      >
        {items.map((it, i) => (
          <button
            key={it.id}
            id={`showcase-tab-${it.id}`}
            role="tab"
            aria-selected={i === active}
            aria-controls="showcase-panel"
            tabIndex={i === active ? 0 : -1}
            className="showcase-tab"
            onClick={() => setActive(i)}
          >
            {it.label}
          </button>
        ))}
      </div>
    </>
  );
}
