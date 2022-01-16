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

Puedes utilizar organizaciones gratuitamente con {% data variables.product.prodname_free_team %}, las cuales incluyen características limitadas. Para encontrar características adicionales, tales como el inicio de sesión único (SSO) de SAML, el control de accesos para las {% data variables.product.prodname_pages %} y los minutos incluidos de las {% data variables.product.prodname_actions %}, puedes mejorar a {% data variables.product.prodname_ghe_cloud %}. Para encontrar una lista detallada de características disponibles con {% data variables.product.prodname_ghe_cloud %}, consulta nuestra página de [Precios](https://github.com/pricing).

{% data reusables.saml.saml-accounts %}Para obtener más información, consulta "<a href="/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on" class="dotcom-only">Acerca de la administración de identidad y accesos con el inicio de sesión único de SAML</a>".

{% data reusables.products.which-product-to-use %}

## Acerca de las pruebas de {% data variables.product.prodname_ghe_cloud %}

Puedes configurar un periodo de 14 días para evaluar {% data variables.product.prodname_ghe_cloud %}. No es necesario que proporciones un método de pago durante la prueba a menos que agreges aplicaciones de {% data variables.product.prodname_marketplace %} en tu organización que requieran de un método de pago. Para obtener más información, consulta "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Acerca de la facturación para {% data variables.product.prodname_marketplace %}</a>".

Tu prueba incluye 50 asientos. Si necesitas más plazas para evaluar a {% data variables.product.prodname_ghe_cloud %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Al finalizar la prueba, puedes elegir una cantidad diferente de asientos.

También hay pruebas disponibles para {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Configurar una prueba de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

## Configurar tu prueba de {% data variables.product.prodname_ghe_cloud %}

Antes de probar {% data variables.product.prodname_ghe_cloud %}, debes firmarte en una cuenta de usuario. Si aún no tienes una cuenta de usuario en {% data variables.product.prodname_dotcom_the_website %}, debes crear una. Para obtener más información, consulta "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Iniciar sesión para una nueva cuenta de {% data variables.product.prodname_dotcom %}</a>".

1. Navega a [{% data variables.product.prodname_dotcom %} para empresas](https://github.com/enterprise).
1. Haz clic en **Iniciar una prueba gratuita**. ![Botón de "Comenzar una prueba gratuita"](/assets/images/help/organizations/start-a-free-trial-button.png)
1. Haz clic en **Enterprise Cloud**. ![Botón de "Enterprise Cloud"](/assets/images/help/organizations/enterprise-cloud-trial-option.png)
1. Sigue los mensajes para configurar tu prueba.

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
