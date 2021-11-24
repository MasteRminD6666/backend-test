const express = require("express");
const router = express.Router();
const cors = require("cors");
const app = express();
app.use(cors({origin: 'http://localhost:4001'}));
router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;