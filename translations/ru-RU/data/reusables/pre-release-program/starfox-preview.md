---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879812"
---
{% note %}

**Примечание.** Сведения о карточке проекта теперь отображаются в ответах REST API для проблем, связанных с проектом, и событий временной шкалы. Эта функция теперь доступна разработчикам для предварительного просмотра. Дополнительные сведения см. в [этой записи блога](https://developer.github.com/changes/2018-09-05-project-card-events).

Чтобы получить атрибут `project_card`, панели проекта можно [включить](/articles/disabling-project-boards-in-a-repository) для репозитория, а также необходимо указать пользовательский [тип мультимедиа](/rest/overview/media-types) в заголовке `Accept`:

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
