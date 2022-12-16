---
title: Protection des poussées (push) avec l’analyse des secrets
intro: 'Vous pouvez utiliser l’{% data variables.product.prodname_secret_scanning %} pour empêcher les secrets pris en charge d’être poussés dans votre {% ifversion secret-scanning-enterprise-level %}entreprise,{% endif %} organisation{% ifversion secret-scanning-enterprise-level %},{% endif %} ou dépôt en activant la protection des poussées.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184495'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## À propos de la protection des poussées pour les secrets

Jusqu’à présent, l’{% data variables.product.prodname_secret_scanning_GHAS %} vérifie la présence de secrets _après_ une poussée et avertit les utilisateurs des secrets exposés. {% data reusables.secret-scanning.push-protection-overview %}

Si un contributeur contourne un bloc de protection de poussée pour un secret, {% data variables.product.prodname_dotcom %} :
- crée une alerte sous l’onglet « Sécurité » du référentiel dans l’état décrit dans le tableau ci-dessous.
- ajoute l’événement de contournement au journal d’audit.{% ifversion secret-scanning-push-protection-email %}
- envoie une alerte par e-mail aux propriétaires de l’organisation, aux responsables de la sécurité et aux administrateurs de référentiels, qui regardent le référentiel, avec un lien vers le secret associé et la raison pour laquelle il a été autorisé.{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

Pour plus d’informations sur les secrets et fournisseurs de services pris en charge pour la protection par émission de données, consultez « [Modèles {% data variables.product.prodname_secret_scanning_caps %}](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection) ».

## Activation de l’{% data variables.product.prodname_secret_scanning %} en tant que protection des poussées

Pour pouvoir utiliser l’{% data variables.product.prodname_secret_scanning %} comme protection des poussées, l’{% ifversion secret-scanning-enterprise-level %}entreprise,{% endif %}organisation{% ifversion secret-scanning-enterprise-level %},{% endif %} ou le dépôt doit avoir à la fois {% data variables.product.prodname_GH_advanced_security %} et l’{% data variables.product.prodname_secret_scanning %} activés. Pour plus d’informations, consultez {% ifversion secret-scanning-enterprise-level %}« [Gestion des paramètres de sécurité et d’analyse pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) »,{% endif %} « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) », « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) », et « [À propos d’{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) ».

Les propriétaires d’organisations, les gestionnaires de sécurité et les administrateurs de dépôt peuvent activer la protection des poussées pour l’{% data variables.product.prodname_secret_scanning %} via l’interface utilisateur et l’API. Pour plus d’informations, consultez « [Dépôts](/rest/reference/repos#update-a-repository) » et développez la section « Propriétés de l’objet `security_and_analysis` » dans la documentation de l’API REST.

{% ifversion secret-scanning-enterprise-level %}
### Activation de l’{% data variables.product.prodname_secret_scanning %} comme protection des poussées pour votre entreprise
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Dans la barre latérale gauche, cliquez sur **Sécurité et analyse du code**. {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### Activation de l’{% data variables.product.prodname_secret_scanning %} en tant que protection des poussées pour une organisation

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### Activation de l’{% data variables.product.prodname_secret_scanning %} en tant que protection des poussées pour un dépôt

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## Utilisation de l’analyse des secrets comme protection par émission de données à partir de la ligne de commande

{% data reusables.secret-scanning.push-protection-command-line-choice %}

Jusqu’à cinq secrets détectés s’affichent à la fois sur la ligne de commande. Si un secret particulier a déjà été détecté dans le dépôt et qu’une alerte existe déjà, {% data variables.product.prodname_dotcom %} ne bloque pas ce secret. 

{% ifversion push-protection-custom-link-orgs %} 

Les administrateurs d’organisation peuvent fournir un lien personnalisé qui s’affiche lorsqu’un envoi (push) est bloqué. Ce lien personnalisé peut contenir des ressources et des conseils spécifiques à l’organisation, tels que des instructions sur l’utilisation d’un coffre de secrets recommandé ou qui contacter pour des questions relatives au secret bloqué.

![Capture d’écran montrant qu’une poussée est bloquée quand un utilisateur tente de pousser un secret vers un dépôt](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![Capture d’écran montrant qu’une poussée est bloquée quand un utilisateur tente de pousser un secret vers un dépôt](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} Pour plus d’informations sur la correction des secrets bloqués, consultez « [Envoi (push) d’une branche bloquée par la protection des envois](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line) ».

Si vous confirmez qu’un secret est réel et que vous avez l’intention de le corriger ultérieurement, vous devez veiller à effectuer la correction dès que possible. Par exemple, vous pouvez révoquer le secret et le supprimer de l’historique des commits du dépôt. Les secrets réels exposés doivent être révoqués pour éviter tout accès non autorisé. Vous pouvez commencer par faire pivoter le secret avant de le révoquer. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) ».

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

**Conseil :** vous pouvez utiliser {% data variables.product.prodname_secret_scanning %} comme protection push à partir de l’interface utilisateur web, ainsi que la ligne de commande, dans {% data variables.product.product_name %} version 3.6 ou ultérieure.

{% endtip %}

{% endif %}

### Autorisation de la poussée d’un secret bloqué

Si {% data variables.product.prodname_dotcom %} bloque un secret alors que selon vous sa poussée ne pose pas de problème, vous pouvez autoriser le secret et spécifier la raison pour laquelle il doit être autorisé.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. Visitez l’URL qu’a retournée {% data variables.product.prodname_dotcom %} quand votre poussée a été bloquée.
  ![Capture d’écran montrant le formulaire avec les options de déblocage de la poussée d’un secret](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. Cliquez sur **M’autoriser à pousser ce secret**.
2. Retentez la poussée sur la ligne de commande dans un délai de trois heures. Si vous n’effectuez pas la poussée dans les trois heures, vous devrez répéter ce processus.

{% ifversion secret-scanning-push-protection-web-ui %}
## Utilisation de l’analyse des secrets comme protection des poussées à partir de l’interface utilisateur web

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} n’affiche qu’un secret détecté à la fois dans l’interface utilisateur web. Si un secret particulier a déjà été détecté dans le dépôt et qu’une alerte existe déjà, {% data variables.product.prodname_dotcom %} ne bloque pas ce secret.

{% ifversion push-protection-custom-link-orgs %} 

Les administrateurs d’organisation peuvent fournir un lien personnalisé qui s’affiche lorsqu’un envoi (push) est bloqué. Ce lien personnalisé peut contenir des ressources et des conseils spécifiques à votre organisation. Par exemple, le lien personnalisé peut pointer vers un fichier README avec des informations sur le coffre de secrets de l’organisation, les équipes et les individus auxquels remonter les questions, ou la stratégie approuvée de l’organisation pour travailler avec des secrets et réécrire l’historique des commits.
{% endif %}

Vous pouvez supprimer le secret du fichier à l’aide de l’interface utilisateur web. Une fois que vous avez supprimé le secret, la bannière en haut de la page change et vous indique que vous pouvez maintenant commiter vos modifications.

  ![Capture d’écran montrant le commit autorisé dans l’interface utilisateur web après la correction du secret](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### Contournement de la protection des poussées pour un secret

{% data reusables.secret-scanning.push-protection-remove-secret %} Pour plus d’informations sur la correction des secrets bloqués, consultez « [Envoi (push) d’une branche bloquée par la protection des envois](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui) ». 

Si vous confirmez qu’un secret est réel et que vous avez l’intention de le corriger ultérieurement, vous devez veiller à effectuer la correction dès que possible. Pour plus d’informations, consultez « [Suppression de données sensibles d’un dépôt](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) ».

Si {% data variables.product.prodname_dotcom %} bloque un secret alors que selon vous sa poussée ne pose pas de problème, vous pouvez autoriser le secret et spécifier la raison pour laquelle il doit être autorisé.

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

Si vous confirmez qu’un secret est réel et que vous avez l’intention de le corriger ultérieurement, vous devez veiller à effectuer la correction dès que possible.

1. Dans la bannière qui s’est affichée en haut de la page quand {% data variables.product.prodname_dotcom %} a bloqué votre commit, cliquez sur **Ignorer la protection**.
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![Capture d’écran montrant le formulaire avec les options de déblocage de la poussée d’un secret](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. Cliquez sur **Autoriser le secret**.


{% endif %}
