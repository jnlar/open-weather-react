import { MouseEventHandler } from "react";

interface IButton {
  children: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  type?: "submit";
}

export default function Button(props: IButton): JSX.Element {
  return (
    <button
      className={`text-sm bg-[#48484a] hover:bg-blue-700 text-white py-2 px-4 ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
