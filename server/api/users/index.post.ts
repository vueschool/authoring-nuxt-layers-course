import { myLayerHooks } from "#layers/my-layer/server/utils/hooks";
export default defineEventHandler(async (event) => {
  // create the new user
  const user = "new user";
  myLayerHooks.callHook("user:created", user);
  return {
    message: "User created successfully",
  };
});
