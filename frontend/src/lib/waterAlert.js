import moment from 'moment'

export const waterAlert = (plantLastWatered, waterFreq) => {
  const lastWatered = moment(plantLastWatered, "YYYY-MM-DD")
  const today = moment().startOf('day')

  //Difference in number of days
  const diff = moment.duration(today.diff(lastWatered)).asDays()
  //amount of days a plant can go without being watered
  const days = waterFreq

  if (diff < days - 1) {
    return 'ok'
  } else if (diff >= days - 1 && diff <= days + 1) {
    return 'water'
  } else if (diff > days + 1) {
    return 'danger'
  } else {
    return null
  }
}
