---
title: Affichage des métriques de votre liste
intro: 'La page Insights de {% data variables.product.prodname_marketplace %} affiche les métriques de votre {% data variables.product.prodname_github_app %}. Vous pouvez utiliser les métriques pour suivre les performances de votre {% data variables.product.prodname_github_app %} et prendre des décisions plus éclairées sur les prix, les plans, les essais gratuits et la façon de visualiser les effets des campagnes marketing.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086381'
---
Vous pouvez voir les métriques du jour écoulé (dernières 24 heures), de la semaine, du mois ou de toute la période depuis laquelle votre {% data variables.product.prodname_github_app %} est listée.

{% note %}

**Remarque :** Étant donné que l’agrégation des données prend du temps, vous allez remarquer un léger retard dans les dates affichées. Quand vous sélectionnez une période, vous pouvez voir les dates exactes des métriques en haut de la page.

{% endnote %}

## Mesures de performances

La page Insights présente ces métriques de performances pour la période sélectionnée :

* **Valeur des abonnements :** Chiffre d’affaires possible total (en dollars américains) des abonnements. Cette valeur représente le chiffre d’affaires possible si aucun plan ni essai gratuit ne sont annulés et que toutes les transactions de crédit réussissent. La valeur des abonnements inclut la valeur totale des plans qui commencent par un essai gratuit pendant la période sélectionnée, même en l’absence de transactions financières pendant cette période. La valeur des abonnements inclut aussi la valeur totale des plans mis à niveau pendant la période sélectionnée, mais elle n’inclut pas le montant calculé au prorata. Pour voir et télécharger des transactions individuelles, consultez « [Transactions sur la Place de marché GitHub](/marketplace/github-marketplace-transactions/) ».
* **Visiteurs :** Nombre de personnes qui ont consulté une page figurant dans votre liste d’applications GitHub. Ce nombre inclut à la fois les visiteurs connectés et déconnectés.
* **Vues de page :** Nombre de vues reçues par les pages figurant dans votre liste d’applications GitHub. Un visiteur unique peut générer plusieurs vues de page.

{% note %}

**Remarque :** Votre valeur des abonnements estimée peut être beaucoup plus élevée que les transactions traitées pendant cette période. 

{% endnote %}

### Performances de conversion

* **Visiteurs uniques de la page d’arrivée :** Nombre de personnes qui ont consulté la page d’arrivée de votre application GitHub.
* **Visiteurs uniques de la page de validation :** Nombre de personnes qui ont consulté l’une des pages de validation de votre application GitHub.
* **Page de validation de nouveaux abonnements :** Nombre total d’abonnements payants, d’essais gratuits et d’abonnements gratuits. Consultez « Répartition des abonnements totaux » pour connaître le nombre précis de chaque type d’abonnement.

![Insights sur la Place de marché](/assets/images/marketplace/marketplace_insights.png)

Pour accéder à {% data variables.product.prodname_marketplace %} Insights :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Sélectionnez l’{% data variables.product.prodname_github_app %} pour laquelle vous voulez voir des insights.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Cliquez sur l’onglet **Insights**.
7. Sélectionnez éventuellement une période différente en cliquant sur la liste déroulante Période dans l’angle supérieur droit de la page Insights.
![Période sur la Place de marché](/assets/images/marketplace/marketplace_insights_time_period.png)
