import { describe, expect, it } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins class names with a single space", () => {
    expect(cn("px-4", "py-2")).toBe("px-4 py-2");
  });

  it("skips falsy values used for conditional classes", () => {
    const isActive = false;
    expect(cn("base", isActive && "active", undefined, null, "")).toBe("base");
  });

  it("returns an empty string when nothing is truthy", () => {
    expect(cn(false, undefined)).toBe("");
  });
});
