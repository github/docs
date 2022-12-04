---
title: Travailler avec le support pour GitHub Codespaces
intro: 'Conseils pour obtenir la meilleure aide possible de la part du support pour {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159588'
---
Avant de demander au support de vous aider en cas de problème avec un codespace, vous devez connaître le nom permanent et l’ID (identificateur) du codespace. En outre, le support peut vous demander de partager certains journaux. Pour plus d’informations, consultez « [Journaux de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) » et « [À propos du support GitHub](/github/working-with-github-support/about-github-support) ».

## Noms d’espace de code

Chaque codespace a un nom unique qui combine votre descripteur {% data variables.product.company_short %}, deux ou trois mots générés automatiquement et quelques caractères aléatoires. Par exemple : `octocat-literate-space-parakeet-mld5`. Les deux ou trois mots générés automatiquement forment également le nom d’affichage initial de votre codespace (ici, `literate-space-parakeet`). Vous pouvez modifier le nom d’affichage d’un codespace, mais cela n’affecte pas le nom permanent. Pour plus d’informations, consultez « [Renommage d’un codespace](/codespaces/customizing-your-codespace/renaming-a-codespace) ».

Pour trouver le nom d’un espace de code :

- Ouvrez l’espace de code dans le navigateur. Le sous-domaine de l’URL est le nom de l’espace de code. Par exemple : `https://octocat-literate-space-parakeet-mld5.github.dev` est l’URL de l’espace de code `octocat-literate-space-parakeet-mld5`.
- Si vous ne pouvez pas ouvrir un espace de code, vous pouvez accéder au nom dans {% data variables.product.product_name %} sur https://github.com/codespaces. Le nom s’affiche dans une fenêtre contextuelle quand vous pointez sur le nom d’affichage d’un codespace sur https://github.com/codespaces. 
  ![Nom de l’espace de code affiché au pointage](/assets/images/help/codespaces/find-codespace-name-github.png)

Le nom de l’espace de code est également inclus dans la plupart des fichiers journaux. Par exemple, dans les journaux d’espace de code comme valeur `friendlyName`, dans le journal d’extension {% data variables.product.prodname_github_codespaces %} après `making GET request for`, et dans le journal de la console du navigateur après `clientUrl`. Pour plus d’informations, consultez « [Journaux de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs) ».

## ID d’espace de code

Chaque espace de code a également un ID (identificateur). Cette valeur n’est pas affichée par défaut dans {% data variables.product.prodname_vscode %}. Vous devrez peut-être mettre à jour les paramètres de l’extension {% data variables.product.prodname_github_codespaces %} avant de pouvoir accéder à l’ID.

1. Dans {% data variables.product.prodname_vscode %}, version navigateur ou de bureau, dans la barre d’activité de gauche, cliquez sur **Explorateur distant** pour afficher les détails de l’espace de code.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. Si la barre latérale inclut une section « Performances de l’espace de code », pointez sur l’ID de l’espace de code, puis cliquez sur l’icône du Presse-papiers pour copier l’ID.
1. Si les informations ne s’affichent pas, cliquez sur {% octicon "gear" aria-label="The gear icon" %}, dans le coin inférieur gauche de la barre d’activité pour afficher l’onglet « Paramètres ».
1. Développez **Extensions** et cliquez sur **{% data variables.product.prodname_github_codespaces %}** pour afficher les paramètres de l’extension. Activez ensuite **Afficher l’explorateur de performances** pour afficher la section « Performances de l’espace de code » dans la barre latérale.
  ![ID d’espace de code et paramètres requis pour afficher les informations liées aux performances](/assets/images/help/codespaces/find-codespace-id.png)
