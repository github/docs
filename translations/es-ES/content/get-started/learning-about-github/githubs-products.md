---
title: Productos de GitHub
intro: 'Un resumen de los productos de {% data variables.product.prodname_dotcom %} y de los planes de precios.'
redirect_from:
  - /articles/github-s-products
  - /articles/githubs-products
  - /github/getting-started-with-github/githubs-products
  - /github/getting-started-with-github/learning-about-github/githubs-products
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
---

## Acerca de los productos de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} ofrece productos gratuitos y de pago para clasificar y colaborar con código. Algunos productos aplican solo para cuentas personales, mientras que otros planes aplican solo a cuentas empresariales u organizacionales. Para obtener más información sobre las cuentas, consulta la sección "[Tipos de cuenta de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Puedes ver los precios y una lista completa de las funciones de cada producto en <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

Cuando leas los {% data variables.product.prodname_docs %}, asegúrate de seleccionar la versión que refleja tu producto. Para obtener más información, consulta la sección "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## {% data variables.product.prodname_free_user %} para cuentas personales

Con {% data variables.product.prodname_free_team %} para cuentas personales, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un conjunto de características completo y en repositorios privados ilimitados con un conjunto de características limitado.

Con {% data variables.product.prodname_free_user %}, tu cuenta personal incluye:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Aplicación de la autenticación de dos factores
- 2,000 minutos de {% data variables.product.prodname_actions %}
- 500MB de almacenamiento de {% data variables.product.prodname_registry %}

## {% data variables.product.prodname_pro %}

Adicionalmente a las características disponibles con {% data variables.product.prodname_free_user %} para cuentas personales, {% data variables.product.prodname_pro %} incluye:
- {% data variables.contact.github_support %} por correo electrónico
- 3,000 minutos de {% data variables.product.prodname_actions %}
- 2GB de almacenamiento de {% data variables.product.prodname_registry %}
- Herramientas y perspectivas avanzadas en repositorios privados:
  - Revisores requeridos para solicitudes de extracción
  - Revisores múltiples para solicitudes de extracción
  - Ramas protegidas
  - Propietarios del código
  - Referencias auto-enlazadas
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficos de información del repositorio: pulso, contribuyentes, tráfico, confirmaciones, frecuencia de código, red y bifurcaciones

## {% data variables.product.prodname_free_team %} para organizaciones

Con {% data variables.product.prodname_free_team %} para organizaciones, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un juego completo de características, o en repositorios privados ilimitados con un conjunto limitado de características.

Adicionalmente a las características disponibles con {% data variables.product.prodname_free_user %} para cuentas personales, {% data variables.product.prodname_free_team %} para organizaciones incluye:
- {% data variables.product.prodname_gcf %}
- Debates de equipo
- Controles de acceso del equipo para administrar grupos
- 2,000 minutos de {% data variables.product.prodname_actions %}
- 500MB de almacenamiento de {% data variables.product.prodname_registry %}

## {% data variables.product.prodname_team %}

Adicionalmente a las características disponibles con {% data variables.product.prodname_free_team %} para organizaciones, {% data variables.product.prodname_team %} incluye:
- {% data variables.contact.github_support %} por correo electrónico
- 3,000 minutos de {% data variables.product.prodname_actions %}
- 2GB de almacenamiento de {% data variables.product.prodname_registry %}
- Herramientas y perspectivas avanzadas en repositorios privados:
  - Revisores requeridos para solicitudes de extracción
  - Revisores múltiples para solicitudes de extracción
  - Solicitudes de extracción en borrador
  - Revisores de equipo para solicitudes de extracción
  - Ramas protegidas
  - Propietarios del código
  - Recordatorios programados
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficos de información del repositorio: pulso, contribuyentes, tráfico, confirmaciones, frecuencia de código, red y bifurcaciones
{%- ifversion fpt or ghec %}
- La opción para habilitar {% data variables.product.prodname_github_codespaces %}
  - Los propietarios de organizaciones pueden habilitar los {% data variables.product.prodname_github_codespaces %} para la organización si configuran un límite de gastos y otorgan permisos de usuario para los miembros de su organziación. Para obtener más información, consulta la sección "[Habilitar los Codespaces para tu organización](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)".
{%- endif %}

{% data variables.product.company_short %} factura por {% data variables.product.prodname_team %} en una modalidad "por usuario". Para obtener más información, consulta la sección "[Acerca de los precios por usuario]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}".{% else %}" en la documentación de los tipos de cuenta gratuito, Pro & de equipo.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} incluye dos opciones de despliegue: hospedado en la nuba y auto-hospedado.

Adicionalmente a las características disponibles con {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} incluye:
- {% data variables.contact.enterprise_support %}
- Controles de seguridad, cumplimiento e implementación adicionales
- Autenticación con inicio de sesión único SAML
- Provisión de acceso con SAML o SCIM
- {% data variables.product.prodname_github_connect %}
- La opción para comprar {% data variables.product.prodname_GH_advanced_security %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% data variables.product.prodname_ghe_cloud %} también incluye lo siguiente:
- {% data variables.contact.enterprise_support %}. Para obtener más información, consulta "<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} soporte</a>" y "<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">{% data variables.product.prodname_ghe_cloud %} Adenda</a>."
- 50,000 minutos de {% data variables.product.prodname_actions %}
- 50GB de almacenamiento de {% data variables.product.prodname_registry %}
- Control de acceso para los sitios de {% data variables.product.prodname_pages %}. Para obtener más información, consulta la sección "<a href="/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site" class="dotcom-only">Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}</a>"
- Un acuerdo de nivel de servicio del 99.9% de tiempo activo mensual
- La opción de configurar tu empresa para los {% data variables.product.prodname_emus %}, para que puedas aprovisionar y administrar a los miembros con tu proveedor de identidad y restringir sus contribuciones para que solo se hagan en tu empresa. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- La opción de administrar de forma centralizada las políticas y la facturación de múltiples organizaciones {% data variables.product.prodname_dotcom_the_website %} con una cuenta de empresa. Para obtener más información, consulta "[Acerca de las cuentas de empresa](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

{% data variables.product.company_short %} factura por {% data variables.product.prodname_ghe_cloud %} en una modalidad "por usuario". Para obtener más información, consulta la sección "[Acerca de los precios por usuario]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion ghec %}".{% else %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% endif %}

Puedes configurar una prueba para evaluar {% data variables.product.prodname_ghe_cloud %}. Para obtener más información, consulta "<a href="/articles/setting-up-a-trial-of-github-enterprise-cloud" class="dotcom-only">Configurar una prueba de {% data variables.product.prodname_ghe_cloud %}</a>".

Para obtener más información acerca de hospedar tu propia instancia de [{% data variables.product.prodname_ghe_server %}](https://enterprise.github.com), contacta a {% data variables.contact.contact_enterprise_sales %}. {% data reusables.enterprise_installation.request-a-trial %}
