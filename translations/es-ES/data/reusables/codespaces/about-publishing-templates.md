---
ms.openlocfilehash: 88adaa8f671dd9eb805301c3e659bcdba76f24cc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160334"
---
Cuando trabajas en un codespace creado a partir de una plantilla, el trabajo se guarda en una máquina virtual en la nube, pero no se almacena en un repositorio en {% data variables.product.prodname_dotcom %}.

Puedes guardar tus archivos, cerrar y detener el codespace y retomar el trabajo más adelante. Normalmente, Git viene preinstalado y el directorio de trabajo se inicializará automáticamente como repositorio de Git a menos hayas empezado desde la plantilla en blanco de {% data variables.product.company_short %}. Esto significa que puedes usar Git de inmediato para el control de código fuente local, como la adición y la confirmación de archivos.

Sin embargo, si eliminas un codespace no publicado o si se elimina automáticamente al no usarse durante el período de retención, tu trabajo también se eliminará. Para conservar el trabajo y permitir que otros usuarios trabajen en el proyecto, deberás publicar el codespace en un repositorio en {% data variables.product.prodname_dotcom %}.