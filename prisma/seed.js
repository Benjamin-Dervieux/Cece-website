const db = require("../lib/prisma");

const seed = async () => {
  await db.news.deleteMany();
  await db.news.createMany({
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

  await db.nutrition.deleteMany();
  await db.nutrition.createMany({
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

  await db.sport.deleteMany();
  await db.sport.createMany({
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
