---
title: Mettre à jour l’attribution d’auteur de commit avec GitHub Importer
intro: 'Lors d’une importation, vous pouvez faire correspondre les commits dans votre dépôt avec le compte GitHub de l’auteur des commits.'
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128949'
---
GitHub Importer recherche les utilisateurs de GitHub dont les adresses e-mail correspondent aux auteurs des commits dans le dépôt que vous importez. Vous pouvez alors associer un commit à son auteur sur la base de l’adresse e-mail ou du nom d’utilisateur GitHub de l’auteur.

## Mise à jour des auteurs de commits

1. Une fois que vous avez importé votre dépôt, dans la page d’état de l’importation, cliquez sur **Mapper les auteurs**.
![Bouton Mapper les auteurs](/assets/images/help/importer/match-authors-button.png)
2. En regard de l’auteur dont vous souhaitez mettre à jour les informations, cliquez sur **Associer**.
![Liste des auteurs de commits](/assets/images/help/importer/connect-commit-author.png)
3. Tapez l’adresse e-mail ou le nom d’utilisateur GitHub de l’auteur, puis appuyez sur **Entrée**.

## Attribution de commits à un utilisateur GitHub ayant une adresse e-mail publique

Si l’auteur d’un commit dans votre dépôt importé a un compte GitHub associé à l’adresse e-mail qu’il a utilisée pour créer le commit et qu’il n’a pas [défini son adresse e-mail de commit comme privée](/articles/setting-your-commit-email-address), GitHub Importer mappe l’adresse e-mail associée au commit à l’adresse e-mail publique associée au compte GitHub de l’auteur, et attribue le commit à ce compte GitHub.

## Attribution de commits à un utilisateur GitHub n’ayant pas d’adresse e-mail publique

Si l’auteur d’un commit dans votre dépôt importé n’a pas défini d’adresse e-mail publique dans son profil GitHub, ni [défini son adresse e-mail de commit comme privée](/articles/setting-your-commit-email-address), GitHub Importer peut ne pas réussir à mapper l’adresse e-mail associée au commit au compte GitHub de l’auteur.

L’auteur du commit peut résoudre ce problème en définissant son adresse e-mail comme privée. Ses commits seront alors attribués à `<username>@users.noreply.github.com`, et les commits importés seront associés à son compte GitHub.

## Attribution de commits en utilisant une adresse e-mail

Si l’auteur n’a pas d’adresse e-mail associée à son compte GitHub, il peut [ajouter l’adresse à son compte](/articles/adding-an-email-address-to-your-github-account) après l’importation, et les commits seront correctement attribués.

Si l’auteur n’a pas de compte GitHub, GitHub Importer attribue les commits de l’auteur à l’adresse e-mail associée aux commits.

## Pour aller plus loin

- « [À propos de GitHub Importer](/articles/about-github-importer) »
- « [Importation d’un dépôt avec GitHub Importer](/articles/importing-a-repository-with-github-importer) »
- « [Ajout d’une adresse e-mail à votre compte](/articles/adding-an-email-address-to-your-github-account/) »
- « [Définition de votre adresse e-mail de commit](/articles/setting-your-commit-email-address) »
