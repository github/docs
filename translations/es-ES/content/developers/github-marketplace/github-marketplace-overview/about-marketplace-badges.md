---
title: Acerca de las insignias de marketplace
intro: 'Aprende sobre las insignias que puedes ver para algunos de los listados de apps y acciones en {% data variables.product.prodname_marketplace %}.'
redirect_from:
  - /developers/github-marketplace/about-verified-creator-badges
  - /developers/github-marketplace/about-marketplace-badges
versions:
  free-pro-team: '*'
---

### Para las GitHub Apps

Algunas apps en {% data variables.product.prodname_marketplace %} tienen la insignia de {% octicon "verified" aria-label="The verified badge" %} y una descripción que dice "Publisher domain and email verified". Esto significa que la app pertenece a una organización que tiene:

- Propiedad verificada del dominio y tiene una insignia verificada en su perfil
- Confirmó su dirección de correo electrónico para que el soporte de {% data variables.product.prodname_dotcom %} pueda contactarla
- Requirió la autenticación bifactorial. Para obtener más información, consulta "[Solicitar la autenticación de dos factores en tu organización](/organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization)".

![Insignia de Marketplace para las GitHub Apps](/assets/images/marketplace/apps-with-verified-publisher-badge-tooltip.png)

{% note %}
{% data variables.product.prodname_dotcom %} no analiza la app. La insignia de marketplace {% octicon "verified" aria-label="The verified badge" %} solo confirma que el publicador cumple con los requisitos que se listan anteriormente.
{% endnote %}

Para aprender cómo puedes agregar esta insignia a tu app, consulta la sección "[Solicitar una verificación de publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)".

Algunas apps en {% data variables.product.prodname_marketplace %} tienen la insignia de {% octicon "verified" aria-label="The verified badge" %} y una descripción que dice "App meets the requirements for listing" instead of, "Publisher domain and email verified." Esto significa que la app cumnple con los requisitos de listado que se describen en "[requisitos para listar una app](/developers/github-marketplace/requirements-for-listing-an-app)", pero no se ha verificado el publicador, tal como se describe en la sección "[Solicitar la verificación de publicador para tu organización](/developers/github-marketplace/applying-for-publisher-verification-for-your-organization)". Las apps con esta insignia no pueden cambiar su plan de precios hasta que el publicador solicite y consiga exitosamente la verificación.

![Insignia de Marketplace para las GitHub Apps](/assets/images/marketplace/apps-with-unverified-publisher-badge-tooltip.png)

Para obtener más información sobre los requisitos para listar una app en {% data variables.product.prodname_marketplace %}, consulta los "[Requisitos para listar una app en {% data variables.product.prodname_marketplace %}](/marketplace/getting-started/requirements-for-listing-an-app-on-github-marketplace/)".

Para obtener información sobre cómo encontrar apps que puedas utilizar, consulta la sección "[Buscar en {% data variables.product.prodname_marketplace %}](/github/searching-for-information-on-github/searching-github-marketplace)".

### Para las GitHub Actions

Las acciones con la {% octicon "verified" aria-label="The verified badge" %} o la insignia de creador verificado indican que {% data variables.product.prodname_dotcom %} ha verificado al creador de esta acción como socio de la organización.

![Insignia de creador verificado para las GitHub Actions](/assets/images/marketplace/verified-creator-badge-for-actions.png)

Para obtener más información sobre cómo publicar GitHub Actions en {% data variables.product.prodname_marketplace %}, consulta la sección "[Publicar acciones en GitHub Marketplace](/actions/creating-actions/publishing-actions-in-github-marketplace)".
