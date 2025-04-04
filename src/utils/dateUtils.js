/** @file Date services. */

/**
 * Gets number of days between dates.
 * @param {Date} startedOn - Date stage started.
 * @param {Date} endedOn - Date stage ended.
 * @returns {number} Number of days between dates.
 */
export const getDaysBetween = (startedOn, endedOn = new Date()) => {
  // Throw error if startedOn is not a date.
  if (!(startedOn instanceof Date)) {
    throw new TypeError("startedOn must be a date")
  }
  // Throw error if endedOn is not a date.
  if (!(endedOn instanceof Date)) throw new TypeError("endedOn must be a date")
  // Throw error if startedOn is before endedOn.
  if (startedOn > endedOn) throw new Error("startedOn must be before endedOn")

  // Calculate the difference in time (milliseconds).
  const timeDifference = endedOn - startedOn

  // Convert milliseconds to days.
  return Math.floor(timeDifference / (1000 * 60 * 60 * 24))
}

/**
 * Gets number of weeks between dates.
 * @param {Date} startedOn - Start date.
 * @param {Date} endedOn - End date.
 * @returns {number} Number of weeks between dates.
 */
export const getWeekNumber = (startedOn, endedOn = new Date()) =>
  Math.floor(getDaysBetween(startedOn, endedOn) / 7) + 1
