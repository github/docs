---
ms.openlocfilehash: 740d5655197f25385b0ac206fdeea33a585f3ad4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060229"
---
Во многих ресурсах в этом API имеется ярлык для получения сведений о текущем пользователе, прошедшем проверку подлинности. Если URL-адрес запроса не содержит параметра `{username}`, то ответ дается для пользователя, вошедшего в систему (вместе с запросом потребуется передать [данные проверки подлинности](/rest/overview/resources-in-the-rest-api#authentication)).{% ifversion fpt or ghes or ghec %} Дополнительные закрытые сведения, например включена ли у пользователя двухфакторная проверка подлинности, добавляются при обычной проверке подлинности или проверке OAuth с областью действия `user`.{% endif %}
