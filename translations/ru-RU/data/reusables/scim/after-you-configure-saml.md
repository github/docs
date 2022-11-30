---
ms.openlocfilehash: cfe1441d8807b616dae5499c5f1fb01316364c5b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145134510"
---
По умолчанию, когда вы назначаете приложение или отменяете его назначение, ваш поставщик удостоверений не взаимодействует с {% data variables.product.product_name %} автоматически. {% data variables.product.product_name %} {% ifversion fpt or ghec %}подготавливает доступ к вашим ресурсам в {% else %}создает учетную запись пользователя {% endif %}с помощью JIT-подготовки SAML при первом переходе любого пользователя к {% ifversion fpt or ghec %}вашим ресурсам в {% endif %} {% data variables.product.product_name %} и выполняет вход, используя проверку подлинности через вашего поставщика удостоверений. Вам может потребоваться вручную уведомлять пользователей о предоставлении доступа к {% data variables.product.product_name %} и необходимо вручную {% ifversion fpt or ghec %}отозвать доступ {% else %}деактивировать учетную запись пользователя в {% endif %}{% data variables.product.product_name %} во время отключения. Можно использовать SCIM для {% ifversion ghec %}подготовки или отзыва{% elsif ghae %}создания или приостановки{% endif %} {% ifversion fpt or ghec %}доступа к организациям, принадлежащим предприятию, на {% data variables.product.prodname_dotcom_the_website %} {% else %}учетных записей пользователей и доступа к {% data variables.product.product_name %} {% endif %} в автоматическом режиме, когда вы задаете или отменяете назначение приложения на своем поставщике удостоверений.
