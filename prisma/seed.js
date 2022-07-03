const db = require("../db");

const seed = async () => {
  await db.article.deleteMany();
  await db.article.createMany({
    data: [
      {
        title: "First article",
        urlPicture:
          "https://chartwell.com/fr/blogue/2019/02/six-conseils-pour-favoriser-une-bonne-nutrition-et-une-saine-alimentation",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia Roettger",
      },

      {
        title: "Second article",
        urlPicture: "https://esclarmonde.net/formations/nutrition-sante/",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia Roettger",
      },
    ],
  });
};

seed();
module.exports = seed;
