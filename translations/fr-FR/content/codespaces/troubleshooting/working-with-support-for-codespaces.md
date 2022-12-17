---
title: Travailler avec la prise en charge de Codespaces
intro: Conseils pour obtenir la meilleure aide possible de la part du support pour {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145086630"
---
Avant que la prise en charge puisse vous aider avec les problèmes avec les espaces de code, vous devez connaître le nom de l’espace de code et son ID Codespaces (identificateur). En outre, le support peut vous demander de partager certains journaux. Pour plus d’informations, consultez « [Journaux Codespaces](/codespaces/troubleshooting/codespaces-logs) » et « [À propos du support GitHub](/github/working-with-github-support/about-github-support) ».

### <a name="codespace-names"></a>Noms d’espace de code

Chaque espace de code a un nom unique qui est une combinaison de votre descripteur {% data variables.product.company_short %}, du nom du référentiel et de certains caractères aléatoires. Les caractères supplémentaires vous permettent d’avoir des espaces de code pour différentes branches dans le même référentiel. Par exemple : `octocat-myrepo-gmc7`.

Pour trouver le nom d’un espace de code :

- Ouvrez l’espace de code dans le navigateur. Le sous-domaine de l’URL est le nom de l’espace de code. Par exemple : `https://octocat-myrepo-gmc7.github.dev` est l’URL de l’espace de code `octocat-myrepo-gmc7`.
- Si vous ne pouvez pas ouvrir un espace de code, vous pouvez accéder au nom dans {% data variables.product.product_name %} sur https://github.com/codespaces. Le nom s’affiche dans une fenêtre contextuelle lorsque vous pointez sur l’option **Ouvrir dans le navigateur** sur https://github.com/codespaces. 
  ![Nom de l’espace de code affiché au pointage](/assets/images/help/codespaces/find-codespace-name-github.png)

Le nom de l’espace de code est également inclus dans la plupart des fichiers journaux. Par exemple, dans les journaux d’espace de code comme valeur `friendlyName`, dans le journal d’extension {% data variables.product.prodname_github_codespaces %} après `making GET request for`, et dans le journal de la console du navigateur après `clientUrl`. Pour plus d’informations, consultez « [Journaux d’espace de code](/codespaces/troubleshooting/codespaces-logs) ».

### <a name="codespaces-ids"></a>ID d’espace de code

Chaque espace de code a également un ID (identificateur). Cette valeur n’est pas affichée par défaut dans {% data variables.product.prodname_vscode %}. Vous devrez peut-être mettre à jour les paramètres de l’extension {% data variables.product.prodname_github_codespaces %} avant de pouvoir accéder à l’ID.

1. Dans {% data variables.product.prodname_vscode %}, version navigateur ou de bureau, dans la barre d’activité de gauche, cliquez sur **Explorateur distant** pour afficher les détails de l’espace de code.
2. Si la barre latérale inclut une section « Performances de l’espace de code », pointez sur l’ID de l’espace de code, puis cliquez sur l’icône du Presse-papiers pour copier l’ID.
3. Si les informations ne s’affichent pas, cliquez sur {% octicon "gear" aria-label="The gear icon" %}, dans le coin inférieur gauche de la barre d’activité pour afficher l’onglet « Paramètres ».
4. Développez **Extensions** et cliquez sur **{% data variables.product.prodname_github_codespaces %}** pour afficher les paramètres de l’extension. Activez ensuite **Afficher l’explorateur de performances** pour afficher la section « Performances de l’espace de code » dans la barre latérale.
  ![ID d’espace de code et paramètres requis pour afficher les informations liées aux performances](/assets/images/help/codespaces/find-codespace-id.png)
