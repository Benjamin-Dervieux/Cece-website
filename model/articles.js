const db = require("../db");

module.exports.createNewArticle = async ({
  title,
  urlPicture,
  content,
  author,
  category,
}) => {
  return await db.articles.create({
    data: {
      title,
      urlPicture,
      content,
      author,
      category,
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
        category: data.category,
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
