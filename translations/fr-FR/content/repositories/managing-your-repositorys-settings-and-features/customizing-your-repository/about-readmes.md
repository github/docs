---
title: À propos des README
intro: 'Vous pouvez ajouter un fichier README à votre référentiel pour expliquer aux autres personnes pourquoi votre projet est utile, ce qu’elles peuvent faire avec votre projet et comment elles peuvent l’utiliser.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163335'
---
## À propos des README

{% data reusables.repositories.about-READMEs %}

Pour plus d’informations sur la fourniture de recommandations pour votre projet, consultez {% ifversion fpt or ghec %}« [Ajout d’un code de conduite à votre projet](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project) » et {% endif %}"[Configuration de votre projet pour des contributions saines](/communities/setting-up-your-project-for-healthy-contributions). »

Un README est souvent le premier élément qu’un visiteur verra lors de la consultation de votre référentiel. Les fichiers README incluent généralement des informations sur :
- Ce que le projet fait
- Pourquoi le projet est utile
- Prise en main du projet par les utilisateurs
- Où les utilisateurs peuvent obtenir de l’aide sur votre projet
- Qui maintient et contribue au projet

Si vous placez votre fichier README dans le répertoire `.github` caché, racine ou `docs` de votre référentiel, {% data variables.product.product_name %} reconnaît et présente automatiquement votre fichier README pour les visiteurs du référentiel.

Si un référentiel contient plusieurs fichiers README, le fichier affiché est choisi parmi les emplacements suivants dans cet ordre : répertoire `.github`, puis répertoire racine du dépôt et enfin répertoire `docs`.

![Page principale du référentiel github/scientist et son fichier README](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![Fichier README sur votre référentiel nom d’utilisateur/nom d’utilisateur](/assets/images/help/repository/username-repo-with-readme.png)

## Table des matières générée automatiquement pour les fichiers README

Pour l’affichage rendu d’un fichier Markdown dans un référentiel, y compris les fichiers README, {% data variables.product.product_name %} génère automatiquement une table des matières en fonction des titres de section. Vous pouvez afficher la table des matières d’un fichier README en cliquant sur l’icône de menu {% octicon "list-unordered" aria-label="The unordered list icon" %} en haut à gauche de la page rendue.

![README avec table des matières générée automatiquement](/assets/images/help/repository/readme-automatic-toc.png)

## Liens de section dans les fichiers README et les pages d’objets blob

{% data reusables.repositories.section-links %}

## Liens relatifs et chemins d’accès aux images dans les fichiers README

{% data reusables.repositories.relative-links %}

## Wikis

Un README doit contenir uniquement les informations nécessaires pour que les développeurs commencent à utiliser et à contribuer à votre projet. Les documentations plus longues sont mieux adaptées aux wikis. Pour plus d’informations, consultez « [À propos des wikis](/communities/documenting-your-project-with-wikis/about-wikis) ».

## Pour aller plus loin

- « [Ajouter un fichier à un dépôt](/articles/adding-a-file-to-a-repository) »
- « [Création de fichiers Lisez-moi lisibles](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md) » de 18F {%- ifversion fpt or ghec %} 
- « [Ajout d’un badge " Ouvrir dans GitHub Codespaces "](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge) » {%- endif %}   
