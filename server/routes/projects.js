import express from "express";
import { dbConnection } from "../dbConnection/dbConnection.js";
const router = express.Router();

export { router };

router.post("/adding", function (req, res, next) {
  let newProject = req.body;
  const query =
    "insert into projects (name, image, description, code_source) values (?,?,?,?)";
  dbConnection.query(
    query,
    [
      newProject.name,
      newProject.image,
      newProject.description,
      newProject.codeSource,
    ],
    (err, result) => {
      if (!err) {
        return res.status(200).json({ message: "was added succsessfully" });
      } else {
        return res.status(505).json({ message: "was not added succsessfully" });
      }
    }
  );
});

router.get("/getall", function (req, res, next) {
  const query = "select * from projects";
  dbConnection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).send(result);
    } else {
      return res.status(500).send(err.message);
    }
  });
});
router.patch("/update/:id", function (req, res, next) {
  const id = req.params.id;
  const project = req.body;
  const query =
    "update projects set name=?, image=?, description=?, code_source=? where id=?";
  dbConnection.query(
    query,
    [project.name, project.image, project.description, project.codeSource, id],
    (err, result) => {
      if (!err) {
        if (result.affectedRows == 0) {
          return res.status(404).send({ message: "project id wasn't found" });
        }
        return res
          .status(200)
          .send({ message: "project updated succseefully", result: result });
      } else {
        return res.status(500).send(err.message);
      }
    }
  );
});

router.delete("/delete/:id", function (req, res) {
  const id = req.params.id;
  const query = "delete from projects where id=?";
  dbConnection.query(query, [id], (err, result) => {
    if (!err) {
      if (result.affectedRows == 0) {
        return res.status(404).send({ message: "id wasnt found" });
      }
      return res.status(200).send({ message: "project deleted succseefully" });
    } else res.status(500).send(err.message);
  });
});
