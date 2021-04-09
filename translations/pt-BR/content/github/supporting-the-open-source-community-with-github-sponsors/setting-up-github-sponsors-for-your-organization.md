---
title: Configurando o GitHub Sponsors (Patrocinadores do GitHub) para sua organização
intro: 'Sua organização pode ingressar no {% data variables.product.prodname_sponsors %} para receber pagamentos pelo seu trabalho.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
permissions: 'Os proprietários da organização podem configurar o {% data variables.product.prodname_sponsors %} para uma organização.'
versions:
  free-pro-team: '*'
topics:
  - sponsors
---

### Ingressar no {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Depois de receber um convite para sua organização ingressar no {% data variables.product.prodname_sponsors %}, você poderá concluir as etapas abaixo para se tornar uma organização patrocinada.

Para se juntar ao {% data variables.product.prodname_sponsors %} como colaborador individual fora de uma organização, consulte "[Configurando o {% data variables.product.prodname_sponsors %} para sua conta de usuário](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)."

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
3. À direita da sua organização, clique em **Juntar-se à lista de espera**.
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

### Preencher seu perfil de organização patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

### Criar camadas de patrocínio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

### Enviando informações bancárias

Como organização patrocinada, você deve receber pagamentos em uma conta bancária exclusiva para sua organização em uma região apoiada. Você pode ter uma conta bancária jurídica por meio de serviços como [Open Collective](https://opencollective.com/) e [Stripe Atlas](https://stripe.com/atlas). A região em que sua organização opera legalmente e a região da sua conta bancária devem corresponder. A pessoa que criou o {% data variables.product.prodname_sponsors %} para a organização também deve morar na mesma região suportada. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

Para obter mais informações sobre como configurar o Stripe Connect usando o Open Collective, consulte [Configurando {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) no Open Collective Docs.

### Enviando suas informações fiscais

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

### Habilitar a autenticação de dois fatores (2FA, two-factor authentication) na sua conta do {% data variables.product.prodname_dotcom %}

Antes de sua organização se tornar uma organização patrocinada, você deve habilitar a 2FA em sua conta do {% data variables.product.product_name %}. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".

### Enviar seu aplicativo ao {% data variables.product.prodname_dotcom %} para aprovação

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

### Leia mais
- [Sobre o {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)"
- "[Recebendo patrocínio através do {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/receiving-sponsorships-through-github-sponsors)"
