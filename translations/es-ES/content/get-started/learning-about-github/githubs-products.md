---
title: Productos de GitHub
intro: 'Información general de los productos y planes de precio de {% data variables.product.prodname_dotcom %}.'
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
ms.openlocfilehash: e2965befe319637296361e270646cd331478ae44
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160043'
---
## Acerca de los productos de {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} ofrece productos gratuitos y de pago para clasificar y colaborar con código. Algunos productos se aplican solo para cuentas personales, mientras que otros planes se aplican solo a cuentas empresariales o de organización. Para más información sobre las cuentas, vea "[Tipos de cuentas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

Puedes ver los precios y una lista completa de las funciones de cada producto en <{% data variables.product.pricing_url %}>. {% data reusables.products.product-roadmap %}

Cuando leas los {% data variables.product.prodname_docs %}, asegúrate de seleccionar la versión que refleja tu producto. Para más información, vea "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs)".

## {% data variables.product.prodname_free_user %} para cuentas personales

Con {% data variables.product.prodname_free_team %} para cuentas personales, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un conjunto completo de características, y en repositorios privados ilimitados con un conjunto limitado de características.

Con {% data variables.product.prodname_free_user %}, tu cuenta personal incluye lo siguiente:
- {% data variables.product.prodname_gcf %}
- {% data variables.product.prodname_dependabot_alerts %}
- Aplicación de la autenticación en dos fases
- 2000 minutos de {% data variables.product.prodname_actions %} al mes 
- 500 MB de almacenamiento de {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 120 horas por núcleos de {% data variables.product.prodname_github_codespaces %} al mes
- 15 GB de almacenamiento de {% data variables.product.prodname_github_codespaces %} al mes {% endif %}

## {% data variables.product.prodname_pro %}

Además de las características disponibles con {% data variables.product.prodname_free_user %} para cuentas personales, {% data variables.product.prodname_pro %} incluye lo siguiente:
- {% data variables.contact.github_support %} por correo electrónico
- 3000 minutos de {% data variables.product.prodname_actions %} al mes 
- 2 GB de almacenamiento de {% data variables.product.prodname_registry %} {% ifversion fpt or ghec%}
- 180 horas por núcleos de {% data variables.product.prodname_github_codespaces %} al mes
- 20 GB de almacenamiento de {% data variables.product.prodname_github_codespaces %} al mes {% endif %}
- Herramientas y perspectivas avanzadas en repositorios privados:
  - Necesidad de revisores de solicitudes de incorporación de cambios
  - Varios revisores de solicitudes de incorporación de cambios
  - Ramas protegidas
  - Propietarios del código
  - Referencias vinculadas automáticamente
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficas de perspectivas del repositorio: Pulso, colaboradores, tráfico, confirmaciones, frecuencia del código, red, y bifurcaciones

## {% data variables.product.prodname_free_team %} para organizaciones

Con {% data variables.product.prodname_free_team %} para organizaciones, puedes trabajar con colaboradores ilimitados en repositorios públicos ilimitados con un juego completo de características, o en repositorios privados ilimitados con un conjunto limitado de características.

Además de las características disponibles con {% data variables.product.prodname_free_user %} para cuentas personales, {% data variables.product.prodname_free_team %} para organizaciones incluye lo siguiente:
- {% data variables.product.prodname_gcf %}
- Discusiones de equipo
- Controles de acceso al equipo para administrar los grupos
- 2000 minutos de {% data variables.product.prodname_actions %} al mes 
- 500 MB de almacenamiento de {% data variables.product.prodname_registry %} 

## {% data variables.product.prodname_team %}

Adicionalmente a las características disponibles con {% data variables.product.prodname_free_team %} para organizaciones, {% data variables.product.prodname_team %} incluye:
- {% data variables.contact.github_support %} por correo electrónico
- 3000 minutos de {% data variables.product.prodname_actions %} al mes 
- 2 GB de almacenamiento de {% data variables.product.prodname_registry %} 
- Herramientas y perspectivas avanzadas en repositorios privados:
  - Necesidad de revisores de solicitudes de incorporación de cambios
  - Varios revisores de solicitudes de incorporación de cambios
  - Borrador de solicitudes de incorporación de cambios
  - Revisores de solicitudes de incorporación de cambios en equipo
  - Ramas protegidas
  - Propietarios del código
  - Avisos programados
  - {% data variables.product.prodname_pages %}
  - Wikis
  - Gráficos de información del repositorio: pulso, colaboradores, tráfico, confirmaciones, frecuencia del código, red y bifurcaciones {%- ifversion fpt or ghec %}
- La opción para habilitar {% data variables.product.prodname_github_codespaces %}
  - Los propietarios de organizaciones pueden habilitar los {% data variables.product.prodname_github_codespaces %} para la organización si configuran un límite de gastos y otorgan permisos de usuario para los miembros de su organziación. Para más información, consulta ["Habilitación de {% data variables.product.prodname_github_codespaces %} para la organización](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)".
{%- endif %}

{% data variables.product.company_short %} factura por {% data variables.product.prodname_team %} en una modalidad "por usuario". Para obtener más información, vea "[Acerca de los precios por usuario]({% ifversion not fpt %}/free-pro-team@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing){% ifversion fpt %}".{% else %}" en la documentación de las versiones Gratuita, Pro, y de Equipo.{% endif %}

{% data reusables.actions.actions-billing %}

## {% data variables.product.prodname_enterprise %}

{% data variables.product.prodname_enterprise %} incluye dos opciones de despliegue: hospedado en la nuba y auto-hospedado. 

Adicionalmente a las características disponibles con {% data variables.product.prodname_team %}, {% data variables.product.prodname_enterprise %} incluye:
- {% data variables.contact.enterprise_support %}
- Controles de seguridad, cumplimiento e implementación adicionales
- Autenticación con inicio de sesión único de SAML
- Acceso al aprovisionamiento con SAML o SCIM
- {% data variables.product.prodname_github_connect %}
- La opción para comprar {% data variables.product.prodname_GH_advanced_security %}. Para más información, consulte "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)".

{% data variables.product.prodname_ghe_cloud %} también incluye lo siguiente:
- {% data variables.contact.enterprise_support %}. Para obtener más información, vea "<a href="/articles/github-enterprise-cloud-support" class="dotcom-only">Soporte técnico de {% data variables.product.prodname_ghe_cloud %}</a>" y "<a href="/articles/github-enterprise-cloud-addendum" class="dotcom-only">Anexo de {% data variables.product.prodname_ghe_cloud %}</a>".
- 50 000 minutos de {% data variables.product.prodname_actions %} al mes 
- 50 GB de almacenamiento de {% data variables.product.prodname_registry %} 
- Control de acceso para los sitios de {% data variables.product.prodname_pages %}. Para más información, vea "[Cambio de la visibilidad del sitio de {% data variables.product.prodname_pages %}](/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
- Un contrato de nivel de servicio para un tiempo de actividad mensual del 99,9 %
- La opción de configurar tu empresa para los {% data variables.product.prodname_emus %}, para que puedas aprovisionar y administrar a los miembros con tu proveedor de identidad y restringir sus contribuciones para que solo se hagan en tu empresa. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- La opción de administrar de forma centralizada las políticas y la facturación de múltiples organizaciones {% data variables.product.prodname_dotcom_the_website %} con una cuenta de empresa. Para más información, vea "[Acerca de las cuentas de empresa](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts)".

{% data reusables.enterprise.about-github-for-enterprises %}

Puedes configurar una prueba para evaluar {% data variables.product.prodname_ghe_cloud %}. Para más información, vea "[Configuración de una evaluación gratuita de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/articles/setting-up-a-trial-of-github-enterprise-cloud)".

Para más información sobre cómo hospedar tu propia instancia de {% data variables.product.prodname_ghe_server %}, incluida la configuración de una prueba, consulta "[Acerca de {% data variables.product.prodname_ghe_server %}](/enterprise-server/admin/overview/about-github-enterprise-server)".

## Información adicional

- "[Acerca de los precios por usuario]({% ifversion not ghec %}/enterprise-cloud@latest{% endif %}/billing/managing-billing-for-your-github-account/about-per-user-pricing)"{% ifversion not ghec %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}{% endif %}
