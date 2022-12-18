---
title: Plans tarifaires pour les applications de la Place de marché GitHub
intro: "Les plans tarifaires vous permettent de fournir à votre application différents niveaux de service ou de ressources. Vous pouvez proposer jusqu’à 10\_plans tarifaires dans votre référencement {% data variables.product.prodname_marketplace %}."
redirect_from:
  - /apps/marketplace/selling-your-app/github-marketplace-pricing-plans
  - /marketplace/selling-your-app/github-marketplace-pricing-plans
  - /developers/github-marketplace/pricing-plans-for-github-marketplace-apps
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Pricing plans for apps
ms.openlocfilehash: e1ab751c26e59ec42e16dc7d9e5c0118dedffbde
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876947'
---
Les plans tarifaires {% data variables.product.prodname_marketplace %} peuvent être gratuits, forfaitaires ou par unité. Les prix sont définis, affichés et traités en dollars US. Les plans payants sont limités aux applications publiées par des éditeurs vérifiés. Pour plus d’informations sur l’obtention du statut d’éditeur vérifié, consultez « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ».

Les clients achètent votre application en utilisant un mode de paiement attaché à leur compte sur {% data variables.product.product_location %}, sans devoir quitter {% data variables.product.prodname_dotcom_the_website %}. Vous n’avez pas besoin d’écrire de code pour effectuer des transactions de facturation, mais vous devez gérer les événements à partir de l’API {% data variables.product.prodname_marketplace %}. Pour plus d’informations, consultez « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

Si l’application que vous référencez sur {% data variables.product.prodname_marketplace %} offre plusieurs options de plan, vous pouvez configurer des plans tarifaires correspondants. Par exemple, si votre application offre deux options de plan, open source et professionnel, vous pouvez configurer la gratuité pour votre plan open source et une tarification forfaitaire pour votre plan professionnel. Chaque référencement sur la {% data variables.product.prodname_marketplace %} doit proposer un prix annuel et un prix mensuel pour chaque plan référencé.

Pour plus d’informations sur la création d’un plan tarifaire, consultez « [Définition d’un plan tarifaire de référencement sur la {% data variables.product.prodname_marketplace %}](/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan/) ».

{% data reusables.marketplace.free-plan-note %}

## Types de plans tarifaires

### Plans tarifaires gratuits

{% data reusables.marketplace.free-apps-encouraged %}

Les plans gratuits le sont totalement pour les utilisateurs. Si vous configurez un plan tarifaire gratuit, vous ne pouvez pas facturer les utilisateurs qui choisissent ce plan pour l’utilisation de votre application. Vous pouvez créer des plans gratuits et payants pour votre référencement.

Toutes les applications doivent gérer des événements de nouveaux achats et d’annulations. Les applications qui n’ont que des plans gratuits n’ont pas besoin de gérer des événements d’essai gratuit, de mise à niveau et de retour à une version antérieure. Pour plus d’informations, consultez « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

Si vous ajoutez un plan payant à une application que vous avez déjà référencée dans le {% data variables.product.prodname_marketplace %} en tant que service gratuit, vous devez demander une vérification de l’application et passer par l’intégration financière.

### Plans tarifaires payants

Il existe deux types de plans tarifaires payants :

- Les plans tarifaires forfaitaires facturent des frais fixes sur une base mensuelle et annuelle.

- Les plans tarifaires par unité facturent des frais sur une base mensuelle ou annuelle pour une unité que vous spécifiez. Une « unité » peut être ce que vous voulez (par exemple, un utilisateur, un poste ou une personne).

Vous pouvez également proposer des essais gratuits. Ceux-ci permettent aux clients de bénéficier d’essais gratuits de 14 jours d’OAuth ou d’applications GitHub. Lorsque vous configurez un plan tarifaire pour la Place de marché, vous pouvez sélectionner l’option permettant de fournir un essai gratuit pour les plans tarifaires forfaitaires ou par unité.

## Essais gratuits

Les clients peuvent commencer un essai gratuit de tout plan payant référence sur la Place de marché, qui inclut des essais gratuits. Toutefois, les clients ne peuvent pas créer plus d’un essai gratuit par produit de la Place de marché.

Les essais gratuits ont une durée fixe de 14 jours. Les clients sont avertis 4 jours avant la fin de leur période d’essai (le 11e jour de l’essai gratuit) que leur plan sera mis à niveau. À la fin d’un essai gratuit, les clients seront automatiquement inscrits au plan qu’ils testent s’ils n’annulent pas.

Pour plus d’informations, consultez « [Traitement des nouveaux achats et des essais gratuits](/developers/github-marketplace/handling-new-purchases-and-free-trials/) ».

{% note %}

**Remarque :** GitHub attend de vous que vous supprimiez toutes les données client privées dans les 30 jours suivant l’annulation d’un essai, à compter de la réception de l’événement d’annulation.

{% endnote %}
