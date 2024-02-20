export default {
  onboarding: {
    firstScreen: {
      subtitle: "L'app pour te faire voter aux élections européennes de 2024 !",
      firstRow: "Le premier jeu pour t'intéresser à la politique",
      secondRow:
        "Trouve ta tête de liste avec le mode solo et découvre le classement global !",
      thirdRow:
        "Disponible dans les 27 pays de l'UE, et traduite en 24 langues",
    },
    secondScreen: {
      title: "Comment ça marche ?",
      multiplayerBox: {
        title: "Mode multijoueur",
        description:
          "Joue avec tes potes, créé des parties et réponds à des questions sur les principaux enjeux européens pour voir tes positions et celles de tes amis !",
      },
      soloBox: {
        title: "Mode solo",
        description:
          "Réponds à 100 questions sur 10 thèmes et fais-toi un avis sur les principaux groupes aux parlements européens ! Tu verras également à quelle tête de liste tu corresponds dans ton pays.",
      },
    },
    thirdScreen: {
      title: "Avant de commencer",
      firstRow: {
        title: "Nous ne collectons aucune donnée personnelle.",
        description:
          "Toutes les données utilisées dans l'app sont anonymes, et sont limités au strict nécessaire pour le bon fonctionnement de l'app !",
        readChart: "Lire notre charte sur la vie privée",
      },
      firstRow: {
        title: "Adeno est apartisane, neutre, et transparente.",
        description:
          "Toutes les données utilisées dans l'app sont anonymes, et sont limités au strict nécessaire pour le bon fonctionnement de l'app !",
        readChart: "Lire notre charte sur la transparence",
      },
      startButton: "C'est parti !",
      footerText:
        "Adeno est un projet citoyen, créé par une équipe de bénévoles, sans vocation lucrative, qui n'a pour objectif que d'aller te faire voter !",
      psText: "PS : nous sommes open-source ✌️",
    },
  },
  home: {
    title: "Joue & vote",
    startButtonText: "Commencer",
    multiplayerCard: {
      title: "Mode multijoueur 🎮",
      subtitle: "Commence une partie et challenge\ntes potes !",
    },
    soloCard: {
      title: "Mode solo 🎯",
      subtitle: "2 modes & 100 questions pour trouver\nta tête de liste !",
    },
    headListCard: {
      title: "Ma tête de liste 🇪🇺",
      noResultText: "Lance le mode solo pour découvrir ta tête de liste !",
      startButtonText: "C'est parti !",
      listNotAvailableTitle: "Ta tête de liste n'est pas encore disponible...",
      listNotAvailableSubtitle:
        "Tu seras alerté(e) quand ton parti aura annoncé sa tête de liste dans ton pays !",
      seeAllResultsText: "Voir tous mes résultats",
    },
  },
  ranking: {
    title: "Le classement",
    userCountryCard: {
      title: "En",
    },
    europeCard: {
      title: "En Europe",
    },
    shareAppText: "Partager Adeno",
  },
  discoverEU: {
    title: "Découvre l'UE",
    institutionsCard: {
      title: "Les institutions 🇪🇺",
      subtitle:
        "Découvre les institutions européennes et leur fonctionnement !",
      showAllText: "Tout afficher",
    },
    commitCard: {
      title: "Engage-toi ✊",
      text: `Les Engagés ! est une fédération de loi 1901 fondée en juin 2017 dans le but d’encourager les jeunes à s’investir dans la vie de la Cité. Depuis bientôt 6 ans, les Engagés veillent à promouvoir les différentes formes d'engagements auprès des jeunes de 18 à 35 ans en organisant, chaque semaine, des débats, conférences, rencontres ainsi que des visites au sein de nos différentes antennes réparties dans plusieurs villes en France.`,
      joinButtonText: "Rejoindre",
    },
    informCard: {
      title: "Informe-toi 🗞️",
      text: `Le Vieux Continent est un média en ligne dont l'objectif est d’informer, et de diffuser la question européenne dans le débat public, sur YouTube, TikTok et Instagram. À cet effet, ils réalisent différents formats tels que des interviews, micro-trottoirs, décryptages d’actualité, débats, toujours autour de sujets européens. À partir d’avril 2024, le média couvrira les élections européennes en France de très près.`,
      joinButtonText: "Découvrir",
    },
    partnerCard: {
      title: "Nos partenaires",
    },
  },
  allUserResults: {
    title: "Mes résultats",
    inSummaryTitle: "En bref",
    shareMyResults: "Partager mes résultats",
    seeMoreText: "Voir plus",
  },
  selectSoloMode: {
    title: "Mode solo",
    expressCard: {
      title: "Mode express ⏱️",
      subtitle: "20 questions pour trouver\nta tête de liste !",
    },
    classicCard: {
      title: "Mode classique 🗳️",
      subtitle:
        "Réponds à 100 questions, et trouve un résultat adapté à tes convictions !",
    },
  },
  randomQuestionScreen: {
    title: "Aléatoire",
    showContextText: "Afficher le contexte",
  },
  contextScreen: {
    title: "Le contexte",
  },
  selectMultiplayerMode: {
    title: "Multijoueur",
    selectText: `Sélectionne le mode\nqui te convient !`,
    onePhone: "Un seul téléphone",
    multiplePhones: "Plusieurs téléphones",
  },
  setupOnePhone: {
    title: "Joueurs",
    noPlayerAdded: "Aucun joueur ajouté",
    addPlayerText: "Ajouter un joueur",
    letGoText: "C'est parti",
    addPlayerModal: {
      title: "Ajouter un joueur",
      placeholder: "Nom du joueur",
      addPlayerButton: "Ajouter",
      errors: {
        nameAlreadyUsedTitle: "Ce nom est déjà ajouté",
        nameAlreadyUsedSubtitle: "Chaque joueur doit avoir un nom différent.",
        moreThanTenTitle: "Trop de joueurs",
        moreThanTenSubtitle: "Tu ne peux pas ajouter plus de 10 joueurs",
      },
    },
  },
  multiplayerOnePhoneGame: {
    seconds: "secondes",
    for: "Pour",
    against: "Contre",
    indifferent: "Indifférent",
    alert: {
      quitPartyTitle: "Es-tu sûr de vouloir quitter la partie ?",
      cancel: "Annuler",
      quit: "Quitter",
    },
  },
  multiplePhones: {
    title: "Ton pseudo",
    pseudoPlaceholder: "Ton pseudo",
    createPartyText: "Créer une partie",
    joinPartyText: "Rejoindre une partie",
    waitCreatorText: "C'est au créateur de lancer la partie !",
  },
  gameScreen: {
    title: "Partie",
    codeText: "Code",
    startButton: "Commencer",
  },
  gameQuestionsScreen: {
    for: "Pour",
    against: "Contre",
    indifferent: "Indifférent",
    waitingForPlayersTitle: "En attente des autres joueurs !",
    waitingForPlayersSubtitle:
      "Les résultats seront accessibles une fois que tout le monde aura terminé",
  },
  multiplayerResults: {
    title: "Les résultats",
    youAreTheMost: "tu es le +",
    youMatch: "Tu matches à",
    withList: "avec la liste de",
    seeNext: "Voir le suivant",
    resultsFooter: {
      anotherRound: "Un autre tour ?",
      restartText: "Recommencer",
    },
  },
  euCountries: {
    at: "Autriche",
    be: "Belgique",
    bg: "Bulgarie",
    hr: "Croatie",
    cy: "Chypre",
    cz: "République tchèque",
    dk: "Danemark",
    ee: "Estonie",
    fi: "Finlande",
    fr: "France",
    de: "Allemagne",
    gr: "Grèce",
    hu: "Hongrie",
    ie: "Irlande",
    it: "Italie",
    lv: "Lettonie",
    lt: "Lituanie",
    lu: "Luxembourg",
    mt: "Malte",
    nl: "Pays-Bas",
    pl: "Pologne",
    pt: "Portugal",
    ro: "Roumanie",
    sk: "Slovaquie",
    si: "Slovénie",
    es: "Espagne",
    se: "Suède",
    uk: "Royaume-Uni",
  },
  settingsScreen: {
    title: "Réglages",
    multiplayerCard: {
      title: "Mode multijoueur",
    },
    soloCard: {
      title: "Mode solo",
      resetResultsText: "Réinitialiser mes résultats",
    },
    createdByCard: {
      title: "Créée par",
      subtitle:
        "Créé par Matthieu Maillard et un réseau de bénévoles à travers l'Europe !",
    },
    incubatedBy: {
      title: "Incubée par",
      subtitle:
        "Inceptio Lab, fondé en 2023 et affilié à la fédération Les Engagés!, est un incubateur visant à promouvoir des projets entrepreneuriaux à impact, inspiré par le succès de l'application Elyze. Il offre une plateforme pour appliquer des compétences dans des initiatives engagées, innovantes et durables, tout en favorisant l'employabilité de ses membres.",
      founderMaleText: "Fondateur",
      founderFemaleText: "Fondatrice",
    },
    teamCard: {
      title: "L'équipe",
    },
    allRightsReserved: "tous droits réservés",
  },
  councilScreen: {
    title: "Le conseil",
  },
};