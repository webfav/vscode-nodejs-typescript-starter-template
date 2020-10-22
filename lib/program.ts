import fetch from 'node-fetch'

class Weather {
    city:string

    url = "https://superusers-api-service-2020.azurewebsites.net/weather"

    constructor(cityName:string = "copenhagen") {
        this.city = cityName
    }
    
    getWeather(onSuccess:any, onError?:any) {
        const url:string = `${this.url}/${this.city}`
        fetch(url)
            .then(response  => response.json())
            .then(data      => onSuccess(data))
            .catch(reason   => onError(reason) )
    }
}

let input = process.argv[2] || 'Odense'

let obj = new Weather( input )

obj.getWeather(  (data:any) => {console.log(data)} , (problem:any) => console.error(problem))
