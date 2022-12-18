---
title: À propos des modèles de problème et de demande de tirage
intro: 'À l’aide des modèles de problèmes et de demandes de tirage, vous pouvez personnaliser et normaliser les informations que les contributeurs doivent inclure quand ils ouvrent des problèmes et des demandes de tirage dans votre dépôt.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: About templates
ms.openlocfilehash: b95b31ae4171a54d9261fab6cbe93c43361296ab
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105390'
---
Une fois que vous avez créé les modèles de problème et de demande de tirage (pull request) dans votre dépôt, les contributeurs peuvent utiliser ces modèles pour ouvrir des problèmes ou décrire les changements proposés dans leurs demandes de tirage en fonction des recommandations relatives aux contributions du dépôt. Pour plus d’informations sur l’ajout de recommandations relatives aux contributions à un dépôt, consultez « [Définition de recommandations pour les contributeurs de dépôt](/articles/setting-guidelines-for-repository-contributors) ».

{% ifversion fpt or ghes or ghec %}

Vous pouvez créer des modèles de problème et de demande de tirage par défaut pour votre organisation ou votre compte personnel. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% endif %}

## Modèles de problème

Quand vous créez des modèles de problème pour votre dépôt en utilisant le générateur de modèles de problème{% ifversion fpt or ghec %} ou les formulaires de problème{% endif %}, les contributeurs peuvent sélectionner le modèle approprié au moment où ils ouvrent de nouveaux problèmes dans le dépôt.

![Page de nouveau problème montrant les choix de modèle de problème](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Les modèles de problème sont utiles quand vous souhaitez fournir des conseils d’aide sur l’ouverture de problèmes tout en permettant aux contributeurs de spécifier le contenu de leurs problèmes. {% ifversion fpt or ghec %} Si vous souhaitez que les contributeurs fournissent des informations spécifiques et structurées quand ils ouvrent des problèmes, les formulaires de problème vous permettent de recevoir avec certitude les informations souhaitées.{% endif %}

À l’aide du générateur de modèles, vous pouvez spécifier un titre et une description pour chaque modèle, ajouter le contenu du modèle, et commiter le modèle dans la branche par défaut ou ouvrir une demande de tirage dans le dépôt. Le générateur de modèles ajoute automatiquement les balises d’informations préliminaires YAML nécessaires pour que le modèle s’affiche dans la page de nouveau problème. Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/articles/configuring-issue-templates-for-your-repository) ».

{% ifversion fpt or ghec %} Avec les formulaires de problème, vous pouvez créer des modèles comportant des champs de formulaire web à l’aide du schéma de formulaire {% data variables.product.prodname_dotcom %}. Quand un contributeur ouvre un problème en utilisant un formulaire de problème, les entrées de formulaire sont converties en un commentaire de problème standard au format Markdown. Vous pouvez spécifier différents types d’entrée et définir les entrées nécessaires pour aider les contributeurs à ouvrir les problèmes actionnables dans votre dépôt. Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms) » et « [Syntaxe des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) ».
{% endif %}

{% data reusables.repositories.issue-template-config %} Pour plus d’informations, consultez « [Configuration des modèles de problème pour votre dépôt](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser) ».

Les modèles de problème sont stockés dans la branche par défaut du dépôt, dans un répertoire `.github/ISSUE_TEMPLATE` masqué. Si vous créez un modèle dans une autre branche, il ne pourra pas être utilisé par les collaborateurs. Les noms de fichiers des modèles de problème ne respectent pas la casse. Ils nécessitent l’extension *.md*.{% ifversion fpt or ghec %} Les modèles de problème créés avec des formulaires de problème nécessitent l’extension *.yml*.{% endif %} {% data reusables.repositories.valid-community-issues %}

Vous pouvez créer manuellement un seul modèle de problème en Markdown à l’aide du workflow hérité de modèle de problème. Les contributeurs du projet voient automatiquement le contenu du modèle dans le corps du problème. Toutefois, nous vous recommandons d’utiliser la mise à niveau du générateur de modèles de problème multiples {% ifversion fpt or ghec %} ou les formulaires de problème{% endif %} pour créer des modèles de problème. Pour plus d’informations sur le workflow hérité, consultez « [Création manuelle d’un seul modèle de problème pour votre dépôt](/articles/manually-creating-a-single-issue-template-for-your-repository) ».

{% data reusables.repositories.security-guidelines %}

## Modèles de demande de tirage

Quand vous ajoutez un modèle de demande de tirage (pull request) à votre dépôt, les contributeurs du projet voient automatiquement le contenu de ce modèle dans le corps de la demande de tirage.

![Exemple de modèle de demande de tirage](/assets/images/help/pull_requests/pr-template-sample.png)

Vous devez créer des modèles sur la branche par défaut du dépôt. Les modèles créés dans d’autres branches ne peuvent pas être utilisés par les collaborateurs. Vous pouvez stocker votre modèle de demande de tirage dans le répertoire racine visible du dépôt, le dossier `docs` ou le répertoire `.github` masqué. Les noms de fichiers de modèle de demande de tirage ne respectent pas la casse. Ils peuvent avoir l’extension *.md* ou *.txt*.

Pour plus d’informations, consultez « [Création d’un modèle de demande de tirage pour votre dépôt](/articles/creating-a-pull-request-template-for-your-repository) ».
