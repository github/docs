---
title: Définition des plans tarifaires pour votre référencement
intro: 'Lorsque vous référencez votre application sur {% data variables.product.prodname_marketplace %}, vous pouvez choisir de proposer votre application sous forme de service gratuit ou de la vendre. Si vous envisagez de vendre votre application, vous pouvez créer différents plans tarifaires pour différents niveaux de fonctionnalités.'
redirect_from:
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/pricing-payments-and-free-trials/setting-a-github-marketplace-listing-s-pricing-plan
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/about-github-marketplace-pricing-plans
  - /apps/marketplace/pricing-payments-and-free-trials/about-github-marketplace-pricing-plans
  - /apps/adding-integrations/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-pricing-and-payments-for-a-github-marketplace-listing/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/managing-github-marketplace-listings/changing-a-github-marketplace-listing-s-pricing-plan
  - /apps/marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /marketplace/listing-on-github-marketplace/setting-a-github-marketplace-listing-s-pricing-plan
  - /developers/github-marketplace/setting-pricing-plans-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: Set listing pricing plans
ms.openlocfilehash: bc8d84a55c9597da051ab11752dd7e412761d5d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086361'
---
## À propos de la définition des plans tarifaires

{% data variables.product.prodname_marketplace %} propose plusieurs types de plans tarifaires. Pour plus d’informations, consultez « [Plans tarifaires de {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps) ».

Pour pouvoir attribuer un plan payant à une application, l’organisation à laquelle celle-ci appartient doit avoir suivi le processus de vérification de l’éditeur et respecter certains critères. Pour plus d’informations, consultez « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) » et « [Conditions requises pour référencer une application sur {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/) ».

Si votre application est déjà publiée avec un plan payant et que vous disposez du statut d’éditeur vérifié, vous pouvez publier un nouveau plan payant à partir de la page « Modifier un plan tarifaire » dans les paramètres de référencement de l’application sur la Place de marché. 

![Bouton Publier ce plan](/assets/images/marketplace/publish-this-plan-button.png)

Si votre application est déjà publiée avec un plan payant et que vous ne disposez pas du statut d’éditeur vérifié, vous devez préalablement l’obtenir pour pouvoir publier un nouveau plan payant. Pour plus d’informations sur l’obtention du statut d’éditeur vérifié, consultez « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ».

## À propos de l’enregistrement des plans tarifaires

Vous pouvez enregistrer un plan tarifaire en tant que brouillon ou en tant que plan publié. Si vous n’avez pas soumis votre référencement {% data variables.product.prodname_marketplace %} pour approbation, un plan publié fonctionnera de la même manière qu’un brouillon jusqu’à ce que votre référencement soit approuvé et affiché sur {% data variables.product.prodname_marketplace %}. Les brouillons vous permettent de créer et d’enregistrer de nouveaux plans tarifaires sans les publier sur votre page de référencement {% data variables.product.prodname_marketplace %}. Une fois que vous avez publié un plan tarifaire sur un référencement publié, les clients peuvent immédiatement l’acheter. Vous pouvez publier jusqu’à 10 plans tarifaires.

Pour obtenir des instructions sur la facturation des clients, consultez « [Facturation des clients](/developers/github-marketplace/billing-customers) ».

## Création de plans tarifaires

Pour créer un plan tarifaire pour votre référencement {% data variables.product.prodname_marketplace %}, cliquez sur **Plans et tarifs** sur la barre latérale gauche de la [page de référencement {% data variables.product.prodname_marketplace %}](https://github.com/marketplace/manage). Pour plus d’informations, consultez « [Création d’un référencement {% data variables.product.prodname_marketplace %} brouillon](/marketplace/listing-on-github-marketplace/creating-a-draft-github-marketplace-listing/) ».

Lorsque vous cliquez sur **Nouveau plan brouillon**, vous accédez à un formulaire qui vous permet de personnaliser votre plan tarifaire. Pour créer un plan tarifaire, vous devez configurer les champs suivants :

- **Nom du plan** : le nom de votre plan tarifaire apparaît sur la page d’arrivée de votre application {% data variables.product.prodname_marketplace %}. Vous pouvez personnaliser ce nom en fonction des ressources du plan tarifaire, de la taille de l’entreprise qui utilisera le plan ou de tout autre critère.

- **Modèles tarifaires** : il existe trois types de plan tarifaire : gratuit, forfaitaire et à l’unité. Pour tous les plans, vous devez traiter les nouveaux événements d’achat et d’annulation à partir de l’API Place de marché. En outre, pour les plans payants :

  - Vous devez fixer un prix en dollars américains (USD) pour les abonnements mensuels et annuels.
  - Votre application doit traiter les événements de modification de plan.
  - Vous devez demander une vérification pour publier un référencement avec un plan payant.
  - {% data reusables.marketplace.marketplace-pricing-free-trials %}

  Pour plus d’informations, consultez « [Plans tarifaires des applications {% data variables.product.prodname_marketplace %}](/developers/github-marketplace/pricing-plans-for-github-marketplace-apps) » et « [Utilisation de l’API {% data variables.product.prodname_marketplace %} dans votre application](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app) ».

- **Disponible pour** : les plans tarifaires {% data variables.product.prodname_marketplace %} peuvent s’appliquer à des **Comptes personnels et comptes d’organisation**, **Comptes personnels uniquement** ou **Comptes d’organisation uniquement**. Par exemple, si vous avez opté pour un plan tarifaire à l’unité qui fournit plusieurs sièges, vous devez sélectionner **Comptes d’organisation uniquement** car il est impossible d’attribuer des sièges aux membres d’une organisation à partir d’un compte personnel.

- **Brève description** : rédigez un bref résumé du plan tarifaire. La description peut inclure le type de client auquel le plan s’adresse ou les ressources qu’il comprend.

- **Puces** : vous pouvez rédiger jusqu’à quatre puces pour détailler votre plan tarifaire. Les puces peuvent inclure les cas d’usage de votre application ou donner des informations plus détaillées sur les ressources ou les fonctionnalités incluses dans le plan.

{% data reusables.marketplace.free-plan-note %}

## Modification d’un plan tarifaire associé à un référencement {% data variables.product.prodname_marketplace %}

Si un plan tarifaire de votre référencement {% data variables.product.prodname_marketplace %} n’est plus nécessaire, ou si vous souhaitez modifier les tarifs, vous pouvez supprimer le plan.

![Bouton de suppression de votre plan tarifaire](/assets/images/marketplace/marketplace_remove_this_plan.png)

Une fois que vous avez publié un plan tarifaire pour une application qui est déjà référencée sur {% data variables.product.prodname_marketplace %}, vous ne pouvez plus modifier le plan. Vous devez supprimer le plan tarifaire et en créer un nouveau. Les clients qui ont déjà acheté le plan tarifaire supprimé continueront à l’utiliser jusqu’à ce qu’ils se désengagent et passent à un nouveau plan. Pour plus d’informations sur les plans tarifaires, consultez « [Plans tarifaires {% data variables.product.prodname_marketplace %}](/marketplace/selling-your-app/github-marketplace-pricing-plans/) ».

Une fois que vous avez supprimé un plan tarifaire, les utilisateurs ne peuvent plus acheter votre application avec ce plan. Les utilisateurs existants du plan tarifaire supprimé continuent à bénéficier de ce plan jusqu’à ce qu’ils annulent leur abonnement.

{% note %}

**Remarque :** {% data variables.product.product_name %} ne peut pas supprimer les utilisateurs d’un plan tarifaire supprimé. Vous pouvez lancer une campagne pour encourager les utilisateurs à passer du plan tarifaire supprimé à un nouveau plan tarifaire.

{% endnote %}

Vous pouvez désactiver les essais gratuits de la Place de marché GitHub sans supprimer le plan tarifaire, mais cela vous empêchera de proposer de futurs essais gratuits pour ce plan. Si vous choisissez de désactiver les essais gratuits associés à un plan tarifaire, les utilisateurs déjà inscrits peuvent aller au terme de leur essai gratuit.

Après la suppression d’un plan tarifaire, vous pouvez attribuer son nom à un nouveau plan. Par exemple, si vous disposez d’un plan tarifaire « Pro » et que vous souhaitez modifier le tarif forfaitaire, vous pouvez supprimer le plan « Pro » et créer un nouveau plan « Pro » avec un prix actualisé. Les utilisateurs pourront immédiatement acheter le nouveau plan tarifaire.

Si vous n’êtes pas un éditeur vérifié, vous ne pouvez pas modifier un plan tarifaire associé à votre application. Pour plus d’informations sur l’obtention du statut d’éditeur vérifié, consultez « [Demande de vérification de l’éditeur pour votre organisation](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization) ».
