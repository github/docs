---
ms.openlocfilehash: 22cef14793f2fe8ffa5937d60056f05f1be0265a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159827"
---
## Compartir un puerto

{% note %}

**Nota:** Solo puede hacer que un puerto sea privado para una organización si en la organización se usa {% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

Si quieres compartir un puerto reenviado con otros, puedes ya sea hacerlo privado para tu organización o hacerlo público. Después de hacer un puerto privado para tu organización, cualquier miembro de esta que tenga la URL de dicho puerto podrá ver la aplicación que se está ejecutando. Después de hacer un puerto público, cualquiera que sepa la URL y el número de puerto podrá ver la aplicación que se está ejecutando sin necesidad de autenticarse.

{% note %}

**Nota:** La elección de las opciones de visibilidad del puerto puede estar limitada por una directiva configurada para la organización. Para más información, vea "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

{% endnote %}