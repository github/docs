---
title: Affichage des transactions de votre référencement
intro: "La page des transactions de {% data variables.product.prodname_marketplace %} vous permet de télécharger et de voir toutes les transactions de votre référencement {% data variables.product.prodname_marketplace %}. Vous pouvez voir les transactions du jour écoulé (dernières 24\_heures), de la semaine, du mois ou depuis que votre {% data variables.product.prodname_github_app %} est référencée."
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086379'
---
{% note %}

**Remarque :** Étant donné que l’agrégation des données prend du temps, vous allez remarquer un léger retard dans les dates affichées. Quand vous sélectionnez une période, vous pouvez voir les dates exactes des métriques en haut de la page.

{% endnote %}


Vous pouvez voir ou télécharger les données de transaction afin de suivre l’activité de votre abonnement. Cliquez sur le bouton **Exporter un fichier CSV** pour télécharger un fichier `.csv`. Vous pouvez aussi sélectionner une période à afficher et rechercher dans la page des transactions.

## Champs des données de transaction

* **date :** Date de la transaction au format `yyyy-mm-dd`.
* **app_name :** Nom de l’application.
* **user_login :** Connexion de l’utilisateur avec l’abonnement.
* **user_id :** ID de l’utilisateur avec l’abonnement.
* **user_type :** Type de compte GitHub, à savoir `User` ou `Organization`.
* **country :** Code à trois lettres du pays.
* **amount_in_cents :** Montant de la transaction en cents. Quand une valeur est inférieure au montant du plan, l’utilisateur est mis à niveau et le nouveau plan est calculé au prorata. La valeur zéro indique que l’utilisateur a annulé son plan.
* **renewal_frequency :** Fréquence de renouvellement de l’abonnement, à savoir `Monthly` ou `Yearly`.
* **marketplace_listing_plan_id :** `id` du plan d’abonnement.
* **region :** Nom de la région figurant dans l’adresse de facturation.
* **postal_code :** Valeur du code postal figurant dans l’adresse de facturation.

![Insights sur la Place de marché](/assets/images/marketplace/marketplace_transactions.png)

## Accès aux transactions de {% data variables.product.prodname_marketplace %}

Pour accéder aux transactions de {% data variables.product.prodname_marketplace %} :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Sélectionnez l’{% data variables.product.prodname_github_app %} pour laquelle vous voulez voir des transactions.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Cliquez sur l’onglet **Transactions**.
7. Sélectionnez éventuellement une période différente en cliquant sur la liste déroulante Période dans l’angle supérieur droit de la page Transactions.
![Période sur la Place de marché](/assets/images/marketplace/marketplace_insights_time_period.png)
