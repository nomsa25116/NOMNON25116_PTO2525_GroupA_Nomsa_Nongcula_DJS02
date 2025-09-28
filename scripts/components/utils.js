import { genres } from "../data.js";

/**
 * Service to retrieve genre titles from genre IDs.
 *
 * @principle SRP - Single Responsibility Principle: Only responsible for mapping genre IDs to names.
 */
export const GenreService = {
  /**
   * Resolves an array of genre IDs into an array of genre titles.
   * @param {number[]} genreIds - Array of genre IDs.
   * @returns {string[]} Array of genre titles.
   */
  getNames(genreIds) {
    return genreIds.map(
      (id) => genres.find((g) => g.id === id)?.title || "Unknown"
    );
  },
};

/**
 * Date Formatter - Utility function for date formatting.
 *
 * @principle SRP - Single Responsibility Principle: This module only formats dates and does not handle any unrelated logic.
 */
export const DateUtils = {
  /**
   * Formats a date string into a human-readable format.
   * @param {string} dateStr - ISO date string.
   * @returns {string} Formatted date string.
   */
  format(dateStr) {
    const date = new Date(dateStr);
    return `Updated ${date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })}`;
  },
};