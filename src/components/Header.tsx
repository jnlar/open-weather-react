import Button from "./Button";

export default function Header(props: any) {
  return (
    <div className="p-5 border-solid border-b-2 border-neutral-200 text-left text-lg font-bold font-semibold">
      <h1>Weather Data</h1>
      <p className="text-sm font-normal">
        It's easy, put in a city, address or country and get some weather data!
        or...
      </p>
      <Button className={"mt-2"} onClick={props.handleGeoLocationClick}>
        Current Location
      </Button>
    </div>
  );
}
