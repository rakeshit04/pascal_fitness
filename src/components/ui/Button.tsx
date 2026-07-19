import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  children: ReactNode;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const className =
    "inline-flex items-center justify-center rounded-full bg-[#A93A4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C04E60]";

  if ("href" in props) {
    const { href, children, className: userClassName, ...rest } = props;
    const linkProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={`${className} ${userClassName ?? ""}`.trim()} {...linkProps}>
        {children}
      </a>
    );
  }

  const { children, className: userClassName, ...rest } = props;
  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={`${className} ${userClassName ?? ""}`.trim()} {...buttonProps}>
      {children}
    </button>
  );
}
