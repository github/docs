---
title: Recursos de hardware recomendados para ejecutar CodeQL
shortTitle: Hardware resources for CodeQL
intro: 'Especificaciones recomendadas (RAM, núcleos de CPU y disco) para ejecutar un análisis de {% data variables.product.prodname_codeql %} en las máquinas auto-hospedadas con base en el tamaño de tu base de código.'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Integration
  - CI
ms.openlocfilehash: 9f180e28a3207ef64a516a1e6cd6a8bbcf17ea53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117714'
---
Puedes configurar el {% data variables.product.prodname_codeql %} en {% data variables.product.prodname_actions %} o en un sistema de IC externo. El {% data variables.product.prodname_codeql %} es completamente compatible con los ejecutores hospedados en {% data variables.product.prodname_dotcom %} en las {% data variables.product.prodname_actions %}.

Si estás utilizando un sistema de IC externo o ejecutores auto-hospedados en las {% data variables.product.prodname_actions %} para los repositorios privados, eres responsable de configurar tu propio hardware. La configuración de hardware óptima para ejecutar el {% data variables.product.prodname_codeql %} podría variar con base en el tamaño y la complejidad de tu base de código, los lenguajes de programación y los sistemas de compilación que se utilicen, así como en tu configuración de flujo de trabajo de IC.

La siguiente tabla proporciona las especificaciones de hardware recomendadas para ejecutar un análisis de {% data variables.product.prodname_codeql %} con base ene l tamaño de tu base de código. Utiliza estos como punto inicial para determinar tu elección de hardware o máquina virtual. Una máquina con recursos mayores podría mejorar el rendimiento del análisis, pero también podría ser más cara de mantener.

| Tamaño de la base de código | RAM | CPU |
|--------|--------|--------|
| Pequeño (<100 000 líneas de código) | 8 GB o superior | 2 núcleos |
| Mediana (de 100 K a 1 M de líneas de código) | 16 GB o superior | de 4 o 8 núcleos |
| Grande (>1 M de líneas de código) | 64 GB o superior | 8 núcleos |

Para todos los tamaños de bases de código, recomendamos utilizar un SSD con 14 GB o más de espacio en disco. Debe haber suficiente espacio en disco para verificar y compilar tu código, además de espacio adicional para los datos que produce el {% data variables.product.prodname_codeql %}.
