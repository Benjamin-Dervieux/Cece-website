const db = require("../db");

const seed = async () => {
  await db.articles.deleteMany();
  await db.articles.createMany({
    data: [
      {
        title: "First article",
        urlPicture: "/images/nutri3.jpg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia.R",
        category: "News",
      },
      {
        title: "Second article",
        urlPicture: "/images/nutri2.jpg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia.R",
        category: "Nutrition",
      },
      {
        title: "Third article",
        urlPicture: "/images/nutri2.jpg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia.R",
        category: "News",
      },
      {
        title: "Fourth article",
        urlPicture: "/images/sport.jpg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia.R",
        category: "Sport",
      },
      {
        title: "fifth article",
        urlPicture: "/images/nutri3.jpg",
        content:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas numquam in nesciunt, eligendi quos nemo libero, quod reprehenderit neque doloribus, odit magnam ullam commodi vitae nulla inventore autem? Repudiandae corporis doloribus odit tenetur alias officiis at earum et soluta mollitia minus sint id, eligendi aperiam error, quisquam, voluptatem dicta animi.",
        author: "Célia.R",
        category: "Nutrition",
      },
    ],
  });
};

seed();
module.exports = seed;
