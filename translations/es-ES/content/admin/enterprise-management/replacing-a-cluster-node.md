---
title: Reemplazar un nodo de agrupación
intro: 'Para reemplazar un nodo {% data variables.product.prodname_ghe_server %}, debes marcar los nodos fuera de línea afectados en el archivo de configuración de la agrupación (`cluster.conf`) y agregar los nodos de reemplazo. Esto puede ser necesario en caso de que un nodo falle, o para agregar un nodo con más recursos a fin de aumentar el rendimiento.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
  - /enterprise/admin/enterprise-management/replacing-a-cluster-node
versions:
  enterprise-server: '*'
topics:
  - empresa
---

{% warning %}

**Advertencia** El nodo de reemplazo debe usar un nodo de nombre de host que no haya sido usado anteriormente en la agrupación para evitar conflictos.

{% endwarning %}

### Reemplazar un nodo funcional
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}

### Reemplazar un nodo en una emergencia
{% data reusables.enterprise_clustering.replacing-a-cluster-node-provision %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-validate-config %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-config-node %}
{% data reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes %}
