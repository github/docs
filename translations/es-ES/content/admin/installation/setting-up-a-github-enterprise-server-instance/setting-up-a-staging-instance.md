---
title: Configurar una instancia de preparación
intro: 'You can set up a {% data variables.product.product_name %} instance in a separate, isolated environment, and use the instance to validate and test changes.'
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

## About staging instances

{% data variables.product.company_short %} recommends that you set up a separate environment to test backups, updates, or changes to the configuration for {% data variables.product.product_location %}. This environment, which you should isolate from your production systems, is called a staging environment.

For example, to protect against loss of data, you can regularly validate the backup of your production instance. You can regularly restore the backup of your production data to a separate {% data variables.product.product_name %} instance in a staging environment. On this staging instance, you could also test the upgrade to the latest feature release of {% data variables.product.product_name %}.

{% tip %}

**Tip:** You may reuse your existing {% data variables.product.prodname_enterprise %} license file as long as the staging instance is not used in a production capacity.

{% endtip %}

## Considerations for a staging environment

To thoroughly test {% data variables.product.product_name %} and recreate an environment that's as similar to your production environment as possible, consider the external systems that interact with your instance. For example, you may want to test the following in your staging environment.

- Authentication, especially if you use an external authentication provider like SAML
- La integración con un sistema externo de vales
- La integración con un servidor de integración continua
- Los scripts externos o el software que usan {% data variables.product.prodname_enterprise_api %}
- El servidor externo SMTP para notificaciones por correo electrónico

## Configurar una instancia de preparación

1. Realiza una copia de seguridad de tu instancia de producción utilizando {% data variables.product.prodname_enterprise_backup_utilities %}. Para obtener más información, consulta la sección "Acerca de {% data variables.product.prodname_enterprise_backup_utilities %}" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)."
2. Configura una nueva instancia para que actúe como tu entorno de preparación. Puedes utilizar las mismas guías para aprovisionar e instalar tu instancia de preparación como hiciste para tu instancia de producción. Para obtener más información, consulta "[Configurar una instancia del {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)."
3. Optionally, if you plan to test {% data variables.product.prodname_actions %} functionality in your test environment, review the considerations for your logs and storage. For more information, see "[Using a staging environment](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)."
4. Restaura tu copia de seguridad a tu instancia de preparación. Para obtener más información, consulta la sección "Restaurar una copia de seguridad" en "[Configurar copias de seguridad en tu aparato](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)."

## Leer más

- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"
