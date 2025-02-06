const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../frontend/public/images")));
app.use("/skills", express.static(path.join(__dirname, "../frontend/public/skills")));
app.use("/projects", express.static(path.join(__dirname, "../frontend/public/projects")))
let profile = {
  name: "Ayaan Amjad",
  image: "/images/dp.jpg",
  github: "https://github.com/Ayaan-tech",
  instagram: "https:/instagram.com/ayaan_amjad",
  linkedin: "https://www.linkedin.com/in/ayaanamjad/"
};

let skills = [
  { name: "HTML", image: "/skills/html.jpg" },
  { name: "CSS", image: "/skills/css.jpg" },
  { name: "Javascript", image: "/skills/javascript.jpg" },
  { name: "Python", image: "/skills/python.jpg" },
  { name: "React", image: "/skills/react.jpg" },
  { name: "Node.js", image: "/skills/nodejs.jpg" },
  { name: "Express.js", image: "/skills/expressjs.jpg" }
];

let projects = [
  { name: "Agricultural Assistant", description: "A Farmer and Agri-tech Support app", image: "/projects/agriculture.png" },
  { name: "ImageVisionPro", description: "An Image Detection app", image: "/projects/imagevision.jpg" },
  { name: "MeetChat", description: "A Platform for virtual meets", image: "/projects/meet.png" }
];

app.get("/profile", (req, res) => {
  res.json(profile);
});
app.get("/skills", (req, res) => {
  res.json(skills);
});
app.get("/projects", (req, res) => {
  res.json(projects);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
