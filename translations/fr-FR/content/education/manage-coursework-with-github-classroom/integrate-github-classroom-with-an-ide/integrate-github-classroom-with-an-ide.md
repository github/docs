---
title: Intégrer GitHub Classroom à un IDE
shortTitle: Integrate with an IDE
intro: 'Vous pouvez préconfigurer un environnement de développement intégré (IDE) pris en charge pour les devoirs que vous créez dans {% data variables.product.prodname_classroom %}.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can integrate {% data variables.product.prodname_classroom %} with an IDE. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/online-ide-integrations
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-online-ide
  - /education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-online-ide
ms.openlocfilehash: 25c4c1fba1cb0f082049a461e03bfdf009e208c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110505'
---
## À propos de l’intégration à un IDE

{% data reusables.classroom.about-online-ides %} 

Dès qu’un étudiant accepte un devoir avec un IDE, le fichier README dans le dépôt de devoir de l’étudiant propose un bouton pour ouvrir le devoir dans l’IDE. L’étudiant peut commencer à travailler immédiatement et aucune autre configuration n’est nécessaire.

## IDE pris en charge

{% data variables.product.prodname_classroom %} prend en charge les IDE suivants. Vous pouvez avoir plus d’informations sur l’expérience des étudiants pour chaque IDE.

| IDE | Plus d’informations |
| :- | :- |
| {% data variables.product.prodname_github_codespaces %} | « [Utilisation de {% data variables.product.prodname_github_codespaces %} avec {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom) » |
| Microsoft MakeCode Arcade | « [À propos de l’utilisation de MakeCode Arcade avec {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/about-using-makecode-arcade-with-github-classroom) » |
| {% data variables.product.prodname_vscode %} | [Extension {% data variables.product.prodname_classroom %}](http://aka.ms/classroom-vscode-ext) dans la Place de marché Visual Studio |

Nous savons que les intégrations d’IDE cloud sont importantes pour votre classe et nous nous efforçons de trouver d’autres options à vous proposer. 

## Configuration d’un IDE pour un devoir

Vous pouvez choisir l’IDE de votre choix pour un devoir quand vous créez le devoir. Pour savoir comment créer un devoir qui utilise un IDE, consultez « [Créer un devoir individuel](/education/manage-coursework-with-github-classroom/create-an-individual-assignment) » ou « [Créer un devoir de groupe](/education/manage-coursework-with-github-classroom/create-a-group-assignment) ».

## Configuration d’une affectation dans un nouvel environnement de développement intégré (IDE)

La première fois que vous configurez une affectation utilisant un autre environnement de développement intégré, vous devez vous assurer qu’il est correctement configuré.

À moins d’utiliser {% data variables.product.prodname_codespaces %}, vous devez autoriser l’application OAuth pour l’environnement de développement intégré de votre organisation. Pour tous les dépôts, accordez à l’application un accès **en lecture** aux métadonnées, à l’administration et au code, et un accès **en écriture** à l’administration et au code. Pour plus d’informations, consultez « [Autorisation des applications OAuth](/github/authenticating-to-github/authorizing-oauth-apps) ».

{% data variables.product.prodname_codespaces %} ne nécessite pas d’application OAuth, mais vous devez activer {% data variables.product.prodname_codespaces %} pour permettre à votre organisation de configurer un devoir avec {% data variables.product.prodname_codespaces %}. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.prodname_codespaces %} avec {% data variables.product.prodname_classroom %}](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/using-github-codespaces-with-github-classroom#enabling-codespaces-for-your-organization) ».

## Pour aller plus loin

- « [À propos des README](/github/creating-cloning-and-archiving-repositories/about-readmes) »
