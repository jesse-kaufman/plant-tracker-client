/* eslint-disable max-lines-per-function */
/** @file Plant service unit tests. */
import { describe, expect, it } from "vitest"
import {
  getStageStartDate,
  getStageDuration,
  getStageName,
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
      ).toBe("Week 11 (70 days) in veg stage.")

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
})
