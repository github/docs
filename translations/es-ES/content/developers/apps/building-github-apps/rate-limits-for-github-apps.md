---
title: Límites de tasa para las GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps
  - /apps/building-github-apps/rate-limits-for-github-apps
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
  - /developers/apps/rate-limits-for-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Límites de tasa
---

{% data reusables.enterprise.rate_limit %}

{% data reusables.rest-api.always-check-your-limit %}

{% ifversion ghec or fpt %}

## Acerca de los límites de tasa para las apps

Los límites de tasa para las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_apps %} dependen del plan para la organización en donde instalaste la aplicación. Para obtener más información, consulta las secciones "[Productos de {% data variables.product.company_short %}](/get-started/learning-about-github/githubs-products)" y "[Tipos de cuentas de {% data variables.product.company_short %}](/get-started/learning-about-github/types-of-github-accounts#organization-accounts)".

{% endif %}

## Solicitudes de servidor a servidor

{% ifversion ghec or fpt %}

### Límites de tasa predeterminados de servidor a servidor para {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

Las {% data variables.product.prodname_github_apps %} que hagan solicitudes de servidor a servidor utilizan el límite de tasa mínimo de la instalación, el cual es de 5,000 solicitudes por hora. Si una aplicación se instala en una organización con más de 20 usuarios, esta recibirá otras 50 solicitudes por hora para cada uno de ellos. Las instalaciones que tienen más de 20 repositorios reciben otras 50 solicitudes adicionales por hora para cada repositorio. El límite de tasa máximo para una instalación es de 12,500 solicitudes por hora.

{% ifversion fpt or ghec %}

### Límites de tasa de servidor a servidor para {% data variables.product.prodname_ghe_cloud %}

{% endif %}

{% ifversion fpt or ghec %}

Las {% data variables.product.prodname_github_apps %} que se instalan en una organización o repositrio dentro de una empresa en {% data variables.product.product_location %} están sujetas a un límite de 15,000 solicitudes por hora.

{% endif %}

## Solicitudes de usuario a servidor

Las {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} también pueden actuar en nombre de un usuario, haciendo solicitudes de usuario a servidor después de que el usuario autorice la app. Para obtener más información, consulta la sección "[Autorizar {% data variables.product.prodname_github_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-github-apps)" y "[Autorizar {% data variables.product.prodname_oauth_apps %}](/authentication/keeping-your-account-and-data-secure/authorizing-oauth-apps)".

Las solicitudes de usuario a servidor desde {% data variables.product.prodname_oauth_apps %} se autentican con un token de OAuth. Las solicitudes de usuario a servidor de {% data variables.product.prodname_github_apps %} se autentican ya sea con un token de OAuth o con un token de acceso de usuario con vencimiento. Para obtener más información, consulta las secciones "[Identificar y autorizar a los usuarios para {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#identifying-and-authorizing-users-for-github-apps)" y "[Autorizar las {% data variables.product.prodname_oauth_apps %}](/developers/apps/building-oauth-apps/authorizing-oauth-apps)".

{% ifversion fpt or ghec %}

### Límites predeterminados de usuario a servidor de {% data variables.product.prodname_dotcom_the_website %}

{% endif %}

{% ifversion ghec %}

Los límites de tasa para las solicitudes de usuario a servidor que hace {% data variables.product.prodname_github_apps %} dependen de donde se instala la app. Si la app está instalada en los repositorios u organizaciones que pertenecen a una empresa en {% data variables.product.product_location %}, entonces la tasa es más alta que para aquellas instalaciones que están fuera de una empresa.

{% endif %}

{% data reusables.apps.user-to-server-rate-limits %}

{% ifversion fpt or ghec %}

### Límites de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data reusables.apps.user-to-server-rate-limits-ghec %}

{% endif %}

## Leer más

- "[Límites de tasa](/rest/overview/resources-in-the-rest-api#rate-limiting)" en la documentación de la API de REST
- "[Resource limitations](/graphql/overview/resource-limitations)" en la documentación de la API de GraphQL
