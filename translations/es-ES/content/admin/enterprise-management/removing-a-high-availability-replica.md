---
title: Quitar una réplica de disponibilidad alta
intro: 'Puedes detener una replicación a una réplica {% data variables.product.prodname_ghe_server %} de forma temporal, o quitar la replicación de forma permanente.'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Clustering
  - High availability
  - Enterprise
  - Infrastructure
---

### Detener una replicación de forma temporal

1. Si es necesario, puedes detener una replicación geográfica del tráfico de usuario activo al quitar las entradas Geo DNS para la réplica.
2. En la réplica donde deseas detener la replicación de forma temporal, ejecuta ghe-repl-stop.
  ```shell
  $ ghe-repl-stop
  ```
3. Para comenzar la replicación nuevamente, ejecuta `ghe-repl-start`.
  ```shell
  $ ghe-repl-start
  ```

### Quitar la replicación de forma permanente

1. Si es necesario, puedes detener una replicación geográfica del tráfico de usuario activo al quitar las entradas Geo DNS para la réplica.
2. En la réplica donde deseas quitar la replicación, ejecuta `ghe-repl-stop`.
  ```shell
  $ ghe-repl-stop
  ```
3. En la réplica, para acabar con el estado de replicación, ejecuta `ghe-repl-teardown`.
  ```shell
  $ ghe-repl-teardown
  ```

  {% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% note %}

  **Nota:** Si tienes habilitadas las {% data variables.product.prodname_actions %}, deberás decomisionar el servidor de réplica anterior o actualizar su configuración de {% data variables.product.prodname_actions %} para que utilice un almacenamiento externo diferente. Para obtener más información, consulta la sección "[Disponibilidad alta para {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)".

  {% endnote %}
  {% endif %}
