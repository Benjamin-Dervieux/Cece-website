const db = require("../db");

module.exports.createNutritionArticle = async ({
  title,
  urlPicture,
  content,
  author,
}) => {
  return await db.nutrition.create({
    data: {
      title,
      urlPicture,
      content,
      author,
    },
  });
};

module.exports.patchNutritionArticle = async (data) => {
  return await db.nutrition
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

module.exports.findAllNutritionArticles = () =>
  db.nutrition.findMany({
    orderBy: {
      id: "desc",
    },
  });

module.exports.deleteNutritionArticle = (id) => {
  return db.nutrition.delete({
    where: {
      id,
    },
  });
};
