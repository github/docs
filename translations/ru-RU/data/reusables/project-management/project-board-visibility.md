---
ms.openlocfilehash: 6f5f7b9a1ef172b471215d5ea66d834fb00e19d7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879074"
---
По умолчанию {% data variables.projects.projects_v1_boards %}, принадлежащие пользователям или всей организации, являются частными и видимы только пользователям с разрешениями на чтение, запись или администрирование для {% data variables.projects.projects_v1_board %}. {% ifversion ghae %}Внутренний{% else %}Общедоступный{% endif %} {% data variables.projects.projects_v1_board %} виден {% ifversion ghae %}любому пользователю с доступом к вашему предприятию{% else %}любому пользователю{% endif %} с URL-адресом {% data variables.projects.projects_v1_board %}. {% data variables.projects.projects_v1_boards %} на уровне репозитория имеет ту же видимость, что и у репозитория. То есть у частного репозитория будет частный проект, и эта видимость не может быть изменена.
