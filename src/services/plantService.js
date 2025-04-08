/** @file Plant services. */
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
export const fetchPlant = async (id) => {
  try {
    console.log(`fetching plantId: ${id}`)
    const response = await fetch(`/api/plants/${id}`)

    if (!response.ok) {
      throw new Error("Plant not found")
    }

    const plantData = await response.json()
    console.log(plantData)
    return convertStageDates(plantData)
  } catch (error) {
    console.error("Error fetching plant:", error)
    throw error
  }
}
