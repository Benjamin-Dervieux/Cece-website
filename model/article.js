const db = require("../db");

module.exports.createArticle = async ({
  title,
  urlPicture,
  content,
  author,
}) => {
  return await db.articles.create({
    data: {
      title,
      urlPicture,
      content,
      author,
    },
  });
};

module.exports.patchArticle = async (data) => {
  return await db.articles
    .update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        urlPicture: data.urlPicture,
        content: data.content,
      },
    })
    .catch((_) => false);
};

module.exports.findAllArticles = () =>
  db.articles.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteArticle = (id) => {
  return db.articles.delete({
    where: {
      id,
    },
  });
};
