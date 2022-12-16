---
ms.openlocfilehash: 10f8ff754031aa529cae9525cffee31506b6b8f6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193397"
---
По умолчанию, когда вы назначаете приложение или отменяете его назначение, ваш поставщик удостоверений не взаимодействует с {% data variables.product.product_name %} автоматически. {% data variables.product.product_name %} {% ifversion fpt or ghec %}подготавливает доступ к вашим ресурсам в {% else %}создает учетную запись пользователя {% endif %}с помощью JIT-подготовки SAML при первом переходе любого пользователя к {% ifversion fpt or ghec %}вашим ресурсам в {% endif %} {% data variables.product.product_name %} и выполняет вход, используя проверку подлинности через вашего поставщика удостоверений. Вам может потребоваться вручную уведомлять пользователей о предоставлении доступа к {% data variables.product.product_name %} и необходимо вручную {% ifversion fpt or ghec %}отозвать доступ {% else %}деактивировать учетную запись пользователя в {% endif %}{% data variables.product.product_name %} во время отключения.

Кроме того, вместо JIT-подготовки SAML SCIM можно использовать для {% ifversion ghec %}подготовки или отзыва{% elsif ghae or scim-for-ghes %}создания или приостановки{% endif %} {% ifversion fpt or ghec %}доступа к организации, принадлежащие вашему предприятию с учетными записями пользователей {% data variables.product.prodname_dotcom_the_website %} {% else %}, автоматически предоставляют или запрещают доступ к {% data variables.location.product_location %} {% endif %}после назначения или отмены назначения приложения для поставщика удостоверений. {% ifversion scim-for-ghes %} SCIM для {% data variables.product.product_name %} в настоящее время находится в закрытой бета-версии и может быть изменен. {% endif %}
