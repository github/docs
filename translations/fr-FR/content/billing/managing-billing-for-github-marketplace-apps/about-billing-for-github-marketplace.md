---
title: À propos de la facturation pour la Place de marché GitHub
intro: 'Si vous installez une application payante dans {% data variables.product.prodname_marketplace %}, votre abonnement partage la date de facturation, le mode de paiement et le reçu existants de votre compte.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-marketplace
  - /articles/about-billing-for-github-marketplace
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-marketplace-apps/about-billing-for-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Marketplace
shortTitle: Billing for GitHub Marketplace
ms.openlocfilehash: 815303fa5c0c1a006a0bd4bd017039cf1e035f15
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085770'
---
La {% data variables.product.prodname_marketplace %} inclut des applications avec des plans tarifaires gratuits et payants. Après avoir acheté et installé une application, vous pouvez effectuer une mise à niveau, une mise à niveau inférieur ou une annulation à tout moment.

{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

## Modes de paiement et périodes de facturation pour les achats sur la {% data variables.product.prodname_marketplace %}

Vous disposez du même mode de paiement pour tous les plans et abonnements payants sur {% data variables.product.prodname_dotcom %}.

Si votre compte personnel ou votre organisation n’a pas de mode de paiement enregistré, quand vous choisissez un plan payant pour une application :
- Votre date de facturation est la date du jour.
- Vous devez ajouter un mode de paiement à votre compte personnel ou à l’organisation dans laquelle vous souhaitez installer l’application.
- Votre mode de paiement est facturé du montant total de votre abonnement.
- Votre reçu est envoyé à l’adresse e-mail principale ou de facturation enregistrée pour votre compte personnel ou organisation.

Si votre compte personnel ou votre organisation dispose d’un mode de paiement, quand vous choisissez un plan payant pour une application :
- Le mode de paiement enregistré est immédiatement facturé d’un montant au prorata en fonction du temps restant jusqu’à votre prochaine date de facturation.
- La date de facturation mensuelle ou annuelle de votre abonnement à l’application est identique à la date de facturation habituelle du compte ou de l’organisation.
- À la date de facturation suivante, votre reçu liste les frais de votre plan {% data variables.product.prodname_dotcom %} payant et de votre abonnement à l’application.

Quand vous choisissez un plan payant avec un essai gratuit :
- Vous devez disposer d’un mode de paiement existant ou ajouter un nouveau mode de paiement pour votre compte personnel ou l’organisation dans laquelle vous souhaitez installer l’application.
- Si vous n’avez pas d’autres plans ou abonnements payants, vous êtes facturé du montant total de votre abonnement à la fin de l’essai gratuit de 14 jours.
- Si vous disposez d’autres plans ou abonnements payants, une fois votre essai gratuit de 14 jours terminé, le mode de paiement enregistré est immédiatement facturé d’un montant au prorata en fonction du temps restant jusqu’à votre prochaine date de facturation.
- Si vous disposez d’autres plans ou abonnements payants, à la date de facturation suivante, votre reçu liste les frais de votre plan {% data variables.product.prodname_dotcom %} payant et de votre abonnement à l’application.

{% data reusables.user-settings.context_switcher %}

## Limites du plan à unités

Si vous choisissez un plan à unités (par exemple, un plan facturé par utilisateur) et que vous dépassez les unités que vous payez, l’intégrateur peut désactiver votre accès jusqu’à ce que vous mettiez à niveau l’application. Pour plus d’informations, consultez « [Mise à niveau du plan de facturation pour une application de la {% data variables.product.prodname_marketplace %}](/articles/upgrading-the-billing-plan-for-a-github-marketplace-app) ».

## Mise à niveau inférieur d’une application de la {% data variables.product.prodname_marketplace %}

Si vous faites passer votre abonnement à une application à un plan moins coûteux ou que vous annulez un abonnement à une application payant, vos modifications prennent effet à la fin de votre période de facturation actuelle. Votre abonnement est déplacé vers votre nouveau plan à la date de facturation suivante.

Si vous annulez une application sur un plan gratuit, votre abonnement se termine immédiatement et vous perdez l’accès à l’application.

{% data reusables.marketplace.downgrade-marketplace-only %}

Si vous annulez un essai gratuit sur un plan payant, votre abonnement est immédiatement annulé et vous perdez l’accès à l’application. Pour plus d’informations, consultez « [Annulation d’une application de la {% data variables.product.prodname_marketplace %} ](/articles/canceling-a-github-marketplace-app) ».

## Pour aller plus loin

- « [À propos de la {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace) »
- « [Achat et installation d’applications sur la {% data variables.product.prodname_marketplace %}](/articles/purchasing-and-installing-apps-in-github-marketplace) »
- « [Support pour la {% data variables.product.prodname_marketplace %}](/articles/github-marketplace-support) »
