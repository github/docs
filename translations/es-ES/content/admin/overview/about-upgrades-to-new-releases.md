---
title: Acerca de las mejoras a los nuevos lanzamientos
shortTitle: Acerca de las mejoras
intro: '{% if currentVersion == "github-ae@latest" %}Tu empresa de {% data variables.product.product_name %} se actualiza constantemente con las últimas características y correcciones de errores mediante {% data variables.product.company_short %}.{% else %}Puedes beneficiarte de las características nuevas y de las correcciones de errores para {% data variables.product.product_name %} si mejoras tu empresa a una versión que se haya lanzado recientemente.{% endif %}'
versions:
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - empresa
---

{% data variables.product.product_name %} está en mejora contínua, con una funcionalidad nueva y correcciones de errores que se presentan mediante lanzamientos mayores y menores. {% if currentVersion == "github-ae@latest" %}{% data variables.product.prodname_ghe_managed %} es un servicio completamente administrado, así que {% data variables.product.company_short %} completa el proceso de mejora para tu empresa.{% endif %}

Los lanzamientos mayores incluyen nuevas funcionalidades y mejoras de características y, habitualmente, ocurren {% if currentVersion == "github-ae@latest" %}cada pocas semanas o meses{% else %} trimestralmente{% endif %}. {% if currentVersion == "github-ae@latest" %}{% data variables.product.company_short %} actualizará tu empresa al último lanzamiento mayor. Se te notificará previamente sobre cualquier tiempo de inactividad que se planee para tu empresa.{% endif %}

{% if enterpriseServerVersions contains currentVersion %}

Iniciando con {% data variables.product.prodname_ghe_server %} 3.0, todos los lanzamientos principales comenzarán con por lo menos un candidato de lanzamiento. Los candidatos de lanzamiento son lanzamientos principales propuestos con un conjunto completo de características. Puede que haya errores o problemas en un lanzamiento candidato que solo pueden encontrarse mediante la retroalimentación de los clientes que actualmente utilizan {% data variables.product.product_name %}.

Puedes obtener acceso a las últimas características si pruebas un candidato de lanzamiento tan pronto como esté disponible. Puedes actualizarte a un candidato de lanzamiento desde una versión compatible y puedes actualizar desde el candidato de lanzamiento a versiones posteriores cuando éstas se lancen. Deberías actualizar cualquier ambiente que ejecute un lanzamiento candidato tan pronto como dicho lanzamiento esté disponible en general. Para obtener más información, consulta la sección "[requisitos de actualización](/admin/enterprise-management/upgrade-requirements)".

Los candidatos de lanzamiento deben desplegarse en ambientes de montaje o de pruebas. Conforme pruebes un candidato de lanzamiento, por favor, proporciona retroalimentación contactando a soporte. Para obtener más información, consulta la sección "[Trabajar con {% data variables.contact.github_support %}](/admin/enterprise-support)".

Utilizaremos tu retroalimentación para aplicar las correcciones de errores y cualquier otro cambio necesario para crear un lanzamiento productivo estable. Cada lanzamiento nuevo agrega correcciones de errores para los problemas de las versiones previas. Cuando el lanzamiento se encuentra listo para que se utilice en general, {% data variables.product.company_short %} publica un lanzamiento productivo estable.

{% endif %}

{% warning %}

**Advertencia**: La actualización a un lanzamiento principal causará algunas horas de inactividad, durante las cuales ningún usuario podrá utilizar la empresa. Puedes informar a tus usuarios sobre dicha inactividad si publicas una notificación de anuncio global utilizando la configuración de tu empresa o la API de REST. Para obtener más información, consulta las secciones "[Personalizar los mensajes de usuario en tu instancia](/admin/user-management/customizing-user-messages-on-your-instance#creating-a-global-announcement-banner)" y "[administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".

{% endwarning %}

{% if enterpriseServerVersions contains currentVersion %}

Los lanzamientos menores, los cuales consisten únicamente de parches y correcciones de errores, ocurren con mayor frecuencia. Los lanzamientos menores se encuentran generalmente disponibles cuando se lanzan por primera vez, sin candidatos de lanzamiento. El mejorar a un lanzamiento menor habitualmente requiere menos de cinco minutos de tiempo de inactividad.

Para mejorar tu empresa a un lanzamiento nuevo, consulta las secciones "[Notas de lanzamiento](/enterprise-server/admin/release-notes)" y "[Mejorar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)".

{% endif %}

### Leer más

- [ {% data variables.product.prodname_roadmap %} ]({% data variables.product.prodname_roadmap_link %}) en el repositorio `github/roadmap`
{% if currentVersion == "github-ae@latest" %}
- [ {% data variables.product.prodname_ghe_managed %} notas de lanzamiento](/admin/overview/github-ae-release-notes)
{% endif %}
