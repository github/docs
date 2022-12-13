---
ms.openlocfilehash: faf2e19d40e921c1a3d1b6cff91aaf3e4dd2b97b
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145111440"
---
{% ifversion ghes < 3.2 %}

### <a name="about-minimum-requirements-for--data-variablesproductprodname_ghe_server--30-and-later"></a>Сведения о минимальных требованиях для {% data variables.product.prodname_ghe_server %} версии 3.0 и более поздних версий

Перед обновлением до {% data variables.product.prodname_ghe_server %} версии 3.0 или более поздней версии проверьте ресурсы оборудования, подготовленные для экземпляра. {% data variables.product.prodname_ghe_server %} версии 3.0 предоставляет новые функции, такие как {% data variables.product.prodname_actions %} и {% data variables.product.prodname_registry %}, и требует больше ресурсов, чем версия 2.22 и более ранние. Дополнительные сведения см. в [заметках о выпуске {% data variables.product.prodname_ghe_server %} версии 3.0](/enterprise-server@3.0/admin/release-notes).

Повышенные требования для {% data variables.product.prodname_ghe_server %} версии 3.0 и более поздних версий выделены **жирным шрифтом** в следующей таблице.

| Пользовательские лицензии | Число виртуальных ЦП | Память | Подключаемое хранилище | Корневое хранилище |
| :- | -: | -: | -: | -: |
| Пробная версия, демонстрационная версия или 10 облегченных пользователей | **4**<br/>_Начиная с 2_ | **32 ГБ**<br/>_Начиная с 16 ГБ_ | **150 ГБ**<br/>_Начиная со 100 ГБ_ | 200 ГБ |
| от 10 до 3000  | **8**<br/>_Начиная с 4_ | **48 ГБ**<br/>_Начиная с 32 ГБ_ | **300 ГБ**<br/>_Начиная с 250 ГБ_ | 200 ГБ |
| от 3000 до 5000 | **12**<br/>_Начиная с 8_ | 64 ГБ | 500 ГБ | 200 ГБ |
| от 5000 до 8000 | **16**<br/>_Начиная с 12_ | 96 ГБ | 750 ГБ | 200 ГБ |
| от 8000 до 10000 и выше | **20**<br/>_Начиная с 16_ | **160 ГБ**<br/>_Начиная со 128 ГБ_ | 1000 ГБ | 200 ГБ |

{% ifversion ghes %}

Дополнительные сведения о требованиях к оборудованию {% data variables.product.prodname_actions %} см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}
