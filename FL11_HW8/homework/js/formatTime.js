function formatTime(timeInMinutes) {
  let days = Math.floor(timeInMinutes/1440),
      hours = Math.floor(timeInMinutes/60)%24,
      minutes = timeInMinutes%60;
  console.log(`${days} day(s) ${hours} hour(s) ${minutes} minute(s)`)
}
formatTime(2881)