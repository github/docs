---
title: Iniciar una conmutación por error a tu clúster de réplica
intro: 'Si tu clúster de {% data variables.product.prodname_ghe_server %} falla, puedes recuperarte del fallo a la réplica pasiva.'
redirect_from:
  - /enterprise/admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
  - /admin/enterprise-management/initiating-a-failover-to-your-replica-cluster
versions:
  enterprise-server: '>2.21'
type: how_to
topics:
  - Clustering
  - Enterprise
  - High availability
  - Infrastructure
---

### Acerca de la conmutación por error a tu clúster de réplica

En caso de que haya una falla en tu datacenter primario, puedes recuperarte de dicho fallo hacia los nodos de réplica en el datacenter secundario si configuras un nodo de réplica pasivo para cada nodo en tu clúster activo.

El tiempo que se requiere para recuperarse del fallo dependerá de qué tanto tiempo se necesite para promover el clúster de réplica manualmente y redirigir así el tráfico.

El promover un clúster de réplica no configura automáticamente la replicación al clúster existente. Después de promover un clúster de réplica, puedes reconfigurar la replicación desde el clúster activo nuevo. Para obtener más información, consulta la sección "[Configurar la disponibilidad alta para un clúster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster#reconfiguring-high-availability-replication-after-a-failover)".

### Prerrequisitos

Para recuperarse de un fallo hacia los nodos de réplica pasivos, debes haber configurado la disponibilidad alta para tu clúster. Para obtener más información, consulta la sección "[Configurar la disponibilidad alta para un clúster](/enterprise/admin/enterprise-management/configuring-high-availability-replication-for-a-cluster)".

### Iniciar una conmutación por error a tu clúster de réplica

1. Ingresa por SSH en cualquier nodo pasivo en el datacenter secundario para tu clúster. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/admin/configuration/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)."

2. Inicializa la conmutación por error al clúster secundario y configúrala para que se comporte como los nodos activos.

    ```shell
  ghe-cluster-failover
  ```

{% data reusables.enterprise_clustering.configuration-finished %}

3. Actualiza elregistro de DNS para que apunte a las direcciones IP del balanceador de carga para tu clúster pasivo. El tráfico es direccionado a la réplica después de que transcurra el período TTL.

Después de que {% data variables.product.prodname_ghe_server %} te regrese al prompt y de que se hayan propagado las actualizaciones de tu DNS, habrás terminado de recuperarte del fallo. Los usuarios pueden acceder a {% data variables.product.prodname_ghe_server %} utilizando el nombre de host habitual para tu clúster.
