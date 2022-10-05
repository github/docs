---
title: Aumentar el CPU o los recursos de memoria
intro: 'Si las operaciones en {% data variables.product.prodname_ghe_server %} son lentas, es posible que necesites agregar CPU o recursos de memoria.'
redirect_from:
  - /enterprise/admin/installation/increasing-cpu-or-memory-resources
  - /enterprise/admin/enterprise-management/increasing-cpu-or-memory-resources
  - /admin/enterprise-management/increasing-cpu-or-memory-resources
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
shortTitle: Increase CPU or memory
ms.openlocfilehash: 1ac89694cf374cca1ba47f228f881dc4a5fd405f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331868'
---
{% data reusables.enterprise_installation.warning-on-upgrading-physical-resources %}

{% note %}

**Nota:** Antes de aumentar los recursos de memoria o CPU, coloca la instancia en modo de mantenimiento.{% ifversion ip-exception-list %} Para validar los cambios, configura una lista de excepciones de direcciones IP para permitir el acceso desde las direcciones IP especificadas. {% endif %} Para más información, consulta "[Habilitación y programación del modo de mantenimiento](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode)".

{% endnote %}

## Agregar CPU o recursos de memoria para AWS

{% note %}

**Nota:** Para agregar CPU o recursos de memoria para AWS, debes estar familiarizado con el uso de la consola de administración de AWS o la interfaz de la línea de comando `aws ec2` para administrar instancias EC2. Para obtener información general y detalles sobre el uso de las herramientas de AWS de su elección a fin de realizar el cambio de tamaño, consulta la documentación de AWS sobre el [cambio de tamaño de una instancia respaldada por Amazon EBS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-resize.html).

{% endnote %}

### Consideraciones relativas al ajuste de tamaño

Antes de aumentar la CPU o los recursos de memoria para {% data variables.product.product_location %}, revisa las siguientes recomendaciones.

- **Escala tu memoria mediante CPU**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Asigna una dirección IP elástica a la instancia**. Si no se asigna una IP elástica, deberás ajustar los registros DNS A para tu servidor {% data variables.product.prodname_ghe_server %} después de volver a iniciar para considerar el cambio de la dirección de IP pública. Una vez que tu instancia se reinicia, la IP elástica (EIP) se mantiene automáticamente si la instancia se inicia en una VPC. Si la instancia se inicia en una EC2-Classic, la IP elástica debe asociarse nuevamente de forma manual.

### Tipos de instancias AWS admitidos

Debes determinar el tipo de instancia que te gustaría actualizar en base a especificaciones de CPU/memoria.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.aws-instance-recommendation %}

### Volver a ajustar el tamaño para AWS

{% note %}

**Nota:** Para instancias iniciadas en EC2-Classic, escribe la dirección de IP elástica asociada con la instancia y las ID de las instancias. Una vez que reiniciaste la instancia, vuelve a asociar la dirección de IP elástica.

{% endnote %}

Si no es posible agregar un CPU o recursos de memoria a una instancia AWS/EC2 existente. En su lugar, debes:

1. Frenar la instancia.
2. Cambiar el tipo de instancia.
3. Iniciar la instancia.
{% data reusables.enterprise_installation.configuration-recognized %}

## Agregar recursos de memoria o CPU en Microsoft Azure

{% note %}

**Nota:** Para agregar recursos de CPU o memoria en Microsoft Azure, debes estar familiarizado con la forma en la que se utiliza ya sea el Portal de Azure el CLI de Azure o el PowerShell de Azure para administrar las instancias de las MV. Para obtener información detallada sobre el uso de las herramientas de Azure que prefieras para realizar el cambio de tamaño, consulta la documentación de Azure sobre [cómo cambiar el tamaño de una máquina virtual](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm).

{% endnote %}

### Consideraciones relativas al ajuste de tamaño

Antes de aumentar la CPU o los recursos de memoria para {% data variables.product.product_location %}, revisa las siguientes recomendaciones.

- **Escala tu memoria mediante CPU**. {% data reusables.enterprise_installation.increasing-cpus-req %}
- **Asigna una dirección IP elástica a la instancia**. Si no has asignado una IP estática a tu instancia, podrías tener que ajustar los registros de DNS A para tu host de {% data variables.product.prodname_ghe_server %} después de reiniciar para que cuenten para el cambio en la dirección IP.

### Tamaños compatibles con las instancias de Microsoft Azure

Necesitas determinar el tamaño de instancia al que te gustaría mejorar con base en las especificaciones de CPU/memoria.

{% data reusables.enterprise_installation.warning-on-scaling %}

{% data reusables.enterprise_installation.azure-instance-recommendation %}

### Cambiar de tamaño en Microsoft Azure

Puedes escalar y aumentar de tamaño la MV. El cambiar su tamaño ocasionará que se reinicie. En algunos casos, hay que desasignarla antes. Esto puede suceder si el nuevo tamaño no está disponible en el clúster de hardware que hospeda la actualmente la máquina virtual. 

1. Consulta la documentación de Azure sobre [cómo cambiar el tamaño de una máquina virtual](https://docs.microsoft.com/en-us/azure/virtual-machines/resize-vm) para conocer los pasos necesarios.
{% data reusables.enterprise_installation.configuration-recognized %}

## Agregar CPU o recursos de memoria para OpenStack KVM

No es posible agregar CPU o recursos de memoria para una instancia OpenStack KVM existente. En su lugar, debes:

1. Tomar una instantánea para la instancia actual.
2. Frenar la instancia.
3. Seleccionar un nuevo formato de la instancia que tenga el CPU o los recursos de memoria deseados.

## Agregar recursos de memoria o de CPU para VMware

{% data reusables.enterprise_installation.increasing-cpus-req %}

1. Utiliza vSphere Client para conectar al servidor de VMware ESXi.
2. Cierra {% data variables.product.product_location %}.
3. Selecciona la máquina virtual y haz clic en **Edit Settings (Editar parámetros)** .
4. En "Hardware", ajusta la CPU o los recursos de memoria asignados a la máquina virtual según se necesite: ![Recursos de configuración de VMware](/assets/images/enterprise/vmware/vsphere-hardware-tab.png)
5. Haz clic en **Aceptar** para iniciar la máquina virtual.
{% data reusables.enterprise_installation.configuration-recognized %}
