/* eslint-disable max-lines-per-function */
/** @file Plant service unit tests. */
import { describe, expect, it, vi } from "vitest"
import {
  getStageCompleteness,
  getStageDates,
  getStageDuration,
  getStageName,
  getStageStartDate,
  getStageStartTitle,
} from "@/services/plantServices.js"

import * as plantServices from "@/services/plantServices.js"

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
    it("returns 'current' when stage equals plantStage", () => {
      expect(getStageCompleteness("veg", "veg")).toBe("current")
    })

    it("always returns 'complete' when stage is 'source-seed'", () => {
      expect(getStageCompleteness("source-seed", "veg")).toBe("complete")
    })

    it("always returns 'complete' when stage is 'source-clone'", () => {
      expect(getStageCompleteness("source-clone", "veg")).toBe("complete")
    })

    it("returns 'complete' when stage is before plantStage", () => {
      expect(getStageCompleteness("seedling", "veg")).toBe("complete")
      expect(getStageCompleteness("veg", "flower")).toBe("complete")
    })

    it("returns 'pending' when stage is after plantStage", () => {
      expect(getStageCompleteness("flower", "veg")).toBe("pending")
      expect(getStageCompleteness("harvested", "veg")).toBe("pending")
    })
  })

  describe("getStageStartTitle", () => {
    it('should return "Started" for "seedling" stage', () => {
      expect(getStageStartTitle("seedling")).toBe("Started")
    })

    it('should return "Harvested" for "harvested" stage', () => {
      expect(getStageStartTitle("harvested")).toBe("Harvested")
    })

    it('should return "Storage" for "cure" stage', () => {
      expect(getStageStartTitle("cure")).toBe("Storage")
    })

    it("should return the correct stage name for other stages", () => {
      const getStageNameMock = vi
        .spyOn(plantServices, "getStageName")
        .mockReturnValue("vegetative") // Mocking getStageName
      expect(getStageStartTitle("veg")).toBe("vegetative stage")
      getStageNameMock.mockRestore() // Restore the original implementation after the test
    })
  })
})
