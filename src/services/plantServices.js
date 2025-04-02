/** @file Plant services. */

import { getWeekNumber, getDaysBetween } from "./dateServices.js"

/**
 * Gets starting date for stage provided.
 * @param {string} stage - Stage to get date for.
 * @param {object} dates - Object containing plant dates.
 * @returns {Date} Date stage was started.
 */
export const getStageStartDate = (stage, dates) => {
  // Validate input.
  if (!dates || typeof dates !== "object") {
    throw new Error("Invalid dates object")
  }

  // Initialize dateProp to default.
  let dateProp = `${stage}StartedOn`

  // Override date prop for seedling and harvested stages.
  if (stage === "seedling") dateProp = "startedOn"
  if (stage === "harvested") dateProp = "harvestedOn"

  // Throw error if property does not exist.
  if (dates[dateProp] == null) throw new Error("Invalid dates object")

  // Return the date.
  return dates[dateProp]
}

/**
 * Gets string saying how long plant has been in given stage.
 * @param {string} stage - Stage plant is currently in.
 * @param {Date} startedOn - Date plant started stage.
 * @param {Date} endedOn - Date stage ended (or today if undefined).
 * @returns {string} String saying how long plant has been in stage.
 */
export const getStageDuration = (stage, startedOn, endedOn = new Date()) => {
  const daysInStage = getDaysBetween(startedOn, endedOn)
  const weeksInStage = getWeekNumber(startedOn, endedOn)

  let duration = `${daysInStage} days`

  if (weeksInStage > 0) {
    duration = `Week ${weeksInStage} (${duration})`
  }

  const since = stage === "harvested" ? "since harvest" : `in ${stage} stage`
  return `${duration} ${since}.`
}
