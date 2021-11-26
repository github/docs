---
title: Acerca de las mejoras a los nuevos lanzamientos
shortTitle: Acerca de las mejoras
intro: '{% ifversion ghae %}Your enterprise on {% data variables.product.product_name %} is updated with the latest features and bug fixes on a regular basis by {% data variables.product.company_short %}.{% else %}You can benefit from new features and bug fixes for {% data variables.product.product_name %} by upgrading your enterprise to a newly released version.{% endif %}'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Upgrades
---

{% data variables.product.product_name %} is constantly improving, with new functionality and bug fixes introduced through feature and patch releases. {% ifversion ghae %}{% data variables.product.prodname_ghe_managed %} es un servicio completamente administrado, así que {% data variables.product.company_short %} completa el proceso de mejora para tu empresa.{% endif %}

Feature releases include new functionality and feature upgrades and typically occur quarterly. {% ifversion ghae %}{% data variables.product.company_short %} will upgrade your enterprise to the latest feature release. Se te notificará previamente sobre cualquier tiempo de inactividad que se planee para tu empresa.{% endif %}

{% ifversion ghes %}

Starting with {% data variables.product.prodname_ghe_server %} 3.0, all feature releases begin with at least one release candidate. Release candidates are proposed feature releases, with a complete feature set. Puede que haya errores o problemas en un lanzamiento candidato que solo pueden encontrarse mediante la retroalimentación de los clientes que actualmente utilizan {% data variables.product.product_name %}.

Puedes obtener acceso a las últimas características si pruebas un candidato de lanzamiento tan pronto como esté disponible. Puedes actualizarte a un candidato de lanzamiento desde una versión compatible y puedes actualizar desde el candidato de lanzamiento a versiones posteriores cuando éstas se lancen. Deberías actualizar cualquier ambiente que ejecute un lanzamiento candidato tan pronto como dicho lanzamiento esté disponible en general. Para obtener más información, consulta la sección "[requisitos de actualización](/admin/enterprise-management/upgrade-requirements)".

Los candidatos de lanzamiento deben desplegarse en ambientes de montaje o de pruebas. Conforme pruebes un candidato de lanzamiento, por favor, proporciona retroalimentación contactando a soporte. Para obtener más información, consulta la sección "[Trabajar con {% data variables.contact.github_support %}](/admin/enterprise-support)".

Utilizaremos tu retroalimentación para aplicar las correcciones de errores y cualquier otro cambio necesario para crear un lanzamiento productivo estable. Cada lanzamiento nuevo agrega correcciones de errores para los problemas de las versiones previas. Cuando el lanzamiento se encuentra listo para que se utilice en general, {% data variables.product.company_short %} publica un lanzamiento productivo estable.

{% endif %}

{% warning %}

**Warning**: The upgrade to a new feature release will cause a few hours of downtime, during which none of your users will be able to use the enterprise. Puedes informar a tus usuarios sobre dicha inactividad si publicas una notificación de anuncio global utilizando la configuración de tu empresa o la API de REST. Para obtener más información, consulta las secciones "[Personalizar los mensajes de usuario en tu instancia](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" y "[administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".

{% endwarning %}

{% ifversion ghes %}

Patch releases, which consist of hot patches and bug fixes only, happen more frequently. Patch releases are generally available when first released, with no release candidates. Upgrading to a patch release typically requires less than five minutes of downtime.

Para mejorar tu empresa a un lanzamiento nuevo, consulta las secciones "[Notas de lanzamiento](/enterprise-server/admin/release-notes)" y "[Mejorar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)".

{% endif %}

## Leer más

- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) en el repositorio `github/roadmap`{% ifversion ghae %}
- [ {% data variables.product.prodname_ghe_managed %} notas de lanzamiento](/admin/release-notes)
{% endif %}
