---
title: Configurar los Patrocinadores de GitHub para tu organización
intro: 'Tu organización puede unirse a {% data variables.product.prodname_sponsors %} para recibir pagos por tu trabajo.'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
  - /github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-organization
permissions: 'Organization owners can set up {% data variables.product.prodname_sponsors %} for an organization.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Organizations
  - Sponsors profile
  - Open Source
---

### Unirte a {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

Después de recibir una invitación para que tu organización se una a {% data variables.product.prodname_sponsors %} puedes completar los pasos a continuación para que se convierta en una organización patrocinada.

Para unirte a {% data variables.product.prodname_sponsors %} como un colaborador individual independiente a una organización, consulta la sección "[Configurar {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-user-account)".

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
3. A la derecha de tu organización, da clic en **Unirse a la lista de espera**.
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

### Completar un perfil de organización patrocinada

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

### Crear niveles de patrocinio

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

### Emitir tu información bancaria

Como organización patrocinada, deberás recibir pagos en una cuenta bancaria dedicada a tu organización en una región compatible. Puedes obtener una cuenta bancaria comercial a través de servicios como [Open Collective](https://opencollective.com/) y [Stripe Atlas](https://stripe.com/atlas). La región en la cual opera legalmente tu organización y la región de tu cuenta bancaria deberán coincidir. La persona que configura a {% data variables.product.prodname_sponsors %} para la organización debe vivir en la región compatible también. {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

Para obtener más información acerca de cómo configurar Stripe Connect utilizando Open Collective, consulta la sección [Configurar {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors) en los documentos de Open Collective.

### Emitir tu información de facturación

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

### Habilitar la autenticación de dos factores (2FA) en tu cuenta {% data variables.product.prodname_dotcom %}

Antes de que tu organización pueda convertirse en patrocinada, deberás habilitar la autenticación de dos factores en tu cuenta de {% data variables.product.product_name %}. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication)".

### Enviar tu aplicación a {% data variables.product.prodname_dotcom %} para su aprobación

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

### Leer más
- "[Acerca de {% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)"
- "[Recibir patrocinios a través de {% data variables.product.prodname_sponsors %}](/sponsors/receiving-sponsorships-through-github-sponsors)".
