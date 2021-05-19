---
title: Acerca de las agrupaciones
intro: 'La agrupación {% data variables.product.prodname_ghe_server %} permite que los servicios que la componen {% data variables.product.prodname_ghe_server %} sean escalados a múltiples nodos.'
redirect_from:
  - /enterprise/admin/clustering/overview
  - /enterprise/admin/clustering/about-clustering
  - /enterprise/admin/clustering/clustering-overview/
  - /enterprise/admin/enterprise-management/about-clustering
versions:
  enterprise-server: '*'
topics:
  - Clustering
  - Enterprise
---

### Arquitectura de agrupación

{% data variables.product.prodname_ghe_server %} está compuesto por un conjunto de servicios. En una agrupación, estos servicios se ejecutan en múltiples nodos y las solicitudes son un balanceador de carga entre ellos. Los cambios se almacenan automáticamente con copias redundantes en nodos separados. La mayoría de los servicios son pares iguales con otras instancias del mismo servicio. Las excepciones a esto son los servicios `mysql-server` and `redis-server`. Estos operan con un solo nodo _principal_ o más nodos _réplica_.

Aprende más sobre los [servicios requeridos para los agrupamientos](/enterprise/{{ currentVersion }}/admin/enterprise-management/about-cluster-nodes#services-required-for-clustering).

### ¿Es adecuada la agrupación para mi organización?

{% data reusables.enterprise_clustering.clustering-scalability %} Sin embargo, la configuración de un agrupación redundante y escalable puede ser compleja y requiere de una planificación cuidadosa. Se deberá planificar esta complejidad adicional para situaciones durante la instalación, situaciones de recuperación ante desastre y actualizaciones.

{% data variables.product.prodname_ghe_server %} requiere una baja latencia entre los nodos y no está hecho para redundancia en todas las ubicaciones geográficas.

La agrupación brinda redundancia, pero no pretende reemplazar una configuración de Alta disponibilidad. Para obtener más información, consulta [Configuración de alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/installation/configuring-github-enterprise-server-for-high-availability). Una configuración de conmutación primaria/secundaria es mucho más simple que la agrupación y permitirá satisfacer las necesidades de muchas organizaciones. Para obtener más información, consulta [Diferencias entre agrupación y alta disponibilidad](/enterprise/{{ currentVersion }}/admin/guides/clustering/differences-between-clustering-and-high-availability-ha/).

### ¿Cómo obtengo acceso a la agrupación?

La agrupación está diseñada para situaciones de escalada específica y no pretende ser usada para cada organización. Si te gustaría considerar la agrupación, por favor contacta a tu representante dedicado o a {% data variables.contact.contact_enterprise_sales %}.
