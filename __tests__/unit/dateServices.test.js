/** @file Date services unit tests. */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-lines-per-function */

import { describe, expect, it } from "vitest"
import {
  getDaysBetween,
  getWeeksBetween as getWeekNumber,
} from "../../src/services/dateServices"

describe("Date service", () => {
  // Test getDaysBetween() function.
  describe("getDaysBetween", () => {
    it("should calculate the days between dates correctly", () => {
      // Test for 2 day increment.
      expect(
        getDaysBetween(new Date("2023-01-01"), new Date("2023-01-03"))
      ).toBe(2)

      // Test for 6 day increment.
      expect(
        getDaysBetween(new Date("2023-01-01"), new Date("2023-01-07"))
      ).toBe(6)
    })

    it("should calculate the correct number of days when endDate is not passed", () => {
      const startDate = new Date("2023-01-01")
      const today = new Date()

      // Calculate the expected difference in days
      const expectedDays = Math.floor((today - startDate) / (1000 * 3600 * 24))

      // Run the function
      const result = getDaysBetween(startDate)

      // Assert the result is correct
      expect(result).toBe(expectedDays)
    })

    it("should throw an error when startedOn is before endedOn", () => {
      expect(() => {
        getWeekNumber(new Date("2023-01-02"), new Date("2023-01-01"))
      }).toThrow()
    })

    it("should throw an error when non-dates are sent", () => {
      expect(() => {
        getDaysBetween(true)
      }).toThrow()
      expect(() => {
        getDaysBetween(true, true)
      }).toThrow()
    })
  })

  // Test getWeekNumber() function.
  describe("getWeekNumber", () => {
    it("should calculate the weeks between dates correctly", () => {
      expect(
        getWeekNumber(new Date("2023-01-01"), new Date("2023-01-03"))
      ).toBe(1)

      expect(
        getWeekNumber(new Date("2023-01-01"), new Date("2023-01-09"))
      ).toBe(2)
    })

    it("should calculate the correct number of weeks when endDate is not passed", () => {
      const startDate = new Date("2023-01-01")
      const today = new Date()
      // Calculate the expected difference in days
      const expectedDays = Math.ceil(
        Math.ceil((today - startDate) / (1000 * 3600 * 24)) / 7
      )

      // Run the function being tested
      const result = getWeekNumber(startDate)

      // Assert the result is correct
      expect(result).toBe(expectedDays)
    })

    // Test when startedOn is before endedOn.
    it("should throw an error when startedOn is before endedOn", () => {
      expect(() => {
        getWeekNumber(new Date("2023-01-02"), new Date("2023-01-01"))
      }).toThrow()
    })

    // Test when non-dates are sent.
    it("should throw an error when non-dates are sent", () => {
      expect(() => {
        getWeekNumber(true, true)
      }).toThrow()
      expect(() => {
        getWeekNumber(true)
      }).toThrow()
    })
  })
})
