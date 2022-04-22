---
title: External Groups
intro: 'La API de grupos externos te permite ver los grupos de proveedor de identidad externos que están disponibles para tu organización, así como administrar la conexión entre los grupos externos y los equipos de tu organziación.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

Para utilizar esta API, el usuario autenticado debe ser un mantenedor del equipo o un propietario de la organización asociada con éste.

{% ifversion ghec %}
{% note %}

**Notas:**

- La API de grupos externos solo se encuentra disponible para aquellas organizaciones que sean parte de una empresa que utilice {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[Acerca de los Usuarios Empresariales Administrados](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".
- Si tu organización utiliza la sincronización de equipos, puedes usar la API de Sincronización de Equipos. Para obtener más información, consulta la "[API de sincronización de equipos](#team-synchronization)".

{% endnote %}
{% endif %}
