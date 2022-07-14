import { patchArticle, deleteArticle } from "../../../model/actuality";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const articleToPatch = await patchArticle(req.query.id);
  return res.status(201).send(articleToPatch);
};

const handleDelete = async (req, res) => {
  const articleToDelete = await deleteArticle(req.query.id);
  return res.status(201).send(articleToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
