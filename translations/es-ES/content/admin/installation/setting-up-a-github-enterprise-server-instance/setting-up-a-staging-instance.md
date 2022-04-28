---
title: Configurar una instancia de preparación
intro: 'Puedes configurar una instancia de {% data variables.product.product_name %} en un ambiente aislado y separado y utilizarla para validar y probar los cambios.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Configurar una instancia de pruebas
---

## Acerca de las instancias de prueba

{% data variables.product.company_short %} recomienda que configures un ambiente separado para probar los respaldos, actualziaciones o cambios a la configuración de {% data variables.product.product_location %}. Este ambiente, el cual debes aislar de tus sistemas productivos, se denomina ambiente de pruebas.

Por ejemplo, para protegerte contra una pérdida de datos, puedes validar el respaldo de tu instancia productiva frecuentemente. Puedes restablecer el respaldo de tus datos productivos con frecuencia hacia una instancia separada de {% data variables.product.product_name %} en un ambiente de pruebas. En esta instancia de pruebas, también puedes probar la mejora lanzamiento de características más reciente de {% data variables.product.product_name %}.

{% tip %}

**Tip:** Puedes reutilizar tu archivo de licencia existente de {% data variables.product.prodname_enterprise %} siempre y cuando la instancia de pruebas no se utilice en una capacidad de producción.

{% endtip %}

## Consideraciones para un ambiente de pruebas

Para probar {% data variables.product.product_name %} exhaustivamente y recrear un ambiente que sea tan similar a tu ambiente de pruebas como sea posible, considera los sistemas externos que interactúan con tu instancia. Por ejemplo, podrías querer probar lo siguiente en tu ambiente de pruebas.

- La autenticación, especialmente si utilizas un proveedor de autenticación externo como SAML
- La integración con un sistema externo de vales
- La integración con un servidor de integración continua
- Los scripts externos o el software que usan {% data variables.product.prodname_enterprise_api %}
- El servidor externo SMTP para notificaciones por correo electrónico

## Configurar una instancia de preparación

1. Realiza una copia de seguridad de tu instancia de producción utilizando {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta la sección "Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Configura una nueva instancia para que actúe como tu entorno de preparación. Puedes utilizar las mismas guías para aprovisionar e instalar tu instancia de preparación como hiciste para tu instancia de producción. Para obtener más información, consulta "[Configurar una instancia del {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Opcionalmente, si planeas probar la funcionalidad de {% data variables.product.prodname_actions %} en tu ambiente de pruebas, revisa las consideraciones para tus bitácoras y almacenamiento. Para obtener más información, consulta la sección "[Utilizar un ambiente de pruebas](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)".
4. Restaura tu copia de seguridad a tu instancia de preparación. Para obtener más información, consulta la sección "Restaurar una copia de seguridad" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

## Leer más

- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"
