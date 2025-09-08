export default defineNitroPlugin((nitroApp) => {
  myLayerHooks.hook("user:created", (user) => {
    console.log(`Welcome ${user}`);
  });
});
