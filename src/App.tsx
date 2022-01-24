import { useState, useRef, Fragment } from "react";
import axios from "axios";
import WeatherData from "./components/WeatherData";
import Error from "./components/Error";
import { Weather } from "./interfaces/Weather";
import Card from "./components/Card";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Footer from "./components/Footer";
import {
  getTileNumbers,
  handleGeoLocationClick,
  handleLocationClick
} from "./util/geolocation";
import { OWKey } from "./util/key";

export default function App() {
  const [locWeather, setLocWeather] = useState<Weather>();
  const [loading, setLoading] = useState<boolean>(false);
  const [city, setCity] = useState<string>("");
  const [showWeatherComponent, setShowWeatherComponent] = useState<boolean>(
    false
  );
  const [errMsg, setErrMsg] = useState<string[]>([]);
  const [didError, setDidError] = useState<boolean>(false);
  const [tileImageUrl, setTileImageUrl] = useState<string>("");
  const searchInput = useRef<HTMLInputElement>(null);

  function closeError(): void {
    setDidError(false);
  }

  async function getWeatherData(apiUrl: string): Promise<void> {
    setLoading(true);

    await axios
      .get<Weather>(apiUrl)
      .then((res) => {
        let tiles = getTileNumbers(10, res.data.coord.lat, res.data.coord.lon);
        let xTile = tiles[0];
        let yTile = tiles[1];

        setLocWeather(res.data);
        setTileImageUrl(
          `https://tile.openweathermap.org/map/temp_new/10/${xTile}/${yTile}.png?appid=${OWKey}`
        );
        setDidError(false);
        setShowWeatherComponent(true);
      })
      .catch((err) => {
        setErrMsg(err?.response || err?.request);
        console.log(err?.response || err?.request);
        setDidError(true);
        setShowWeatherComponent(false);
      });

    setLoading(false);
  }

  return (
    <Card>
      <Header
        handleGeoLocationClick={() => {
          handleGeoLocationClick(getWeatherData, setDidError, setErrMsg);
        }}
      />
      <SearchInput
        setCity={setCity}
        searchInput={searchInput}
        handleLocationClick={() => {
          handleLocationClick(searchInput, getWeatherData, city);
        }}
      />
      {didError ? (
        <Error error={errMsg} closeError={closeError} />
      ) : (
        <Fragment />
      )}
      {showWeatherComponent ? (
        loading ? (
          <div>Loading...</div>
        ) : (
          <WeatherData
            /*tileImageUrl={tileImageUrl}*/
            locWeather={locWeather}
          />
        )
      ) : (
        <Fragment />
      )}
      <Footer />
    </Card>
  );
}
