import { describe, expect, it } from "vitest";
import { ENV } from "./_core/env";

describe("notification email configuration", () => {
  it("should have NOTIFICATION_EMAIL environment variable set", () => {
    expect(ENV.notificationEmail).toBeDefined();
    expect(ENV.notificationEmail).toBe("info.support@ageful.co.jp");
  });

  it("should be a valid email format", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(ENV.notificationEmail)).toBe(true);
  });
});
