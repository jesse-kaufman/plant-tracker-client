/** @file Plant services. */

import { getWeekNumber, getDaysBetween } from "./dateServices.js"

/**
 * Gets starting date for stage provided.
 * @param {string} stage - Stage to get date for.
 * @param {object} dates - Object containing plant dates.
 * @returns {Date} Date stage was started.
 */
export const getStageStartDate = (stage, dates) => {
  if (stage === "harvested") return dates.harvestedOn

  return dates[stage]
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
    duration = `~${weeksInStage} weeks (${duration})`
  }

  const since = stage === "harvested" ? "since harvest" : `in ${stage} stage`
  return `${duration} ${since}.`
}
