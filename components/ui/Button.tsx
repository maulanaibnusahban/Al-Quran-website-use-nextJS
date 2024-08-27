import Link from "next/link";
import React from "react";
import { intButton } from "@/data/intervaces";

function Button({ index, label, href }: intButton) {
  return (
    <Link href={href}>
      <button type="button" className={index}>
        {label}
      </button>
    </Link>
  );
}

export default Button;
