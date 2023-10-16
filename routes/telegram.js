const express = require("express");
const router = express.Router();
const api = require("./api");

/* GET users listing. */
router.get("/", function (req, res, next) {
  telegram();
  res.send("respond with a resource from telegram");
});

async function telegram() {
  // 1. Create instance

  // 2. Print the user country code
  // api.call("help.getNearestDc").then((result) => {
  //   console.log("country:", result.country);
  // });

  const resolvedPeer = api
    .call("contacts.resolveUsername", {
      username: "@felix619"
    })
    .then((result) => {
      console.log(result);
    });
  console.log(resolvedPeer);
  // if (resolvedPeer) {
  //   const channel = resolvedPeer.chats.find(
  //     (chat) => chat.id === resolvedPeer.peer.channel_id
  //   );
  //   console.log(channel);
  // }

  console.log("This is moto test !!!");
}

module.exports = router;
