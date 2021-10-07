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
topics:
  - GitHub Apps
shortTitle: Límites de tasa
---

## Solicitudes de servidor a servidor

{% ifversion fpt %}

Different server-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account.

### Límites de tasa normales de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion fpt %}

### Límites de tasa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_github_apps %} that are installed on an organization or repository owned by a {% data variables.product.prodname_ghe_cloud %} account and make server-to-server requests have a rate limit of 15,000 requests per hour.

{% endif %}

## Solicitudes de usuario a servidor

{% data variables.product.prodname_github_apps %} can also act [on behalf of a user](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps), making user-to-server requests.

{% ifversion fpt %}

Different user-to-server request rate limits apply to {% data variables.product.prodname_github_apps %} if the app is installed on organizations or repositories owned by a {% data variables.product.prodname_ghe_cloud %} account and the authenticated user also belongs to the same {% data variables.product.prodname_ghe_cloud %} account.

### Límites de tasa normales de usuario a servidor

{% endif %}

Las solicitudes de usuario a servidor tienen un límite de tasa de 5,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó éste usuario, los tokens de acceso personal que le pertenecen, y las solicitudes que se autenticaron con su{% ifversion ghae %} token{% else %} nombre de usuario y contraseña{% endif %} comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% ifversion fpt %}

### Límites de tasa de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

Cuando un usuario pertenece a una cuenta de {% data variables.product.prodname_ghe_cloud %}, las solicitudes de usuario a servidor para los recursos que pertenecen a la misma cuenta de {% data variables.product.prodname_ghe_cloud %} tienen un límite de tasa de 15,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó este usuario, los tokens de acceso personal que le pertenezcan, y las solicitudes de {% data variables.product.prodname_ghe_cloud %} que se autenticaron con el nombre de usuario y contraseña del mismo, comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% endif %}

Para obtener información más detallada acerca de los límites de tasa, consulta la sección "[Limitaciones a las tasas](/rest/overview/resources-in-the-rest-api#rate-limiting)" para la API de REST y "[Limitaciones a los recursos](/graphql/overview/resource-limitations)" para la API de GraphQL.
