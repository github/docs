---
title: Configurar los Patrocinadores de GitHub para tu organización
intro: 'Tu organización puede unirse a {% data variables.product.prodname_sponsors %} para recibir pagos por tu trabajo.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164474'
---
## Unirte a {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Después de recibir una invitación para que tu organización se una a {% data variables.product.prodname_sponsors %} puedes completar los pasos a continuación para que se convierta en una organización patrocinada.

Para unir {% data variables.product.prodname_sponsors %} como colaborador individual fuera de una organización, consulta "[Configuración de {% data variables.product.prodname_sponsors %} para la cuenta personal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)".

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. A la derecha de la organización, haga clic en **Unirse a la lista de espera**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

## Completar tu perfil de organización patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Crear niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Emitir tu información bancaria

Como organización patrocinada, recibirás pagos en una cuenta bancaria en una región compatible. Esta puede ser una cuenta bancaria dedicada para tu organización o una cuenta bancaria personal. Puede obtener una cuenta bancaria empresarial mediante servicios como [Stripe Atlas](https://stripe.com/atlas), bien o unirse a un anfitrión fiscal como [Open Collective](https://opencollective.com/). La persona que configura a {% data variables.product.prodname_sponsors %} para la organización debe vivir en la región compatible también. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

Para más información sobre cómo configurar Stripe Conectar mediante Open Collective, vea [Configuración de {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) en la documentación de Open Collective.

## Emitir tu información de facturación

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Habilitar la autenticación de dos factores (2FA) en tu cuenta {% data variables.product.prodname_dotcom %}

Antes de que tu organización pueda convertirse en una organización patrocinada, debes habilitar la 2FA para tu cuenta en {% data variables.product.product_location %}. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)".

## Enviar tu aplicación a {% data variables.product.prodname_dotcom %} para su aprobación

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## Información adicional

- "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)"
- "[Recepción de patrocinios mediante {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors)"
