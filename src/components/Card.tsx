interface ICard {
  children?: JSX.Element | JSX.Element[];
}

const md =
  "md:rounded-lg md:border-solid md:border-t-2 md:border-neutral-100 md:shadow-xl md:w-7/12";

export default function Card(props: ICard) {
  return (
    <div className="flex justify-center h-screen">
      <div
        className={`m-auto p-5 w-screen overflow-hidden h-max 2xl:w-1/3 ${md}`}
      >
        {props.children}
      </div>
    </div>
  );
}
