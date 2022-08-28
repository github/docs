---
title: Visualizar el historial de despliegues
intro: Ver los despliegues actuales y previos de tu repositorio.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Ver el historial de despliegue
redirect_from:
  - /developers/overview/viewing-deployment-history
---


Puedes entregar despliegues a través de {% ifversion fpt or ghae or ghes > 3.0 %}{% data variables.product.prodname_actions %} y de ambientes o con {% endif %}la API de REST y apps de terceros. {% ifversion fpt or ghae ghes > 3.0 %}For more information about using environments to deploy with {% data variables.product.prodname_actions %}, see "[Using environments for deployment](/actions/deployment/using-environments-for-deployment)." {% endif %}Para obtener más información acerca de los despliegues con la API de REST, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".

Para ver los despliegues actuales y pasados, da clic en **Ambientes** en la página principal de tu repositorio.
{% ifversion ghae or ghes < 3.0 %}
![Ambientes](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

La página de despliegues muestra el último despliegue activo de cada ambiente para tu repositorio. If the deployment includes an environment URL, a **View deployment** button that links to the URL is shown next to the deployment.

La bitácora de actividad muestra el historial de despliegues para tus ambientes. Predeterminadamente, solo el despliegue más reciente de un ambiente tiene un estado de `Active`; todos los despliegues previos tendrán un estado de `Inactive`. Para obtener más información sobre la inactivación automática de despliegues, consulta la sección "[Despliegues inactivos](/rest/reference/repos#inactive-deployments)".

También puedes utilizar la API de REST para obtener información sobre los despliegues. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".
