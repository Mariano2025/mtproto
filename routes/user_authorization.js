const api = require("./api");

async function getUser() {
  try {
    const user = await api.call("users.getFullUser", {
      id: {
        _: "inputUserSelf"
      }
    });

    return user;
  } catch (error) {
    return null;
  }
}
