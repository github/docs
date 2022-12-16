---
ms.openlocfilehash: c9d2391a85dd42db8eb3914b9c3495e0441e0fd0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 07/13/2022
ms.locfileid: "147061278"
---
De forma predeterminada, un flujo de trabajo de {% data variables.product.prodname_actions %} se desencadena cada vez que creas o actualizas una plantilla de precompilación, o haces una inserción en una rama habilitada para la precompilación. Como sucede con otros flujos de trabajo, mientras se ejecutan los de precompilación, consumirán algunos de los minutos de acciones incluidos en la cuenta, si tiene alguno, o incurrirán en cargos por los minutos de acciones. Para más información sobre los precios de los minutos de acciones, vea "[Acerca de la facturación de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)". 

Junto con los minutos de {% data variables.product.prodname_actions %}, también se te facturará por el almacenamiento de plantillas de precompilación asociadas a cada configuración de precompilación para un repositorio y una región determinados. El almacenamiento de plantillas de precompilación se factura a la misma velocidad que el almacenamiento de los espacios de código. Para obtener más información, consulta "[Cálculo del uso del almacenamiento](#calculating-storage-usage)".

Para reducir el consumo de minutos de Acciones, puedes establecer una plantilla de precompilación que se actualice sólo cuando realices un cambio en los archivos de configuración del contenedor de desarrollo o cuando haya una programación personalizada. También puedes administrar el uso del almacenamiento mediante el ajuste del número de versiones de plantilla que se conservarán para las configuraciones de precompilación. Para obtener más información, consulta "[Configuración de precompilaciones](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-a-prebuild)".

Si eres el propietario de la organización, puedes realizar el seguimiento del uso y el almacenamiento de los flujos de trabajo de precompilación mediante la descarga de un informe de uso de {% data variables.product.prodname_actions %} para la organización. A fin de identificar las ejecuciones de flujo de trabajo para las precompilaciones, filtre la salida CSV para incluir solo el flujo de trabajo denominado "Crear precompilaciones de Codespaces". Para obtener más información, consulte "[Visualización del uso de {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-organization)".
