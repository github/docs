---
title: Сканирование секретов
intro: Используйте API сканирования секретов для получения и обновления оповещений о секретах из репозитория.
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880127'
---
{% data reusables.secret-scanning.api-beta %}

## Сведения об API проверки секретов

API {% data variables.product.prodname_secret_scanning %} позволяет:

- Включать или отключать {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} и защиту от отправки{% endif %} для репозитория. Дополнительные сведения см. в разделе [Репозитории](/rest/repos/repos#update-a-repository) и разверните раздел "Свойства объекта `security_and_analysis`" в документации по REST API.
- Получение и обновление оповещений {% data variables.product.prodname_secret_scanning_GHAS %} из репозитория. Дополнительные сведения об этом см. в разделах ниже.

Дополнительные сведения о {% data variables.product.prodname_secret_scanning %} см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning).
