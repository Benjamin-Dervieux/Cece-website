const db = require("../db");

module.exports.createSportArticle = async ({
  title,
  urlPicture,
  content,
  author,
}) => {
  return await db.sport.create({
    data: {
      title,
      urlPicture,
      content,
      author,
    },
  });
};

module.exports.patchSportArticle = async (data) => {
  return await db.sport
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

module.exports.findAllSportArticles = () =>
  db.sport.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteSportArticle = (id) => {
  return db.sport.delete({
    where: {
      id,
    },
  });
};
