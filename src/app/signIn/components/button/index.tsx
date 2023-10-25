import React from "react";

type TButtonProps = {
  title: string;
};
export default function Button({ title }: TButtonProps) {
  return <button>{title}</button>;
}
