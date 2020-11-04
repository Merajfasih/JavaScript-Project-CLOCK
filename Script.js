setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')


function setClock()
{
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours())/12
    setRotation(secondhand,secondRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)
}

function setRotation(elemnt, rotationRatio)
{
    elemnt.style.setPropert('--rotation',rotationRatio * 360)
}

setClock()