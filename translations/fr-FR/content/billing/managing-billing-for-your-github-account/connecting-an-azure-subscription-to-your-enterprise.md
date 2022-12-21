---
title: Connexion d’un abonnement Azure à votre entreprise
intro: 'Vous pouvez utiliser votre Accord Entreprise Microsoft pour activer et payer l’utilisation de {% data variables.product.prodname_actions %}, {% data variables.product.prodname_registry %} et {% data variables.product.prodname_github_codespaces %}.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-billing-and-payments-on-github/connecting-an-azure-subscription-to-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise
versions:
  ghec: '*'
shortTitle: Connect an Azure subscription
ms.openlocfilehash: a5473ff19e403eb21242982e005663d1c8ac5962
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110881'
---
## À propos des abonnements Azure et de {% data variables.product.product_name %}

{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) » et « [À propos de la facturation pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages) ».

{% note %}

**Remarque :** si votre compte d’entreprise dépend d’un Accord Entreprise Microsoft, la connexion d’un abonnement Azure est le seul moyen d’utiliser {% data variables.product.prodname_actions %} et {% data variables.product.prodname_registry %} au-delà des montants inclus, ou tout simplement d’utiliser {% data variables.product.prodname_codespaces %}.

{% endnote %}

Après avoir connecté un abonnement Azure, vous pouvez également gérer votre limite de dépense.

- « [Gestion de la limite de dépense pour {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages) »
- « [Gestion de la limite de dépense pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions) »
- « [Gestion de votre limite de dépense pour {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces) »

## Connexion de votre abonnement Azure à votre compte d’entreprise

Pour connecter votre abonnement Azure, vous devez disposer des autorisations de propriétaire pour l’abonnement.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Sous « Payment Information », cliquez sur **Add Azure Subscription**.
1. Pour vous connecter à votre compte Microsoft, suivez les invites.
1. Passez en revue l’invite « Permissions requested ». Si vous acceptez les conditions, cliquez sur **Accept**.
1. Sous « Select a subscription », sélectionnez l’ID d’abonnement Azure que vous souhaitez connecter à votre entreprise.

   {% note %}

   **Remarque :** La validation d’autorisation d’abonnement de {% data variables.product.company_short %} demande un accès en lecture seule pour afficher la liste des abonnements disponibles. Pour sélectionner un abonnement Azure, vous devez disposer des autorisations de propriétaire pour l’abonnement. Si le locataire par défaut n’a pas les autorisations appropriées, vous devrez peut-être spécifier un ID de locataire différent. Pour plus d’informations, consultez [Plateforme d’identités Microsoft et flux de code d’autorisation OAuth 2.0](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow#request-an-authorization-code) dans Microsoft Docs.

   {% endnote %}
1. Cliquez sur **Connexion**.

## Déconnexion de votre abonnement Azure de votre compte d’entreprise

Après avoir déconnecté votre abonnement Azure de votre compte d’entreprise, votre utilisation ne peut plus dépasser les montants inclus dans votre plan.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %} {% data reusables.enterprise-accounts.payment-information-tab %}
1. Sous « Azure subscription », à droite de l’ID d’abonnement que vous souhaitez déconnecter, cliquez sur **{% octicon "trash" aria-label="The trash icon" %}** .
1. Passez en revue l’invite, puis cliquez sur **Remove**.
