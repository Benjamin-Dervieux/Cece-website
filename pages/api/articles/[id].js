import { patchArticle, deleteArticle } from "../../../model/news";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const newsToPatch = await patchArticle(req.query.id);
  return res.status(201).send(newsToPatch);
};

const handleDelete = async (req, res) => {
  const newsToDelete = await deleteArticle(req.query.id);
  return res.status(201).send(newsToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
