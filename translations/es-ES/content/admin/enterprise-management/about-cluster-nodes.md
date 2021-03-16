---
title: Acerca de los nodos de agrupación
intro: 'Los "nodos" son instancias de {% data variables.product.prodname_ghe_server %} que operan en una agrupación. Cada nodo ejecuta un conjunto de servicios que se suministra a la agrupación y; por último, a los usuarios.'
redirect_from:
  - /enterprise/admin/clustering/about-cluster-nodes
  - /enterprise/admin/enterprise-management/about-cluster-nodes
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_clustering.clustering-requires-https %}

### Recomendaciones mínimas de hardware
Cada nodo debe tener un volumen raíz, así como un volumen de datos separado. Estas son las recomendaciones mínimas. Es posible que se requieran más recursos según su uso, como la actividad del usuario y las integraciones seleccionadas.

|                                           Servicios                                            | Mínimo de memoria requerida | Mínimo de espacio libre de volumen de datos requerido |
|:----------------------------------------------------------------------------------------------:|:---------------------------:|:-----------------------------------------------------:|
|               `job-server`,<br/>`memcache-server`,<br/>`web-server`                |            14 GB            |                         1 GB                          |
|              `consul-server`,<br/>`mysql-server`,<br/>`redis-server`               |            14 GB            |                         10 GB                         |
| `git-server`,<br/>`metrics-server`,<br/>`pages-server`,<br/>`storage-server` |            7 GB             |                         10 GB                         |
|                                     `elasticsearch-server`                                     |            14 GB            |                         10 GB                         |

### Servicios requeridos para agrupamiento
Para una redundancia adecuada, usa estos nodos mínimos para poner en funcionamiento cada servicio.

{% tip %}

**Nota:** Las necesidades de escalabilidad de tu organización dependerán de muchos factores, entre los que se incluyen el tamaño y la cantidad de repositorios, la cantidad de usuarios y la utilización general.

{% endtip %}

|                                           Servicios                                           | Mínimo de nodos requeridos |
|:---------------------------------------------------------------------------------------------:|:--------------------------:|
| `job-server`,<br/>`memcache-server`,<br/>`metrics-server`,<br/>`web-server` |             2              |
|                           `mysql-server`,<br/>`redis-server`                            |             2              |
|                                        `consul-server`                                        |             3              |
|              `git-server`,<br/>`pages-server`,<br/>`storage-server`               |             3              |
|                                    `elasticsearch-server`                                     |             3              |

### Recomendaciones de diseño de agrupación

La agrupación permite que los servicios que constituyen {% data variables.product.prodname_ghe_server %} experimenten un aumento gradual independientemente de los demás. Esta flexibilidad puede usarse para diseñar e implementar una agrupación que se adapta a las organizaciones con diferentes requisitos de escalabilidad. Por ejemplo, es posible que algunas organizaciones necesiten una mayor capacidad de almacenamiento para extracciones frecuentes o de gran tamaño, pero el uso del servidor web puede ser relativamente bajo. Otra organización puede tener un buen rendimiento con menos recursos de almacenamiento, pero se necesitan más nodos que ejecuten `pages-server` or `elasticsearch-server`. Hay muchas combinaciones diferentes posibles. Trabaja con tu representante de cuenta para determinar la mejor configuración de agrupación para tus necesidades específicas.

- Esparcir nodos redundantes por todo el hardware independiente. Si compartes su CPU, memoria o dispositivos de almacenamiento, reducirás el rendimiento e introducirás puntos de falla únicos. Los componentes de trabajo en red compartidos también pueden reducir la capacidad y aumentar el riesgo de pérdida de conectividad en caso de una interrupción.
- Uso de almacenamiento rápido. Por lo general, las redes del área de almacenamiento (SAN, por sus siglas en inglés) se optimizan para obtener una máxima utilización de espacio, disponibilidad y tolerancia a fallas, y no un rendimiento absoluto. La agrupación de {% data variables.product.prodname_ghe_server %} brinda redundancia y disponibilidad, y ofrecerá un mejor rendimiento en el almacenamiento más rápido disponible. Se recomienda el almacenamiento SSD local.
- Establecer niveles de nodos que tengan sentido para tu organización. Un ejemplo de configuración:
  - Nivel de cara al usuario con dos nodos y los siguientes servicios:
    - `web-server`
    - `jobs-server`
    - `memcache-server`
  - Nivel de base de datos con tres nodos y los siguientes servicios:
    - `consul-server`
    - `mysql-server`
    - `redis-server`
  - Nivel de búsqueda con tres nodos y el siguiente servicio:
    - `elasticsearch-server`
  - Nivel de almacenamiento con tres nodos y los siguientes servicios:
    - `git-server`
    - `pages-server`
    - `storage-server`
    - `metrics-server`

#### Ejemplo del diagrama de agrupación
{% note %}

**Nota: Este es solo un ejemplo.** El diseño de agrupamiento óptimo de tu organización dependerá de tus necesidades exclusivas. Habla con tu representante dedicado o con {% data variables.contact.contact_enterprise_sales %} para que te podamos ayudar a determinar la mejor configuración del clúster.

{% endnote %}

<img src="/assets/images/enterprise/cluster/cluster-diagram.png" alt="Ejemplo de agrupamiento" style="width: 800px;border:0" />
