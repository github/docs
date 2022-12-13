---
title: Configurando o GitHub Sponsors (Patrocinadores do GitHub) para sua organização
intro: 'Sua organização pode ingressar no {% data variables.product.prodname_sponsors %} para receber pagamentos pelo seu trabalho.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164467'
---
## Ingressar no {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Depois de receber um convite para sua organização ingressar no {% data variables.product.prodname_sponsors %}, você poderá concluir as etapas abaixo para se tornar uma organização patrocinada.

Para ingressar no {% data variables.product.prodname_sponsors %} como colaborador individual fora de uma organização, confira "[Como configurar o {% data variables.product.prodname_sponsors %} para sua conta pessoal](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account)".

{% data reusables.sponsors.navigate-to-github-sponsors %} {% data reusables.sponsors.view-eligible-accounts %}
3. À direita da sua organização, clique em **Ingressar na lista de espera**.
{% data reusables.sponsors.contact-info %} {% data reusables.sponsors.accept-legal-terms %}

## Preencher seu perfil de organização patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-profile-tab %} {% data reusables.sponsors.short-bio %} {% data reusables.sponsors.add-introduction %} {% data reusables.sponsors.meet-the-team %} {% data reusables.sponsors.edit-featured-work %} {% data reusables.sponsors.opt-in-to-being-featured %} {% data reusables.sponsors.save-profile %}

## Criar camadas de patrocínio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.navigate-to-sponsor-tiers-tab %} {% data reusables.sponsors.click-add-tier %} {% data reusables.sponsors.tier-price-description %} {% data reusables.sponsors.add-welcome-message %} {% data reusables.sponsors.save-tier-draft %} {% data reusables.sponsors.review-and-publish-tier %} {% data reusables.sponsors.add-more-tiers %}

## Enviando informações bancárias

Como organização patrocinada, você receberá pagamentos para uma conta bancária em uma região compatível. Esta pode ser uma conta bancária dedicada à sua organização ou a uma conta bancária pessoal. Obtenha uma conta bancária empresarial por meio de serviços como o [Stripe Atlas](https://stripe.com/atlas) ou ingresse em um host fiscal como o [Open Collective](https://opencollective.com/). A pessoa que criou o {% data variables.product.prodname_sponsors %} para a organização também deve morar na mesma região suportada. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.create-stripe-account %}

Para obter mais informações sobre como configurar o Stripe Connect usando o Open Collective, confira [Como configurar o {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) no Open Collective Docs.

## Enviando suas informações fiscais

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.overview-tab %} {% data reusables.sponsors.tax-form-link %}

## Habilitar a autenticação de dois fatores (2FA, two-factor authentication) na sua conta do {% data variables.product.prodname_dotcom %}

Antes que sua organização possa se tornar uma organização patrocinada, você deverá habilitar a 2FA para sua conta em {% data variables.product.product_location %}. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".

## Enviar seu aplicativo ao {% data variables.product.prodname_dotcom %} para aprovação

{% data reusables.sponsors.navigate-to-sponsors-dashboard %} {% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

## Leitura adicional

- "[Sobre o {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)"
- "[Como receber patrocínios por meio do {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors)"
