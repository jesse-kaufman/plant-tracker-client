/* eslint-disable max-lines-per-function */
/** @file Plant service unit tests. */
import { describe, expect, it } from "vitest"
import {
  getStageCompleteness,
  getStageDates,
  getStageDuration,
  getStageName,
  getStageStartDate,
} from "@/services/plantServices.js"

const dates = {
  startedOn: new Date("2023-01-01"),
  vegStartedOn: new Date("2023-01-05"),
  flowerStartedOn: new Date("2023-02-01"),
  harvestedOn: new Date("2023-03-01"),
  cureStartedOn: new Date("2023-03-05"),
}

describe("Plant service", () => {
  describe("getStageName", () => {
    it("should return 'vegetative' for 'veg' stage", () => {
      expect(getStageName("veg")).toBe("vegetative")
    })
    it("should return 'storage' for 'cure' stage", () => {
      expect(getStageName("cure")).toBe("storage")
    })
  })

  describe("getStageStartDate", () => {
    it("should get the stage start date correctly", () => {
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

    // Test sending invalid object for dates.
    it("throws error if dates object is missing the expected property", () => {
      expect(() => {
        getStageStartDate("veg", {})
      }).toThrow()
    })

    // Test sending non-object for dates.
    it("throws error if dates object non-object", () => {
      expect(() => {
        getStageStartDate("veg", null)
      }).toThrow()
    })
  })

  describe("getStageDuration", () => {
    it("should build the stage duration string properly", () => {
      // Test a short duration.
      expect(
        getStageDuration(
          "seedling",
          new Date("2023-01-01"),
          new Date("2023-01-05")
        )
      ).toBe("Week 1 (4 days) in seedling stage.")

      // Test a longer duration in veg.
      expect(
        getStageDuration("veg", new Date("2023-01-01"), new Date("2023-03-12"))
      ).toBe("Week 11 (70 days) in vegetative stage.")

      // Test a longer duration.
      expect(
        getStageDuration(
          "harvested",
          new Date("2023-01-01"),
          new Date("2023-02-01")
        )
      ).toBe("Week 5 (31 days) since harvest.")
    })
  })

  describe("getStageDates", () => {
    it("should return the correct dates from the plant object", () => {
      const stageDates = getStageDates(dates)

      expect(stageDates.startedOn).toEqual(dates.startedOn)
      expect(stageDates.vegStartedOn).toEqual(dates.vegStartedOn)
      expect(stageDates.flowerStartedOn).toEqual(dates.flowerStartedOn)
      expect(stageDates.harvestedOn).toEqual(dates.harvestedOn)
      expect(stageDates.cureStartedOn).toEqual(dates.cureStartedOn)
    })

    it("should return null if the plant object has no specific date", () => {
      const stageDates = getStageDates({
        ...dates,
        vegStartedOn: null,
        flowerStartedOn: null,
        harvestedOn: null,
        cureStartedOn: null,
      })

      expect(stageDates.startedOn).toEqual(dates.startedOn)
      expect(stageDates.vegStartedOn).toBeNull()
      expect(stageDates.flowerStartedOn).toBeNull()
      expect(stageDates.harvestedOn).toBeNull()
      expect(stageDates.cureStartedOn).toBeNull()
    })
  })

  describe("getStageCompleteness", () => {
    it("returns 'current' when currentStage equals compareStage", () => {
      expect(getStageCompleteness("veg", "veg")).toBe("current")
    })

    it("returns 'complete' when compareStage is 'source-seed'", () => {
      expect(getStageCompleteness("veg", "source-seed")).toBe("complete")
    })

    it("returns 'complete' when compareStage is 'source-clone'", () => {
      expect(getStageCompleteness("veg", "source-clone")).toBe("complete")
    })

    it("returns 'complete' when compareStage is before currentStage", () => {
      expect(getStageCompleteness("veg", "seedling")).toBe("complete")
      expect(getStageCompleteness("flower", "veg")).toBe("complete")
    })

    it("returns 'pending' when compareStage is after currentStage", () => {
      expect(getStageCompleteness("veg", "flower")).toBe("pending")
      expect(getStageCompleteness("veg", "harvested")).toBe("pending")
    })
  })
})
