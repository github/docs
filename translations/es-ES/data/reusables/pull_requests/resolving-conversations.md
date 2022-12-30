---
ms.openlocfilehash: 1447b6a0f63bcfd6e54954545541808debcb3091
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062374"
---
### Resolver conversaciones

Puedes resolver una conversación en una solicitud de extracción si abriste la solicitud de extracción o si tienes acceso de escritura al repositorio en el que se abrió la solicitud de extracción.

Para indicar que se ha completado una conversación en la pestaña **Files changed**, haga clic en **Resolve conversation**.

![Conversación de solicitud de extracción con botón Resolve conversation (Resolver conversación)](/assets/images/help/pull_requests/conversation-with-resolve-button.png)

Toda la conversación se colapsará y se marcará como resuelta, y será más sencillo encontrar conversaciones que se deban seguir considerando.

![Conversación resuelta](/assets/images/help/pull_requests/resolved-conversation.png)

Si la sugerencia en un comentario está fuera del alcance de tu solicitud de extracción, puedes abrir un nuevo informe de problemas que rastree la retroalimientación y se vincule con el comentario original. Para más información, vea "[Apertura de una incidencia desde un comentario](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

{% ifversion fpt or ghes or ghae-issue-4382 or ghec %}
#### Descubrir y navegar por los debates

Puede descubrir todas las conversaciones de la solicitud de incorporación de cambios y navegar por ellas mediante el menú **Conversations** que se muestra en la parte superior de la pestaña **Files Changed**.

Desde esta vista puedes ver qué debates están aún sin resolver, resueltos y desactualizados. Esto te facilita descubrirlos y resolverlos.

![Representación del menú de conversaciones](/assets/images/help/pull_requests/conversations-menu.png) {% endif %}
