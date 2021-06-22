---
title: Ver la actividad de implementación de tu repositorio
intro: Puedes ver la información acerca de las implementaciones de tu repositorio completo o de una solicitud de extracción específica.
redirect_from:
  - /articles/viewing-deployment-activity-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

{% note %}

**Nota:** el tablero de implementaciones está actualmente en beta y es susceptible a cambios.

{% endnote %}

Las personas con acceso de lectura a un repositorio pueden ver un resumen de todas las implementaciones actuales y un registro de la actividad de implementación pasada, si el flujo de trabajo de implementación del repositorio está integrado con {% data variables.product.product_name %} a través de las implementaciones API o una app de [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace/category/deployment). Para obtener más información, consulta la sección "[Despliegues](/rest/reference/repos#deployments)".

También puedes ver información de implementación en la pestaña "Conversation" (Conversación) de una solicitud de extracción.

### Ver el tablero de implementaciones

{% data reusables.repositories.navigate-to-repo %}
2. {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}A la derecha de la lista de archivos, haz clic en **Ambientes**. ![Environments on the right of the repository page](/assets/images/help/repository/environments.png){% else %}Sobre la lista de archivos, haz clic en **Ambientes**. ![Environments on top of repository page](/assets/images/help/repository/environments-top.png){% endif %}


### Leer más
 - "[Acerca de las solicitudes de extracción](/articles/about-pull-requests)"
