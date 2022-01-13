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

## Solicitudes de servidor a servidor

{% ifversion ghec %}

Los límites de tasa para las solicitudes de servidor a servidor que hace {% data variables.product.prodname_github_apps %} dependen de si la app está instalada o no. Si la app está instalada en los repositorios u organizaciones que pertenecen a una empresa en {% data variables.product.product_location %}, entonces la tasa es más alta que para aquellas instalaciones que están fuera de una empresa.

### Límites de tasa normales de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion ghec %}

### Límites de tasa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

Las {% data variables.product.prodname_github_apps %} que se instalan en una organización o repositorio que pertenece a una empresa en {% data variables.product.product_location %} tienen un límite de tasa de 15,000 solicitudes por hora para las solicitudes de servidor a servidor.

{% endif %}

## Solicitudes de usuario a servidor

Las {% data variables.product.prodname_github_apps %} también pueden actuar [en nombre de un usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps) al hacer solicitudes de usuario a servidor.

{% ifversion ghec %}

Los límites de tasa para las solicitudes de usuario a servidor que hace {% data variables.product.prodname_github_apps %} dependen de donde se instala la app. Si la app está instalada en los repositorios u organizaciones que pertenecen a una empresa en {% data variables.product.product_location %}, entonces la tasa es más alta que para aquellas instalaciones que están fuera de una empresa.

### Límites de tasa normales de usuario a servidor

{% endif %}

El límite de tasa de las solicitudes de usuario a servidor es de {% ifversion ghae %}15,000{% else %}5,000{% endif %} solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó éste usuario, los tokens de acceso personal que le pertenecen, y las solicitudes que se autenticaron con su{% ifversion ghae %} token{% else %} nombre de usuario y contraseña{% endif %} comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% ifversion ghec %}

### Límites de tasa de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

Cuando un usuario pertenece a una empresa en {% data variables.product.product_location %}, las solicitudes de usuario a servidor que pertenecen a la misma empresa tienen un límite de tasa de 15,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorice este usuario, tokens de acceso personal que le pertenezcan y solicitudes autenticadas con su nombre de usuario y contraseña compartirán la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% endif %}

Para obtener información más detallada acerca de los límites de tasa, consulta la sección "[Limitaciones a las tasas](/rest/overview/resources-in-the-rest-api#rate-limiting)" para la API de REST y "[Limitaciones a los recursos]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/overview/resource-limitations)" para la API de GraphQL.
