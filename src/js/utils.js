function getFormatDate() {
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
