---
title: Configurar una instancia de preparación
intro: 'Puedes utilizar una *instancia de preparación* para probar las modificaciones antes de que se apliquen a {% data variables.product.product_location %}. Por ejemplo, podrías utilizar una instancia de preparación para probar nuevas actualizaciones del {% data variables.product.prodname_ghe_server %} o para practicar importar datos de migración.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
versions:
  enterprise-server: '*'
---

{% tip %}

**Sugerencia:** puedes volver a usar tu archivo de licencia existente de {% data variables.product.prodname_enterprise %} siempre que la instancia de preparación no se use para producción.

{% endtip %}

Para probar en profundidad un aparato del {% data variables.product.prodname_ghe_server %} deberás considerar los sistemas externos que interactúan con este. Algunos factores que considerar probar son:

  - La autenticación, en especial si se está usando un proveedor externo de autenticación
  - La integración con un sistema externo de vales
  - La integración con un servidor de integración continua
  - Los scripts externos o el software que usan {% data variables.product.prodname_enterprise_api %}
  - El servidor externo SMTP para notificaciones por correo electrónico

1. Realiza una copia de seguridad de tu instancia de producción utilizando {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta la sección "Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Configura una nueva instancia para que actúe como tu entorno de preparación. Puedes utilizar las mismas guías para aprovisionar e instalar tu instancia de preparación como hiciste para tu instancia de producción. Para obtener más información, consulta "[Configurar una instancia del {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Restaura tu copia de seguridad a tu instancia de preparación. Para obtener más información, consulta la sección "Restaurar una copia de seguridad" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### Leer más

- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}