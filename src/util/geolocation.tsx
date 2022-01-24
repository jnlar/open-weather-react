import { OWKey } from "./key";

export function getTileNumbers(
  zoom: number,
  lat: number,
  lon: number
): number[] {
  let n = Math.pow(2, zoom);
  let xTile = Math.floor((lon + 180) / 360) * n;
  let yTile =
    (Math.floor(
      1 -
        Math.log(
          Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
        )
    ) /
      2) *
    n;

  return [xTile, yTile];
}

export function handleGeoLocationClick(
  getWeatherData: any,
  setDidError: React.Dispatch<React.SetStateAction<boolean>>,
  setErrMsg: React.Dispatch<React.SetStateAction<string[]>>
): void {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      getWeatherData(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${OWKey}&units=metric`
      );
    },
    (err) => {
      setDidError(true);
      setErrMsg([String(err.code), err.message]);
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  );
}

export function handleLocationClick(
  searchInput: React.RefObject<HTMLInputElement>,
  getWeatherData: any,
  city: string
): void {
  if (city === "" && searchInput.current) {
    searchInput.current.focus();
    return;
  }

  getWeatherData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OWKey}&units=metric`
  );
}
