import type { UserData } from "../types/User";

/**
 * Type-safe JSON parser for user data
 * This function validates the JSON structure and provides type safety
 */
export const parseUserData = (jsonData: unknown): UserData => {
  // Basic validation
  if (!jsonData || typeof jsonData !== "object") {
    throw new Error("Invalid JSON data: Expected an object");
  }

  const data = jsonData as Record<string, unknown>;

  // Validate required top-level properties
  const requiredFields = ["about", "personal", "site_meta", "experience"];
  for (const field of requiredFields) {
    if (!(field in data)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  // Validate about section
  if (
    !data.about ||
    typeof data.about !== "object" ||
    !Array.isArray((data.about as Record<string, unknown>).paragraphs)
  ) {
    throw new Error(
      "Invalid about section: Expected object with paragraphs array"
    );
  }

  // Validate personal section
  if (!data.personal || typeof data.personal !== "object") {
    throw new Error("Invalid personal section: Expected object");
  }

  const personal = data.personal as Record<string, unknown>;
  const personalRequiredFields = [
    "name",
    "position",
    "profile",
    "social",
    "contact",
  ];
  for (const field of personalRequiredFields) {
    if (!(field in personal)) {
      throw new Error(`Missing required personal field: ${field}`);
    }
  }

  // Validate experience array
  if (!Array.isArray(data.experience)) {
    throw new Error("Invalid experience: Expected array");
  }

  // Type assertion after validation
  return data as unknown as UserData;
};
