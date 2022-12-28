---
title: GitHub flow
intro: 'Suivez le flux {% data variables.product.prodname_dotcom %} pour collaborer sur des projets.'
redirect_from:
  - /articles/creating-and-editing-files-in-your-repository
  - /articles/github-flow-in-the-browser
  - /articles/github-flow
  - /github/collaborating-with-issues-and-pull-requests/github-flow
  - /github/getting-started-with-github/github-flow
  - /github/getting-started-with-github/quickstart/github-flow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Fundamentals
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 5458d7b14ff59bf7059f093ee47ee92034b9319f
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876943'
---
## Introduction

Le flux {% data variables.product.prodname_dotcom %} est un workflow léger basé sur des branches. Le flux {% data variables.product.prodname_dotcom %} s’avère utiles pour tout le monde, pas seulement pour les développeurs. Par exemple, ici chez {% data variables.product.prodname_dotcom %}, nous utilisons le flux {% data variables.product.prodname_dotcom %} pour notre [stratégie de site](https://github.com/github/site-policy), notre [documentation](https://github.com/github/docs) et notre [feuille de route](https://github.com/github/roadmap).

## Prérequis

Pour suivre le flux {% data variables.product.prodname_dotcom %}, vous aurez besoin d’un compte {% data variables.product.prodname_dotcom %} et d’un dépôt. Pour plus d’informations sur la manière de créer un compte, consultez « [Inscription à {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-github) ». Pour plus d’informations sur la manière de créer un dépôt, consultez « [Créer un dépôt](/github/getting-started-with-github/create-a-repo) ».{% ifversion fpt or ghec %} Pour plus d’informations sur la manière de trouver un dépôt existant auquel contribuer, consultez « [Trouver des moyens de contribuer à l’open source sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) ».{% endif %}

## Suivi du flux {% data variables.product.prodname_dotcom %}

{% tip %}

{% ifversion fpt or ghec %} **Conseil :** Vous pouvez effectuer toutes les étapes du flux {% data variables.product.prodname_dotcom %} par le biais de l’interface web {% data variables.product.prodname_dotcom %}, de la ligne de commande et de [{% data variables.product.prodname_cli %}](https://cli.github.com) ou [{% data variables.product.prodname_desktop %}](/free-pro-team@latest/desktop).
{% else %} **Conseil :** Vous pouvez effectuer toutes les étapes du flux {% data variables.product.prodname_dotcom %} par le biais de l’interface web {% data variables.product.prodname_dotcom %}, de la ligne de commande ou de [{% data variables.product.prodname_cli %}](https://cli.github.com).
{% endif %}

{% endtip %}

### Créer une branche

  Créez une branche dans votre dépôt. Un nom de branche court et descriptif permet à vos collaborateurs de voir le travail en cours d’un seul coup d’œil. Par exemple, `increase-test-timeout` ou `add-code-of-conduct`. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository) ».

  En créant une branche, vous créez un espace dans lequel travailler sans affecter la branche par défaut. De plus, vous donnez à vos collaborateurs la possibilité de passer en revue votre travail.

### Apporter des modifications

Dans votre branche, apportez toutes les modifications souhaitées au dépôt. Pour plus d’informations, consultez « [Création de fichiers](/articles/creating-new-files) », « [Modification de fichiers](/articles/editing-files) », « [Renommage d’un fichier](/articles/renaming-a-file) », « [Déplacement d’un fichier vers un nouvel emplacement](/articles/moving-a-file-to-a-new-location) » ou « [Suppression de fichiers dans un dépôt](/github/managing-files-in-a-repository/deleting-files-in-a-repository) ».

Votre branche constitue un endroit sûr pour apporter des modifications. Si vous faites une erreur, vous pouvez revenir sur vos modifications ou pousser (push) d’autres modifications afin de la corriger. Vos modifications ne terminent pas dans la branche par défaut tant que vous ne fusionnez pas votre branche.

Commitez et poussez (push) vos modifications vers votre branche. Attribuez à chaque commit un message descriptif pour vous aider, ainsi que les futurs contributeurs, à comprendre les modifications que contient le commit. Par exemple, `fix typo` ou `increase rate limit`.

Dans l’idéal, chaque commit contient une modification isolée et complète. Cela permet de revenir facilement à la dernière version de vos modifications si vous décidez d’adopter une approche différente. Par exemple, si vous voulez renommer une variable et ajouter des tests, placez le renommage de la variable dans un commit et les tests dans un autre commit. Plus tard, si vous voulez conserver les tests, mais revenir sur le renommage de la variable, vous pouvez revenir sur le commit spécifique qui contenait le renommage de la variable. Si vous placez le renommage de la variable et les tests dans le même commit ou que vous propagez le renommage de la variable dans plusieurs commits, il vous faudra déployer plus d’efforts pour revenir sur vos modifications.

En commitant et en poussant (push) vos modifications, vous sauvegardez votre travail sur un stockage distant. Cela signifie que vous pouvez accéder à votre travail à partir de n’importe quel appareil. Cela signifie également que vos collaborateurs peuvent voir votre travail, répondre à des questions et apporter leurs suggestions ou contributions.

Continuez à apporter, commiter et pousser (push) des modifications dans votre branche jusqu’à ce que vous soyez prêt à demander des commentaires.

{% tip %}

**Conseil :** Créez une branche distincte pour chaque ensemble de modifications non liées. Cela permet aux réviseurs d’émettre plus facilement leurs commentaires. Cela vous permet également, ainsi qu’à vos futurs collaborateurs, de mieux comprendre les modifications, de revenir dessus plus facilement ou de s’en inspirer. De plus, en cas de retard dans un ensemble de modifications, vos autres modifications, quant à elles, ne subissent pas de retard.

{% endtip %}

### Créer une demande de tirage

Créez une demande de tirage (pull request) pour demander aux collaborateurs d’émettre des commentaires sur vos modifications. La révision des demandes de tirage est si précieuse que certains dépôts exigent une révision d’approbation avant de pouvoir fusionner des demandes de tirage. Si vous voulez obtenir des commentaires ou conseils précoces avant de finaliser vos modifications, vous pouvez marquer votre demande de tirage en tant que brouillon. Pour plus d’informations, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request) ».

Quand vous créez une demande de tirage, incluez un résumé des modifications et du problème qu’elles résolvent. Vous pouvez inclure des images, des liens et des tableaux pour faciliter la transmission de ces informations. Si votre demande de tirage traite un problème, liez ce problème de sorte que ses parties prenantes aient connaissance de la demande de tirage et vice versa. Si vous créez un lien avec un mot clé, le problème se ferme automatiquement quand la demande de tirage est fusionnée. Pour plus d’informations, consultez « [Syntaxe d’écriture et de mise en forme de base](/github/writing-on-github/basic-writing-and-formatting-syntax) » et « [Liaison d’une demande de tirage à un problème](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue) ».

![Corps de demande de tirage](/assets/images/help/pull_requests/pull-request-body.png)

En plus de remplir le corps de la demande de tirage, vous pouvez ajouter des commentaires à des lignes spécifiques de la demande de tirage pour indiquer explicitement quelque chose aux réviseurs.

![Commentaire de demande de tirage](/assets/images/help/pull_requests/pull-request-comment.png)

Votre dépôt est peut-être configuré pour demander automatiquement une révision à des équipes ou utilisateurs spécifiques quand une demande de tirage est créée. Vous pouvez aussi mentionner (@mention) ou demander manuellement une révision à des personnes ou équipes spécifiques.

Si votre dépôt comporte des vérifications configurées pour s’exécuter lors des demandes de tirage, celles qui échouent figurent dans votre demande de tirage. Cela vous aide à intercepter les erreurs avant de fusionner votre branche. Pour plus d’informations, consultez « [À propos des vérifications d’état](/github/collaborating-with-issues-and-pull-requests/about-status-checks) ».

### Traiter les commentaires de révision

Les réviseurs doivent laisser des questions, des commentaires et des suggestions. Les réviseurs peuvent commenter l’ensemble de la demande de tirage ou ajouter des commentaires à des lignes spécifiques. Les réviseurs et vous-même pouvez insérer des images ou des suggestions de code pour clarifier les commentaires. Pour plus d’informations, consultez « [Révision des modifications dans les demandes de tirage](/github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests) ».

Vous pouvez continuer à commiter et pousser (push) des modifications en réponse aux révisions. Votre demande de tirage se met automatiquement à jour.

### Fusionner votre demande de tirage

Une fois votre demande de tirage approuvée, fusionnez-la. Votre branche est alors automatiquement fusionnée de sorte que vos modifications apparaissent dans la branche par défaut. {% data variables.product.prodname_dotcom %} conserve l’historique des commentaires et des commits dans la demande de tirage pour aider les futurs collaborateurs à comprendre vos modifications. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) ».

{% data variables.product.prodname_dotcom %} vous indique si votre demande de tirage comporte des conflits à résoudre avant la fusion. Pour plus d’informations, consultez « [Traitement des conflits de fusion](/github/collaborating-with-issues-and-pull-requests/addressing-merge-conflicts) ».

Des paramètres de protection des branches peuvent bloquer une fusion si votre demande de tirage ne satisfait pas à certaines exigences. Par exemple, vous avez besoin d’un certain nombre de révisions d’approbation ou de la révision d’approbation d’une équipe spécifique. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches) ».

### Supprimer votre branche

Après avoir fusionné votre demande de tirage, supprimez votre branche. Cette suppression indique que le travail sur la branche est terminé et vous empêche, ainsi que d’autres personnes, d’utiliser accidentellement d’anciennes branches. Pour plus d’informations, consultez « [Suppression et restauration de branches dans une demande de tirage](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request) ».

Ne craignez pas de perdre des informations. L’historique de vos demandes de tirage et de vos commits n’est pas supprimé. Vous pouvez toujours restaurer votre branche supprimée ou revenir sur votre demande de tirage, si nécessaire.
