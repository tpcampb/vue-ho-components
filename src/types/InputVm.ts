import type { InputOptions } from "./InputOptions.ts";

export interface InputVm {
  name: string;
  group: string;
  value: string;
  options: InputOptions[];
  isVisible: boolean;
  isEnabled: boolean;
  hasError: boolean;
  //validation
  //tooltip
  properties: Map<string, string>;
}