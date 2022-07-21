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
        title:
          "Le chocolat est-il aussi bon pour la santé que pour le palais ?",
        urlPicture: "/images/nutri2.jpg",
        content:
          "Si l’aspect nutritionnel est votre priorité, nul doute que le chocolat riche en cacao (minimum 70 % mais idéalement au moins 80 à 85 %) est une mine d’or nutritionnel, notamment grâce à sa teneur en composés phénoliques. La problématique de cet aliment réside en effet avant tout dans la teneur en sucre, d’autant plus importante que le pourcentage de cacao est faible. Ce à quoi se rajoute l’utilisation désormais possible de graisses autre que le beurre de cacao. Si, en revanche votre choix est guidé par des enjeux environnementaux et/ou éthiques, la réponse devient plus délicate… La sélection d’une marque issue du commerce équitable peut donc représenter un compromis, même si cette filière n’est pas toujours aussi vertueuse que l’on pourrait l’imaginer. Mais c’est un autre sujet !",
        author: "Célia.R",
        category: "Nutrition",
      },
      {
        title: "Comprendre la diététique, bien s'hydrater",
        urlPicture: "/images/nutri2.jpg",
        content:
          "On entend souvent qu’il est nécessaire de boire au minimum 1,5 litres d’eau par jour. Mais pourquoi est-il si important de boire suffisamment ? DocteurBonneBouffe.com vous présente 15 raisons pour lesquelles nous devrions veiller à bien s’hydrater : #1. L’eau: un solvant miraculeux. Le saviez-vous? Bien qu’elle n’ait aucun goût et aucune couleur, l’eau est capable de diluer plus de substances qu’un autre liquide! #2. L’eau régule la température de notre corps. Tout le monde sait que quand on a très chaud, boire de l’eau est très important. Mais saviez-vous qu’il est également important de boire de l’eau quand on a froid? Le risque de déshydratation est, en effet, plus important quand on a froid car le corps lutte pour le maintenir chaud. Il est donc impératif de boire beaucoup d’eau. #3. L’eau permet une meilleure oxygénation du corps. L’eau permet de garder notre corps humide, ce qui est essentiel pour la majorité de nos organes, notamment nos poumons qui doivent comprendre un fort taux d’humidité pour bien fonctionner. Des études ont montré un lien entre la consommation d’eau et ses effets sur la réduction de l’asthme. #4. L’eau comme composant principal de notre organisme. Environ 70% du corps humain est fait d’eau. Boire de l’eau est donc indispensable pour notre fonctionnement. #5. L’eau pour se détoxifier. Notre organisme est souvent exposé à des toxines provenant de notre environnement externe. Boire de l’eau est une méthode simple, et naturelle, pour s’en débarrasser – d’où l’importance d’en boire beaucoup. #6. L’eau permet de réguler le taux de sucre dans le sang. Le niveau de sucre dans le sang joue un rôle important dans notre santé et dans notre bien-être général. Il est donc primordial de contrôler son niveau de sucre en buvant beaucoup d’eau et en mangeant des aliments hydratants comme des fruits frais. #7. L’eau aide à perdre du poids plus rapidement. Une étude américaine réalisée par l‘American Chemical Society a montré que les adultes qui boivent de l’eau avant chaque repas consommaient moins de calories pendant le repas et donc, perdaient plus facilement du poids. #8. L’eau comme moyen de lutte contre la constipation. Au delà de tous les effets négatifs liés à la mauvaise hydratation, un des effets les plus détestables en est… la constipation. En effet, l’eau permet la bonne digestion des aliments que nous mangeons, c’est pourquoi il est essentiel d’en fournir assez à notre organisme. #9. L’eau : boosteur d’humeur",
        author: "Célia.R",
        category: "News",
      },
      {
        title:
          "Méthodes low carb, sleep low et train low : les clés en nutrition sportive ?",
        urlPicture: "/images/sport.jpg",
        content:
          "Si on isole le paramètre sportif, le modèle low carb visant à réduire la part des glucides se rapproche fortement du régime méditerranéen revisité, considéré aujourd’hui comme l’un des modèles de référence en matière d’optimisation de la santé, notamment en favorisant une forte sensibilité à l’insuline. La notion de low carb demeure par ailleurs finalement subjective, dans la mesure où le curseur définissant précisément le point de bascule par rapport à un modèle normoglucidique est ténue, elle sous-entend surtout un certain état d’esprit dans l’approche de l’alimentation. De plus, l’état nutritionnel général de l’individu, à fortiori sportif, va déterminer en grande partie la réponse de l’organisme à cette réduction en glucides, notamment le statut antioxydant (via les végétaux) et en acides gras essentiels (via les graisses de qualité). Une restriction glucidique dans un environnement nutritionnel pro-inflammatoire va au contraire bien souvent en accentuer les mécanismes. Ainsi, focaliser son attention sur la qualité des glucides pour favoriser les charges glycémiques faibles et les aliments à haute densité nutritionnelle (légumineuses notamment) représente dans tous les cas une priorité. De même, privilégier une alimentation non transformée riche en végétaux permettra de mieux contrôler la qualité nutritionnelle et bien souvent de réduire les glucides. Une fois ces déterminants mis en place, peut alors se poser la question de la restriction glucidique volontaire et du choix entre la périodisation des apports et la réduction globale des glucides. Tout dépendra alors de vos habitudes, de vos contraintes d’entraînement et surtout, de votre réponse individuelle.",
        author: "Célia.R",
        category: "Sport",
      },
      {
        title: "Départ en vacances",
        urlPicture: "/images/nutri3.jpg",
        content:
          "Que votre départ en vacances soit prévu le matin, l’après-midi ou le soir, gardez en tête qu’il est important de manger un bon repas avant de prendre la route. Par un bon repas, j’entends un repas équilibré et complet, ni trop copieux ni trop léger. En effet, car si un repas trop léger peut entraîner des difficultés de concentration, un repas trop lourd favorise au contraire la somnolence au volant. Mon conseil de diététicienne : Prenez soin de prendre un bon petit-déjeuner équilibré avant de prendre la route. Je vous explique de quoi il devrait être composé un peu plus loin… ",
        author: "Célia.R",
        category: "Nutrition",
      },
    ],
  });
};

seed();
module.exports = seed;
