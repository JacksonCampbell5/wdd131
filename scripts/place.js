const temperature = document.querySelector(`#temp`);
const windSpeed = document.querySelector(`#wind`);
const temp = parseInt(temperature.textContent);
const wind = parseInt(windSpeed.textContent);
let chill = document.querySelector(`#chill`);

if (temp <= 10 && wind > 4.8)  {
    chill.textContent = calculateWindChill(temp, wind);
}else {
    chill.textContent = "N/A";
}

function calculateWindChill(temp,wind){
    num = (13.12 + (0.6215 * temp) - (11.37 * (wind ** 0.16)) + (0.3965 * temp * (wind ** 0.16)));
    num *= 10;
    num = Math.round(num);
    return num / 10;
}