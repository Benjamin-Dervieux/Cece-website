import {
  patchNutritionArticle,
  deleteNutritionArticle,
} from "../../../model/nutrition";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const nutritionToPatch = await patchNutritionArticle(req.query.id);
  return res.status(201).send(nutritionToPatch);
};

const handleDelete = async (req, res) => {
  const nutritionToDelete = await deleteNutritionArticle(req.query.id);
  return res.status(201).send(nutritionToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
