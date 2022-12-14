---
title: Gestion de votre README de profil
intro: 'Vous pouvez ajouter un fichier README à votre profil {% data variables.product.prodname_dotcom %} pour vous présenter auprès des autres.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
ms.openlocfilehash: 587bcea1e1a0f96aad8882b41196afcc6e433363
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578899'
---
## À propos de votre README de profil

Vous pouvez partager des informations sur vous-même avec la communauté sur {% data variables.product.product_location %} en créant un README de profil. {% data variables.product.prodname_dotcom %} affiche votre README de profil en haut de votre page de profil.

C’est vous qui décidez des informations à inclure dans votre README de profil ; vous disposez ainsi d’un contrôle total sur la façon dont vous vous présentez sur {% data variables.product.prodname_dotcom %}. Voici quelques exemples d’informations que les visiteurs peuvent trouver intéressantes, amusantes ou utiles dans votre README de profil.

- Une section « À propos de moi » qui décrit votre travail et vos intérêts
- Les contributions dont vous êtes fier et le contexte de ces contributions
- Des conseils pour obtenir de l’aide dans les communautés où vous êtes impliqué

![Fichier README de profil affiché sur le profil](/assets/images/help/repository/profile-with-readme.png)

Vous pouvez mettre en forme le texte et inclure des emojis, des images et des fichiers GIF dans votre README de profil à l’aide de {% data variables.product.company_short %} Flavored Markdown. Pour plus d’informations, consultez « [Bien démarrer avec l’écriture et la mise en forme sur {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github) ».

## Prérequis

GitHub affiche votre README de profil sur votre page de profil si toutes les conditions suivantes sont remplies.

- Vous avez créé un dépôt avec un nom qui correspond à votre nom d’utilisateur {% data variables.product.prodname_dotcom %}
- Le dépôt est public
- Le dépôt contient un fichier nommé README.md à sa racine
- Le fichier README.md a tout contenu

{% note %}

**Remarque** : Si vous avez créé un dépôt public portant le même nom que votre nom d’utilisateur avant juillet 2020, {% data variables.product.prodname_dotcom %} n’affichera pas automatiquement le fichier README du dépôt sur votre profil. Vous pouvez partager manuellement le fichier README du dépôt sur votre profil en accédant au dépôt sur {% data variables.product.prodname_dotcom_the_website %} et en cliquant sur **Partager sur le profil**.

![Bouton pour partager le README sur le profil](/assets/images/help/repository/share-to-profile.png)

{% endnote %}

## Ajout d’un README de profil

{% data reusables.repositories.create_new %}
2. Sous « Nom du dépôt », tapez un nom de dépôt qui correspond à votre nom d’utilisateur {% data variables.product.prodname_dotcom %}. Par exemple, si votre nom d’utilisateur est « octocat », le nom du dépôt doit être « octocat ».
  ![Champ de nom du dépôt qui correspond au nom d’utilisateur](/assets/images/help/repository/repo-username-match.png)
3. Ajoutez éventuellement une description pour votre dépôt. Par exemple, « Mon dépôt personnel ».
  ![Champ pour entrer une description de dépôt](/assets/images/help/repository/create-personal-repository-desc.png)
4. Sélectionnez **Public**.
 ![Case d’option pour sélectionner la visibilité avec public sélectionné](/assets/images/help/repository/create-personal-repository-visibility.png) {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}
7. Au-dessus de la barre latérale droite, cliquez sur **Modifier le README**.
  ![Bouton pour modifier le fichier README](/assets/images/help/repository/personal-repository-edit-readme.png)
  
  Le fichier README généré est prérempli avec un modèle afin de vous donner une inspiration pour votre README de profil.
  ![Fichier README avec modèle prérempli](/assets/images/help/repository/personal-repository-readme-template.png)

Pour obtenir une synthèse de tous les emojis disponibles et de leurs codes, consultez « [Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/) ».

## Suppression d’un README de profil

Le README de profil est supprimé de votre profil {% data variables.product.prodname_dotcom %} si l’une des conditions suivantes est remplie :

- Le fichier README est vide ou n’existe pas
- Le dépôt est privé
- Le nom du dépôt ne correspond plus à votre nom d’utilisateur

La méthode que vous choisissez dépend de vos besoins, mais si vous n’êtes pas sûr, nous vous recommandons de rendre votre dépôt privé. Pour savoir comment rendre votre référentiel privé, consultez « [Modification de la visibilité d’un référentiel](/github/administering-a-repository/setting-repository-visibility#changing-a-repositorys-visibility) ».

## Pour aller plus loin

- [À propos des README](/github/creating-cloning-and-archiving-repositories/about-readmes)
