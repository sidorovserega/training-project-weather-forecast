export type WeatherDay= {
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    feels_like: number,
    pressure: number
  },
  wind: {
    speed: number,
    deg: number
  },
  weather: {icon: string, id: number}[],
  dt_txt: string
};

export type Weather = 
  {
    city: {
      name: string
    },
    list: WeatherDay[]
  }

export type City = {
  nameActive: string,
  options: {value: string, label: string}[]
}