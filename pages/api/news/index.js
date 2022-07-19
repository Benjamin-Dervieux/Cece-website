import { createNewsArticle, findAllNewsArticles } from "../../../model/news";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const newsPost = await createNewsArticle(req.body);
  return res.status(201).send(newsPost);
};

async function handleGet(req, res) {
  res.send(await findAllNewsArticles());
}

export default base().post(handlePost).get(handleGet);
