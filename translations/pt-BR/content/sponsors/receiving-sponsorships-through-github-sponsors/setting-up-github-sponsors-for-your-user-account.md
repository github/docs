---
title: Configurando o GitHub Sponsors (Patrocinadores do GitHub) para sua conta de usuário
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
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145128196"
---
## <a name="joining--data-variablesproductprodname_sponsors-"></a>Ingressar no {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-developer %} {% data reusables.sponsors.stripe-supported-regions %}

Para ingressar no {% data variables.product.prodname_sponsors %} como uma organização, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua organização](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-organization)".

{% data reusables.sponsors.navigate-to-github-sponsors %}
2. Se você é o proprietário de uma organização, você tem mais de uma conta elegível. Clique em **Ver suas contas qualificadas** e, na lista de contas, localize sua conta pessoal.
3. Clique em **Ingressar na lista de espera**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

Se você tiver uma conta bancária em uma região aceita, o {% data variables.product.prodname_dotcom %} irá rever sua solicitação dentro de duas semanas.

## <a name="completing-your-sponsored-developer-profile"></a>Preencher seu perfil de desenvolvedor patrocinado

Depois de {% data variables.product.prodname_dotcom %} avaliar sua solicitação, você pode configurar o seu perfil de desenvolvedor patrocinado para que as pessoas possam começar a patrocinar você.

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## <a name="creating-sponsorship-tiers"></a>Criar camadas de patrocínio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## <a name="submitting-your-bank-information"></a>Enviando informações bancárias

Se você vive em uma região aceita, você pode seguir essas instruções para enviar informações bancárias criando uma conta do Stripe Connect. A sua região de residência e a região da sua conta bancária devem corresponder. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

## <a name="submitting-your-tax-information"></a>Enviando suas informações fiscais

{% data reusables.sponsors.tax-form-information-dev %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## <a name="enabling-two-factor-authentication-2fa-on-your--data-variablesproductprodname_dotcom--account"></a>Habilitar a autenticação de dois fatores (2FA, two-factor authentication) na sua conta do {% data variables.product.prodname_dotcom %}

Antes de se tornar um desenvolvedor patrocinado, você deve habilitar a 2FA para sua conta em {% data variables.product.product_location %}. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".

## <a name="submitting-your-application-to--data-variablesproductprodname_dotcom--for-approval"></a>Enviar seu aplicativo ao {% data variables.product.prodname_dotcom %} para aprovação

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
4. Clique em **Solicitar aprovação**.
  ![Botão Solicitar aprovação](/assets/images/help/sponsors/request-approval-button.png)

{% data reusables.sponsors.github-review-app %}
