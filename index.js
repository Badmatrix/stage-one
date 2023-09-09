const timeStamp = document.querySelector('#utc span')
const date = document.querySelector('#date span')
const days = document.querySelector('#day')
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

  timeStamp.textContent = `${hour} : ${minute} : ${secs}`
  days.textContent = `${day}`
  date.textContent = ` ${todaysDate} - ${month} - ${year}`
}
// calling the function every seconds
setInterval(() => {
  timer()
}, 1000)
