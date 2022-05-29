---
title: Visualizar el historial de despliegues
intro: Ver los despliegues actuales y previos de tu repositorio.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Ver el historial de despliegue
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---


Puedes entregar despliegues mediante las {% data variables.product.prodname_actions %} y los ambientes o con la API de REST y las apps de terceros. {% ifversion fpt or ghae ghes > 3.0 or ghec %}Para obtener más información sobre cómo utilizar ambientes para desplegar con {% data variables.product.prodname_actions %}, consulta la sección "[Utilizar ambientes para despliegue](/actions/deployment/using-environments-for-deployment)". {% endif %}Para obtener más información acerca de los despliegues con la API de REST, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".

Para ver los despliegues actuales y pasados, da clic en **Ambientes** en la página principal de tu repositorio.
{% ifversion ghae %}
![Ambientes](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

La página de despliegues muestra el último despliegue activo de cada ambiente para tu repositorio. Si el despliegue incluye una URL de ambiente, se mostrará junto al despliegue un botón de **Ver despliegue** que enlaza a la URL.

La bitácora de actividad muestra el historial de despliegues para tus ambientes. Predeterminadamente, solo el despliegue más reciente de un ambiente tiene un estado de `Active`; todos los despliegues previos tendrán un estado de `Inactive`. Para obtener más información sobre la inactivación automática de despliegues, consulta la sección "[Despliegues inactivos](/rest/reference/deployments#inactive-deployments)".

También puedes utilizar la API de REST para obtener información sobre los despliegues. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".
