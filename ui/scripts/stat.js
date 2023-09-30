//http://ip-api.com/json/?fields=status,message,country,regionName,city,lat,lon,timezone,currency,mobile,query

async function mainStat() {
    const responce = await fetch("http://ip-api.com/json/?fields=status,message,country,regionName,city,lat,lon,timezone,currency,mobile,query")
    const data = await responce.json()
    console.log(
        "Country: " + data.country + ",\n" +
        "Region: " + data.regionName + ",\n" +
        "City: " + data.city + ",\n" +
        "Mobile: " + data.mobile + ",\n"
    )
    if (data.mobile === true) {
        alert("😔This is not adapted for mobile devices😔")
    }
}

mainStat()