---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060230"
---
Muchos de los recursos en esta API proporcionan un acceso directo para obtener información acerca del usuario autenticado en ese momento. Si una URL de solicitud no incluye un parámetro de `{username}`, la respuesta será para el usuario que inició sesión (y debe pasar la [información de autenticación](/rest/overview/resources-in-the-rest-api#authentication)con su solicitud).{% ifversion fpt or ghes or ghec %} La información privada adicional como, por ejemplo, si un usuario tiene habilitada la autenticación en dos fases, se incluye cuando se está autenticado con la autenticación básica o mediiante OAuth, con el ámbito de `user`.{% endif %}
