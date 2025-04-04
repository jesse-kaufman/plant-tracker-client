/** @file Plant services. */
import plants from "@/plants.json"
import { convertStageDates } from "@/utils/plantUtils"

/**
 * Fetches plant from API.
 * @param {string} id - ID of plant to fetch.
 * @returns {object} Plant object.
 */
export const fetchPlant = (id) => {
  const plantData = plants.find((item) => item.id.toString() === id)
  return convertStageDates(plantData)
}
