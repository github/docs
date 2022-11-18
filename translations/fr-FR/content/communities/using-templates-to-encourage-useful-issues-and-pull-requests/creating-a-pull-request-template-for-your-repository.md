---
title: Création d’un modèle de demande de tirage pour votre dépôt
intro: 'Quand vous ajoutez un modèle de demande de tirage (pull request) à votre dépôt, les contributeurs du projet voient automatiquement le contenu de ce modèle dans le corps de la demande de tirage.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: 2a85c88944f1d46209429846bba1e7a3c930968e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086514'
---
Pour plus d’informations, consultez « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) ».

Vous pouvez créer un sous-répertoire *PULL_REQUEST_TEMPLATE/* dans l’un des dossiers pris en charge pour y stocker plusieurs modèles de demande de tirage (pull request), puis utiliser le paramètre de requête `template` pour spécifier le modèle qui va remplir le corps de la demande de tirage. Pour plus d’informations, consultez « [Utilisation de paramètres de requête pour créer une demande de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request) ».

{% ifversion fpt or ghes or ghec %}

Vous pouvez créer des modèles de demande de tirage par défaut pour votre organisation{% ifversion fpt or ghes or ghec %} ou votre compte personnel{% endif %}. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% endif %}

## Ajout d’un modèle de demande de tirage

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier :
    -  Pour rendre votre modèle de demande de tirage visible dans le répertoire racine du dépôt, nommez le modèle de demande de tirage `pull_request_template.md`.
  ![Nom du nouveau modèle de demande de tirage dans le répertoire racine](/assets/images/help/repository/pr-template-file-name.png)
    - Pour rendre votre modèle de demande de tirage visible dans le répertoire `docs` du dépôt, nommez le modèle de demande de tirage `docs/pull_request_template.md`.
  ![Nouveau modèle de demande de tirage dans le répertoire docs](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Pour stocker votre fichier dans un répertoire masqué, nommez le modèle de demande de tirage `.github/pull_request_template.md`.
  ![Nouveau modèle de demande de tirage dans un répertoire masqué](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Pour créer plusieurs modèles de demande de tirage et utiliser le paramètre de requête `template` afin de spécifier un modèle permettant de remplir le corps de la demande de tirage, tapez *.github/PULL_REQUEST_TEMPLATE/* , puis le nom de votre modèle de demande de tirage. Par exemple : `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Vous pouvez également stocker plusieurs modèles de demande de tirage (pull request) dans un sous-répertoire `PULL_REQUEST_TEMPLATE` au sein du répertoire racine ou du répertoire `docs/`. Pour plus d’informations, consultez « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters) ».
  ![Nouveau modèle de demande de tirage multiple dans un répertoire masqué](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. Dans le corps du nouveau fichier, ajoutez votre modèle de demande de tirage. Vous pouvez inclure ce qui suit :
    - [Référence à un problème connexe](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) dans votre dépôt.
    - Description des changements proposés dans la demande de tirage.
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) de la personne ou de l’équipe responsable de la revue les changements proposés.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Les modèles sont accessibles aux collaborateurs quand ils sont fusionnés avec la branche par défaut du dépôt.
{% data reusables.files.propose_new_file %}

## Pour aller plus loin

- « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) »
- « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters) »
- « [Création d’une demande de tirage](/articles/creating-a-pull-request) »
