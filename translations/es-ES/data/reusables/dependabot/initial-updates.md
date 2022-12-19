---
ms.openlocfilehash: 8adf896da9e4748cfaa5d0d0562172af14264f97
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145138778"
---
Cuando habilitas las actualizaciones de versión por primera vez, podrías tener muchas dependencias desactualizadas y algunas podrían estar varias versiones debajo de la última. {% data variables.product.prodname_dependabot %} verifica las dependencias que estén desactualizadas tan pronto se habilita. Podrías ver nuevas solicitudes de extracción para las actualizaciones de versión después de algunos minutos de haber agregado el archivo de configuración, dependiendo de la cantidad de archivos de manifiesto para los cuales configuras las actualizaciones. El {% data variables.product.prodname_dependabot %} también ejecutará una actualización en los cambios subsecuentes al archivo de configuración.

El {% data variables.product.prodname_dependabot %} también podría crear solicitudes de cambios cuando cambias un archivo de manifiesto después de que falló una actualización. Esto es porque los cambios al manifiesto, tales como eliminar la dependencia que ocasionó que fallara la actualización, podrían causar que la actualización recién activada tenga éxito.

Para facilitar la administración y revisión de las solicitudes de incorporación de cambios, {% data variables.product.prodname_dependabot %} genera un máximo de cinco solicitudes de incorporación de cambios para comenzar a actualizar a las dependencias a su versión más reciente. Si fusionas algunas de estas primeras solicitudes de cambios en la siguiente actualización programada, aquellas restantes se abrirán en la siguiente actualización, hasta ese máximo. Puede cambiar el número máximo de solicitudes de incorporación de cambios abiertas si establece la [opción de configuración `open-pull-requests-limit`](/github/administering-a-repository/configuration-options-for-dependency-updates#open-pull-requests-limit).
