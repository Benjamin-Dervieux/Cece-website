const db = require("../db");

module.exports.createArticle = async ({
  title,
  urlPicture,
  content,
  author,
}) => {
  return await db.article.create({
    data: {
      title,
      urlPicture,
      content,
      author,
    },
  });
};

module.exports.patchArticle = async (data) => {
  return await db.article
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
  db.article.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteArticle = (id) => {
  return db.article.delete({
    where: {
      id,
    },
  });
};
