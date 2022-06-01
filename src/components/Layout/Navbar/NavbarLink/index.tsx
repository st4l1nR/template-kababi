import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type props = {
  href: string;
  className?: string;
  children: any;
};

const index = ({ href, className, children }: props) => {
  const router = useRouter();
  const actualPath = "/" + router.pathname.split("/")[1];

  return (
    <Link href={href}>
      <a
        className={`hover:text-secondary ${
          actualPath == href && "text-secondary"
        } ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default index;
