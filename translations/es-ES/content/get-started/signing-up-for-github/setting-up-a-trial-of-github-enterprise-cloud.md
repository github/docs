---
title: Configurar una prueba de la nube de GitHub Enterprise
intro: 'Puedes probar {% data variables.product.prodname_ghe_cloud %} de manera gratuita.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/signing-up-for-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Prueba de Entreprise Cloud
---

{% data reusables.enterprise.ghec-cta-button %}


## Acerca de {% data variables.product.prodname_ghe_cloud %}

{% data reusables.organizations.about-organizations %}

You can use organizations for free with {% data variables.product.prodname_free_team %}, which includes limited features. For additional features, such as SAML single sign-on (SSO), access control for {% data variables.product.prodname_pages %}, and included {% data variables.product.prodname_actions %} minutes, you can upgrade to {% data variables.product.prodname_ghe_cloud %}. For a detailed list of the features available with {% data variables.product.prodname_ghe_cloud %}, see our [Pricing](https://github.com/pricing) page.

{% data reusables.saml.saml-accounts %}Para obtener más información, consulta "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML</a>".

{% data reusables.products.which-product-to-use %}

## Acerca de las pruebas de {% data variables.product.prodname_ghe_cloud %}

You can set up a 14-day trial to evaluate {% data variables.product.prodname_ghe_cloud %}. No es necesario que proporciones un método de pago durante la prueba a menos que agreges aplicaciones de {% data variables.product.prodname_marketplace %} en tu organización que requieran de un método de pago. Para obtener más información, consulta "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Acerca de la facturación para {% data variables.product.prodname_marketplace %}</a>".

Tu prueba incluye 50 asientos. Si necesitas más plazas para evaluar a {% data variables.product.prodname_ghe_cloud %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Al finalizar la prueba, puedes elegir una cantidad diferente de asientos.

También hay pruebas disponibles para {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Configurar una prueba de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

## Configurar tu prueba de {% data variables.product.prodname_ghe_cloud %}

Before you can try {% data variables.product.prodname_ghe_cloud %}, you must be signed into a user account. If you don't already have a user account on {% data variables.product.prodname_dotcom_the_website %}, you must create one. Para obtener más información, consulta "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Iniciar sesión para una nueva cuenta de {% data variables.product.prodname_dotcom %}</a>".

1. Navigate to [{% data variables.product.prodname_dotcom %} for enterprises](https://github.com/enterprise).
1. Click **Start a free trial**. !["Start a free trial" button](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Click **Enterprise Cloud**. !["Enterprise Cloud" button](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Follow the prompts to configure your trial.

## Explorar {% data variables.product.prodname_ghe_cloud %}

Una vez configurada tu prueba de 15 días, puedes explorar {% data variables.product.prodname_ghe_cloud %} siguiendo la [Guía de incorporación de empresas](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

## Finalizar tu prueba

Puedes comprar {% data variables.product.prodname_enterprise %} o bajar de categoría a {% data variables.product.prodname_team %} en cualquier momento durante tu prueba.

Si no compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %} antes de que termine tu periodo de prueba, tu organización bajará a {% data variables.product.prodname_free_team %} y perderá acceso a cualquier tipo de herramienta o características que solo se incluya en los productos pagados, incluyendo a los sitios de {% data variables.product.prodname_pages %} que se publican desde esos repositorios privados. Si no planeas mejorar tu plan, para evitar perder acceso a estas características avanzadas, haz públicos los repositorios antes de que termine tu periodo de prueba. Para obtener más información, consulta "[Configurar la visibilidad de un repositorio](/articles/setting-repository-visibility)".

El bajar de categoría a {% data variables.product.prodname_free_team %} en organizaciones también inhabilita cualquier configuración de SAML durante el periodo de prueba. Una vez que compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %}, tus parámetros de SAML serán activados nuevamente para que los usuarios de tu organización los autentiquen.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Debajo de "{% data variables.product.prodname_ghe_cloud %} Free Trial" (Prueba gratis de {% data variables.product.prodname_ghe_cloud %}), haz clic en **Buy Enterprise** (Comprar empresa) o **Downgrade to Team** (Bajar de categoría a equipo). ![Botones Comprar Enterprise y Bajar de categoría a Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Sigue las indicaciones para ingresar tu método de pago, a continuación haz clic en **Enviar**.
