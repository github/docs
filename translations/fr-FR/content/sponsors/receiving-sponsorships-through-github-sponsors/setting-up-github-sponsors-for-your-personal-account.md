---
title: Configuration de GitHub Sponsors pour votre compte personnel
intro: 'Vous pouvez devenir développeur parrainé en joignant {% data variables.product.prodname_sponsors %}, en effectuant votre profil de développeur parrainé, en créant des niveaux de parrainage, en soumettant vos informations bancaires et fiscales et en activant l’authentification à deux facteurs pour votre compte sur {% data variables.product.product_location %}.'
redirect_from:
  - /articles/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
  - /sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - User account
  - Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: 288dd5ab53d1a27b7f97ccf9429973a668d8f72b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164684'
---
## Jointure de {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

Pour joindre {% data variables.product.prodname_sponsors %} en tant qu’organisation, consultez « [Configuration de {% data variables.product.prodname_sponsors %} pour votre organisation](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization) ».

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Si vous êtes propriétaire d’une organisation, vous avez plusieurs comptes éligibles. Cliquez sur **Afficher vos comptes éligibles**, puis, dans la liste des comptes, recherchez votre compte personnel.
3. Cliquez sur **Joindre la liste d’attente**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

Si vous avez un compte bancaire dans une région prise en charge, {% data variables.product.prodname_dotcom %} révisera votre application dans les deux semaines.

## Compléter votre profil de développeur sponsisé

Une fois que {% data variables.product.prodname_dotcom %} a révisé votre application, vous pouvez configurer votre profil de développeur sponsorisé afin que des personnes puissent commencer à vous sponsoriser.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Création de niveaux de sponsorisation

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Envoi de vos informations bancaires

Si vous vivez dans une région prise en charge, vous pouvez suivre ces instructions pour envoyer vos informations bancaires en créant un compte Stripe Connect. Votre région de résidence et la région de votre compte bancaire doivent correspondre. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## Envoi de vos informations fiscales

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Activation d’une authentification à deux facteurs (2FA) sur votre compte {% data variables.product.prodname_dotcom %}

Pour pouvoir devenir développeur sponsorisé, vous devez activer 2FA pour votre compte sur {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Configuration de l’authentification à 2 facteurs](/articles/configuring-two-factor-authentication) ».

## Envoi de votre demande à {% data variables.product.prodname_dotcom %} pour approbation

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Cliquez sur **Demander une approbation**.
  ![Bouton de demande d’approbation](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
