---
title: Límites de alerta recomendados
intro: 'Puedes configurar una alerta para notificar los problemas de tus recursos de sistema antes de que afecten el desempeño de tu aparato {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds/
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
---

### Controlar el almacenamiento

Recomendamos que controles los dispositivos de almacenamiento de usuario y raíz y configures una alerta con valores que permitan un gran tiempo de respuesta cuando el espacio de disco disponible sea bajo.

| Gravedad        | Límite                                               |
| --------------- | ---------------------------------------------------- |
| **Advertencia** | El disco excede el 70 % del total disponible         |
| **Crítico**     | El uso del disco excede el 85 % del total disponible |

Puedes ajustar estos valores en base a la cantidad total de almacenamiento asignado, los patrones de crecimiento histórico y el tiempo esperado de respuesta. Recomendamos asignar en exceso recursos de almacenamiento para permitir el crecimiento y evitar el tiempo de inactividad requerido para asignar almacenamiento adicional.

### Controlar el uso del CPU y de la carga promedio

A pesar de que es normal que el uso de CPU fluctúe en base a las operaciones Git que utilizan muchos recursos, recomendamos configurar una alerta para la utilización del CPU anormalmente alta, ya que spikes prolongados puede significar que tu instancia tiene un aprovisionamiento insuficiente. Recomendamos controlar la carga promedio del sistema de quince minutos para los valores que se acerquen o excedan la cantidad de núcleos de CPU asignados en la máquina virtual.

| Gravedad        | Límite                                                          |
| --------------- | --------------------------------------------------------------- |
| **Advertencia** | La carga promedio de quince minutos excede 1x de núcleos de CPU |
| **Crítico**     | La carga promedio de quince minutos excede 2x de núcleos de CPU |

También recomendamos que controles el tiempo de "robo" de virtualización para asegurar que otras máquinas virtuales ejecutándose en el mismo sistema de servidor no estén usando todos los recursos de la instancia.

### Controla el uso de la memoria

La cantidad de memoria física asignada a {% data variables.product.product_location_enterprise %} puede tener un gran impacto sobre el desempeño general y la capacidad de respuesta de la aplicación. El sistema está designado para realizar un uso intenso del caché del disco kernel para acelerar las operaciones Git. Recomendamos que el conjunto en funcionamiento de RSS normal se acomode dentro del 50 % del total de RAM disponible para un uso máximo.

| Gravedad        | Límite                                                                 |
| --------------- | ---------------------------------------------------------------------- |
| **Advertencia** | El uso sostenido de RSS excede el 50 % del total de memoria disponible |
| **Crítico**     | El uso sostenido de RSS excede el 70 % del total de memoria disponible |

Si se acaba la memoria, el killer de OOM kernel intentará liberar recursos de memoria al sacrificar de manera forzosa procesos de aplicación con mucho uso de RAM, lo que puede dar como resultado una interrupción del servicio. Recomendamos asignar más memoria a la máquina virtual de la requerida en el curso normal de las operaciones.
