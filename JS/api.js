//Guardamos la url de la api que vamos a usar
const url_api = 'https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=temperature_2m,relativehumidity_2m,is_day,windspeed_10m,winddirection_10m,windgusts_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto'
//Indicamos que la función va a ser asíncrona (lo usamos cuando trabajamos con apis externas)
async function obtenerTemp() {
    //Fetch va a buscar los datos a la api y devuelve promesas
    //Con await decimos que espere porque puede tardar 
    const response = await fetch(url_api)
    console.log(response)   // Acá lo importante es que la promesa
    // me devuelve en [[PromiseResult]]: Response
    // que el status es 200, indica que trajo los datos
    // podría traer errores de 400 para arriba: no se encuentra la página
    // o 500 para arriba: errores de servidor

    //Debemos transformar esto en un objeto json para poder trabajarlo:
    const data = await response.json()
    console.log(data)

    //Ahora podemos mostrar los datos: 
    const lugar = data.timezone                                     //lugar de la muestra
    const fecha = data.current.time                                 //dato de la fecha
    const temperatura = data.current.temperature_2m                 //dato de la temp
    const unid_temp = data.current_units.temperature_2m             //UM de la temp
    const vel_viento = data.current.windspeed_10m                   //vel del viento
    const unid_viento = data.current_units.windspeed_10m            //UM vel del viento
    const dir_viento = data.current.winddirection_10m               //vel del viento
    const card_viento = data.current_units.winddirection_10m        //cardinal del viento
    const humedad = data.current.relativehumidity_2m                //Humedad
    const unid_humedad = data.current_units.relativehumidity_2m     //Unid de humedad

    //Levantamos los datos del JSON de la API
    document.getElementById("timezone").innerHTML = lugar
    document.getElementById("current.time").innerHTML = fecha
    document.getElementById("current.temperature_2m").innerHTML = temperatura
    document.getElementById("current_units.temperature_2m").innerHTML = unid_temp
    document.getElementById("current.windspeed_10m").innerHTML = vel_viento
    document.getElementById("current_units.windspeed_10m").innerHTML = unid_viento
    document.getElementById("current.winddirection_10m").innerHTML = dir_viento
    document.getElementById("current_units.winddirection_10m").innerHTML = card_viento
    document.getElementById("current.relativehumidity_2m").innerHTML = humedad
    document.getElementById("current_units.relativehumidity_2m").innerHTML = unid_humedad
}
//Llamamos a la funcion
obtenerTemp()

