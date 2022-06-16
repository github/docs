---
title: Recuperar una configuración de disponibilidad alta
intro: 'Después de la conmutación por error de un aparato {% data variables.product.prodname_ghe_server %}, debes recuperar redundancia tan pronto como sea posible en lugar de depender de un aparato único.'
redirect_from:
  - /enterprise/admin/installation/recovering-a-high-availability-configuration
  - /enterprise/admin/enterprise-management/recovering-a-high-availability-configuration
  - /admin/enterprise-management/recovering-a-high-availability-configuration
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
shortTitle: Recuperar una configuración de HA
---

## Acerca de la recuperación para una configuración de disponibilidad alta

Puedes utilizar el aparato principal antiguo como el nuevo aparato de réplica si la conmutación por error fue planeada o no estaba relacionada con la salud del aparato. Si la conmutación por error estaba relacionado con un problema con el aparato primario, es posible que prefieras crear un nuevo aparato de réplica. Para obtener más información, consulta "[Crear una réplica de alta disponibilidad](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)."

{% warning %}

**Advertencia:** Debes habilitar el modo de mantenimiento antes de configurar un aplicativo primario anterior como una réplica nueva. Si no habilitas el modo de mantenimiento, ocasionarás una interrupción productiva.

{% endwarning %}

## Configurar un aparato principal antiguo como una nueva réplica

1. Conéctate a la dirección IP del aparato principal antiguo utilizando SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Habilita el modo de mantenimiento en el aplicativo primario anterior. Para obtener más información, consulta "[Habilitar y programar el modo mantenimiento](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)."
1. En el aparato principal antiguo, ejecuta el comando `ghe-repl-setup` con la dirección IP de la réplica antigua.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para verificar la conexión con el aparato principal nuevo y habilitar el modo réplica para la nueva réplica, ejecuta nuevamente `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
