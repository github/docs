---
title: Respaldar y restablecer GitHub Enterprise Server con GitHub Actions habilitadas
shortTitle: Respaldar y restablecer
intro: 'Los datos de {% data variables.product.prodname_actions %} en tu proveedor de almacenamiento externo no se incluyen en los respaldos normales de {% data variables.product.prodname_ghe_server %} y deben respaldarse por separado.'
versions:
  enterprise-server: '>=3.0'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
---

{% data reusables.actions.enterprise-storage-ha-backups %}

Si utilizas {% data variables.product.prodname_enterprise_backup_utilities %} para respaldar {% data variables.product.product_location %}, es importante que tomes en cuenta que los datos de las {% data variables.product.prodname_actions %} que se almacenan en tu proveedor de almacenamiento externo no se incluyen en el respaldo.

Esta es una vista general de los pasos que se requieren para restablecer {% data variables.product.product_location %} con {% data variables.product.prodname_actions %} para un aplicativo nuevo:

1. Confirmar que el aplicativo original esté fuera de línea.
1. Configurar manualmente los ajustes de red en el aplicativo de reemplazo de {% data variables.product.prodname_ghe_server %}. La configuración de red se excluye de la captura del respaldo y no los sobrescribe el `ghe-restore`.
1. Configura el aplicativo de reemplazo para utilizar la misma configuración de almacenamiento externo de {% data variables.product.prodname_actions %} que el aplicativo original.
1. Habilita {% data variables.product.prodname_actions %} en el aplicativo de reemplazo. Esto conectará el aplicativo de reemplazo al mismo almacenamiento externo de {% data variables.product.prodname_actions %}.
1. Después de que se configure {% data variables.product.prodname_actions %} con el proveedor de almacenamiento externo, utiliza el comando `ghe-restore` para restablecer el resto de los datos del respaldo. Para obtener más información, consulta la sección "[Restablecer un respaldo](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Vuelve a registrar tus ejecutores auto-hospedados en el aplicativo de reemplazo. Para obtener más información, consulta la sección de [Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Para obtener más información sobre respaldar y restablecer {% data variables.product.prodname_ghe_server %}, consulta la sección "[Configurar los respaldos en tu aplicativo](/admin/configuration/configuring-backups-on-your-appliance)".
