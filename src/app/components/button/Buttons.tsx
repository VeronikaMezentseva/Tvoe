import { ButtonUI } from "@/ui/button/Button";
import { FC } from "react";

export const Button: FC<{ text: string; accent: boolean }> = ({text, accent}) => {
  return <ButtonUI text={text} accent={accent}></ButtonUI>;
};
