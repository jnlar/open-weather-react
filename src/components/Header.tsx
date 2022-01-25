export default function Header(props: any) {
  return (
    <div className="p-5 border-solid border-b-2 border-neutral-200 text-left font-semibold text-sm leading-loose">
      <h1 className="text-lg">Weather Data</h1>
      <p className="font-normal">
        It's easy, put in a city, address or country and get some weather data!
        or..
      </p>
      <div
        onClick={props.handleGeoLocationClick}
        className="mt-2 p-1 w-fit bg-neutral-200 items-center flex rounded-md hover:cursor-pointer hover:text-blue-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-8 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        <span className="text-sm pr-2">Current Location</span>
      </div>
    </div>
  );
}
