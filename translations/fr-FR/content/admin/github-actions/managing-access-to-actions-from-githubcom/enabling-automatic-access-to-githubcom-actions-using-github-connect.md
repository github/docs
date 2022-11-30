---
title: Activer l’accès automatique aux actions GitHub.com à l’aide de GitHub Connect
intro: 'Pour permettre à {% data variables.product.prodname_actions %} dans votre entreprise d’utiliser les actions de {% data variables.product.prodname_dotcom_the_website %}, vous pouvez connecter votre instance d’entreprise à {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can enable access to all {% data variables.product.prodname_dotcom_the_website %} actions.'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
  - /admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
shortTitle: Use GitHub Connect for actions
ms.openlocfilehash: e666929288a63dc35ffe98a734918e3495579939
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107260'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %}

Par défaut, les workflows {% data variables.product.prodname_actions %} sur {% data variables.product.product_name %} ne peuvent pas utiliser directement les actions de {% data variables.product.prodname_dotcom_the_website %} ou [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions). Pour mettre toutes les actions de {% data variables.product.prodname_dotcom_the_website %} à la disposition de votre instance d’entreprise, vous pouvez utiliser {% data variables.product.prodname_github_connect %} pour intégrer {% data variables.product.product_name %} à {% data variables.product.prodname_ghe_cloud %}. 

{% data reusables.actions.self-hosted-runner-networking-to-dotcom %}

Sinon, si vous souhaitez un contrôle plus strict sur les actions qui sont autorisées dans votre entreprise, vous pouvez télécharger et synchroniser manuellement les actions sur votre instance d’entreprise à l’aide de l’outil `actions-sync`. Pour plus d’informations, consultez « [Synchronisation manuelle des actions de {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom) ».

## À propos de la résolution des actions à l’aide de {% data variables.product.prodname_github_connect %}

{% data reusables.actions.github-connect-resolution %}

Si un utilisateur a déjà créé une organisation et un dépôt dans votre entreprise de même nom que ceux d’une organisation et d’un dépôt sur {% data variables.product.prodname_dotcom_the_website %}, le dépôt de votre entreprise sera utilisé à la place de celui de {% data variables.product.prodname_dotcom_the_website %}. {% ifversion ghae %}Un utilisateur malveillant pourrait tirer parti de ce comportement pour exécuter du code dans le cadre d’un workflow.{% else %}Pour plus d’informations, consultez « [Mise hors service automatique des espaces de noms pour les actions accessibles sur {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom) ».
{% endif %}

## Activation de l’accès automatique à toutes les actions {% data variables.product.prodname_dotcom_the_website %}

Avant d’activer l’accès à toutes les actions de {% data variables.product.prodname_dotcom_the_website %} pour votre entreprise, vous devez{% ifversion ghes %} :
- Configurer {% data variables.location.product_location %} pour utiliser {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».
- Activer{% else %} activer{% endif %} {% data variables.product.prodname_github_connect %}. Pour plus d’informations, consultez « [Gestion de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect) ».

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. Sous « Les utilisateurs peuvent utiliser les actions de GitHub.com dans les exécutions de workflows », utilisez le menu déroulant et sélectionnez **Activé**.
  ![Menu déroulant pour les actions de GitHub.com dans les exécutions de workflows](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down-ae.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}

## Mise hors service automatique des espaces de noms pour les actions accessibles sur {% data variables.product.prodname_dotcom_the_website %}

Quand vous activez {% data variables.product.prodname_github_connect %}, les utilisateurs ne voient aucun changement de comportement pour les workflows existants, car {% data variables.product.prodname_actions %} recherche chaque action dans {% data variables.location.product_location %} avant de s’en remettre à {% data variables.product.prodname_dotcom_the_website%}. Ainsi, les versions personnalisées des actions que votre entreprise a créées sont utilisées en priorité par rapport à leurs équivalents sur {% data variables.product.prodname_dotcom_the_website%}.

La mise hors service automatique des espaces de noms pour les actions accessibles sur {% data variables.product.prodname_dotcom_the_website %} empêche toute attaque de l’intercepteur de la part d’un utilisateur malveillant ayant accès à {% data variables.location.product_location %}. Quand une action sur {% data variables.product.prodname_dotcom_the_website %} est utilisée pour la première fois, cet espace de noms est mis hors service dans {% data variables.location.product_location %}. Cela empêche un utilisateur de créer une organisation et un dépôt dans votre entreprise de même nom que ceux de l’organisation et du dépôt sur {% data variables.product.prodname_dotcom_the_website %}. Cela garantit que lorsqu’un workflow s’exécute, l’action prévue est toujours exécutée.

Après avoir utilisé une action de {% data variables.product.prodname_dotcom_the_website %}, si vous souhaitez créer une action dans {% data variables.location.product_location %} avec le même nom, vous devez d’abord rendre l’espace de noms de cette organisation et de ce dépôt disponible.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Dans la barre latérale de gauche, sous **Administrateur de site**, cliquez sur **Espaces de noms mis hors service**.
3. Repérez l’espace de noms que vous souhaitez utiliser dans {% data variables.location.product_location %}, puis cliquez sur **Annuler la mise hors service**.
   ![Annuler la mise hors service d’un espace de noms](/assets/images/enterprise/site-admin-settings/unretire-namespace.png)
4. Accédez à l’organisation appropriée et créez un dépôt.

   {% tip %}

   **Conseil :** Quand vous annulez la mise hors service d’un espace de noms, créez toujours le nouveau dépôt avec ce nom le plus vite possible. Si un workflow appelle l’action associée à l’action de {% data variables.product.prodname_dotcom_the_website %} avant de créer le dépôt local, l’espace de noms sera de nouveau mis hors service. Pour les actions utilisées dans des workflows fréquemment exécutés, il peut arriver qu’un espace de noms se retrouve à nouveau hors service avant même que le dépôt local ait pu être créé. Si cela vous arrive, vous pouvez désactiver temporairement les workflows en question, le temps de créer le nouveau dépôt.

   {% endtip %}
