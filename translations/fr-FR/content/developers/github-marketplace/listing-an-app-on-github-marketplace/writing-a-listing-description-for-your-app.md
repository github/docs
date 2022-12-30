---
title: Écrire une description de référencement pour votre application
intro: '[Pour répertorier votre application](/marketplace/listing-on-github-marketplace/) dans la {% data variables.product.prodname_marketplace %}, vous devrez rédiger des descriptions de votre application et fournir des images conformes aux directives de GitHub.'
redirect_from:
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-writing-github-app-descriptions
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/writing-github-app-descriptions
  - /apps/adding-integrations/listing-apps-on-github-marketplace/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/listing-apps-on-github/guidelines-for-creating-a-github-marketplace-listing
  - /apps/marketplace/getting-started-with-github-marketplace-listings/guidelines-for-creating-github-marketplace-listing-images
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/creating-github-marketplace-listing-images
  - /apps/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions
  - /developers/github-marketplace/writing-a-listing-description-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Write listing descriptions
ms.openlocfilehash: f29e049529801011d25d2723c5851b56d7a8bb92
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139255'
---
Voici des instructions concernant les champs à remplir dans la section **Description du référencement** de votre brouillon de référencement.

## Nommage et liens

### Nom du référencement

Le nom de votre référencement sera affiché dans la [page d’accueil de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Le nom est limité à 255 caractères et peut être différent du nom de votre application. Votre référencement ne peut pas avoir le même nom qu’un compte existant sur {% data variables.product.product_location %}, sauf si le nom est votre propre nom d’utilisateur ou le nom de votre organisation. 

### Description très courte

La communauté verra la description « très courte » sous le nom de votre application dans la [page d’accueil de {% data variables.product.prodname_marketplace %}](https://github.com/marketplace).

![Description très courte de l’application dans {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_short_description.png)

#### Longueur

Nous vous recommandons de conserver des descriptions courtes comprenant entre 40 et 80 caractères. Il est possible d’utiliser davantage de caractères, mais les descriptions concises sont plus faciles à lire et à comprendre rapidement par les clients.

#### Contenu

- Décrivez la fonctionnalité de l’application. N’utilisez pas ce champ pour un appel à l’action. Par exemple :

  **À FAIRE :** Gestion de projet légère pour les problèmes GitHub

  **À NE PAS FAIRE :** Gérer vos projets et problèmes dans GitHub

  **Conseil :** Mettez le verbe à la troisième personne dans un appel à l’action pour en faire une description acceptable : _Gère vos projets et problèmes dans GitHub_

- Ne répétez pas le nom de l’application dans la description.

  **À FAIRE :** Outil natif d’intégration continue de conteneur

  **À NE PAS FAIRE :** Skycap est un outil natif d’intégration continue de conteneur

#### Mise en forme

- Utilisez toujours une majuscule en début de phrase. Mettez uniquement en majuscules la première lettre et les noms propres.

- N’ajoutez pas de ponctuation à la fin de la description courte. Les descriptions courtes ne doivent pas inclure de phrases complètes, ni inclure plus d’une phrase.

- Mettez uniquement en majuscules les noms propres. Par exemple :

  **À FAIRE :** Automatisation de la livraison en un clic pour les développeurs web

  **À NE PAS FAIRE :** Automatisation de la livraison en un clic pour les Développeurs Web

- Utilisez toujours une [virgule de série](https://en.wikipedia.org/wiki/Serial_comma) dans les listes.

- Ne désignez pas la communauté GitHub sous le terme d’« utilisateurs ».

  **À FAIRE :** Créer automatiquement des problèmes pour les personnes de votre organisation

  **À NE PAS FAIRE :** Créer automatiquement des problèmes pour les utilisateurs d’une organisation

- N’utilisez pas d’acronymes, sauf s’ils sont d’usage courant (comme « API »). Par exemple :

  **À FAIRE :** Tableaux de tâches agiles, estimations et rapports sans quitter GitHub

  **À NE PAS FAIRE :** Tableaux de tâches agiles, estimations et rapports sans quitter l’IU de GitHub

### Catégories

Les applications dans {% data variables.product.prodname_marketplace %} peuvent être présentées par catégorie. Sélectionnez la catégorie qui décrit le mieux la fonctionnalité principale de votre application dans la liste déroulante **Catégorie principale**, puis sélectionnez éventuellement une **catégorie secondaire** appropriée pour votre application.

### Langues prises en charge

Si votre application fonctionne uniquement avec certains langages, sélectionnez les langages de programmation (jusqu’à dix) qui sont pris en charge par votre application. Ces langages sont affichés dans la page de référencement de votre application dans {% data variables.product.prodname_marketplace %}. Ce champ est facultatif.

### URL de référencement

**URL requises**
* **URL du service clientèle :** URL d’une page web à laquelle vos clients peuvent accéder pour demander un support technique, des informations produit ou des renseignements sur leur compte.
* **URL de la politique de confidentialité :** page web qui présente la politique de confidentialité associée à votre application.
* **URL d’installation :** ce champ s’affiche uniquement pour les applications OAuth. (Les applications GitHub n’utilisent pas cette URL, car elles utilisent à la place l’URL d’installation facultative fournie dans la page des paramètres de l’application GitHub.) Lorsque des clients achètent votre application OAuth et l’installent, GitHub les redirige ensuite vers l’URL d’installation. Vous devez rediriger les clients vers `https://github.com/login/oauth/authorize` pour qu’ils commencent le flux d’autorisation OAuth. Pour plus d’informations, consultez « [Nouveaux achats pour OAuth Apps](/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/) ». Ignorez ce champ si vous référencez une application GitHub.

**URL facultatives**
* **URL de l’entreprise :** lien vers le site web de votre entreprise.
* **URL d’état :** lien vers une page web qui affiche l’état de votre application. Les pages d’état peuvent inclure les rapports d’incidents actuels et historiques, l’état du temps d’activité de l’application web et la maintenance planifiée.
* **URL de la documentation :** lien vers la documentation qui explique aux clients comment utiliser votre application.

## Logo et carte de fonctionnalité

{% data variables.product.prodname_marketplace %} affiche tous les référencements avec une image de logo carré à l’intérieur d’un badge circulaire pour distinguer visuellement les applications.

![Images de logo et de badge dans GitHub Marketplace](/assets/images/marketplace/marketplace-logo-and-badge.png)

Une carte de fonctionnalité affiche le logo et le nom de votre application sur une image d’arrière-plan personnalisée qui reflète la personnalité de votre marque. {% data variables.product.prodname_marketplace %} affiche cette carte si votre application est l’une des quatre applications proposées de manière aléatoire en haut de la [page d’accueil](https://github.com/marketplace). Une description très courte de chaque application est affichée sous la carte de fonctionnalité de l’application.

![Carte de fonctionnalité](/assets/images/marketplace/marketplace_feature_card.png)

Lorsque vous chargez des images et sélectionnez des couleurs, votre brouillon de référencement dans {% data variables.product.prodname_marketplace %} affiche un aperçu de votre logo et de votre carte de fonctionnalité.

#### Instructions pour les logos

Vous devez charger une image personnalisée pour le logo. Pour le badge, choisissez une couleur d’arrière-plan.

- Chargez une image de logo de 200 pixels x 200 pixels au minimum afin d’éviter une mise à l’échelle de votre logo au moment de la publication de votre référencement.
- Les logos sont rognés en forme de carrés. Nous vous recommandons de charger un fichier d’image carrée avec votre logo au centre.
- Pour des résultats optimaux, chargez une image de logo ayant un arrière-plan transparent.
- Pour donner l’apparence d’un badge transparent, choisissez la même couleur d’arrière-plan de badge que la couleur d’arrière-plan (ou transparence) de votre image de logo.
- Évitez d’utiliser des images de logo qui comportent des mots ou du texte. Les logos avec du texte ne se mettent pas bien à l’échelle sur les petits écrans.

#### Instructions pour les cartes de fonctionnalité

Vous devez charger une image d’arrière-plan personnalisée pour la carte de fonctionnalité. Pour le nom de l’application, choisissez une couleur de texte.

- Appliquez un motif ou une texture à votre image d’arrière-plan pour donner à votre carte une identité visuelle et mieux la faire ressortir sur l’arrière-plan foncé de la page d’accueil de {% data variables.product.prodname_marketplace %}. Les cartes de fonctionnalité doivent refléter la personnalité de la marque de votre application.
- L’image d’arrière-plan mesure 965 pixels x 482 pixels (largeur x hauteur).
- Pour le nom de votre application, choisissez une couleur de texte qui ressort bien sur l’image d’arrière-plan.

## Détails de l’annonce

Pour accéder à la page d’arrivée de votre application, cliquez sur le nom de l’application dans la page d’accueil ou la page de catégorie dans {% data variables.product.prodname_marketplace %}. La page d’arrivée affiche une description plus longue de l’application, composée d’une « description d’introduction » et d’une « description détaillée ».

Votre « description d’introduction » s’affiche en haut de la page d’arrivée de votre application dans {% data variables.product.prodname_marketplace %}.

![Description d’introduction dans {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_intro_description.png)

Quand vous cliquez sur **En savoir plus...** , la « description détaillée » s’affiche.

![Description détaillée dans {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_detailed_description.png)

Suivez les instructions suivantes pour écrire ces descriptions.

### Longueur

Nous vous recommandons d’écrire en une ou deux phrases (de 150 à 250 caractères) un résumé général dans le champ obligatoire « Description d’introduction » pour le [référencement de votre application](/marketplace/listing-on-github-marketplace/). Il est possible d’utiliser davantage de caractères, mais les résumés concis sont plus faciles à lire et à comprendre rapidement par les clients.

Vous pouvez ajouter des informations supplémentaires dans le champ facultatif « Description détaillée ». Cette description s’affiche quand vous cliquez sur **En savoir plus...** sous la description d’introduction dans la page d’arrivée de votre application. Une description détaillée se compose de trois à cinq [propositions de valeur](https://en.wikipedia.org/wiki/Value_proposition), décrites en une ou deux phrases chacune. Vous pouvez utiliser jusqu’à 1 000 caractères pour cette description.

### Contenu

- Commencez toujours par inclure une description d’introduction avec le nom de votre application.

- Écrivez toujours les descriptions et les propositions de valeur à la voix active.

### Mise en forme

- Utilisez toujours une majuscule au début des titres des propositions de valeur. Mettez uniquement en majuscules la première lettre et les noms propres.

- Utilisez des points dans vos descriptions. Évitez les points d’exclamation.

- N’ajoutez pas de ponctuation à la fin des titres des propositions de valeur. Les titres des propositions de valeur ne doivent pas inclure de phrases complètes, ni inclure plus d’une phrase.

- Pour chaque proposition de valeur, incluez un titre suivi d’un paragraphe descriptif. Mettez le titre en forme d’[en-tête de niveau trois](/articles/basic-writing-and-formatting-syntax/#headings) à l’aide de Markdown. Par exemple :

  ### Acquérez les compétences dont vous avez besoin

  GitHub Skills peut vous aider à apprendre à utiliser GitHub, à communiquer plus efficacement avec Markdown, à gérer les conflits de fusion et bien plus encore.

- Mettez uniquement en majuscules les noms propres.

- Utilisez toujours une [virgule de série](https://en.wikipedia.org/wiki/Serial_comma) dans les listes.

- Ne désignez pas la communauté GitHub sous le terme d’« utilisateurs ».

  **À FAIRE :** Créer automatiquement des problèmes pour les personnes de votre organisation

  **À NE PAS FAIRE :** Créer automatiquement des problèmes pour les utilisateurs d’une organisation

- N’utilisez pas d’acronymes, sauf s’ils sont d’usage courant (comme « API »).

## Captures d’écran du produit

Vous pouvez charger jusqu’à cinq captures d’écran de votre application pour les afficher dans la page d’arrivée de votre application. Ajoutez une légende facultative à chaque capture d’écran pour fournir un contexte. Après avoir chargé vos captures d’écran, vous pouvez les faire glisser dans l’ordre dans lequel vous souhaitez qu’elles s’affichent dans la page d’arrivée.

### Instructions pour les captures d’écran

- Les images doivent être de haute résolution (au moins 1 200 pixels de large).
- Toutes les images doivent avoir la même hauteur et la même largeur (proportions) pour éviter les sauts de page lorsque les utilisateurs cliquent sur les différentes images.
- Affichez le plus d’éléments d’interface utilisateur possible afin que les utilisateurs puissent bien voir ce que votre application fait.
- Quand vous effectuez des captures d’écran de votre application dans un navigateur, incluez uniquement le contenu de la fenêtre d’affichage. Évitez d’inclure la barre d’adresse, la barre de titre ou des icônes de barre d’outils, car ces éléments ne se mettent pas bien à l’échelle sur les écrans plus petits.
- GitHub affiche les captures d’écran que vous chargez dans une zone de la page d’arrivée de votre application. Vous n’avez donc pas besoin d’ajouter de zones ou bordures autour de vos captures d’écran.
- Les légendes sont plus efficaces quand elles sont courtes et percutantes.

![Capture d’écran de GitHub Marketplace](/assets/images/marketplace/marketplace-screenshots.png)
