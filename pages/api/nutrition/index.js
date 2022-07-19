import {
  createNutritionArticle,
  findAllNutritionArticles,
} from "../../../model/nutrition";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const nutritionPost = await createNutritionArticle(req.body);
  return res.status(201).send(nutritionPost);
};

async function handleGet(req, res) {
  res.send(await findAllNutritionArticles());
}

export default base().post(handlePost).get(handleGet);
