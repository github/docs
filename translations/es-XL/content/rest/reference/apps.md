---
title: Aplicaciones
redirect_from:
  - /v3/apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

La API de GitHub Apps te permite obtener información de alto nivel acerca de una GitHub App así como la información específica acerca de las instalaciones de la misma. Para conocer más sobre las GitHub Apps, consulta la sección "[Autenticarte como una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)".

{% data reusables.apps.general-apps-restrictions %}

Esta página lista las terminales a las que puedes acceder mientras te autenticas como una GitHub App. Consulta la sección "[Autenticarse como una GitHub App](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)" para conocer más.

Cuando estás autenticado como una GitHub App, la API de GitHub Apps te habilita para obtener información de alto nivel sobre una GitHub App así como para obtener información específica sobre las instalaciones de éstas.

Puedes acceder a las terminales de la API v3 de REST mientras estás autenticado como una GitHub App. Estas terminales tienen una sección de "Notas" que contiene una viñeta que dice "Funciona con las GitHub Apps". También puedes acceder a estas terminales mientras estás autenticado como un usuario.

Un subconjunto de terminales de la API v3 de REST requiere que te autentiques como una instalación de una GitHub App. Consulta las [Instalaciones](/v3/apps/installations/) para obtener una lista de estas terminales.

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## API de las Aplicaciones de OAuth

Puedes utilizar esta API para administrar los tokens de OAuth que utiliza una aplicación de OAuth para acceder a las cuentas de {% data variables.product.prodname_dotcom %} de las personas.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'oauth-applications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Instalaciones

La API de instalaciones te habilita para obtener información acerca de las instalaciones de tu GitHub App y para realizar acciones dentro de esas instalaciones. Una _instalación_ se refiere a cualquier cuenta de usuario o de organización que tenga la app instalada. Para obtener más información sobre cómo autenticarte como una instalación y limitar el acceso a repositorios específicos, consulta la sección "[Autenticarte como una instalación](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Para listar las instalaciones de una GitHub App para una organización, consulta la sección "[Listar instalaciones de la app para una organización](/v3/orgs/#list-app-installations-for-an-organization)".
{% endif %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'installations' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Marketplace

Para obtener más información acerca de {% data variables.product.prodname_marketplace %}, consulta "[GitHub Marketplace](/marketplace/)".

La API de {% data variables.product.prodname_marketplace %} te permite ver qué clientes están utilizando un plan de precios, ver sus compras y también ver si una cuenta tiene una suscripción activa.

### Hacer pruebas con terminales de muestra

Esta API incluye terminales que te permiten [probar tu {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/) con **datos de muestra**. Los datos de muestra son datos falsos y preprogramados que no cambiarán con base en las suscripciones reales.

Para hacer pruebas con estos datos, utiliza una terminal de muestra en vez de su contraparte productiva. Esto te permite probar si la lógica de la API tendrá éxito antes de listar tus {% data variables.product.prodname_github_app %} en {% data variables.product.prodname_marketplace %}.

Asegúrate de reemplazar tus terminales de muestra con aquellas productivas antes de desplegar tu {% data variables.product.prodname_github_app %}.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'marketplace' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
