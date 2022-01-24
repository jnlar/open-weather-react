interface IParagraph {
  children?: JSX.Element | JSX.Element[];
}

export default function Paragraph(props: IParagraph) {
  return <p className="text-sm font-mono">{props.children}</p>;
}
