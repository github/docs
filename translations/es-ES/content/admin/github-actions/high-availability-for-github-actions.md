---
title: Disponibilidad alta para las GitHub Actions
intro: 'Existen algunas especificaciones especiales para administrar las {% data variables.product.prodname_actions %} en una configuración de disponibilidad alta.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

### Replicación o redundancia de tus datos de {% data variables.product.prodname_actions %}

{% data reusables.actions.enterprise-storage-ha-backups %}

Te recomendamos fuertemente que configures el almacenamiento externo de tus {% data variables.product.prodname_actions %} para que utilicen redundancia o replicación. Para obtener más información, refiérete a la documentación de tu proveedor de alamacenamiento:

* [Documentación sobre la redundancia del almacenamiento de Azure](https://docs.microsoft.com/en-us/azure/storage/common/storage-redundancy)
* [Documentación sobre la replicación de Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html)

### Réplicas de disponibilidad alta

#### Promover una réplica

Cuando habilitas la configuración de disponibilidad alta, cualquier réplica se configura automáticamente para utilizar la configuración de almacenamiento externo de {% data variables.product.prodname_actions %}. Si necesitas iniciar una recuperación de fallos para promover una réplica, no se requiere ningún cambio adicional en la configuración para las {% data variables.product.prodname_actions %}.

Para obtener más información, consulta la sección "[Iniciar una respuesta ante los fallos para aplicativo de réplica](/admin/enterprise-management/initiating-a-failover-to-your-replica-appliance)".

#### Quitar una réplica de disponibilidad alta

Evita dejar que varias instancias escriban en el mismo almacenamiento externo de {% data variables.product.prodname_actions %}. Esto podría ocurrir cuando utilizas el comando `ghe-repl-teardown` para parar y eliminar permanentemente una réplica habilitada para {% data variables.product.prodname_actions %}. Esto se da porque la réplica se convertirá a una versión autónoma de {% data variables.product.prodname_ghe_server %} y, despues de su destrucción, seguirá utilizando el mismo almacenamiento externo.

Para ayudarte a evitar este problema, te recomendamos ya sea que decomisiones el servidor de la réplica o actualices su configuración de {% data variables.product.prodname_actions %} con un almacenamiento externo diferente.
