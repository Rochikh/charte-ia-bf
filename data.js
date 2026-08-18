/* Charte IA Bruxelles Formation, Données
   Charte V3, 2026
   FAQ rédigée par le GT IA, intégration des contributions de relecture
   ============================================================ */

window.CHARTER = {
  "intro": {
    "label": "Charte d'usage",
    "version": "Version 3 · 2026",
    "title": "L'IA à Bruxelles Formation",
    "sub": "Un cadre simple, opérationnel et évolutif pour utiliser l'intelligence artificielle dans nos missions pédagogiques et administratives."
  },
  "engagements": [
    {
      "n": 1,
      "hue": "vert",
      "title": "Usage responsable et proportionné",
      "slogan": "L'IA est une option, pas la solution.",
      "pillars": [
        "Quand elle fait gagner du temps",
        "Quand elle améliore la qualité",
        "Jamais à la place des échanges humains essentiels",
        "Choisir de ne pas l'utiliser est un choix légitime"
      ],
      "examples": {
        "ok": [
          "Synthétiser des évaluations sur un domaine que vous maîtrisez, pour juger la fidélité du résumé",
          "Reformuler un mail délicat avant l'envoi"
        ],
        "ko": [
          "Faire écrire un retour à un stagiaire en difficulté",
          "Remplacer une réunion d'équipe par un résumé IA"
        ]
      }
    },
    {
      "n": 2,
      "hue": "bleu",
      "title": "Responsabilité et esprit critique",
      "slogan": "L'IA propose, l'humain décide.",
      "pillars": [
        "Vérifier les faits et les sources",
        "Adapter au contexte BF",
        "Assumer le contenu final"
      ],
      "examples": {
        "ok": [
          "Relire et corriger une synthèse avant de l'envoyer",
          "Recouper chiffres et noms dans une source fiable"
        ],
        "ko": [
          "Diffuser un texte généré sans relecture",
          "Justifier une erreur par « c'est l'IA »"
        ]
      }
    },
    {
      "n": 3,
      "hue": "turquoise",
      "title": "Protection des données et des informations",
      "slogan": "Interne sécurisé ≠ externe public.",
      "pillars": [
        "Outils sécurisés (M365) : OK dans le RGPD",
        "Outils externes : données publiques ou anonymisées",
        "Dans le doute, on n'utilise pas"
      ],
      "examples": {
        "ok": [
          "Résumer le rapport d'une réunion interne avec Copilot M365",
          "Anonymiser un CV avant un outil externe"
        ],
        "ko": [
          "Coller une liste nominative dans un outil grand public",
          "Téléverser un PV confidentiel dans une IA externe"
        ]
      }
    },
    {
      "n": 4,
      "hue": "orange",
      "title": "Transparence des usages",
      "slogan": "Si l'IA a vraiment contribué, ça se dit.",
      "pillars": [
        "Obligatoire : pédagogie, évaluations, comms externes",
        "4 marquages : IA-A / C / G / O",
        "Inutile pour l'exploration interne"
      ],
      "examples": {
        "ok": [
          "« Support produit avec l'appui de l'IA (IA-C) » en pied de page",
          "Mention IA-G sur une illustration générée"
        ],
        "ko": [
          "Publier un quiz généré sans aucune mention",
          "Signaler chaque correction orthographique"
        ]
      }
    },
    {
      "n": 5,
      "hue": "mauve",
      "title": "Respect des droits, de l'inclusion et des valeurs",
      "slogan": "L'IA n'est pas une zone grise.",
      "pillars": [
        "Citer si un contenu est repris",
        "Éviter les contenus biaisés ou stéréotypés",
        "Rester accessible à tous"
      ],
      "examples": {
        "ok": [
          "Vérifier qu'une image ne caricature aucun groupe",
          "Citer la source d'une statistique reprise"
        ],
        "ko": [
          "Diffuser une image qui ne montre qu'un seul profil",
          "Reprendre une œuvre protégée présentée comme « libre »"
        ]
      }
    }
  ],
  "codes": [
    {
      "id": "IA-A",
      "label": "Assistance",
      "hue": "bleu",
      "pitch": "L'IA aide à améliorer un contenu existant.",
      "examples": "Correction, reformulation, traduction, suggestions.",
      "mention": "Document relu et amélioré avec l'appui de l'IA (IA-A).",
      "threshold": "Signalement non obligatoire pour les corrections rapides."
    },
    {
      "id": "IA-C",
      "label": "Co-construction",
      "hue": "turquoise",
      "pitch": "L'IA contribue à structurer ou rédiger une partie du contenu. La majorité du texte final reste de votre main.",
      "examples": "Plan, idées développées, sections partielles d'un livrable.",
      "mention": "Contenu co-construit avec l'appui de l'IA (IA-C).",
      "threshold": "À signaler dès qu'une partie significative est issue de l'IA."
    },
    {
      "id": "IA-G",
      "label": "Génération",
      "hue": "orange",
      "pitch": "L'IA produit l'essentiel du texte final, même quand le fond, la matière et les décisions viennent de vous.",
      "examples": "Texte, support, image, vidéo, podcast majoritairement généré.",
      "mention": "Contenu majoritairement généré par IA (IA-G), relu et validé par [Prénom Nom].",
      "threshold": "Signalement systématique, avec mention du valideur humain."
    },
    {
      "id": "IA-O",
      "label": "Oriente une décision",
      "hue": "mauve",
      "pitch": "L'IA analyse, interprète ou oriente une décision.",
      "examples": "Analyse d'un tableau Excel, comparaison de scénarios, identification de tendances.",
      "mention": "Décision orientée avec l'appui de l'IA (IA-O), décision humaine assumée par [Prénom Nom].",
      "threshold": "Toujours préciser que la décision finale reste humaine."
    }
  ],
  "evolution": "Cette charte est évolutive. Elle est adaptée en fonction des usages, des retours d'expérience et du cadre réglementaire."
};

window.FAQ = [
  {
    "id": "cadre",
    "label": "Cadre général et responsabilités",
    "icon": "compass",
    "hue": "bleu",
    "items": [
      {
        "q": "Puis-je utiliser l'intelligence artificielle dans le cadre de mon travail à Bruxelles Formation ?",
        "a": "Oui, c'est autorisé dès lors que l'usage apporte une valeur ajoutée réelle (gain de temps significatif, qualité accrue, aide sur une tâche complexe ou inhabituelle) et qu'il respecte les 5 engagements de la charte. **Ne pas utiliser l'IA est tout aussi légitime** : par choix, par prudence, ou pour des raisons de valeurs, d'impact sociétal et environnemental, ou de souveraineté numérique. **Privilégiez Copilot M365 en première intention** : c'est l'outil sécurisé à utiliser pour le travail courant."
      },
      {
        "q": "Tous les usages de l'IA nécessitent-ils réellement un outil génératif ?",
        "a": "Non, et c'est une question essentielle. Avant d'invoquer l'IA, demandez-vous :\n• Est-ce que la réponse existe déjà sur Magellan, dans un mail, dans un document ?\n• Une recherche simple suffirait-elle ?\n• Un·e collègue saurait-il·elle répondre en 2 minutes ?\nL'IA est utile, pas universelle."
      },
      {
        "q": "Comment utiliser l'IA de manière sobre et pertinente ?",
        "a": "Quatre habitudes :\n• **Préparer son prompt** avant de l'envoyer (1 bon prompt > 10 essais).\n• **Réutiliser** les conversations utiles plutôt que recommencer.\n• **Choisir l'outil minimal suffisant** : un outil déjà couvert par BF (Copilot M365 en première intention), sans compte personnel supplémentaire, avec des données non sensibles uniquement. Pas besoin du dernier modèle pour une reformulation. Pour un cas concret, demandez à BF-TICE.\n• **Préférer le texte** quand c'est possible, plutôt qu'image/audio/vidéo."
      },
      {
        "q": "Quels usages de l'IA sont interdits à Bruxelles Formation ?",
        "a": "Ces exemples ne sont pas exhaustifs. Trois familles d'usages sont à proscrire :\n• **Données sensibles dans un outil externe** : RH, stagiaires, budgets, données stratégiques.\n• **Usages illégaux ou contraires aux valeurs** : contenus discriminatoires, atteinte à la vie privée, contournement de droits d'auteur.\n• **Décision autonome sans contrôle humain** : aucune décision affectant une personne (sélection, évaluation, sanction) ne peut être déléguée à l'IA.\n**En cas de doute sur un usage non listé, posez la question avant de le faire.**"
      },
      {
        "q": "Qui reste responsable en cas d'erreur dans un contenu généré avec l'IA ?",
        "a": "**Toujours la personne qui diffuse le contenu.** L'IA propose, l'agent assume. L'argument « c'est l'IA qui l'a dit » n'a aucune valeur, ni juridique, ni professionnelle. Une relecture humaine est donc indispensable avant tout envoi, publication ou diffusion."
      },
      {
        "q": "Peut-on utiliser l'IA pour aider à une prise de décision ?",
        "a": "Oui, comme **aide à l'analyse** (synthèse, comparaison de scénarios, identification de tendances), jamais comme décideur. La supervision humaine est obligatoire et la décision finale doit être assumée par une personne identifiée. Ces usages relèvent du marquage IA-O."
      },
      {
        "q": "Quelle différence entre IA-A, IA-C, IA-G et IA-O ?",
        "a": "Quatre niveaux d'implication de l'IA :\n• **IA-A (Assistance)**, l'IA améliore un contenu existant : correction, reformulation, traduction.\n• **IA-C (Co-construction)**, l'IA structure ou rédige une partie : plan, idées, sections.\n• **IA-G (Génération)**, l'IA produit l'essentiel : texte, image, vidéo majoritairement générés.\n• **IA-O (Oriente une décision)**, l'IA aide à analyser ou orienter une décision.\nPlus on monte dans l'échelle, plus la mention est explicite et la validation humaine visible.\nLe critère qui distingue IA-C et IA-G porte sur le texte final, pas sur l'origine des idées. Si la majorité des formulations vient de l'IA, c'est IA-G, même quand la matière, les choix et le pilotage sont humains. Si la majorité du texte reste de votre main, c'est IA-C. En cas d'hésitation, choisissez le marquage supérieur : signaler l'IA n'enlève rien à votre travail."
      },
      {
        "q": "Pourquoi Bruxelles Formation encadre-t-elle l'usage de l'IA ?",
        "a": "Pour trois raisons indissociables :\n• **Sécurité**, protéger les données des stagiaires, du personnel et de l'institution.\n• **Cohérence**, éviter que chacun·e bricole dans son coin avec des règles différentes.\n• **Confiance**, assurer à nos publics que les contenus diffusés sont fiables, vérifiés et assumés humainement."
      },
      {
        "q": "L'utilisation de l'IA est-elle autorisée pour les communications internes ?",
        "a": "Oui. Pour les communications internes à **diffusion large** (Magellan, fiches projets, supports équipes), la transparence s'applique : on utilise les codes IA-A à IA-G. Pour les échanges du quotidien (mail à un·e collègue, brouillon de note), le signalement n'est pas requis."
      },
      {
        "q": "Où trouver les outils IA autorisés, les recommandations et les bonnes pratiques BF ?",
        "a": "La section IA / Copilot de **Magellan** (intranet BF) est **en cours de constitution**. Elle regroupera la liste des outils validés, les exemples de prompts et le support BF-TICE.\nEn attendant, l'interlocuteur varie selon la nature de votre question :\n• **BF-TICE** : outils, usages, prompts.\n• **DSI** : sécurité, comptes, autorisation d'un nouvel outil.\n• **Direction juridique / DPO** : données personnelles, cadre légal.\n• **GT IA** : arbitrage d'un nouvel usage.\nEn cas de doute sur un outil non listé, contactez BF-TICE avant de l'utiliser."
      },
      {
        "q": "L'usage de l'IA a-t-il un impact environnemental et sociétal ?",
        "a": "Oui, et la charte y consacre une catégorie entière : **Numérique responsable et impact environnemental**. Vous y trouverez comment limiter l'empreinte de vos usages, quels usages consomment le plus et comment concilier innovation et sobriété."
      }
    ]
  },
  {
    "id": "donnees",
    "label": "Données, sécurité et confidentialité",
    "icon": "shield",
    "hue": "turquoise",
    "items": [
      {
        "q": "Puis-je utiliser ChatGPT ou Claude avec des données liées à Bruxelles Formation ?",
        "a": "**Uniquement des données publiques ou anonymisées.** Tout ce qui permet d'identifier une personne, un dossier interne ou une donnée stratégique de BF est interdit dans un outil externe. Pour ces contenus-là, utilisez Copilot M365 connecté à votre compte BF.\nBF ne met pas à disposition d'abonnement payant à ces outils externes : seul Copilot M365 est couvert par un contrat BF. Tout autre abonnement passe par les circuits de validation et de budget."
      },
      {
        "q": "Quelle différence entre un outil IA sécurisé (ex. Copilot M365) et un outil IA externe ?",
        "a": "**Copilot M365 sous compte BF** : hébergé dans le cadre contractuel Microsoft de l'organisation, données non utilisées pour entraîner les modèles, conformité RGPD assurée par BF.\n**Outil externe (ChatGPT.com, Claude.ai, Gemini grand public…)** : compte personnel, données potentiellement réutilisées pour l'entraînement, aucune garantie BF. Bien pour explorer, jamais pour des données BF non publiques."
      },
      {
        "q": "Puis-je utiliser Gemini, ChatGPT ou Claude avec mon compte professionnel ?",
        "a": "**Non pas avec votre adresse @bruxellesformation.brussels** sauf autorisation de la DSI, seule habilitée sur les comptes et les contrats d'outils. Ces outils ne sont pas couverts par un contrat BF. Utilisez Copilot M365 pour le travail. Si vous souhaitez explorer un autre outil, faites-le sur un compte personnel et avec des données publiques uniquement."
      },
      {
        "q": "Quelle différence entre usage personnel, usage professionnel et usage sensible ?",
        "a": "Trois niveaux à distinguer :\n• **Personnel**, vous explorez, vous apprenez : tous outils autorisés, données non BF.\n• **Professionnel courant**, production de travail BF : Copilot M365 par défaut.\n• **Sensible**, données personnelles, RH, stratégiques, financières : Copilot M365 uniquement, et avec validation hiérarchique si diffusion."
      },
      {
        "q": "Puis-je utiliser un outil IA externe si aucun outil institutionnel n'existe pour mon besoin ?",
        "a": "Oui, **à condition de n'y faire entrer aucune donnée BF non publique**. Si le besoin est récurrent ou critique, signalez-le au GT IA (via BF-TICE) : l'ajout d'un outil au catalogue relève d'un arbitrage collectif. Ne contournez jamais une limite par convenance."
      },
      {
        "q": "Que faire si je ne suis pas certain qu'une donnée est sensible ou confidentielle ?",
        "a": "**Règle d'or : dans le doute, on ne met pas.** Anonymisez (remplacez les noms, adresses, identifiants), ou retirez l'information le temps de demander conseil à votre responsable (N+1), puis si le doute persiste à la Direction juridique / au DPO. Une fuite est toujours plus coûteuse qu'une question."
      },
      {
        "q": "Pourquoi certains outils IA sont-ils considérés comme plus sécurisés que d'autres ?",
        "a": "Trois critères :\n• **Où sont stockées les données ?** (UE vs hors UE, conformité RGPD).\n• **Sont-elles réutilisées pour entraîner le modèle ?** (oui pour les outils grand public, non pour les versions entreprise).\n• **Quelles garanties contractuelles ?** (audit, suppression, certifications type ISO 27001).\nCopilot M365 sous contrat BF coche les trois cases."
      },
      {
        "q": "Puis-je utiliser l'IA avec des données personnelles, RH ou stagiaires ?",
        "a": "**Uniquement dans Copilot M365 et uniquement si votre fonction le justifie.** Le RGPD s'applique pleinement : finalité claire, durée de conservation, droit d'accès des personnes. Ne traitez jamais ces données dans un outil externe, même « juste pour tester ».\nTout nouveau traitement de données personnelles via l'IA est validé au préalable par le DPO / la Direction juridique : vérification d'une base légale et inscription au registre des traitements. Finalité, durée et droit d'accès ne suffisent pas."
      },
      {
        "q": "Puis-je partager des documents internes dans un outil IA ?",
        "a": "Tout dépend du document et de l'outil :\n• **Document public** (catalogue de formation, communiqué) → tout outil autorisé.\n• **Document interne non sensible** (note de service, support de cours) → Copilot M365 uniquement.\n• **Document confidentiel** (RH, finance, stratégie, dossier stagiaire) → Copilot M365 + selon les règles de votre service.\nSi vous hésitez sur la catégorie, demandez."
      }
    ]
  },
  {
    "id": "transparence",
    "label": "Transparence, propriété intellectuelle et signalement",
    "icon": "eye",
    "hue": "orange",
    "items": [
      {
        "q": "Quand dois-je signaler l'usage de l'IA dans un document ou un support ?",
        "a": "**Dès que l'IA influence significativement le contenu**, et toujours pour :\n• les contenus pédagogiques diffusés à des stagiaires,\n• les évaluations,\n• les communications externes,\n• les communications internes à diffusion large (Magellan, fiches projets, articles).\nPour une simple correction orthographique ou une reformulation d'une phrase, **le signalement n'est pas requis**."
      },
      {
        "q": "Comment citer ou mentionner correctement l'usage de l'IA dans un document ?",
        "a": "Une mention courte en pied de page ou en fin de document suffit :\n• *« Support produit avec l'appui de l'IA (IA-C). »*\n• *« Contenu majoritairement généré par IA (IA-G), relu et validé par [Prénom Nom]. »*\n• *« Décision orientée avec l'appui de l'IA (IA-O), décision humaine assumée par [Prénom Nom]. »*\nLe code (A/C/G/O) donne le niveau d'implication ; le nom donne le valideur humain."
      },
      {
        "q": "Comment signaler l'usage de l'IA dans un média ou un support multimédia ?",
        "a": "Pour une image, une vidéo, un podcast, une infographie :\n• **Mention visible** sur le média ou dans sa description : « Image générée par IA (IA-G) ».\n• **Pour la vidéo** : mention au générique de fin ou dans la description.\n• **Pour le podcast** : mention orale en intro ou dans la fiche descriptive.\nLa traçabilité prime sur l'élégance."
      },
      {
        "q": "Puis-je utiliser l'IA pour reformuler, traduire ou corriger un texte sans le signaler ?",
        "a": "**Oui, dans la plupart des cas.** Ces usages relèvent du IA-A et la charte les considère comme une « assistance légère » qui ne nécessite pas de signalement. Exception : un document à forte valeur (officiel, juridique, signature institutionnelle), dans ce cas, mentionnez IA-A par transparence."
      },
      {
        "q": "Puis-je utiliser l'IA pour créer des images, illustrations ou médias ?",
        "a": "Oui, en respectant trois règles :\n• **Signalement IA-G obligatoire** sur le média ou dans sa description.\n• **Droits d'auteur** : privilégiez les outils dont les conditions garantissent la propriété des sorties et l'usage professionnel ; ne générez pas « dans le style de » un artiste nommé, ni de personnage, marque ou œuvre identifiable ; pour toute diffusion externe, préférez une banque licenciée ou un outil validé. En cas de doute, on ne publie pas, et la responsabilité finale revient à l'agent qui diffuse.\n• **Inclusion** : vérifiez que l'image ne véhicule pas de stéréotype. Les générateurs ont des biais, les contourner est de votre responsabilité."
      },
      {
        "q": "Qui détient la responsabilité d'un contenu généré avec l'IA ?",
        "a": "**L'agent BF qui valide et diffuse le contenu.** Le statut juridique des productions IA reste flou dans plusieurs pays, mais à BF la règle est claire : un humain valide, un humain assume. Pour les usages professionnels, le contenu est considéré comme produit dans le cadre de votre fonction BF."
      },
      {
        "q": "Que comprend la propriété intellectuelle de Bruxelles Formation dans le cadre de l'IA ?",
        "a": "Sont considérés comme relevant de la propriété intellectuelle de BF :\n• les **contenus pédagogiques** internes (modules, supports, exercices, évaluations),\n• les **documents internes** (procédures, analyses, projets, notes stratégiques),\n• les **supports non publics** (présentations internes, livrables clients).\nCes contenus ne doivent pas être injectés dans des outils IA externes sans précaution (anonymisation, accord)."
      }
    ]
  },
  {
    "id": "qualite",
    "label": "Qualité, fiabilité et esprit critique",
    "icon": "check",
    "hue": "rose",
    "items": [
      {
        "q": "Comment vérifier qu'un contenu généré par l'IA est fiable ?",
        "a": "Privilégiez l'IA sur des sujets que vous connaissez un minimum : c'est ce qui vous permet de juger la pertinence et l'exactitude.\nQuatre réflexes :\n• **Sources**, demandez à l'IA de citer ses sources, puis vérifiez-les (les références sont parfois inventées).\n• **Faits vérifiables**, chiffres, dates, noms : recoupez avec une source officielle.\n• **Cohérence interne**, l'IA peut se contredire d'un paragraphe à l'autre.\n• **Relecture par un·e collègue** si le contenu est sensible ou nouveau pour vous."
      },
      {
        "q": "L'IA peut-elle inventer des informations ou commettre des erreurs ?",
        "a": "**Oui, systématiquement.** On parle d'« hallucinations » : l'IA peut inventer une citation, un article, une statistique, un nom de personne, avec un aplomb total. Ce n'est pas un bug rare, c'est une caractéristique de fonctionnement. **Aucun contenu IA ne doit être considéré comme fiable avant vérification humaine.**"
      },
      {
        "q": "Pourquoi deux outils IA peuvent-ils produire des réponses différentes ?",
        "a": "Trois raisons :\n• **Modèles différents**, chaque IA a été entraînée sur des données différentes, jusqu'à des dates différentes.\n• **Paramètres**, la « température » (créativité) varie selon les outils.\n• **Contexte de la conversation**, un même prompt formulé différemment donne d'autres résultats.\nComparer deux outils est un excellent exercice d'esprit critique."
      },
      {
        "q": "Quels réflexes adopter avant de partager un contenu généré par l'IA ?",
        "a": "La règle des 4 V :\n• **Vérifier** les faits, chiffres et sources.\n• **Valider** la cohérence avec le contexte BF.\n• **Visualiser** comment le contenu sera reçu par son destinataire.\n• **Verbaliser** l'usage de l'IA si la transparence est requise."
      },
      {
        "q": "Comment garder un regard critique face aux réponses générées par l'IA ?",
        "a": "Trois techniques simples :\n• **« Et si je posais la question inverse ? »**, demandez à l'IA de critiquer sa propre réponse.\n• **« Quelles sont les limites de cette réponse ? »**, un bon prompt explicite.\n• **« Compare deux approches »**, au lieu d'une réponse, demandez-en deux opposées, puis arbitrez."
      },
      {
        "q": "Comment améliorer ses prompts pour obtenir des résultats plus pertinents ?",
        "a": "Quatre leviers :\n• **Contexte**, précisez votre rôle (« je suis formateur·rice BF »), votre public, votre format attendu.\n• **Exemples**, donnez 1-2 exemples de ce que vous attendez.\n• **Contraintes**, longueur, ton, langue, structure.\n• **Itération**, un bon prompt s'obtient en 3-4 allers-retours, pas du premier coup.\nLe BF-TICE propose une bibliothèque de prompts éprouvés sur Magellan."
      },
      {
        "q": "Pourquoi faut-il toujours relire et valider un contenu généré par l'IA ?",
        "a": "Parce que vous restez responsable. Trois risques courants :\n• **Erreur factuelle**, l'IA invente.\n• **Biais**, l'IA reproduit des stéréotypes présents dans ses données d'entraînement.\n• **Décalage de ton**, l'IA produit du « propre » mais pas forcément du BF (institutionnel, inclusif, bruxellois).\nLa relecture n'est pas une formalité, c'est le vrai travail."
      }
    ]
  },
  {
    "id": "environnement",
    "label": "Numérique responsable et impact environnemental",
    "icon": "leaf",
    "hue": "vert",
    "items": [
      {
        "q": "Comment limiter l'impact environnemental lié aux usages de l'IA ?",
        "a": "Trois leviers concrets :\n• **Pertinence**, n'utilisez l'IA que si elle apporte une valeur réelle. Un document ou une ressource existante suffit souvent.\n• **Précision du prompt**, un prompt clair évite les régénérations.\n• **Frugalité multimédia**, la génération d'images, vidéos, voix consomme 10 à 100× plus qu'un texte. Réservez-la aux usages utiles."
      },
      {
        "q": "Quels usages de l'IA ont le plus d'impact environnemental ?",
        "a": "Par ordre décroissant :\n• **Génération vidéo**, extrêmement coûteuse en calcul.\n• **Génération d'images** haute définition, en masse.\n• **Voix de synthèse** longues.\n• **Analyse de gros fichiers** (Excel volumineux, PDF multiples).\n• **Texte court**, l'usage le plus sobre.\nÀ usage équivalent, privilégiez toujours le format le plus léger."
      },
      {
        "q": "Comment concilier innovation IA et numérique responsable ?",
        "a": "L'innovation n'exige pas la démesure. Trois principes BF :\n• **Expérimenter à petite échelle** avant de généraliser.\n• **Mesurer** la valeur ajoutée réelle (gain de temps, qualité).\n• **Arrêter** les usages qui ne tiennent pas leurs promesses.\nLa sobriété n'est pas l'ennemie de l'innovation, elle en est la condition durable."
      }
    ]
  },
  {
    "id": "pedagogie",
    "label": "Usages pédagogiques",
    "icon": "book",
    "hue": "vert",
    "items": [
      {
        "q": "Puis-je utiliser l'IA pour préparer un support de formation ou une évaluation ?",
        "a": "Oui, c'est même un des cas d'usage les plus utiles. **Trois précautions :**\n• Gardez la maîtrise du fond : l'IA propose une structure, vous validez les contenus.\n• Vérifiez chaque fait, chiffre ou source citée, l'IA peut inventer (cf. hallucinations).\n• **Signalez l'usage** : IA-C pour un support partiellement structuré par l'IA, IA-G si l'IA a produit l'essentiel."
      },
      {
        "q": "Puis-je utiliser l'IA pour créer des exercices, quiz ou mises en situation ?",
        "a": "Oui, c'est un excellent levier de productivité. Bonnes pratiques :\n• **Demandez 10 à 20 variantes**, puis sélectionnez et adaptez à la main.\n• **Testez les questions** : l'IA peut générer des QCM mal calibrés (réponses ambiguës, distracteurs faibles).\n• **Adaptez au public BF** : vocabulaire, contexte bruxellois, niveau de langue.\n• Signalez IA-C ou IA-G selon le degré de modification."
      },
      {
        "q": "Puis-je utiliser l'IA pour adapter un contenu à différents publics ?",
        "a": "Oui, c'est un usage à forte valeur pédagogique. L'IA est excellente pour :\n• **Simplifier** un texte technique (niveau A2/B1 pour public allophone),\n• **Densifier** un contenu pour des stagiaires avancé·e·s,\n• **Adapter le ton** (formel/informel),\n• **Proposer une alternative accessible** (sous-titrage, version audio-friendly).\nRelisez systématiquement : la simplification peut perdre du sens.\nCopilot propose une section « enseigner » dédiée à la différenciation pédagogique."
      },
      {
        "q": "Puis-je utiliser l'IA pendant une animation ou une formation ?",
        "a": "Oui, **comme outil pédagogique transparent** :\n• Démonstration en direct (« regardons ensemble comment l'IA répond à cette question »).\n• Génération d'exemples à la demande des stagiaires.\n• Comparaison de deux réponses pour développer l'esprit critique.\n**À éviter** : déléguer la conduite de la formation à l'IA, ou l'utiliser sans expliquer son rôle aux stagiaires."
      },
      {
        "q": "Puis-je demander aux stagiaires d'utiliser des outils IA ?",
        "a": "Oui, c'est possible et pertinent dans une démarche de littératie numérique, à l'appréciation du formateur·rice. Cadre :\n• **Expliquez les règles** (RGPD, transparence) avant l'usage.\n• **Choisissez des outils accessibles gratuitement** sans compte sensible.\n• **Encadrez la consigne** : que doivent-ils faire avec la réponse IA ? La vérifier ? La comparer ? La critiquer ?\n• **Évaluez le processus**, pas seulement le résultat."
      },
      {
        "q": "Comment intégrer l'IA dans une démarche pédagogique responsable ?",
        "a": "Quatre piliers :\n• **Transparence** : annoncer aux stagiaires quand et comment vous utilisez l'IA.\n• **Esprit critique** : faire vérifier, comparer, contredire les réponses IA.\n• **Posture pédagogique** : l'IA est un outil, pas un substitut à l'enseignant·e.\n• **Équité** : s'assurer que tou·te·s les stagiaires ont les mêmes conditions d'accès aux outils."
      },
      {
        "q": "Quels usages pédagogiques de l'IA sont recommandés à Bruxelles Formation ?",
        "a": "Top usages à fort impact :\n• **Préparation** : plans de cours, exercices, quiz, études de cas, mises en situation.\n• **Différenciation** : adaptation à différents niveaux et publics.\n• **Feedback** : aide à formuler des retours individualisés (à valider humainement).\n• **Accessibilité** : transcription, traduction, simplification.\n• **Veille** : synthèse de ressources pour vous, formateur·rice.\nÉvitez l'évaluation automatique notée et le feedback final non relu."
      }
    ]
  },
  {
    "id": "admin",
    "label": "Usages administratifs et organisationnels",
    "icon": "clipboard",
    "hue": "mauve",
    "items": [
      {
        "q": "Puis-je utiliser l'IA pour rédiger un compte rendu ou un procès-verbal de réunion ?",
        "a": "Oui, **avec Copilot M365 et la fonction transcription Teams**. Bonnes pratiques :\n• **Vérifiez la confidentialité** de la réunion avant de lancer la transcription.\n• **Relisez intégralement** : noms mal orthographiés, propos mal attribués, nuances perdues.\n• **Signalez IA-C** si la synthèse a structuré la réunion ; pas nécessaire pour un simple résumé personnel."
      },
      {
        "q": "Puis-je utiliser l'IA pour automatiser certaines tâches répétitives ?",
        "a": "Oui, c'est un cas d'usage emblématique. Exemples : extraction d'informations, mise en forme de tableaux, génération de mails-types, conversion de formats. **Toujours garder un contrôle humain final** sur les sorties, surtout si elles partent vers un destinataire externe."
      },
      {
        "q": "Puis-je utiliser l'IA pour organiser mon travail ou gérer un projet ?",
        "a": "Oui, planification, priorisation, structuration de roadmap, brainstorming de risques. L'IA est utile comme **partenaire de réflexion**. Elle ne remplace pas la connaissance terrain : ses recommandations sont génériques et doivent être confrontées au contexte BF."
      },
      {
        "q": "Puis-je utiliser l'IA pour comparer plusieurs documents ou repérer des différences ?",
        "a": "Oui, c'est l'un des usages les plus fiables. Copilot M365 ou Claude pour des documents publics fonctionnent très bien. Vérifiez deux ou trois différences au hasard pour vous assurer que l'analyse est correcte avant de vous appuyer dessus."
      },
      {
        "q": "Puis-je utiliser l'IA pour résumer un ensemble de documents ou produire une synthèse ?",
        "a": "Oui, avec deux réflexes :\n• **Confidentialité d'abord** : si les documents contiennent des données BF, restez sur Copilot M365.\n• **Validation par échantillonnage** : relisez 2-3 passages clés dans les documents originaux pour vérifier la fidélité de la synthèse."
      },
      {
        "q": "Puis-je utiliser l'IA pour préparer une réunion, un atelier ou une présentation ?",
        "a": "Oui, et c'est un excellent gain de temps. L'IA peut proposer un ordre du jour, des questions de relance, une trame d'animation, une checklist matériel. **Validez l'objectif réel** de la réunion avant : l'IA optimise une intention, elle ne la remplace pas."
      },
      {
        "q": "Puis-je utiliser l'IA pour créer des présentations PowerPoint ou des supports visuels ?",
        "a": "Oui, Copilot dans PowerPoint génère des trames à partir d'un brief. Conseils :\n• **Réécrivez les titres** (les versions IA sont souvent fades).\n• **Respectez la charte graphique BF** : couleurs, typos, logo officiel.\n• **Signalez IA-C ou IA-G** selon le degré de personnalisation."
      },
      {
        "q": "Puis-je utiliser l'IA pour générer des graphiques, schémas ou représentations visuelles ?",
        "a": "Oui :\n• **Graphiques de données** (Excel/Copilot) : très fiable si les données sont propres.\n• **Schémas conceptuels** (Mermaid, diagrammes via Copilot) : utile pour les premiers jets.\n• **Infographies générées** : signalez IA-G et vérifiez les chiffres affichés (les générateurs d'images se trompent souvent sur les nombres)."
      },
      {
        "q": "Puis-je utiliser l'IA pour analyser des tableaux, indicateurs ou données ?",
        "a": "Oui, c'est typiquement un usage IA-O (oriente une décision). Bonnes pratiques :\n• **Précisez le contexte** dans votre prompt : ces données viennent de tel service, sur telle période, mesurent tel objectif.\n• **Demandez à l'IA d'expliciter ses hypothèses**.\n• **Croisez avec votre expertise terrain** avant toute conclusion."
      },
      {
        "q": "Puis-je utiliser l'IA pour analyser des fichiers Excel ou croiser des données ?",
        "a": "Oui, dans Copilot M365 (analyse fiable sur petits/moyens jeux de données). Pour les croisements complexes, restez vigilant·e : l'IA peut se tromper sur des jointures ou faire des moyennes sur des champs incompatibles. **Vérifiez toujours par sondage.**"
      },
      {
        "q": "Puis-je utiliser l'IA pour proposer des méthodes de travail ou aider à prioriser des actions ?",
        "a": "Oui, l'IA est un bon « miroir réflexif ». Elle vous renvoie une structuration de vos enjeux que vous validez ou rejetez. C'est plus efficace que la page blanche, mais ne dispense jamais d'arbitrer humainement les priorités."
      }
    ]
  },
  {
    "id": "accompagnement",
    "label": "Accompagnement et montée en compétences",
    "icon": "users",
    "hue": "fuchsia",
    "items": [
      {
        "q": "Où trouver de l'aide pour utiliser l'IA à Bruxelles Formation ?",
        "a": "Selon la nature de votre question :\n• **BF-TICE** : les outils, l'usage au quotidien, les prompts.\n• **La DSI** : la sécurité, les comptes, l'autorisation d'un outil.\n• **La Direction juridique / le DPO** : les données personnelles et le cadre légal.\n• **Le GT IA** : l'arbitrage quand un nouvel usage ou un nouvel outil se présente.\nChaque direction ou service décide sur sa thématique ; les questions transversales sont tranchées collégialement.\nEt toujours : **Magellan** (section IA) et **vos pairs** (communauté interne)."
      },
      {
        "q": "Quelles formations ou ressources existent pour apprendre à utiliser l'IA ?",
        "a": "BF propose et propose progressivement :\n• **Ateliers découverte** (1-2h), pour démarrer avec Copilot M365.\n• **Modules d'autoformation** sur la plateforme interne.\n• **Communauté de pratique**, webinaires mensuels, retours d'expérience.\n• **Accompagnement individuel** sur demande via BF-TICE.\nL'offre évolue : consultez Magellan régulièrement."
      },
      {
        "q": "Comment partager des retours d'expérience ou des bonnes pratiques ?",
        "a": "Plusieurs canaux :\n• **Communauté IA BF** sur Teams, espace dédié.\n• **Articles Magellan**, proposez un retour d'expérience à la communication.\n• **Ateliers de pairs**, animez ou participez à des sessions courtes (« 30 min, 1 cas d'usage »).\nMutualiser nos pratiques accélère la montée en compétences de tou·te·s."
      },
      {
        "q": "Existe-t-il des recommandations de prompts ou de méthodes de travail ?",
        "a": "Oui, la **bibliothèque de prompts BF** est en construction sur Magellan. Elle réunit des prompts éprouvés par métier : préparation pédagogique, comptes rendus, analyse de données, mails délicats. Contribuez-y : un bon prompt partagé fait gagner du temps à toute l'équipe."
      },
      {
        "q": "Comment BF accompagne-t-elle les équipes dans l'appropriation de l'IA ?",
        "a": "Quatre axes :\n• **Sensibilisation**, pour comprendre ce que l'IA peut et ne peut pas faire.\n• **Expérimentation encadrée**, pour tester sans risque sur des cas concrets.\n• **Accompagnement métier**, pour adapter les usages à chaque service.\n• **Amélioration continue**, la charte, la FAQ et l'offre évoluent avec vos retours.\nL'IA à BF est un chantier collectif, pas un outil livré clé en main."
      }
    ]
  }
];
