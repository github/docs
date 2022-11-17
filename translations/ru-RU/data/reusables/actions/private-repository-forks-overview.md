---
ms.openlocfilehash: 0734336906d60a230cc3295722758d6e48629a6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879496"
---
Если вы используете вилки частных репозиториев, можно настроить политики для управления тем, как пользователи могут запускать рабочие процессы при наступлении событий `pull_request`. Только для частных {% ifversion ghec or ghes or ghae %}и внутренних{% endif %} репозиториев эти параметры политик можно настроить для {% ifversion ghec %}организаций, {% elsif ghes or ghae %}вашей организации, {% endif %}отделов или репозиториев.
