import { createHooks } from "hookable";

export const myLayerHooks = createHooks<{
  "user:created": (user: string) => void;
}>();
