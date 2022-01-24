export default function Footer() {
  return (
    <div className="flex p-5">
      <span className="font-semibold mr-2 text-xs text-left flex-auto text-neutral-700">
        Made using{" "}
        <a
          className="text-blue-500"
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
        >
          openweathermap
        </a>
      </span>
    </div>
  );
}
