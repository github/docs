---
ms.openlocfilehash: 1f59c95d79ab5fa0f778e05379112ec4b82afd42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: "145118339"
---
{% ifversion fpt or ghec %} При вводе пароля для входа или создания учетной записи, а также при изменении пароля {% data variables.product.product_name %} проверяет его на надежность с использованием таких наборов данных, как HaveIBeenPwned. Пароль может быть признан ненадежным, даже если вы никогда ранее не использовали его.

{% data variables.product.product_name %} проверяет пароль только во время ввода и никогда не сохраняет его в виде открытого текста. Дополнительные сведения см. на веб-сайте [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
