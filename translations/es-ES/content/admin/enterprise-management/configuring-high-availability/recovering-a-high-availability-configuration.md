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
shortTitle: Recover a HA configuration
ms.openlocfilehash: a61cdf4b3f7338c986112f67a0ca66be33d75c5f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '146332772'
---
## Acerca de la recuperación para una configuración de disponibilidad alta

Puedes utilizar el aparato principal antiguo como el nuevo aparato de réplica si la conmutación por error fue planeada o no estaba relacionada con la salud del aparato. Si la conmutación por error estaba relacionado con un problema con el aparato primario, es posible que prefieras crear un nuevo aparato de réplica. Para más información, vea "[Creación de una réplica de alta disponibilidad](/enterprise/admin/guides/installation/creating-a-high-availability-replica/)".

{% warning %}

**Advertencia:** Debe habilitar el modo de mantenimiento antes de configurar un dispositivo primario anterior como una réplica nueva. Si no habilitas el modo de mantenimiento, ocasionarás una interrupción productiva.

{% endwarning %}

## Configurar un aparato principal antiguo como una nueva réplica

1. Conéctate a la dirección IP del aparato principal antiguo utilizando SSH.
  ```shell
  $ ssh -p 122 admin@<em>FORMER PRIMARY IP</em>
  ```
1. Habilita el modo de mantenimiento en el aplicativo primario anterior. Para más información, vea "[Habilitación y programación del modo de mantenimiento](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode)".
1. En el dispositivo primario anterior, ejecute `ghe-repl-setup` con la dirección IP de la réplica antigua.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Para comprobar la conexión al nuevo dispositivo principal y habilitar el modo de réplica para la réplica nueva, vuelva a ejecutar `ghe-repl-setup`.
  ```shell
  $ ghe-repl-setup <em>FORMER REPLICA IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
