import { passwordStrength as getStrength } from "check-password-strength";
import { STRENGTH } from "@/constants/strength";
import { PASSWORD_OPTIONS } from "@/constants/passwordOptions";

export default function getPasswordStrength(password: string) {
  // @ts-ignore
  const calculatedStrength = getStrength(password, PASSWORD_OPTIONS).value;

  return (
    Object.values(STRENGTH).find(
      (item) => item.signal === calculatedStrength
    ) ?? null
  );
}
