import type { ReactNode } from "react";

export function Card({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-[#F7ECEF] bg-[#FFFFFF] p-6 shadow-sm backdrop-blur">
      {title ? <h3 className="mb-3 text-lg font-semibold text-[#1F1F1F]">{title}</h3> : null}
      <div className="text-sm leading-7 text-[#1F1F1F]">{children}</div>
    </article>
  );
}
