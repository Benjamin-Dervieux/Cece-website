import {
  patchSportArticle,
  deleteSportArticle,
} from "../../../model/actuality";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const sportToPatch = await patchSportArticle(req.query.id);
  return res.status(201).send(sportToPatch);
};

const handleDelete = async (req, res) => {
  const sportToDelete = await deleteSportArticle(req.query.id);
  return res.status(201).send(sportToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
