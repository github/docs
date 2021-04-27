---
title: Límites de tasa para las GitHub Apps
intro: '{% data reusables.shortdesc.rate_limits_github_apps %}'
redirect_from:
  - /early-access/integrations/rate-limits/
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-rate-limits-for-github-apps/
  - /apps/building-github-apps/rate-limits-for-github-apps/
  - /apps/building-github-apps/understanding-rate-limits-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - github apps
---

### Solicitudes de servidor a servidor

{% if currentVersion == "free-pro-team@latest" %}

Se aplicarán límites de tasa diferentes para las solicitudes de servidor a servidor en las {% data variables.product.prodname_github_app %}s si la app se encuentra instalada en organizaciones o repositorios que pertenezcan a una cuenta de {% data variables.product.prodname_ghe_cloud %}.

#### Límites de tasa normales de servidor a servidor

{% endif %}

{% data reusables.apps.api-rate-limits-non-ghec %}

{% if currentVersion == "free-pro-team@latest" %}

#### Límites de tasa de servidor a servidor de {% data variables.product.prodname_ghe_cloud %}

Las {% data variables.product.prodname_github_app %}s que se instalen en un repositorio de organización que pertenezca a una cuenta de {% data variables.product.prodname_ghe_cloud %} y haga solicitudes de servidor a servidor tiene un límite de tasa de 15,000 solicitudes por hora.

{% endif %}

### Solicitudes de usuario a servidor

Las {% data variables.product.prodname_github_app %} también pueden actuar [en nombre de un usuario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-and-authorizing-users-for-github-apps) al hacer solicitudes de usuario a servidor.

{% if currentVersion == "free-pro-team@latest" %}

Se aplicarán límites de tasa diferentes para las solicitudes de usuario a servidor en las {% data variables.product.prodname_github_app %}s si la app se encuentra instalada en organizaciones o repositorios que pertenezcan a una cuenta de {% data variables.product.prodname_ghe_cloud %} y el usuario autenticado también pertenece a dicha cuenta de {% data variables.product.prodname_ghe_cloud %}.

#### Límites de tasa normales de usuario a servidor

{% endif %}

Las solicitudes de usuario a servidor tienen un límite de tasa de 5,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó éste usuario, los tokens de acceso personal que le pertenecen, y las solicitudes que se autenticaron con su{% if currentVersion == "github-ae@latest" %} token{% else %} nombre de usuario y contraseña{% endif %} comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% if currentVersion == "free-pro-team@latest" %}

#### Límites de tasa de usuario a servidor de {% data variables.product.prodname_ghe_cloud %}

Cuando un usuario pertenece a una cuenta de {% data variables.product.prodname_ghe_cloud %}, las solicitudes de usuario a servidor para los recursos que pertenecen a la misma cuenta de {% data variables.product.prodname_ghe_cloud %} tienen un límite de tasa de 15,000 solicitudes por hora y por usuario autenticado. Todas las aplicaciones de OAuth que autorizó este usuario, los tokens de acceso personal que le pertenezcan, y las solicitudes de {% data variables.product.prodname_ghe_cloud %} que se autenticaron con el nombre de usuario y contraseña del mismo, comparten la misma cuota de 5,000 solicitudes por hora para dicho usuario.

{% endif %}

Para obtener información más detallada acerca de los límites de tasa, consulta la sección "[Limitaciones a las tasas](/rest/overview/resources-in-the-rest-api#rate-limiting)" para la API de REST y "[Limitaciones a los recursos](/graphql/overview/resource-limitations)" para la API de GraphQL.
