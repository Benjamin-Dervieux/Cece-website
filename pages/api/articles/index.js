import { createNewArticle, findAllArticles } from "../../../model/articles";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const newsPost = await createNewArticle(req.body);
  return res.status(201).send(newsPost);
};

async function handleGet(req, res) {
  res.send(await findAllArticles());
}

export default base().post(handlePost).get(handleGet);
