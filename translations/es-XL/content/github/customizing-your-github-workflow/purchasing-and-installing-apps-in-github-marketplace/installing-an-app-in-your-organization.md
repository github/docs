---
title: Instalar una app en tu organización
intro: 'Puedes instalar apps desde {% data variables.product.prodname_marketplace %} para utilizar en tu organización.'
redirect_from:
  - /articles/installing-an-app-in-your-organization
  - /github/customizing-your-github-workflow/installing-an-app-in-your-organization
versions:
  free-pro-team: '*'
---
{% data reusables.marketplace.marketplace-apps-only %}

{% data reusables.marketplace.marketplace-org-perms %}

Si eliges un plan pago, pagarás tu suscripción a la app en la fecha de facturación actual de tu organización usando el método de pago existente de tu organización.

{% data reusables.marketplace.free-trials %}

### Instalar una {% data variables.product.prodname_github_app %} en tu organización

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. Si la aplicación requiere acceso a los repositorios, decide si le darás acceso a la aplicación a todos tus repositorios o a determinados repositorios, luego selecciona **All repositories** (Todos los repositorios) o **Only select repositories** (Solo repositorios seleccionados). ![Botones de radio con opciones para instalar una aplicación en todos tus repositorios o en determinados repositorios](/assets/images/help/marketplace/marketplace-choose-repo-install-option.png)
{% data reusables.marketplace.select-installation-repos %}
{% data reusables.marketplace.review-app-perms-install %}

### Instalar una {% data variables.product.prodname_oauth_app %} en tu organización

{% data reusables.saml.saml-session-oauth %}

{% data reusables.marketplace.visit-marketplace %}
{% data reusables.marketplace.browse-to-app %}
{% data reusables.marketplace.choose-plan %}
{% data reusables.marketplace.install-buy %}
{% data reusables.marketplace.confirm-install-account-org %}
{% data reusables.marketplace.add-payment-method-org %}
{% data reusables.marketplace.complete-order-begin-installation %}
8. Revisa la información acerca del acceso de la app a tu cuenta personal, a tus organizaciones y a los datos, luego haz clic en **Authorize application** (Autorizar aplicación).

### Leer más

- "[Actualizar el método de pago de tu organización](/articles/updating-your-organization-s-payment-method)"
- "[Instalar una app en tu cuenta personal](/articles/installing-an-app-in-your-personal-account)"
