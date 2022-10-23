const route = require("express").Router();
const Conversation = require("../models/Conversation");

// new convo
route.post("/", async (req, res) => {
  const newConveration = new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });

  try {
    const savedConversation = await newConveration.save();

    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get convo of a user
route.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get convo of two users
route.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const usersConvo = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    res.send(200).json(usersConvo);
  } catch (error) {
    res.send(500).json(error);
  }
});

module.exports = route;
