---
ms.openlocfilehash: eb37bb6abd26f8638202d7779b1919c4beda1d02
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180595"
---
Es importante elegir la razón adecuada del menú desplegable, ya que esto puede afectar si la consulta continuará incluyéndose en los análisis futuros. {% ifversion comment-dismissed-code-scanning-alert %}Opcionalmente, puedes comentar un descarte para registrar el contexto del descarte de una alerta. El comentario de descarte se agrega a la escala de tiempo de la alerta y se puede usar como justificación durante el proceso de auditoría y creación de informes. Puedes recuperar o establecer un comentario mediante la API REST de examen de código. El comentario se incluye en `dismissed_comment` para el punto de conexión `alerts/{alert_number}`. Para obtener más información, consulta "[Examen de código](/rest/code-scanning#update-a-code-scanning-alert)".
{% endif %}
