const {
  signupForm,
  signup,
  uploadImage,
  userProfile,
  userList,
  followUser,
  unFollowUser,
} = require("../controllers/users.controller");
const { ensureAuthenticated } = require("../config/guards.config");
const router = require("express").Router();

router.get("/", userList);
router.get("/follow/:userId", followUser);
router.get("/unfollow/:userId", unFollowUser);
router.get("/:username", userProfile);
router.get("/signup/form", signupForm);
router.post("/signup", signup);
router.post("/update/image", ensureAuthenticated, uploadImage);

module.exports = router;
