---
title: Traitement des changements de plan
intro: 'La mise à un niveau supérieur ou inférieur d’une application {% data variables.product.prodname_marketplace %} déclenche le webhook d’[événement`marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) avec l’action `changed`, qui lance le processus de mise à un niveau supérieur ou inférieur.'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/upgrading-or-downgrading-plans
  - /apps/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans
  - /developers/github-marketplace/handling-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
ms.openlocfilehash: fd5cc838c01130ab9e8a1f7c040b254655cbaef0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129014'
---
Pour plus d’informations sur le passage à un plan supérieur ou inférieur dans le cadre de la facturation, consultez « [Intégration de l’API {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/) ».

## Étape 1. Événement de changement de plan tarifaire

GitHub envoie le webhook `marketplace_purchase` avec l’action `changed` à votre application quand un client effectue un changement dans sa commande {% data variables.product.prodname_marketplace %} :
* Passe à un plan tarifaire plus cher ou moins cher.
* Ajoute ou supprime des sièges dans son plan existant.
* Change le cycle de facturation.

GitHub envoie le webhook au moment où le changement prend effet. Par exemple, quand un client change pour un plan inférieur, GitHub envoie le webhook à la fin du cycle de facturation du client. GitHub envoie un webhook à votre application immédiatement quand un client change pour un plan supérieur, afin de lui permettre d’accéder au nouveau service tout de suite. Si un client passe d’un cycle de facturation mensuel à un cycle de facturation annuel, c’est considéré comme un passage à un plan supérieur. Consultez « [Facturation des clients dans {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/billing-customers-in-github-marketplace/) » pour en savoir plus sur les actions qui sont considérées comme des passages à des plans inférieurs ou supérieurs.

Lisez les objets `effective_date`, `marketplace_purchase` et `previous_marketplace_purchase` du webhook `marketplace_purchase` pour mettre à jour la date de début du plan, et changer le cycle de facturation et le plan tarifaire du client. Consultez « [Événements de webhook {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) » pour avoir un exemple de la charge utile d’événement `marketplace_purchase`.

Si votre application propose des essais gratuits, vous recevrez le webhook `marketplace_purchase` avec l’action `changed` quand l’essai gratuit expire. Si l’essai gratuit du client expire, mettez à niveau le client vers la version payante du plan d’essai gratuit.

## Étape 2. Mise à jour des comptes client

Vous devez mettre à jour les informations de compte du client pour refléter les changements de cycle de facturation et de plan tarifaire que le client a effectués dans sa commande {% data variables.product.prodname_marketplace %}. Affichez les mises à niveau de plan tarifaire `seat_count` (pour les plans tarifaires unitaires) et de cycle de facturation sur le site web de votre application Marketplace ou dans l’interface utilisateur de votre application quand vous recevez le webhook de l’action `changed`.

Quand un client passe à un plan inférieur, nous vous recommandons de vérifier s’il a dépassé les limites de son plan et d’entrer en contact avec lui directement dans votre interface utilisateur, ou par téléphone ou e-mail.

Pour encourager les utilisateurs à passer à un plan supérieur, vous pouvez afficher une URL de mise à niveau dans l’interface utilisateur de votre application. Pour plus d’informations, consultez « [À propos des URL de mise à niveau](#about-upgrade-urls) ».

{% note %}

**Remarque :** Nous vous recommandons d’effectuer une synchronisation régulière en utilisant `GET /marketplace_listing/plans/:id/accounts` pour que votre application ait pour chaque compte le plan, les informations de cycle de facturation et le nombre d’unités (pour le tarif unitaire) appropriés.

{% endnote %}

## Paiements de mise à niveau ayant échoué

{% data reusables.marketplace.marketplace-failed-purchase-event %}

## À propos des URL de mise à niveau

Vous pouvez rediriger les utilisateurs qui utilisent l’interface utilisateur de votre application vers une URL de mise à niveau sur GitHub pour passer à un plan supérieur :

```text
https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>
```

Par exemple, si vous remarquez qu’un client utilise un plan de 5 personnes et qu’il lui faut un plan de 10 personnes, vous pouvez afficher un bouton dans l’interface utilisateur de votre application qui indique « Voici comment passer à un plan supérieur » ou afficher une bannière avec un lien vers l’URL de mise à niveau. L’URL de mise à niveau dirige le client vers la page de confirmation de mise à niveau de votre plan de listing.

Utilisez le `LISTING_PLAN_NUMBER` du plan que le client souhaite acheter. Quand vous créez des plans tarifaires, ils reçoivent un `LISTING_PLAN_NUMBER`, numéro unique pour chaque plan dans votre listing, et un `LISTING_PLAN_ID`, ID unique pour chaque plan dans {% data variables.product.prodname_marketplace %}. Vous pouvez trouver ces numéros quand vous appelez [Lister les plans](/rest/reference/apps#list-plans), qui identifie les plans tarifaires de votre listing. Utilisez le `LISTING_PLAN_ID` et le point de terminaison « [Lister les comptes d’un plan](/rest/reference/apps#list-accounts-for-a-plan) » pour obtenir le `CUSTOMER_ACCOUNT_ID`.


{% note %}

**Remarque :** Si votre client achète des unités supplémentaires (par exemple, des sièges), vous pouvez toujours le diriger vers le plan approprié pour son achat, mais nous ne pouvons pas prendre en charge les paramètres `unit_count` à ce stade.

{% endnote %}
