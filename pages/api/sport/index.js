import { createSportArticle, findAllSportArticles } from "../../../model/sport";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const sportPost = await createSportArticle(req.body);
  return res.status(201).send(sportPost);
};

async function handleGet(req, res) {
  res.send(await findAllSportArticles());
}

export default base().post(handlePost).get(handleGet);
