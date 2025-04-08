/** @file Plant services. */
import plants from "@/plants.json"
import { convertStageDates } from "@/utils/plantUtils"

/**
 * Fetch plants from API.
 * @param {string} status - Status of plants to retrieve; defaults to active.
 * @returns {object} Plant object.
 */
export const fetchPlants = async (status = "active") => {
  try {
    console.log(`fetching ${status} plants: `)
    const response = await fetch(`/api/plants`)

    if (!response.ok) {
      throw new Error("Plant not found")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching plant:", error)
    throw error
  }
}

/**
 * Fetches plant from API.
 * @param {string} id - ID of plant to fetch.
 * @returns {object} Plant object.
 */
export const fetchPlant = (id) => {
  const plantData = plants.find((item) => item.id.toString() === id)
  return convertStageDates(plantData)
}
