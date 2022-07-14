import { createArticle, findAllArticles } from "../../../model/actuality";
import base from "../../../middleware/common";

const handlePost = async (req, res) => {
  const articlePost = await createArticle(req.body);
  return res.status(201).send(articlePost);
};

async function handleGet(req, res) {
  res.send(await findAllArticles());
}

export default base().post(handlePost).get(handleGet);
