export const PASSWORD_OPTIONS = [
  {
    id: 0,
    value: "tooWeak",
    minDiversity: 0,
    minLength: 0,
  },
  {
    id: 1,
    value: "weak",
    minDiversity: 2,
    minLength: 6,
  },
  {
    id: 2,
    value: "medium",
    minDiversity: 4,
    minLength: 8,
  },
  {
    id: 3,
    value: "strong",
    minDiversity: 4,
    minLength: 10,
  },
] as const;

interface Option {
  id: number;
  value: string;
  minDiversity: number;
  minLength: number;
}

export type PasswordOptions =
  (typeof PASSWORD_OPTIONS)[keyof typeof PASSWORD_OPTIONS];
