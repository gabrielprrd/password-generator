export const STRENGTH = {
  TOO_WEAK: {
    signal: "tooWeak",
    message: "Too weak!",
  },
  WEAK: {
    signal: "weak",
    message: "Weak",
  },
  MEDIUM: {
    signal: "medium",
    message: "Medium",
  },
  STRONG: {
    signal: "strong",
    message: "Strong",
  },
} as const;

export type Strength = (typeof STRENGTH)[keyof typeof STRENGTH];
