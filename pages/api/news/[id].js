import { patchNewsArticle, deleteNewsArticle } from "../../../model/news";
import base from "../../../middleware/common";

const handlePatch = async (req, res) => {
  const newsToPatch = await patchNewsArticle(req.query.id);
  return res.status(201).send(newsToPatch);
};

const handleDelete = async (req, res) => {
  const newsToDelete = await deleteNewsArticle(req.query.id);
  return res.status(201).send(newsToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
