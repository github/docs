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
---


Puedes entregar despliegues a través de {% ifversion fpt or ghes > 3.0 %}{% data variables.product.prodname_actions %} y de ambientes o con {% endif %}la API de REST y apps de terceros. {% ifversion fpt or ghes > 3.0 %}Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta la sección "[{% data variables.product.prodname_actions %}](/actions)". {% endif %}Para obtener más información acerca de los despliegues con la API de REST, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".

Para ver los despliegues actuales y pasados, da clic en **Ambientes** en la página principal de tu repositorio.
{% ifversion ghae or ghes < 3.0 %}
![Ambientes](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

La página de despliegues muestra el último despliegue activo de cada ambiente para tu repositorio. Si el despliegue incluye una URL de ambiente, un botón de "Ver despliegue" que enlaza a la URL se mostrará junto a dicho despliegue.

La bitácora de actividad muestra el historial de despliegues para tus ambientes. Predeterminadamente, solo el despliegue más reciente de un ambiente tiene un estado de `Active`; todos los despliegues previos tendrán un estado de `Inactive`. Para obtener más información sobre la inactivación automática de despliegues, consulta la sección "[Despliegues inactivos](/rest/reference/repos#inactive-deployments)".

También puedes utilizar la API de REST para obtener información sobre los despliegues. Para obtener más información, consulta la sección "[Repositorios](/rest/reference/repos#deployments)".
