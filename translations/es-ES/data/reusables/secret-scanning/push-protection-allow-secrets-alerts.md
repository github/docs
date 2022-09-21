---
ms.openlocfilehash: 110de05126a0656467f63f7c377b257adf401c26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064966"
---
Cuando permites la inserción de un secreto, se crea una alerta en la pestaña "Seguridad". {% data variables.product.prodname_dotcom %} cierra la alerta y no envía una notificación si especificas que el secreto es un falso positivo o que solo se usa en las pruebas. Si especificas que el secreto es real y lo corregirás más adelante, {% data variables.product.prodname_dotcom %} mantiene abierta la alerta de seguridad y envía notificaciones al creador de la confirmación, así como a los administradores del repositorio. Para más información, vea "[Administración de alertas del análisis de secretos](/code-security/secret-scanning/managing-alerts-from-secret-scanning)".
