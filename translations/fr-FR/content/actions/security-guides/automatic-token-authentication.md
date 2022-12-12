---
title: Authentification par jeton automatique
intro: '{% data variables.product.prodname_dotcom %} fournit un jeton qui vous permet de vous authentifier au nom de {% data variables.product.prodname_actions %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107036'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos du secret `GITHUB_TOKEN`

Au début de chaque exécution de workflow, {% data variables.product.prodname_dotcom %} crée automatiquement un secret `GITHUB_TOKEN` unique à utiliser dans votre workflow. Vous pouvez utiliser le secret `GITHUB_TOKEN` pour vous authentifier dans une exécution de workflow.

Lorsque vous activez {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installe une {% data variables.product.prodname_github_app %} sur votre dépôt. Le secret `GITHUB_TOKEN` est un jeton d’accès d’installation {% data variables.product.prodname_github_app %}. Vous pouvez utiliser le jeton d’accès d’installation pour vous authentifier au nom de {% data variables.product.prodname_github_app %} installée sur votre dépôt. Les autorisations du jeton sont limitées au dépôt qui contient votre workflow. Pour plus d’informations, consultez « [Autorisations pour le `GITHUB_TOKEN`](#permissions-for-the-github_token) ».

Avant que chaque travail ne commence, {% data variables.product.prodname_dotcom %} récupère un jeton d’accès d’installation pour le travail. {% data reusables.actions.github-token-expiration %}

Le jeton est également disponible dans le contexte `github.token`. Pour plus d’informations, consultez « [Contextes](/actions/learn-github-actions/contexts#github-context) ».

## Utilisation de `GITHUB_TOKEN` dans un workflow

Vous pouvez utiliser le `GITHUB_TOKEN` avec la syntaxe standard pour référencer les secrets : {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Des exemples d’utilisation du `GITHUB_TOKEN` incluent la transmission du jeton en tant qu’entrée pour une action ou son utilisation pour créer une demande d’API {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} authentifiée.

{% note %}

**Important :** Une action peut accéder au `GITHUB_TOKEN` via le contexte `github.token` même si le workflow ne passe pas explicitement le `GITHUB_TOKEN` à l’action. En tant que bonne pratique de sécurité, vous devez toujours vous assurer que les actions ont uniquement l’accès minimal requis en limitant les autorisations accordées au `GITHUB_TOKEN`. Pour plus d’informations, consultez « [Autorisations pour le `GITHUB_TOKEN`](#permissions-for-the-github_token) ».

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### Exemple 1 : passage du `GITHUB_TOKEN` en tant qu’entrée

{% data reusables.actions.github_token-input-example %}

### Exemple 2 : appel de l’API REST

Vous pouvez utiliser le `GITHUB_TOKEN` pour effectuer des appels d’API authentifiés. Cet exemple de workflow crée un problème à l’aide de l’API REST {% data variables.product.prodname_dotcom %} :

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## Autorisations pour le `GITHUB_TOKEN`

Pour plus d’informations sur les points de terminaison d’API auxquels {% data variables.product.prodname_github_apps %} peut accéder avec chaque autorisation, consultez « [Autorisations {% data variables.product.prodname_github_app %}](/rest/reference/permissions-required-for-github-apps) ».

Le tableau suivant montre les autorisations octroyées à `GITHUB_TOKEN` par défaut. Les personnes disposant d’autorisations d’administrateur sur {% ifversion not ghes %}une entreprise, une organisation ou un dépôt,{% else %}une organisation ou un dépôt{% endif %} peuvent définir les autorisations par défaut comme étant permissives ou restreintes. Pour plus d’informations sur la définition des autorisations par défaut pour le `GITHUB_TOKEN` pour votre entreprise, organisation ou dépôt, consultez « [Application de stratégies pour {% data variables.product.prodname_actions %} dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise) », « [Désactivation ou limitation de {% data variables.product.prodname_actions %} pour votre organisation](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization) » ou « [Gestion des paramètres de {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository) ».

| Étendue         | Accès par défaut<br>(permissive) | Accès par défaut<br>(restreinte) | Accès maximal<br>par dépôts dupliqués |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | lecture/écriture  | aucun | lire |
| Vérifications        | lecture/écriture  | aucun | lire |
| contenu      | lecture/écriture  | lire | lire |
| deployments   | lecture/écriture  | aucun | lire |{% ifversion fpt or ghec %}
| Jeton d‘identité      | aucun        | aucun | lire |{% endif %}
| problèmes        | lecture/écriture  | aucun | lire |
| metadata      | lire        | lire | lire |
| packages      | lecture/écriture  | aucun | lire |
| pages         | lecture/écriture  | aucun | lire |
| Demandes de tirage | lecture/écriture  | aucun | lire |
| repository-projects | lecture/écriture | aucun | lire |
| security-events     | lecture/écriture | aucun | lire |
| statuses      | lecture/écriture  | aucun | lire |

{% data reusables.actions.workflow-runs-dependabot-note %}

### Modification des autorisations pour `GITHUB_TOKEN`

Vous pouvez modifier les autorisations pour `GITHUB_TOKEN` dans des fichiers de workflow individuels. Si les autorisations par défaut pour le `GITHUB_TOKEN` sont restrictives, vous devrez peut-être élever les autorisations pour permettre l’exécution de certaines actions et commandes. Si les autorisations par défaut sont permissives, vous pouvez modifier le fichier de workflow pour supprimer des autorisations du `GITHUB_TOKEN`. En guise de bonne pratique de sécurité, vous devez accorder à `GITHUB_TOKEN` le moins d’accès requis.

Vous pouvez voir les autorisations dont disposait `GITHUB_TOKEN` pour un travail spécifique dans la section « Configurer un travail » du journal d’exécution de workflow. Pour plus d’informations, consultez « [Utilisation des journaux d’exécution de workflow](/actions/managing-workflow-runs/using-workflow-run-logs) ».

Vous pouvez utiliser la clé `permissions` dans votre fichier de workflow pour modifier les autorisations du `GITHUB_TOKEN` pour un workflow entier ou pour des travaux individuels. Cela vous permet de configurer les autorisations minimales requises pour un workflow ou un travail. Lorsque la clé `permissions` est utilisée, toutes les autorisations non spécifiées sont définies sur Aucun accès, à l’exception de l’étendue `metadata`, qui obtient toujours l’accès en lecture.

{% data reusables.actions.forked-write-permission %}

Les deux exemples de workflows plus haut dans cet article montrent la clé `permissions` utilisée au niveau du workflow et au niveau du travail. Dans l’[exemple 1](#example-1-passing-the-github_token-as-an-input), les deux autorisations sont spécifiées pour l’ensemble du workflow. Dans l’[exemple 2](#example-2-calling-the-rest-api), l’accès en écriture est accordé pour une étendue pour un seul travail.

Pour plus d’informations sur la clé `permissions`, consultez « [Syntaxe de workflow pour {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions) ».

#### Calcul des autorisations pour un travail de workflow

Les autorisations pour le `GITHUB_TOKEN` sont initialement définies sur le paramètre par défaut pour l’entreprise, l’organisation ou le dépôt. Si la valeur par défaut est définie sur les autorisations restreintes à l’un de ces niveaux, cela s’applique aux dépôts appropriés. Par exemple, si vous choisissez la valeur par défaut restreinte au niveau de l’organisation, tous les dépôts de cette organisation utiliseront les autorisations restreintes comme valeur par défaut. Les autorisations sont ensuite ajustées en fonction de n’importe quelle configuration dans le fichier de workflow, d’abord au niveau du workflow, puis au niveau du travail. Enfin, si le workflow a été déclenché par une demande de tirage à partir d’un dépôt dupliqué et que le paramètre **Envoyer des jetons d’écriture aux workflows à partir des demandes de tirage** n’est pas sélectionné, les autorisations sont ajustées pour remplacer les autorisations d’écriture par lecture seule.

### Octroi d’autorisations supplémentaires

Si vous avez besoin d’un jeton qui nécessite des autorisations qui ne sont pas disponibles dans le `GITHUB_TOKEN`, vous pouvez créer un {% data variables.product.pat_generic %} et le définir en tant que secret dans votre dépôt :

1. Utilisez ou créez un jeton avec les autorisations appropriées pour ce dépôt. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».
1. Ajoutez le jeton en tant que secret dans le dépôt de votre workflow et faites-y référence à l’aide de la syntaxe {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %}. Pour plus d’informations, consultez « [Création et utilisation de secrets chiffrés](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets) ».

### Pour aller plus loin

- « [Ressources dans l’API REST](/rest/overview/resources-in-the-rest-api#rate-limiting) »
