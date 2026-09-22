"use client";

import { track, type TrackEvent } from "@/lib/analytics";

/** A plain anchor that reports a GA4 event on click. */
export default function TrackedLink({
  event,
  location,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & {
  event: TrackEvent;
  /** Where on the page the link sits (hero, outro, nav, footer). */
  location: string;
}) {
  return (
    <a
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        track(event, { location });
      }}
    />
  );
}
