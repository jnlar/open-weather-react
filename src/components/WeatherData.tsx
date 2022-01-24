import Paragraph from "./Paragraph";
export default function WeatherData(props: any) {
  const { locWeather /*tileImageUrl*/ } = props;

  return (
    <div className="p-5">
      <div className="bg-neutral-200 p-3 border-solid border-2 border-neutral-300 rounded overflow-hidden">
        <Paragraph>Area: {locWeather.name}</Paragraph>
        <Paragraph>Country: {locWeather.sys.country}</Paragraph>
        <Paragraph>
          Coordinates: {locWeather.coord.lat} {locWeather.coord.lon}
        </Paragraph>
        <Paragraph>
          Weather Description: {locWeather.weather[0].description}
        </Paragraph>
        <Paragraph>Temp: {locWeather.main.temp}&#8451;</Paragraph>
        <Paragraph>Temp (min): {locWeather.main.temp_min}&#8451;</Paragraph>
        <Paragraph>Temp (max): {locWeather.main.temp_max}&#8451;</Paragraph>
        <Paragraph>Windspeed: {locWeather.wind.speed}</Paragraph>
        <Paragraph>Direction: {locWeather.wind.deg}</Paragraph>
        <Paragraph>Gust: {locWeather.wind.gust}</Paragraph>
        {/* we won't do this until we can actually get good images from the API */}
        {/*<img alt="" src={tileImageUrl} />*/}
      </div>
    </div>
  );
}
