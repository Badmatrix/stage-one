const timeStamp = document.querySelector('#utc')
const date = document.querySelector('#date')
const days = document.querySelector('#day')
const mili = document.querySelector('#mil')
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']
const daysWeek = ['sunday', 'monday', 'tueday', 'wednesday', 'thursday', 'friday', 'saturday']
// function to capture real time and date
const timer = () => {
  const time = new Date()
  const todaysDate = ('0' + time.getDate()).slice(-2)
  const month = monthNames[time.getMonth()]
  const year = time.getFullYear()
  const day = daysWeek[time.getDay()]
  const hour = ('0' + time.getHours()).slice(-2)
  const minute = ('0' + time.getMinutes()).slice(-2)
  const secs = ('0' + time.getSeconds()).slice(-2)
  const milsecs = time.getMilliseconds()
  timeStamp.textContent = `${hour} : ${minute} : ${secs}`
  days.textContent = `${day}`
  date.textContent = ` ${todaysDate} - ${month} - ${year}`

}
// calling the function every seconds
setInterval(() => {
  timer()
}, 1000)
