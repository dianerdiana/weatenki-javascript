export function getFormatDate() {
  // create a new Date object
  const date = new Date()

  // get the day, month, and year from the Date object
  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' })
  const year = date.getFullYear()

  // combine the day, month, and year into the desired format
  const formattedDate = `${day} ${month} ${year}`

  return formattedDate
}

export function getCurrentDay() {
  const date = new Date() // create a new Date object
  const options = { weekday: 'long' } // set the options to get the weekday as a full name string
  const dayOfWeekString = date.toLocaleDateString('en-US', options) // get the day of the week as a string in the format of "Sunday", "Monday", etc.

  return dayOfWeekString // output the day of the week
}

export function getCurrentTime() {
  const date = new Date() // create a new Date object
  const options = { hour: '2-digit', minute: '2-digit' } // set the options to get the time in the format of "hh:mm"
  const timeString = date.toLocaleTimeString([], options) // get the time as a string in the format of "hh:mm"
  return timeString // return the time as a string
}
