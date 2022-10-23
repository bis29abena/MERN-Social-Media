const route = require("express").Router();
const Message = require("../models/Message");

//add message
route.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const message = await newMessage.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get messasge
route.get("/:conversationId", async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId
        })

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = route;
