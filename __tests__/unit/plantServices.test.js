/** @file Plant service unit tests. */
import { describe, expect, it } from "vitest"
import { getStageStartDate } from "@/services/plantServices.js"

describe("Plant service", () => {
  describe("getStageStartDate", () => {
    it("should get the stage start date correctly", () => {
      const dates = {
        startedOn: new Date("2023-01-01"),
        vegStartedOn: new Date("2023-01-05"),
        flowerStartedOn: new Date("2023-02-01"),
        harvestedOn: new Date("2023-03-01"),
        cureStartedOn: new Date("2023-03-05"),
      }

      // Test getting startedOn date.
      expect(getStageStartDate("seedling", dates)).toEqual(dates.startedOn)

      // Test getting vegStartedOn date.
      expect(getStageStartDate("veg", dates)).toEqual(dates.vegStartedOn)

      // Test getting flowerStartedOn date.
      expect(getStageStartDate("flower", dates)).toEqual(dates.flowerStartedOn)

      // Test getting harvestedOn date.
      expect(getStageStartDate("harvested", dates)).toEqual(dates.harvestedOn)

      // Test getting cureStartedOn date.
      expect(getStageStartDate("cure", dates)).toEqual(dates.cureStartedOn)
    })
  })
})
