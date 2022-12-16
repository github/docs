---
title: Configuration de GitHub Sponsors pour votre organisation
intro: 'Votre organisation peut rejoindre {% data variables.product.prodname_sponsors %} pour recevoir des paiements pour votre travail.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
shortTitle: Set up for organization
ms.openlocfilehash: d7de813453d379ae898cc26d9579e06710aab26d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164469'
---
## Adhésion à {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Une fois que votre organisation a été invitée à rejoindre {% data variables.product.prodname_sponsors %}, vous pouvez suivre les étapes ci-dessous pour en faire une organisation sponsorisée.

Pour rejoindre {% data variables.product.prodname_sponsors %} en tant que contributeur individuel externe à une organisation, consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre compte personnel](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account) ».

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. À droite de votre organisation, cliquez sur **Rejoindre la liste d’attente**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

## Remplissage du profil de votre organisation sponsorisée

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Création de niveaux de parrainage

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Envoi de vos informations bancaires

En tant qu’organisation sponsorisée, vous recevez des paiements sur un compte bancaire situé dans une région prise en charge. Il peut s’agir d’un compte bancaire dédié à votre organisation ou d’un compte bancaire personnel. Vous pouvez obtenir un compte bancaire professionnel via des services tels que [Stripe Atlas](https://stripe.com/atlas) ou rejoindre un hôte fiscal tel qu’[Open Collective](https://opencollective.com/). La personne qui configure {% data variables.product.prodname_sponsors %} pour l’organisation doit également résider dans la région prise en charge. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

Pour plus d’informations sur la configuration de Stripe Connect à l’aide d’Open Collective, consultez [Configuration de {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) dans la documentation d’Open Collective.

## Envoi de vos informations fiscales

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Activation de l’authentification à 2 facteurs (2FA) sur votre compte {% data variables.product.prodname_dotcom %}

Pour que votre organisation puisse devenir une organisation sponsorisée, vous devez activer l’authentification 2FA dans votre compte sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) ».

## Envoi de votre demande à {% data variables.product.prodname_dotcom %} pour approbation

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## Pour aller plus loin

- « [À propos de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors) »
- « [Réception de parrainages via {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors) »
