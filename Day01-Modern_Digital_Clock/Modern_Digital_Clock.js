function updateTime() {
  const currentTime = new Date()

  // Time
  const hour = currentTime.getHours()
  const minute = currentTime.getMinutes()
  const second = currentTime.getSeconds()
  var midday = "AM"

  const formattedHour = hour < 10 ? "0" + hour : hour
  const formattedMinute = hour < 10 ? "0" + minute : minute
  const formattedSecond = hour < 10 ? "0" + second : second
  var midday = hour >= 12 ? "PM" : "AM"

  const timeString = `${formattedHour} : ${formattedMinute} : ${formattedSecond}   ${midday}`

  document.querySelector('#clock').textContent = timeString


  // Date
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()

  const formattedDay = day < 10 ? "0" + day : day
  const formmattedMonth = month < 10 ? "0" + month : month

  const dateSring = `${formattedDay}/${formmattedMonth}/${year}`
  document.querySelector("#date").textContent = dateSring


}
updateTime()
setInterval(updateTime, 1000)


