---
title: Traitement des nouveaux achats et des essais gratuits
intro: 'Lorsqu’un client achète un plan payant, un essai gratuit ou la version gratuite de votre application {% data variables.product.prodname_marketplace %}, vous recevez le webhook d’[événement `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) avec l’action `purchased`, ce qui lance le processus d’achat.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
  - /developers/github-marketplace/handling-new-purchases-and-free-trials
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: New purchases & free trials
ms.openlocfilehash: b0c1cf055d912cd83e2167bfcbd0136a2644b1aa
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086350'
---
{% warning %}

Si vous proposez une {% data variables.product.prodname_github_app %} dans {% data variables.product.prodname_marketplace %}, elle doit identifier les utilisateurs en suivant le flux d’autorisation OAuth. Vous n’avez pas besoin de configurer une {% data variables.product.prodname_oauth_app %} séparée pour prendre en charge ce flux. Consultez « [Identification et autorisation des utilisateurs pour des {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) » pour plus d’informations.

{% endwarning %}

## Étape 1. Achat initial et événement de webhook

Avant d’acheter votre application {% data variables.product.prodname_marketplace %}, le client sélectionne un [plan de listing](/marketplace/selling-your-app/github-marketplace-pricing-plans/). Il choisit également s’il achète l’application à partir de son compte personnel ou d’un compte professionnel.

Le client effectue l’achat en cliquant sur **Effectuer la commande et commencer l’installation**.

{% data variables.product.product_name %} envoie ensuite le webhook [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) avec l’action `purchased` à votre application.

Lisez les objets `effective_date` et `marketplace_purchase` du webhook `marketplace_purchase` pour savoir quel plan le client a acheté, quand commence le cycle de facturation et quand commence le prochain cycle de facturation.

Si votre application propose un essai gratuit, lisez l’attribut `marketplace_purchase[on_free_trial]` du webhook. Si la valeur est `true`, votre application doit repérer la date de début de l’essai gratuit (`effective_date`) et la date de fin de l’essai gratuit (`free_trial_ends_on`). Utilisez la date `free_trial_ends_on` pour afficher les jours restants d’un essai gratuit dans l’interface utilisateur de votre application. Vous pouvez le faire dans une bannière ou dans votre [interface utilisateur de facturation](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui). Pour savoir comment traiter les annulations avant la fin d’un essai gratuit, consultez « [Traitement des annulations de plan](/developers/github-marketplace/handling-plan-cancellations) ». Consultez « [Traitement des changements de plan](/developers/github-marketplace/handling-plan-changes) » pour savoir comment passer d’un essai gratuit à un plan payant à l’expiration de l’essai gratuit.

Consultez « [Événements de webhook {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) » pour avoir un exemple de la charge utile d’événement `marketplace_purchase`.

## Étape 2. Installation

Si votre application est une {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} invite le client à sélectionner au moment de l’achat les dépôts auxquels l’application peut accéder. {% data variables.product.product_name %} installe ensuite l’application sur le compte sélectionné par le client et accorde l’accès aux dépôts choisis.

À ce stade, si vous avez spécifié une **URL de configuration** dans vos paramètres d’{% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} redirige le client vers cette URL. Si vous ne spécifiez pas d’URL de configuration, vous ne pouvez pas traiter les achats de votre {% data variables.product.prodname_github_app %}.

{% note %}

**Remarque :** L’**URL de configuration** est indiquée comme facultative dans les paramètres d’{% data variables.product.prodname_github_app %}, mais c’est un champ obligatoire si vous voulez proposer votre application dans {% data variables.product.prodname_marketplace %}.

{% endnote %}

Si votre application est une {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} ne l’installe pas. À la place, {% data variables.product.product_name %} redirige le client vers l’**URL d’installation** que vous avez spécifiée dans votre [listing {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls).

Quand un client achète une {% data variables.product.prodname_oauth_app %}, {% data variables.product.product_name %} redirige le client vers l’URL que vous choisissez (URL de configuration ou URL d’installation) et l’URL contient le plan tarifaire que le client a sélectionné comme paramètre de requête : `marketplace_listing_plan_id`.

## Étape 3. Autorisation

Quand un client achète votre application, vous devez le diriger vers le flux d’autorisation OAuth :

* Si votre application est une {% data variables.product.prodname_github_app %}, commencez le flux d’autorisation dès que {% data variables.product.product_name %} redirige le client vers l’**URL de configuration**. Suivez les étapes de « [Identification et autorisation des utilisateurs pour des {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) ».

* Si votre application est une {% data variables.product.prodname_oauth_app %}, commencez le flux d’autorisation dès que {% data variables.product.product_name %} redirige le client vers l’**URL d’installation**. Suivez les étapes de « [Autorisation des {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/) ».

Pour l’un ou l’autre des types d’application, la première étape est de rediriger le client vers [https://github.com/login/oauth/authorize](https://github.com/login/oauth/authorize).

Dès que le client obtient l’autorisation, votre application reçoit un jeton d’accès OAuth pour le client. Vous l’utilisez dans l’étape suivante.

{% note %}

**Remarque :** Pour autoriser un client dans le cadre d’un essai gratuit, accordez-lui le même accès que pour le plan payant.  Vous le migrez vers le plan payant une fois la période d’essai terminée.

{% endnote %}

## Étape 4. Provisionnement de comptes client

Votre application doit provisionner un compte client pour tous les nouveaux achats. En utilisant le jeton d’accès que vous avez reçu pour le client à l’[Étape 3. Autorisation](#step-3-authorization), appelez le point de terminaison « [Lister les abonnements de l’utilisateur authentifié](/rest/reference/apps#list-subscriptions-for-the-authenticated-user) ». La réponse comprend les informations `account` du client et indique s’il s’agit d’un essai gratuit (`on_free_trial`). Utilisez ces informations pour effectuer la configuration et le provisionnement.

{% data reusables.marketplace.marketplace-double-purchases %}

Si l’achat est effectué par une organisation et pour chaque utilisateur, vous pouvez inviter le client à choisir les membres de l’organisation qui doivent avoir accès à l’application achetée.

Vous pouvez personnaliser la façon dont les membres de l’organisation reçoivent l’accès à votre application. Voici quelques suggestions :

**Prix forfaitaire :** Si l’achat est effectué pour une organisation avec un prix forfaitaire, votre application peut [obtenir tous les membres de l’organisation](/rest/reference/orgs#list-organization-members) via l’API et inviter l’administrateur de l’organisation à choisir les membres avec des utilisateurs payants côté intégrateur.

**Prix unitaire :** La méthode de provisionnement de siège unitaire permet aux utilisateurs d’occuper un siège quand ils se connectent à l’application. Une fois le seuil de nombre de sièges atteint, votre application peut avertir l’utilisateur qu’il doit effectuer une mise à niveau dans {% data variables.product.prodname_marketplace %}.
