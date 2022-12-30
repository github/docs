---
title: Créer un brouillon de référencement pour votre application
intro: 'Lorsque vous créez un référencement {% data variables.product.prodname_marketplace %}, GitHub l’enregistre en mode brouillon jusqu’à ce que vous soumettiez l’application pour approbation. Votre référencement montre aux clients comment ils peuvent utiliser votre application.'
redirect_from:
  - /apps/adding-integrations/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/listing-apps-on-github-marketplace/listing-an-app-on-github-marketplace
  - /apps/marketplace/getting-started-with-github-marketplace-listings/listing-an-app-on-github-marketplace
  - /apps/marketplace/creating-and-submitting-your-app-for-approval/listing-an-app-on-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/removing-a-listing-from-github-marketplace
  - /apps/marketplace/managing-github-marketplace-listings/removing-a-listing-from-github-marketplace
  - /apps/adding-integrations/managing-listings-on-github-marketplace/editing-a-github-marketplace-listing
  - /apps/marketplace/managing-github-marketplace-listings/editing-a-github-marketplace-listing
  - /apps/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing
  - /developers/github-marketplace/drafting-a-listing-for-your-app
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Draft an app listing
ms.openlocfilehash: 9dccf5486c446c5cdd9dbef4d36650340116e044
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086367'
---
## Créer un brouillon de référencement dans {% data variables.product.prodname_marketplace %}

Vous pouvez créer des brouillons de référencements uniquement pour les applications publiques. Avant de créer votre brouillon de référencement, lisez les instructions suivantes concernant l’écriture et la configuration des paramètres pour votre référencement dans {% data variables.product.prodname_marketplace %} :

* [Écrire des descriptions des référencements dans {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/)
* [Définir un plan tarifaire associé à un référencement dans {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/)
* [Configuration du webhook pour {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/configuring-the-github-marketplace-webhook/)

Pour créer un référencement dans {% data variables.product.prodname_marketplace %} :

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
3. Dans la barre latérale gauche, cliquez sur **OAuth Apps** ou **GitHub Apps** en fonction de l’application que vous ajoutez dans {% data variables.product.prodname_marketplace %}.

  {% note %}

  **Remarque** : Vous pouvez également ajouter un référencement en accédant à https://github.com/marketplace/new, en affichant vos applications disponibles et en cliquant sur **Créer un brouillon de référencement**.

  {% endnote %}

  ![Sélection du type d’application](/assets/images/settings/apps_choose_app.png)

4. Sélectionnez l’application que vous souhaitez ajouter dans {% data variables.product.prodname_marketplace %}.
![Sélection de l’application à référencer dans {% data variables.product.prodname_marketplace %}](/assets/images/github-apps/github_apps_select-app.png) {% data reusables.user-settings.edit_marketplace_listing %}
5. Une fois que vous avez créé un brouillon de référencement, vous accédez à une vue d’ensemble des sections que vous devez renseigner pour terminer votre référencement dans {% data variables.product.prodname_marketplace %}.
![Référencement dans GitHub Marketplace](/assets/images/marketplace/marketplace_listing_overview.png)


{% note %}

**Remarque :** Dans la section « Informations de contact » de votre référencement, nous vous recommandons d’utiliser des adresses e-mail individuelles plutôt que des adresses e-mail de groupe comme support@domain.com. GitHub utilise ces adresses e-mail pour vous informer des mises à jour de {% data variables.product.prodname_marketplace %} susceptibles d’impacter votre référencement, de la publication de nouvelles fonctionnalités, des offres marketing, des paiements ainsi que des conférences et parrainages.

{% endnote %}

## Terminer votre référencement

Une fois que vous avez créé un brouillon de référencement dans {% data variables.product.prodname_marketplace %}, vous pouvez à tout moment revenir dessus pour modifier les informations de votre référencement. Si votre application est déjà approuvée et référencée dans {% data variables.product.prodname_marketplace %}, vous pouvez modifier les informations et images de votre référencement, mais pas les plans tarifaires associés qui ont déjà été publiés. Consultez « [Définir un plan tarifaire associé à un référencement dans {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/) ».

## Soumission de votre application

Après avoir terminé votre référencement dans {% data variables.product.prodname_marketplace %}, vous pouvez le soumettre pour examen à partir de la page **Vue d’ensemble**. Vous devez lire et accepter le « [Contrat du développeur {% data variables.product.prodname_marketplace %}](/free-pro-team@latest/github/site-policy/github-marketplace-developer-agreement/) », puis cliquer sur **Soumettre pour examen**. Une fois que vous avez soumis votre application pour examen, un expert en intégration vous contactera pour vous donner des informations supplémentaires sur le processus d’intégration.

## Supprimer un référencement dans {% data variables.product.prodname_marketplace %}

Si vous ne souhaitez plus référencer votre application dans {% data variables.product.prodname_marketplace %}, contactez le {% data variables.contact.contact_support %} pour demander la suppression de votre référencement.
