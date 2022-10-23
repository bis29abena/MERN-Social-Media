const User = require("../models/User");
const route = require("express").Router();
const bcrypt = require("bcrypt");

//Update user
route.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.salt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been upated");
    } catch (err) {
      res.status(500).json(eer);
    }
  } else {
    return res.status(403).json("You can update only your account!");
  }
});

//delete user
route.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("account has been deleted");
    } catch (err) {
      res.status(500).json(eer);
    }
  } else {
    return res.status(403).json("You can delete only ypur account!");
  }
});

//get a user

route.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get user
route.get("/friends/:userId", async (req, res) => {
  try {
      const user = await User.findById(req.params.userId)
      const friends = await Promise.all(
        user.followings.map(friendId => {
          return User.findById(friendId)
        })
      )
      let friendList = []
      friends.map(friend=>{
        const {_id, username, profilePicture} = friend;
        friendList.push({_id, username, profilePicture})
      })
      res.status(200).json(friendList)
  } catch (error) {
    res.status(500).json(error)
  }
})

//follow user
route.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("User has been followed");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you cannot follow yourself");
  }
});

//unfollow a user
route.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("User has been unfollowed");
      } else {
        res.status(403).json("You dont follow this user");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("you cannot unfollow yourself");
  }
});

module.exports = route;
