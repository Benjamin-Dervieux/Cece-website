const db = require("../db");

module.exports.createNewsArticle = async ({
  title,
  urlPicture,
  content,
  author,
}) => {
  return await db.news.create({
    data: {
      title,
      urlPicture,
      content,
      author,
    },
  });
};

module.exports.patchNewsArticle = async (data) => {
  return await db.news
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

module.exports.findAllNewsArticles = () =>
  db.news.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteNewsArticle = (id) => {
  return db.news.delete({
    where: {
      id,
    },
  });
};
