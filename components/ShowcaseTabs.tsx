"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

export interface ShowcaseItem {
  /** Matches public/app-<id>-{light,dark}.png */
  id: string;
  label: string;
  alt: string;
}

interface Indicator {
  x: number;
  y: number;
  width: number;
  height: number;
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

  // The selection pill is one element that slides between tabs (like a
  // segmented control) instead of a background that switches on and off.
  const listRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<Indicator | null>(null);
  const [settled, setSettled] = useState(false);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measure = () => {
      const tab = list.querySelector<HTMLElement>('[aria-selected="true"]');
      if (!tab) return;
      setIndicator({
        x: tab.offsetLeft,
        y: tab.offsetTop,
        width: tab.offsetWidth,
        height: tab.offsetHeight,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(list);
    return () => ro.disconnect();
  }, [active]);

  // Don't animate the pill's first placement on mount.
  useEffect(() => {
    if (indicator && !settled) {
      const id = requestAnimationFrame(() => setSettled(true));
      return () => cancelAnimationFrame(id);
    }
  }, [indicator, settled]);

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
          {/* Every capture stays mounted, stacked in one grid cell, and only
              the active one is opaque. The window chrome is identical across
              shots, so the frame appears to stay put while the document
              inside it cross-fades. */}
          <div className="showcase-stack">
            {items.map((it, i) => (
              <picture
                key={it.id}
                className="showcase-frame"
                data-active={i === active || undefined}
                aria-hidden={i !== active || undefined}
              >
                <source
                  srcSet={`/app-${it.id}-dark.png`}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  className="showcase-shot"
                  src={`/app-${it.id}-light.png`}
                  width={1600}
                  height={1120}
                  alt={i === active ? it.alt : ""}
                  loading={i === active ? "eager" : "lazy"}
                  decoding="async"
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={listRef}
        role="tablist"
        aria-label={ariaLabel}
        className="showcase-tabs"
        onKeyDown={onKeyDown}
      >
        {indicator && (
          <span
            aria-hidden="true"
            className="showcase-tab-indicator"
            data-settled={settled || undefined}
            style={{
              transform: `translate(${indicator.x}px, ${indicator.y}px)`,
              width: indicator.width,
              height: indicator.height,
            }}
          />
        )}
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
