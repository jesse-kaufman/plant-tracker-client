/** @file Plant services. */

import { getWeekNumber, getDaysBetween } from "./dateUtils.js"

/** Plant stages in order. */
const stageOrder = ["seedling", "veg", "flower", "harvested", "cure"]

/**
 * Gets object with stage dates from plant object.
 * @param {object} plant - Plant object to extract dates from.
 * @returns {object} - Dates object.
 */
export const getStageDates = (plant) => ({
  startedOn: plant.startedOn,
  vegStartedOn: plant.vegStartedOn,
  flowerStartedOn: plant.flowerStartedOn,
  harvestedOn: plant.harvestedOn,
  cureStartedOn: plant.cureStartedOn,
})

/**
 * Converts date string properties on a plant to date objects.
 * @param {object} plant - Plant object to convert.
 * @returns {object} Plant object with date strings converted to objects.
 */
export const convertStageDates = (plant) => ({
  ...plant,
  startedOn: plant.startedOn && new Date(plant.startedOn),
  vegStartedOn: plant.vegStartedOn && new Date(plant.vegStartedOn),
  flowerStartedOn: plant.flowerStartedOn && new Date(plant.flowerStartedOn),
  harvestedOn: plant.harvestedOn && new Date(plant.harvestedOn),
  cureStartedOn: plant.cureStartedOn && new Date(plant.cureStartedOn),
})

/**
 * Gets stage completeness: pending, complete, or current.
 * @param {string} stage - Stage to retrieve completion level for.
 * @param {string} plantStage - Current plant stage for comparison.
 * @returns {string} Completeness: pending, complete, or current.
 */
export const getStageCompleteness = (stage, plantStage) => {
  if (plantStage === stage) return "current"

  // Stage is complete, based on current stage.
  if (
    stage === "source-seed" ||
    stage === "source-clone" ||
    plantStage === "cure" ||
    stageOrder.indexOf(stage) < stageOrder.indexOf(plantStage)
  ) {
    return "complete"
  }

  return "pending"
}

/**
 * Translates stage to friendly name.
 * @param {string} stage - Stage to translate.
 * @returns {string} Friendly name.
 */
export const getStageName = (stage) => {
  const stageNames = {
    veg: "vegetative",
    cure: "storage",
  }

  return stageNames[stage] || stage
}

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
  const weekNum = getWeekNumber(startedOn, endedOn)

  let duration = `${daysInStage} days`

  // If week number > 0, add it to the string and put days in parentheses.
  if (weekNum > 0) {
    duration = `Week ${weekNum} (${duration})`
  }

  // If stage is harvested, end with "since harvest" otherwise end with "in [stage] stage".
  const stageLabel =
    stage === "harvested" ? "since harvest" : `in ${getStageName(stage)} stage`

  return `${duration} ${stageLabel}.`
}

/**
 * Generates a title for stage start (e.g., "Veg started on" or "Harvested on").
 * @param {string} stage - Stage to generate a start title for.
 * @returns {string} Title generated.
 */
export const getStageStartTitle = (stage) => {
  if (stage === "seedling") return "Started"
  if (stage === "harvested") return "Harvested"
  if (stage === "cure") return "Storage"
  return `${getStageName(stage)} stage`
}
