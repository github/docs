---
title: Reemplazar un nodo de agrupación
intro: 'Para reemplazar un nodo {{ site.data.variables.product.prodname_ghe_server }}, debes marcar los nodos fuera de línea afectados en el archivo de configuración de la agrupación (`cluster.conf`) y agregar los nodos de reemplazo. Esto puede ser necesario en caso de que un nodo falle, o para agregar un nodo con más recursos a fin de aumentar el rendimiento.'
redirect_from:
  - /enterprise/admin/clustering/replacing-a-cluster-node
versions:
  enterprise-server: '*'
---

{% warning %}

**Advertencia** El nodo de reemplazo debe usar un nodo de nombre de host que no haya sido usado anteriormente en la agrupación para evitar conflictos.

{% endwarning %}

### Reemplazar un nodo funcional
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}

### Reemplazar un nodo en una emergencia
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-provision }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-admin-configure-ip }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-mark-offline }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-validate-config }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-modify-cluster-conf }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-replacement-name }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-initialize-new-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-config-node }}
{{ site.data.reusables.enterprise_clustering.replacing-a-cluster-node-need-three-nodes }}
