---
title: Recherche des fonctions et méthodes modifiées dans une demande de tirage (pull request)
intro: 'Vous pouvez rapidement trouver des modifications proposées pour une méthode ou une fonction dans une demande de tirage dans les fichiers *.go*, *.js*, *.ts*, *.py*, *.php* et *.rb*.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /articles/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Methods & functions
ms.openlocfilehash: be891fe01166ee0eccf9ba7c824a1017c9d8fc11
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145133703'
---
Toute personne disposant d’un accès en lecture à un référentiel peut afficher une liste récapitulative des fonctions et des méthodes modifiées dans certains fichiers d’une demande de tirage (pull request).

La liste récapitulative des méthodes et des fonctions est créée à partir de ces types de fichiers pris en charge :
  - Go
  - JavaScript (inclut Typescript, Flow et d’autres types de JavaScript)
  - PHP
  - Python
  - Ruby

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des demandes de tirage, cliquez sur celle pour laquelle vous souhaitez trouver les fonctions et méthodes modifiées.
{% data reusables.repositories.changed-files %}
4. Pour afficher une liste récapitulative des fonctions et méthodes modifiées, cliquez sur **Accéder à...** . ![Accéder au menu déroulant](/assets/images/help/pull_requests/jump-to-menu.png)
5. Sélectionnez la fonction ou la méthode modifiée dans le menu déroulant. Vous pouvez également entrer le nom de la fonction ou de la méthode pour filtrer les résultats.
  ![Filtrer la fonction et les méthodes](/assets/images/help/pull_requests/filter-function-and-methods.png)

 {% note %}

 **Remarque :** si les fonctions ou méthodes attendues ne s’affichent pas, vérifiez que votre code se compile et ne contient pas d’erreurs. Seules les fonctions et les méthodes qui ont été modifiées dans cette demande de tirage et trouvées dans les fichiers *.go*, *.js*, *.ts*, *.py*, *.php* et *.rb* s’affichent dans le menu déroulant.

 {% endnote %}

6. Vous êtes redirigé vers la première ligne de la fonction ou de la méthode que vous avez sélectionnée.
 ![afficher la fonction ou la méthode dans les fichiers modifiés](/assets/images/help/pull_requests/view-selected-function-or-method.png)

## Pour aller plus loin

- « [À propos de la comparaison des branches dans les demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests) »
- « [Filtrage des fichiers dans une demande de tirage par type de fichier](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request) »
