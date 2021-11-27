---
title: Configurar una prueba de la nube de GitHub Enterprise
intro: 'Puedes probar {% data variables.product.prodname_ghe_cloud %} de manera gratuita.'
redirect_from:
  - /articles/setting-up-a-trial-of-github-enterprise-cloud
  - /github/getting-started-with-github/setting-up-a-trial-of-github-enterprise-cloud
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

### Acerca de las pruebas de {% data variables.product.prodname_ghe_cloud %}

Puedes configurar una prueba de 14 días para evaluar {% data variables.product.prodname_ghe_cloud %} en una cuenta nueva de organización. No es necesario que proporciones un método de pago durante la prueba a menos que agreges aplicaciones de {% data variables.product.prodname_marketplace %} en tu organización que requieran de un método de pago. Para obtener más información, consulta "<a href="/articles/about-billing-for-github-marketplace/" class="dotcom-only">Acerca de la facturación para {% data variables.product.prodname_marketplace %}</a>".

Tu prueba incluye 50 asientos. Si necesitas más plazas para evaluar a {% data variables.product.prodname_ghe_cloud %}, contacta a {% data variables.contact.contact_enterprise_sales %}. Al finalizar la prueba, puedes elegir una cantidad diferente de asientos.

También hay pruebas disponibles para {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Configurar una prueba de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)".

{% data reusables.products.which-product-to-use %}

### Configurar tu prueba de {% data variables.product.prodname_ghe_cloud %}

Antes de poder comenzar con tu prueba de {% data variables.product.prodname_ghe_cloud %}, debes tener una cuenta de usuario existente o crear una nueva cuenta de usuario. Para obtener más información, consulta "<a href="/articles/signing-up-for-a-new-github-account" class="dotcom-only">Iniciar sesión para una nueva cuenta de {% data variables.product.prodname_dotcom %}</a>".

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
4. En "Enterprise", haz clic en **Iniciar tu prueba de 14 días**. ![Botón para iniciar tu prueba](/assets/images/help/organizations/start-trial-button.png)
5. Escribe tu nombre de empresa. ![Campo de nombre de empresa](/assets/images/help/organizations/company-name-field.png)
{% data reusables.organizations.organization-name %}
7. En "Nombre completo", escribe tu nombre completo. ![Campo nombre completo](/assets/images/help/organizations/full-name-field.png)
8. En "Correo electrónico laboral", escribe la dirección de correo electrónico que usas para trabajar. ![Campo correo electrónico laboral](/assets/images/help/organizations/work-email-field.png)
8. Usa el menú desplegable **Industria** y selecciona la industria a la que pertenece tu empresa. ![Menú desplegable Industria](/assets/images/help/organizations/industry-drop-down.png)
9. Usa el menú desplegable **Cantidad de empleados** y selecciona la cantidad de empleados de tu empresa. ![Menú desplegable Cantidad de empleados](/assets/images/help/organizations/employees-drop-down.png)
10. Revisa el <a href="/articles/github-enterprise-cloud-evaluation-agreement" class="dotcom-only">Acuerdo de licencia de evaluación</a>, luego haz clic en **Next** (Siguiente).

### Explorar {% data variables.product.prodname_ghe_cloud %}

Una vez configurada tu prueba de 15 días, puedes explorar {% data variables.product.prodname_ghe_cloud %} siguiendo la [Guía de incorporación de empresas](https://resources.github.com/enterprise-onboarding/).

{% data reusables.products.product-roadmap %}

### Finalizar tu prueba

Puedes comprar {% data variables.product.prodname_enterprise %} o bajar de categoría a {% data variables.product.prodname_team %} en cualquier momento durante tu prueba.

Si no compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %} antes de que termine tu periodo de prueba, tu organización bajará a {% data variables.product.prodname_free_team %} y perderá acceso a cualquier tipo de herramienta o características que solo se incluya en los productos pagados, incluyendo a los sitios de {% data variables.product.prodname_pages %} que se publican desde esos repositorios privados. Si no planeas mejorar tu plan, para evitar perder acceso a estas características avanzadas, haz públicos los repositorios antes de que termine tu periodo de prueba. Para obtener más información, consulta "[Configurar la visibilidad de un repositorio](/articles/setting-repository-visibility)".

El bajar de categoría a {% data variables.product.prodname_free_team %} en organizaciones también inhabilita cualquier configuración de SAML durante el periodo de prueba. Una vez que compras {% data variables.product.prodname_enterprise %} o {% data variables.product.prodname_team %}, tus parámetros de SAML serán activados nuevamente para que los usuarios de tu organización los autentiquen.


{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
5. Debajo de "{% data variables.product.prodname_ghe_cloud %} Free Trial" (Prueba gratis de {% data variables.product.prodname_ghe_cloud %}), haz clic en **Buy Enterprise** (Comprar empresa) o **Downgrade to Team** (Bajar de categoría a equipo). ![Botones Comprar Enterprise y Bajar de categoría a Team](/assets/images/help/organizations/finish-trial-buttons.png)
6. Sigue las indicaciones para ingresar tu método de pago, a continuación haz clic en **Enviar**.

### Leer más

- "[Configurar una prueba de {% data variables.product.prodname_ghe_server %}](/articles/setting-up-a-trial-of-github-enterprise-server)"
