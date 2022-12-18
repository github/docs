---
title: Configuración de patrocinadores de GitHub Patrocinadores para tu cuenta personal
intro: 'Puedes convertirte en un desarrollador patrocinado si te unes a {% data variables.product.prodname_sponsors %}, completas tu perfil de desarrollador patrocinado, creas niveles de patrocinio, emites tu información fiscal y bancaria y habilitas la autenticación bifactorial para tu cuenta en {% data variables.product.product_location %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165074'
---
## Unirte a {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

Para unir {% data variables.product.prodname_sponsors %} como una organización, vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Si eres un propietario de organización, tienes más de una cuenta elegible. Haz clic en **Ver las cuentas aptas** y, después, en la lista de cuentas, busca tu cuenta personal.
3. Haga clic en **Unirse a la lista de espera**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

Si tienes una cuenta bancaria en una región compatible, {% data variables.product.prodname_dotcom %} revisará tu aplicación dentro de dos semanas.

## Completar un perfil de programador patrocinado

Una vez que {% data variables.product.prodname_dotcom %} revise tu aplicación, podrás configurar tu perfil de desarrollador patrocinado para que las personas puedan comenzar a patrocinarte.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Crear niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Emitir tu información bancaria

Si vives en una región compatible, puedes seguir estas instrucciones para emitir tu información bancaria y crear una cuenta de Stripe Connect. La región en la cual resides y aquella en la que está tu cuenta bancaria deben coincidir. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## Emitir tu información de facturación

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Habilitar la autenticación de dos factores (2FA) en tu cuenta {% data variables.product.prodname_dotcom %}

Antes de que puedas convertirte en un desarrollador patrocinado, debes habilitar la 2FA para tu cuenta en {% data variables.product.product_location %}. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)".

## Enviar tu aplicación a {% data variables.product.prodname_dotcom %} para su aprobación

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Haga clic en **Solicitar aprobación**.
  ![Botón de solicitud de aprobación](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
