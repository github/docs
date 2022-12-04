---
title: Synchronisation manuelle des actions à partir de GitHub.com
intro: 'Pour les utilisateurs qui ont besoin d’accéder aux actions de {% data variables.product.prodname_dotcom_the_website %}, vous pouvez synchroniser des actions spécifiques avec votre entreprise.'
redirect_from:
  - /enterprise/admin/github-actions/manually-syncing-actions-from-githubcom
  - /admin/github-actions/manually-syncing-actions-from-githubcom
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
shortTitle: Manually sync actions
ms.openlocfilehash: f4fe3aaecfa805b2a5966c0b2c41399529c2040e
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107268'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.actions.enterprise-no-internet-actions %}

{% ifversion ghes or ghae %}

L’approche recommandée d’activation de l’accès aux actions à partir de {% data variables.product.prodname_dotcom_the_website %} consiste à activer l’accès automatique à toutes les actions. Pour cela, utilisez {% data variables.product.prodname_github_connect %} pour intégrer {% data variables.product.product_name %} à {% data variables.product.prodname_ghe_cloud %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect) ».

Toutefois, si vous souhaitez un contrôle plus strict sur les actions autorisées dans votre entreprise, vous{% else %}Vous{% endif %} pouvez suivre ce guide pour utiliser l’outil open source [`actions-sync`](https://github.com/actions/actions-sync) de {% data variables.product.company_short %} pour synchroniser des référentiels d’actions individuels de {% data variables.product.prodname_dotcom_the_website %} avec votre entreprise.

## À propos de l’outil `actions-sync`

L’outil `actions-sync` doit être exécuté sur une machine qui peut accéder à l’API {% data variables.product.prodname_dotcom_the_website %} et à l’API de votre instance {% data variables.product.product_name %}. La machine n’a pas besoin d’être connectée aux deux en même temps.

Si votre machine a accès aux deux systèmes en même temps, vous pouvez effectuer la synchronisation avec une seule commande `actions-sync sync`. Si vous ne pouvez accéder qu’à un seul système à la fois, vous pouvez utiliser les commandes `actions-sync pull` et `push`.

L’outil `actions-sync` ne peut télécharger que des actions sur {% data variables.product.prodname_dotcom_the_website %} stockées dans des référentiels publics.

{% note %}

**Remarque :** L’outil `actions-sync` est destiné à être utilisé dans les systèmes où {% data variables.product.prodname_github_connect %} n’est pas activé. Si vous exécutez l’outil sur un système avec {% data variables.product.prodname_github_connect %} activé, vous pourriez voir l’erreur `The repository <repo_name> has been retired and cannot be reused`. Cela indique qu’un workflow a utilisé cette action directement sur {% data variables.product.prodname_dotcom_the_website %} et que l’espace de noms est supprimé sur {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Mise hors service automatique des espaces de noms pour les actions accessibles sur {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom) ». 

{% endnote %}

## Prérequis

* Avant d’utiliser l’outil `actions-sync`, vous devez vous assurer que toutes les organisations de destination existent déjà dans votre entreprise. L’exemple suivant montre comment synchroniser des actions avec une organisation nommée `synced-actions`. Pour plus d’informations, consultez « [Création d’une organisation à partir de zéro](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch) ».
* Vous devez créer un {% data variables.product.pat_generic %} dans votre entreprise, qui peut créer et écrire sur les dépôts des organisations de destination. Pour plus d’informations, consultez « [Création d’un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) ».{% ifversion ghes %}
* Si vous souhaitez synchroniser les actions groupées dans l’organisation `actions` sur {% data variables.location.product_location %}, vous devez être propriétaire de l’organisation `actions`.

  {% note %}
  
  **Remarque :** Par défaut, même les administrateurs de site ne sont pas propriétaires de l’organisation groupée `actions`.
  
  {% endnote %}

  Les administrateurs de site peuvent utiliser la commande `ghe-org-admin-promote` dans l’interpréteur de commandes d’administration pour promouvoir un utilisateur comme propriétaire de l’organisation groupée `actions`. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) » et « [`ghe-org-admin-promote`](/admin/configuration/command-line-utilities#ghe-org-admin-promote) ».

  ```shell
  ghe-org-admin-promote -u USERNAME -o actions
  ```{% endif %}

## Example: Using the `actions-sync` tool

This example demonstrates using the `actions-sync` tool to sync an individual action from {% data variables.product.prodname_dotcom_the_website %} to an enterprise instance.

{% note %}

**Note:** This example uses the `actions-sync sync` command, which requires concurrent access to both the {% data variables.product.prodname_dotcom_the_website %} API and your enterprise instance's API from your machine. If you can only access one system at a time, you can use the `actions-sync pull` and `push` commands. For more information, see the [`actions-sync` README](https://github.com/actions/actions-sync#not-connected-instances).

{% endnote %}

1. Download and extract the latest [`actions-sync` release](https://github.com/actions/actions-sync/releases) for your machine's operating system.
1. Create a directory to store cache files for the tool.
1. Run the `actions-sync sync` command:

   ```shell
   ./actions-sync sync \
     --cache-dir "cache" \
     --destination-token "aabbccddeeffgg" \
     --destination-url "https://my-ghes-instance" \
     --repo-name "actions/stale:synced-actions/actions-stale"
   ```

   La commande ci-dessus utilise les arguments suivants :

   * `--cache-dir` : répertoire de cache sur la machine exécutant la commande.
   * `--destination-token` : {% data variables.product.pat_generic %} pour l’instance d’entreprise de destination.
   * `--destination-url` : URL de l’instance d’entreprise de destination.
   * `--repo-name` : référentiel d’actions à synchroniser. Prend le format `owner/repository:destination_owner/destination_repository`.
     
     * L’exemple ci-dessus synchronise le référentiel [`actions/stale`](https://github.com/actions/stale) vers le référentiel `synced-actions/actions-stale` sur l’instance d’entreprise de destination. Vous devez créer l’organisation nommée `synced-actions` dans votre entreprise avant d’exécuter la commande ci-dessus.
     * Si vous omettez `:destination_owner/destination_repository`, l’outil utilise le nom du propriétaire et du référentiel d’origine pour votre entreprise. Avant d’exécuter la commande, vous devez créer une organisation dans votre entreprise qui correspond au nom du propriétaire de l’action. Envisagez d’utiliser une organisation centrale pour stocker les actions synchronisées dans votre entreprise, car cela signifie que vous n’aurez pas besoin de créer plusieurs organisations si vous synchronisez des actions de différents propriétaires.
     * Vous pouvez synchroniser plusieurs actions en remplaçant le paramètre `--repo-name` par `--repo-name-list` ou `--repo-name-list-file`. Pour plus d’informations, consultez le [README de `actions-sync`](https://github.com/actions/actions-sync#actions-sync).
1. Une fois le référentiel d’actions créé dans votre entreprise, les personnes de votre entreprise peuvent utiliser le référentiel de destination pour référencer l’action dans leurs workflows. Pour l’exemple d’action présenté ci-dessus :
   
   ```yaml
   uses: synced-actions/actions-stale@v1
   ```

   Pour plus d’informations, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsuses) ».
