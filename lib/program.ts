// npm install node-fetch
// npm install @types/node-fetch

import fetch from 'node-fetch'

const address = "https://superusers-api-service-2020.azurewebsites.net/weather"
let city      = "copenhagen"

let url = `${address}/${city}`

let temp:number 


// C:\dev\vscode-nodejs-typescript-hello-world\node_modules\@types\node-fetch\index.d.ts
fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        temp = data.CurrentData.temperature   
        console.log(`The Temperatur in ${city} is today ${temp} `)
        //The Temperatur in copenhagen is today 16
    })
    

