---
title: Límites de alerta recomendados
intro: 'Puedes configurar una alerta para notificar los problemas de tus recursos de sistema antes de que afecten el desempeño de tu aparato {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
ms.openlocfilehash: 73adc62a8a322666e08da01a76568c16ed18458c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112737'
---
## Controlar el almacenamiento

Recomendamos que controles los dispositivos de almacenamiento de usuario y raíz y configures una alerta con valores que permitan un gran tiempo de respuesta cuando el espacio de disco disponible sea bajo.

| severity | Umbral |
| -------- | --------- |
| **Warning (ADVERTENCIA)** | El disco excede el 70 % del total disponible |
| **Critical)** (Crítico) | El uso del disco excede el 85 % del total disponible |

Puedes ajustar estos valores en base a la cantidad total de almacenamiento asignado, los patrones de crecimiento histórico y el tiempo esperado de respuesta. Recomendamos asignar en exceso recursos de almacenamiento para permitir el crecimiento y evitar el tiempo de inactividad requerido para asignar almacenamiento adicional.

## Controlar el uso del CPU y de la carga promedio

A pesar de que es normal que el uso de CPU fluctúe en base a las operaciones Git que utilizan muchos recursos, recomendamos configurar una alerta para la utilización del CPU anormalmente alta, ya que spikes prolongados puede significar que tu instancia tiene un aprovisionamiento insuficiente. Recomendamos controlar la carga promedio del sistema de quince minutos para los valores que se acerquen o excedan la cantidad de núcleos de CPU asignados en la máquina virtual.

| severity | Umbral |
| -------- | --------- |
| **Warning (ADVERTENCIA)** | La carga promedio de quince minutos excede 1x de núcleos de CPU |
| **Critical)** (Crítico) | La carga promedio de quince minutos excede 2x de núcleos de CPU |

También recomendamos que controles el tiempo de "robo" de virtualización para asegurar que otras máquinas virtuales ejecutándose en el mismo sistema de servidor no estén usando todos los recursos de la instancia.

## Controla el uso de la memoria

La cantidad de memoria física asignada a {% data variables.product.product_location %} puede tener un gran impacto en el rendimiento general y la capacidad de respuesta de la aplicación. El sistema está designado para realizar un uso intenso del caché del disco kernel para acelerar las operaciones Git. Recomendamos que el conjunto en funcionamiento de RSS normal se acomode dentro del 50 % del total de RAM disponible para un uso máximo.

| severity | Umbral |
| -------- | --------- |
| **Warning (ADVERTENCIA)**  | El uso sostenido de RSS excede el 50 % del total de memoria disponible |
| **Critical)** (Crítico) | El uso sostenido de RSS excede el 70 % del total de memoria disponible |

Si se acaba la memoria, el killer de OOM kernel intentará liberar recursos de memoria al sacrificar de manera forzosa procesos de aplicación con mucho uso de RAM, lo que puede dar como resultado una interrupción del servicio. Recomendamos asignar más memoria a la máquina virtual de la requerida en el curso normal de las operaciones.
