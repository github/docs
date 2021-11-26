---
title: Límites de tasa para las GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
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

## Solicitudes de servidor a servidor

{% ifversion ghec %}

The rate limits for server-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Límites de tasa normales de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### Límites de tasa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by an enterprise on {% data variables.product.product_location %} have a rate limit of 15,000 requests per hour for server-to-server requests.

{% endif %}

## Solicitudes de usuario a servidor

Las {% data variables.product.prodname_github_apps %} también pueden actuar [en nombre de un usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps) al hacer solicitudes de usuario a servidor.

{% ifversion ghec %}

The rate limits for user-to-server requests made by {% data variables.product.prodname_github_apps %} depend on where the app is installed. If the app is installed on organizations or repositories owned by an enterprise on {% data variables.product.product_location %}, then the rate is higher than for installations outside an enterprise.

### Límites de tasa normales de usuario a servidor

{% endif %}

User-to-server requests are rate limited at {% ifversion ghae %}15,000{% else %}5,000{% endif %} requests per hour and per authenticated user. Todas las aplicaciones de OAuth que autorizó éste usuario, los tokens de acceso personal que le pertenecen, y las solicitudes que se autenticaron con su{% ifversion ghae %} token{% else %} nombre de usuario y contraseña{% endif %} comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% ifversion ghec %}

### Límites de tasa de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

When a user belongs to an enterprise on {% data variables.product.product_location %}, user-to-server requests to resources owned by the same enterprise are rate limited at 15,000 requests per hour and per authenticated user. Todas las aplicaciones de OAuth que autorice este usuario, tokens de acceso personal que le pertenezcan y solicitudes autenticadas con su nombre de usuario y contraseña compartirán la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% endif %}

Para obtener información más detallada acerca de los límites de tasa, consulta la sección "[Limitaciones a las tasas](/rest/overview/resources-in-the-rest-api#rate-limiting)" para la API de REST y "[Limitaciones a los recursos]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" para la API de GraphQL.
