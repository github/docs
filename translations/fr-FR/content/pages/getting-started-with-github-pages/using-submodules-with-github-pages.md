---
title: Utilisation de sous-modules avec GitHub Pages
intro: 'Vous pouvez utiliser des sous-modules avec {% data variables.product.prodname_pages %} pour inclure d’autres projets dans le code de votre site.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880797'
---
Si le dépôt de votre site {% data variables.product.prodname_pages %} contient des sous-modules, leur contenu est automatiquement extrait lorsque votre site est créé.

Vous ne pouvez utiliser que des sous-modules qui pointent vers des dépôts publics, car le serveur {% data variables.product.prodname_pages %} ne peut pas accéder aux dépôts privés.

Utilisez l’URL en lecture seule `https://` pour vos sous-modules, y compris les sous-modules imbriqués. Vous pouvez apporter cette modification dans votre fichier _.gitmodules_.

## Pour aller plus loin

- « [Outils Git - Sous-modules](https://git-scm.com/book/en/Git-Tools-Submodules) » dans le manuel _Pro Git_
- « [Résolution des erreurs de build Jekyll pour les sites {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites) »
