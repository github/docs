---
title: Configuration d’un webhook pour vous informer des modifications du plan
intro: 'Après [avoir créé un brouillon de référencement {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/), vous pouvez configurer un webhook qui vous notifie quand le compte client fait l’objet de modifications. Après avoir configuré le webhook, vous pouvez [gérer les types d’événement `marketplace_purchase`](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/) dans votre application.'
redirect_from:
  - /apps/adding-integrations/managing-listings-on-github-marketplace/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/adding-webhooks-for-a-github-marketplace-listing
  - /apps/marketplace/setting-up-github-marketplace-webhooks/creating-a-webhook-for-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook
  - /developers/github-marketplace/configuring-a-webhook-to-notify-you-of-plan-changes
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Webhooks for plan changes
ms.openlocfilehash: 85ffaa8809860ff4b693075e416723717296f86c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086369'
---
Le webhook d’événements {% data variables.product.prodname_marketplace %} peut être configuré uniquement à partir de la page de référencement de votre application {% data variables.product.prodname_marketplace %}. Vous pouvez configurer tous les autres événements à partir de la [page des paramètres du développeur de votre application](https://github.com/settings/developers). Si vous n’avez pas créé de liste {% data variables.product.prodname_marketplace %}, consultez « [Création d’un brouillon de liste {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) » pour découvrir comment procéder.

## Création d'un webhook

Pour créer un webhook pour votre liste {% data variables.product.prodname_marketplace %}, cliquez sur **Webhook** dans la barre latérale gauche de votre [page de référencement {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Voici des options de configuration de webhook nécessaires pour configurer votre webhook :

### URL de la charge utile

{% data reusables.webhooks.payload_url %}

### Type de contenu

{% data reusables.webhooks.content_type %} GitHub recommande d’utiliser le type de contenu `application/json`.

### Secret

{% data reusables.webhooks.secret %}

### Actif

Par défaut, la livraison de webhook est « Active ». Vous pouvez choisir de désactiver la livraison des charges utiles de webhook en désélectionnant « Actif ». Si vous avez désactivé les livraisons de webhook, vous devez sélectionner « Actif » avant de soumettre votre application à une révision.

## Affichage des livraisons de webhook

Une fois que vous avez configuré votre webhook {% data variables.product.prodname_marketplace %}, vous pouvez inspecter les charges utiles de demande `POST` à partir de la page **Webhook** de la liste de votre application [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). GitHub ne renvoie pas les tentatives de remise ayant échoué. Vérifiez que votre application peut recevoir toutes les charges utiles de webhook envoyées par GitHub.

![Inspecter les livraisons de webhooks récentes {% data variables.product.prodname_marketplace %}](/assets/images/marketplace/marketplace_webhook_deliveries.png)
