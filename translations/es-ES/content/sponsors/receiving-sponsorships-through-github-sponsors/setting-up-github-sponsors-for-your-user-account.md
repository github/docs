---
title: Configurar a los Patrocinadores de GitHub para tu cuenta de usuario
intro: You can become a sponsored developer by joining {% data variables.product.prodname_sponsors %}, completing your sponsored developer profile, creating sponsorship tiers, submitting your bank and tax information, and enabling two-factor authentication for your account on {% data variables.product.product_location %}.
redirect_from:
- /articles/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/becoming-a-sponsored-developer
- /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- User account
- Sponsors profile
shortTitle: Set up for personal account
ms.openlocfilehash: ec5b04d98410b94d5f5f12f55989b6165e5e3b20
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145140210"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>Unirte a {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

Para unir {% data variables.product.prodname_sponsors %} como una organización, vea "[Configuración de {% data variables.product.prodname_sponsors %} para la organización](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Si eres un propietario de organización, tienes más de una cuenta elegible. Haz clic en **Ver las cuentas aptas** y, después, en la lista de cuentas, busca tu cuenta personal.
3. Haga clic en **Unirse a la lista de espera**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

Si tienes una cuenta bancaria en una región compatible, {% data variables.product.prodname_dotcom %} revisará tu aplicación dentro de dos semanas.

## <a name="completing-your-sponsored-developer-profile"></a>Completar un perfil de programador patrocinado

Una vez que {% data variables.product.prodname_dotcom %} revise tu aplicación, podrás configurar tu perfil de desarrollador patrocinado para que las personas puedan comenzar a patrocinarte.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>Crear niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>Emitir tu información bancaria

Si vives en una región compatible, puedes seguir estas instrucciones para emitir tu información bancaria y crear una cuenta de Stripe Connect. La región en la cual resides y aquella en la que está tu cuenta bancaria deben coincidir. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>Emitir tu información de facturación

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>Habilitar la autenticación de dos factores (2FA) en tu cuenta {% data variables.product.prodname_dotcom %}

Antes de que puedas convertirte en un desarrollador patrocinado, debes habilitar la 2FA para tu cuenta en {% data variables.product.product_location %}. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication)".

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>Enviar tu aplicación a {% data variables.product.prodname_dotcom %} para su aprobación

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Haga clic en **Solicitar aprobación**.
  ![Botón de solicitud de aprobación](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
