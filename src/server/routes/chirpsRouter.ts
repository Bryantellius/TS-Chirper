import * as express from "express";
import * as chirpStore from "../chirpstore";
const router = express.Router();

router.get("/:id?", (req, res) => {
  try {
    let id = req.params.id;
    if (id) {
      res.json(chirpStore.GetChirp(id))
    } else {
      const data = chirpStore.GetChirps()
      const chirps = Object.keys(data).map(key => {
        return {
          id: key,
          username: data[key].username,
          message: data[key].message,
          time: data[key].time
        }
      })
      chirps.pop();
      chirps.reverse()
      res.json(chirps);
    }
  } catch (error) {
    console.log(`Error attempting to GET`);
    res.status(error);
  }
});

router.post("/", (req, res) => {
  try {
    let body = req.body;
    res.json(chirpStore.CreateChirp(body));
  } catch (error) {
    console.log(`Error attempting to POST`);
    res.status(error);
  }
});

router.put("/:id", (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    res.json(chirpStore.UpdateChirp(id, body));
  } catch (error) {
    console.log(`Error attempting to PUT`);
    res.status(error);
  }
});

router.delete("/:id", (req, res) => {
  try {
    let id = req.params.id;
    res.json(chirpStore.DeleteChirp(id));
  } catch (error) {
    console.log(`Error attempting to DELETE`);
    res.status(error);
  }
});

export default router;
