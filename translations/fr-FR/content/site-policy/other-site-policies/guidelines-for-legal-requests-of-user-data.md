---
title: Directives pour les Demandes Légales de Données Utilisateurs
redirect_from:
  - /law-enforcement-guidelines
  - /articles/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/guidelines-for-legal-requests-of-user-data
  - /github/site-policy/github-terms-and-other-site-policies/guidelines-for-legal-requests-of-user-data
versions:
  fpt: '*'
topics:
  - Policy
  - Legal
ms.openlocfilehash: 991c060af22a9161e026aa396037a1d52e66fcea
ms.sourcegitcommit: d298d354a4585e6c154f2a8428aebb214d49e2a1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/07/2022
ms.locfileid: '147858617'
---
Êtes-vous un agent des forces de l’ordre qui mène une enquête susceptible d’impliquer du contenu utilisateur hébergé sur GitHub ?
Ou peut-être que vous êtes une personne soucieuse de la protection des données personnelles qui aimerait savoir quelles informations nous partageons avec les forces de l’ordre et dans quelles circonstances.
Quoi qu’il en soit, vous êtes sur la bonne page.

Dans ces directives, nous fournissons quelques informations sur ce qu’est GitHub, les types de données dont nous disposons et les conditions dans lesquelles nous divulguons les informations privées des utilisateurs.
Mais avant d’entrer dans les détails, voici quelques informations importantes que vous voudrez peut-être connaître :

- Nous [**aviserons les utilisateurs concernés**](#we-will-notify-any-affected-account-owners) de toute demande d’informations sur leur compte, à moins qu’il ne soit interdit de le faire par la loi ou une ordonnance du tribunal.
- Nous ne divulguerons pas **les données de suivi de localisation**, comme les journaux d’adresses IP, sans une [ordonnance judiciaire ou un mandat de perquisition valable](#with-a-court-order-or-a-search-warrant).
- Nous ne divulguerons aucun **contenu utilisateur privé**, y compris le contenu des dépôts privés, sans un [mandat de perquisition](#only-with-a-search-warrant).

## À propos de ces directives

Nos utilisateurs nous confient leurs projets logiciels et leur code, qui font souvent partie de leurs actifs commerciaux ou personnels les plus précieux.
Le maintien de cette confiance est essentiel pour nous, ce qui signifie que les données utilisateurs doivent rester sûres, sécurisées et privées.

Bien que l’écrasante majorité de nos utilisateurs utilisent les services de GitHub pour créer de nouvelles entreprises, concevoir de nouvelles technologies, et pour l’amélioration générale du genre humain, nous reconnaissons qu’avec des millions d’utilisateurs répartis dans le monde entier, il existe forcément quelques pommes pourries dans le lot.
Dans ces cas-là, nous voulons aider les forces de l’ordre à servir leur intérêt légitime à protéger le public.

En fournissant des directives au personnel chargé de l’application de la loi, nous espérons trouver un équilibre entre les intérêts souvent contradictoires de la protection des données des utilisateurs et de la justice.
Nous espérons que ces directives permettront de définir les attentes des deux parties et d’ajouter de la transparence aux processus internes de GitHub.
Nos utilisateurs doivent savoir que nous attachons de l’importance à leurs informations privées et que nous faisons tout notre possible pour les protéger.
Au minimum, cela signifie que les données ne sont communiquées à des tiers que lorsque les exigences légales appropriées ont été satisfaites.
Dans le même ordre d’idées, nous espérons également sensibiliser les professionnels de l’application de la loi aux systèmes de GitHub afin qu’ils puissent adapter plus efficacement leurs demandes de données et cibler uniquement les informations nécessaires pour mener leur enquête.

## Terminologie GitHub

Avant de nous demander de divulguer des données, il peut être utile de comprendre comment notre système est mis en œuvre.
GitHub héberge des millions de dépôts de données utilisant le [système de gestion de versions Git](https://git-scm.com/video/what-is-version-control).
Les dépôts sur GitHub, qui peuvent être publics ou privés, sont le plus souvent utilisés pour des projets de développement de logiciels, mais sont aussi souvent utilisés pour travailler sur des contenus de toutes sortes.

- [**Utilisateurs**](/articles/github-glossary#user) : les utilisateurs sont représentés dans notre système en tant que comptes GitHub personnels.
Chaque utilisateur a un profil personnel, et peut posséder plusieurs dépôts.
Les utilisateurs peuvent créer ou être invités à rejoindre des organisations ou à collaborer sur le dépôt d’un autre utilisateur.

- [**Collaborateurs**](/articles/github-glossary#collaborator) : un collaborateur est un utilisateur ayant un accès en lecture et écriture à un dépôt qui a été invité à contribuer par le propriétaire du dépôt.

- [**Organisations**](/articles/github-glossary#organization) ; les organisations sont un groupe de deux utilisateurs ou plus qui reflètent généralement des organisations du monde réel, comme des entreprises ou des projets.
Elles sont administrées par les utilisateurs et peuvent contenir à la fois des dépôts et des équipes d’utilisateurs.

- [**Dépôt**](/articles/github-glossary#repository) : un dépôt est l’un des éléments GitHub les plus basiques.
Ils peuvent être plus faciles à imaginer en tant que dossier d’un projet.
Un dépôt contient tous les fichiers du projet (y compris la documentation), et stocke l’historique des révisions de chaque fichier.
Les dépôts peuvent avoir plusieurs collaborateurs et, à la discrétion de leurs administrateurs, peuvent être consultables par le public ou non.

- [**Pages**](/articles/what-is-github-pages) : les GitHub Pages sont des pages Web publiques hébergées gratuitement par GitHub que les utilisateurs peuvent facilement publier grâce au code stocké dans leurs dépôts.
Si un utilisateur ou une organisation a une Page GitHub, elle se trouve généralement à une URL telle que `https://username.github.io` ou la page Web peut être mappée à son propre nom de domaine personnalisé.

- [**Gists**](/articles/creating-gists) : les gists sont des extraits de code source ou d’autres textes que les utilisateurs peuvent utiliser pour stocker des idées ou partager avec des amis.
Comme les dépôts GitHub ordinaires, les gists sont créés avec Git, de sorte qu’ils sont automatiquement versionnés, forkés et téléchargés.
Les gists peuvent être publics ou secrets (accessibles uniquement via une URL connue). Les gists publics ne peuvent pas être convertis en gists secrets.

## Données utilisateurs sur GitHub.com

Voici une liste non exhaustive des types de données que nous conservons sur les utilisateurs et les projets sur GitHub.

- <a name="public-account-data"></a>
**Données de compte public** : il existe une variété d’informations accessibles au public sur GitHub concernant les utilisateurs et leurs dépôts.
Les profils utilisateur sont disponibles via une URL, par exemple `https://github.com/username`.
Les profils utilisateur fournissent des informations sur la date de création du compte de l’utilisateur, ainsi que sur son activité publique sur GitHub.com et ses interactions sociales.
Les profils publics d’utilisateurs peuvent également inclure des informations supplémentaires qu’un utilisateur peut avoir choisi de partager publiquement.
Tous les profils publics des utilisateurs fournissent les informations suivantes :
  - Nom d’utilisateur
  - Les dépôts que l’utilisateur a ajoutés à ses favoris
  - Les autres utilisateurs GitHub que l’utilisateur suit
  - Les utilisateurs qui le suivent

  Un utilisateur peut également choisir de partager publiquement les informations suivantes :
  - Son vrai nom
  - Un avatar
  - Une société affiliée
  - Son emplacement
  - Une adresse électronique publique
  - Sa page Web personnelle
  - Les organisations auxquelles l’utilisateur est membre (*selon les préférences de l’organisation ou de l’utilisateur*)

- <a name="private-account-data"></a>
**Données de compte privé** : GitHub collecte et conserve également certaines informations privées sur les utilisateurs, comme indiqué dans notre [Politique de Confidentialité](/articles/github-privacy-statement).
Cela peut inclure :
  - Adresses électroniques privées
  - Informations de paiement
  - Journaux d’accès de sécurité
  - Données sur les interactions avec les dépôts privés

  Pour avoir une idée du type d’informations privées que GitHub collecte, vous pouvez visiter votre {% data reusables.user-settings.personal_dashboard %} et parcourir les sections de la barre de menus de gauche.

- <a name="organization-account-data"></a>
**Données de compte d’organisation** : les informations sur les organisations, leurs utilisateurs administratifs et leurs dépôts sont accessibles au public sur GitHub.
Les profils d’organisation sont disponibles via une URL, par exemple `https://github.com/organization`.
Les profils publics d’organisation peuvent également inclure des informations supplémentaires que leurs propriétaires ont choisi de partager publiquement.
Tous les profils publics d’organisation fournissent les informations suivantes :
  - Le nom de l’organisation
  - Les dépôts que les propriétaires ont ajoutés à leurs favoris
  - Tous les utilisateurs de GitHub qui sont propriétaires de l’organisation

  Les utilisateurs administratifs peuvent également choisir de partager publiquement les informations suivantes :
  - Un avatar
  - Une société affiliée
  - Son emplacement
  - Membres directs et équipes
  - Collaborateurs

- <a name="public-repository-data"></a>
**Données de dépôt public** : GitHub héberge des millions de projets logiciels publics, open source.
Vous pouvez parcourir presque tous les dépôts publics (par exemple, le [Projet Atom](https://github.com/atom/atom) pour vous faire une idée des informations que GitHub collecte et conserve sur les dépôts.
Cela peut inclure :

  - Le code lui-même
  - Des versions précédentes du code
  - Des versions stables du projet
  - Des informations sur les collaborateurs, les contributeurs et les membres du dépôt
  - Les journaux des opérations Git comme les commits, les branches, le push, le pull, le forking et le clonage
  - Des conversations liées aux opérations Git, comme les commentaires sur les pull requests ou les commits
  - La documentation du projet, comme les questions et les pages Wiki
  - Des statistiques et graphiques montrant les contributions au projet et le réseau de contributeurs

- <a name="private-repository-data"></a>
**Données de dépôt privé** : GitHub collecte et conserve le même type de données pour les dépôts privés que celles visibles pour les dépôts publics, sauf que seuls les utilisateurs spécifiquement invités peuvent accéder aux données de dépôt privé.

- <a name="other-data"></a>
**Autres données** : en outre, GitHub collecte des données d’analyse telles que les visites de pages et les informations fournies occasionnellement par nos utilisateurs (comme les communications avec notre équipe d’assistance, les informations d’enquête et/ou les inscriptions au site).

## Nous informerons tous les propriétaires de comptes concernés

Nous avons pour politique d’informer les utilisateurs de toute demande en cours concernant leurs comptes ou dépôts, sauf si la loi ou une décision de justice nous interdit de le faire. Avant de divulguer des informations sur les utilisateurs, nous ferons un effort raisonnable pour informer le(s) propriétaire(s) du compte concerné(s) en envoyant un message à leur adresse électronique vérifiée, en leur fournissant une copie de l’assignation à comparaître, de l’ordonnance du tribunal ou du mandat, afin qu’ils aient la possibilité de contester la procédure légale s’ils le souhaitent. Dans de (rares) circonstances urgentes, nous pouvons retarder la notification si nous déterminons que ce retard est nécessaire pour éviter un décès ou un préjudice grave ou en raison d’une enquête en cours.

## Divulgation d’informations non publiques

Nous avons pour politique de ne divulguer des informations non publiques sur les utilisateurs dans le cadre d’une enquête civile ou criminelle qu’avec le consentement de l’utilisateur ou à la réception d’une citation à comparaître, d’une demande d’enquête civile, d’une ordonnance du tribunal, d’un mandat de perquisition ou de toute autre procédure légale valable. Dans certaines circonstances urgentes (voir ci-dessous), nous pouvons également partager des informations limitées, mais uniquement en fonction de la nature des circonstances, et nous aurions besoin d’une procédure judiciaire pour toute autre chose.
GitHub se réserve le droit de s’opposer à toute demande d’informations non publiques.
Lorsque GitHub accepte de produire des informations non publiques en réponse à une demande légitime, nous effectuerons une recherche raisonnable des informations demandées.
Voici les types d’informations que nous accepterons de produire, en fonction du type de procédure judiciaire qui nous est signifié :

- <a name="with-user-consent"></a>
**Avec le consentement de l’utilisateur** : GitHub fournira des informations privées sur le compte, si demandé, directement à l’utilisateur (ou à un propriétaire, dans le cas d’un compte d’organisation), ou à un tiers désigné avec le consentement écrit de l’utilisateur une fois que GitHub est convaincu que l’utilisateur a vérifié son identité.

- <a name="with-a-subpoena"></a>
**Avec une citation à comparaître** : si nous recevons une citation à comparaître valable, une demande d’enquête civile ou un processus légal similaire émis dans le cadre d’une enquête criminelle ou civile officielle, nous pouvons fournir certaines informations de compte non publiques, qui peuvent inclure :

  - Le ou les noms associés au compte
  - La ou les adresses électroniques associées au compte
  - Les informations de facturation
  - La date d’enregistrement et date d’expiration
  - L’adresse IP, la date et l’heure de l’enregistrement du compte
  - La ou les adresses IP utilisées pour accéder au compte à un moment précis ou lors d’un événement pertinent pour l’enquête

Dans le cas des comptes d’organisation, nous pouvons fournir le ou les noms et la ou les adresses électroniques du ou des propriétaires du compte, ainsi que la date et l’adresse IP au moment de la création du compte de l’organisation. Nous ne produirons pas d’informations sur les autres membres ou contributeurs, le cas échéant, du compte de l’organisation ni d’informations supplémentaires concernant le ou les propriétaires identifiés du compte sans une demande de suivi pour ces utilisateurs spécifiques.

Veuillez noter que les informations disponibles varient d’un cas à l’autre. Certaines de ces informations sont facultatives pour les utilisateurs. Dans d’autres cas, il se peut que nous n’ayons pas collecté ou conservé ces informations.

- <a name="with-a-court-order-or-a-search-warrant"></a>
**Avec une ordonnance du tribunal *ou* un mandat de perquisition** : nous ne divulguerons pas les journaux d’accès aux comptes à moins d’y être contraints par (i) une ordonnance du tribunal rendue en vertu de l’article 18 U.S.C. Section 2703(d), sur présentation de faits spécifiques et articulables montrant qu’il existe des motifs raisonnables de croire que les informations recherchées sont pertinentes et importantes pour une enquête criminelle en cours ; ou (ii) un mandat de perquisition délivré selon les procédures décrites dans les Règles Fédérales de Procédure Pénale des États-Unis ou des procédures équivalentes d’autres États, sur présentation d’une cause probable.
Outre les informations non publiques sur les comptes énumérées ci-dessus, nous pouvons fournir des journaux d’accès aux comptes en réponse à une ordonnance du tribunal ou à un mandat de perquisition, ce qui peut inclure :

  - Tout journal qui révélerait les mouvements d’un utilisateur sur une période donnée
  - Les paramètres du compte ou du dépôt privé (par exemple, quels utilisateurs disposent de certaines autorisations, etc.)
  - Les données analytiques spécifiques à l’utilisateur ou à l’IP, comme l’historique de navigation
  - Les journaux d’accès à la sécurité autres que la création de comptes ou pour une heure et une date spécifiques

- <a name="only-with-a-search-warrant"></a>
**Uniquement avec un mandat de perquisition** : nous ne divulguerons pas le contenu privé d’un compte à moins d’y être contraints par un mandat de perquisition délivré conformément aux procédures décrites dans les Règles Fédérales de Procédure Pénale des États-Unis ou à des procédures équivalentes d’autres États sur présentation d’une cause probable.
Outre les informations non publiques sur les comptes et les journaux d’accès aux comptes mentionnés ci-dessus, nous fournirons également du contenu sur les comptes privés en réponse à un mandat de perquisition, ce qui peut inclure les informations suivantes :

  - Contenu des gists secrets
  - Code source ou autre contenu dans des dépôts privés
  - Dossiers de contribution et de collaboration pour les dépôts privés
  - Communications ou documentation (notamment les Issues ou Wikis) dans des dépôts privés
  - Toute clé de sécurité utilisée pour l’authentification ou le chiffrement

- <a name="in-exigent-circumstances"></a>
**Dans des circonstances urgentes** : si nous recevons une demande d’informations dans certaines circonstances exceptionnelles (lorsque nous pensons que la divulgation est nécessaire pour prévenir une urgence impliquant un danger de mort ou de blessure physique grave pour une personne), nous pouvons divulguer des informations limitées que nous jugeons nécessaires pour permettre aux forces de l’ordre de répondre à l’urgence. Pour toute autre information, nous avons besoin d’une assignation à comparaître, d’un mandat de perquisition ou d’une ordonnance du tribunal, comme indiqué ci-dessus. Par exemple, nous ne divulguerons pas le contenu de dépôts privés sans un mandat de perquisition. Avant de divulguer des informations, nous confirmons que la demande émane d’un organisme chargé de l’application de la loi, qu’une autorité a envoyé un avis officiel résumant l’urgence et que les informations demandées permettront de faire face à l’urgence.

## Remboursement des frais

En vertu des lois étatiques et fédérales, GitHub peut demander le remboursement des frais associés au respect d’une demande légale valable, comme une citation à comparaître, une ordonnance du tribunal ou un mandat de perquisition. Nous ne facturons des frais que pour récupérer certains coûts, et ces remboursements ne couvrent qu’une partie des frais que nous devons réellement engager pour nous conformer aux ordonnances légales.

Bien que nous ne facturions pas de frais dans les situations d’urgence ou dans d’autres circonstances urgentes, nous demandons un remboursement pour toutes les autres demandes juridiques conformément au barème suivant, sauf si la loi l’exige :

- Recherche initiale d’un maximum de 25 identifiants : gratuit
- Production d’informations / de données sur les abonnés pour un maximum de 5 comptes : gratuit
- Production d’informations / de données sur les abonnés pour plus de 5 comptes : 20 dollars par compte
- Recherches secondaires : 10 dollars par recherche

## Conservation des données

Nous prendrons des mesures pour conserver les enregistrements de compte jusqu’à 90 jours sur demande formelle des forces de l’ordre américaines dans le cadre d’enquêtes criminelles officielles, et en attendant la délivrance d’une ordonnance du tribunal ou d’une autre procédure.

## Envoi des demandes

Veuillez envoyer vos demandes à l’adresse suivante :

```
GitHub, Inc.
c/o Corporation Service Company
2710 Gateway Oaks Drive, Suite 150N
Sacramento, CA 95833-3505
```

Des copies de courtoisie peuvent être envoyées par courrier électronique à legal-support@github.com.

Veuillez formuler vos demandes de manière aussi précise et succincte que possible, en incluant les informations suivantes :

- Informations complètes sur l’autorité qui émet la demande d’informations
- Le nom et le badge/l’identifiant de l’agent responsable
- Une adresse électronique officielle et un numéro de téléphone
- Le ou les noms d’utilisateur, d’organisation, de dépôt qui vous intéressent
- Les URL de l’ensemble des pages, gists ou fichiers d’intérêt
- La description des types de documents dont vous avez besoin

Veuillez prévoir au moins deux semaines pour que nous puissions examiner votre demande.

## Demandes des autorités de police étrangères

En tant que société américaine basée en Californie, GitHub n’est pas tenue de fournir des données à des gouvernements étrangers en réponse à une procédure légale émise par des autorités étrangères.
Les autorités policières étrangères souhaitant demander des informations à GitHub doivent contacter le Bureau des Affaires Internationales de la Division Criminelle du Ministère de la Justice des États-Unis.
GitHub répondra rapidement aux demandes qui sont émises par le biais d’un tribunal américain au moyen d’un traité d’entraide judiciaire (« MLAT ») ou d’une commission rogatoire.

## Questions

Avez-vous d’autres questions, commentaires ou suggestions ? Veuillez contacter l’{% data variables.contact.contact.contact_support %}.
