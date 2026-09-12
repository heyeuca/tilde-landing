"use client";

import { useEffect, useState } from "react";

export default function BrewCommand({
  command,
  copyLabel,
  copiedLabel,
}: {
  command: string;
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      return;
    } catch {
      // Fall through to the legacy path (denied permission, insecure
      // context, embedded browsers).
    }
    const ta = document.createElement("textarea");
    ta.value = command;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    if (ok) setCopied(true);
  };

  return (
    <div className="brew">
      <span className="brew-line">
        <code className="brew-code">{command}</code>
        <button
          type="button"
          className="brew-copy"
          onClick={copy}
          aria-live="polite"
        >
          <svg
            className="brew-copy-icon"
            viewBox="0 0 16 16"
            width="14"
            height="14"
            aria-hidden="true"
          >
            {copied ? (
              <path
                d="M3 8.5l3 3 7-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <rect
                  x="5.5"
                  y="5.5"
                  width="8"
                  height="8"
                  rx="1.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
                <path
                  d="M10.5 5.5V3.5A1 1 0 0 0 9.5 2.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                />
              </>
            )}
          </svg>
          {copied ? copiedLabel : copyLabel}
        </button>
      </span>
    </div>
  );
}
