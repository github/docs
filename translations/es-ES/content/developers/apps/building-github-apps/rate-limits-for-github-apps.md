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

Se aplicarán límites de tasa diferentes para las solicitudes de servidor a servidor en las {% data variables.product.prodname_github_apps %} si la app se encuentra instalada en organizaciones o repositorios que pertenezcan a una cuenta de {% data variables.product.prodname_ghe_cloud %}.

### Límites de tasa normales de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% ifversion fpt %}

### Límites de tasa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

Las {% data variables.product.prodname_github_apps %} que se instalen en un repositorio de organización que pertenezca a una cuenta de {% data variables.product.prodname_ghe_cloud %} y haga solicitudes de servidor a servidor tiene un límite de tasa de 15,000 solicitudes por hora por organización por instalaciones de la organización o por repositorio por instalaciones de repositorio.

{% endif %}

## Solicitudes de usuario a servidor

Las {% data variables.product.prodname_github_apps %} también pueden actuar [en nombre de un usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps) al hacer solicitudes de usuario a servidor.

{% ifversion fpt %}

Aplicarán límites de tasa para solicitudes de usuario a servidor diferentes a las {% data variables.product.prodname_github_apps %} si la app se instaló en los repositorios u organizaciones que pertenezcan a la cuenta de {% data variables.product.prodname_ghe_cloud %} y el usuario autenticado también pertenecen a la misma cuenta de {% data variables.product.prodname_ghe_cloud %}.

### Límites de tasa normales de usuario a servidor

{% endif %}

Las solicitudes de usuario a servidor tienen un límite de tasa de 5,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó éste usuario, los tokens de acceso personal que le pertenecen, y las solicitudes que se autenticaron con su{% ifversion ghae %} token{% else %} nombre de usuario y contraseña{% endif %} comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% ifversion fpt %}

### Límites de tasa de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

Cuando un usuario pertenece a una cuenta de {% data variables.product.prodname_ghe_cloud %}, las solicitudes de usuario a servidor para los recursos que pertenecen a la misma cuenta de {% data variables.product.prodname_ghe_cloud %} tienen un límite de tasa de 15,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó este usuario, los tokens de acceso personal que le pertenezcan, y las solicitudes de {% data variables.product.prodname_ghe_cloud %} que se autenticaron con el nombre de usuario y contraseña del mismo, comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% endif %}

Para obtener información más detallada acerca de los límites de tasa, consulta la sección "[Limitaciones a las tasas](/rest/overview/resources-in-the-rest-api#rate-limiting)" para la API de REST y "[Limitaciones a los recursos](/graphql/overview/resource-limitations)" para la API de GraphQL.
