---
title: Шаблоны сканирования секретов
intro: 'Списки поддерживаемых секретов и партнеров, с которыми работает {% data variables.product.company_short %} для предотвращения мошеннического использования случайно зафиксированных секретов.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
topics:
  - Secret scanning
  - Advanced Security
redirect_from:
  - /code-security/secret-scanning/secret-scanning-partners
ms.openlocfilehash: 5684239d27daef532adf9aec79309d7430525a9e
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184507'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

{% ifversion fpt or ghec %}
## Сведения о шаблонах {% data variables.product.prodname_secret_scanning %}

{% data variables.product.product_name %} поддерживает разные наборы шаблонов {% data variables.product.prodname_secret_scanning %}:

1. **Шаблоны партнеров.** Используется для обнаружения потенциальных секретов во всех общедоступных репозиториях. Дополнительные сведения см. в разделе [Поддерживаемые секреты для шаблонов партнеров](#supported-secrets-for-partner-patterns).
2. **Расширенные шаблоны безопасности.** Используется для обнаружения потенциальных секретов в репозиториях с включенным {% data variables.product.prodname_secret_scanning %}. {% ifversion ghec %} Дополнительные сведения см. в разделе [Поддерживаемые секреты для расширенной безопасности](#supported-secrets-for-advanced-security). {% endif %}{% ifversion secret-scanning-push-protection %}
3. **Шаблоны защиты от отправки.** Используется для обнаружения потенциальных секретов в репозиториях с функцией {% data variables.product.prodname_secret_scanning %}, включенной в качестве защиты от отправки. Дополнительные сведения см. в разделе [Секреты, поддерживаемые функцией защиты от отправки](#supported-secrets-for-push-protection).{% endif %}

{% ifversion fpt %} Организации, использующие {% data variables.product.prodname_ghe_cloud %} с {% data variables.product.prodname_GH_advanced_security %}, могут включить {% data variables.product.prodname_secret_scanning_GHAS %} в своих репозиториях. Дополнительные сведения об этих шаблонах см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security).
{% endif %}

## Поддерживаемые секреты для шаблонов партнеров

{% data variables.product.product_name %} в настоящее время сканирует общедоступные репозитории на наличие секретов, выданных следующими поставщиками услуг, и оповещает соответствующего поставщика услуг при каждом обнаружении секрета в фиксации. Дополнительные сведения о {% data variables.product.prodname_secret_scanning_partner %} см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning_partner %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-partner-patterns).

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.partner-secret-list-public-repo %} {% endif %}

{% ifversion ghec or ghae or ghes %}
## Поддерживаемые секреты {% ifversion ghec %} для расширенной безопасности {% endif %}

Если включено {% data variables.product.prodname_secret_scanning_GHAS %}, {% data variables.product.prodname_dotcom %} сканирует секреты, выданные следующими поставщиками услуг. {% ifversion ghec %}Дополнительные сведения о {% data variables.product.prodname_secret_scanning_GHAS %} см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning_GHAS %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-advanced-security).{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

Если вы используете REST API для проверки секретов, можно применять `Secret type` для создания отчетов о секретах от конкретных издателей. Дополнительные сведения см. в разделе [Сведения о проверке секретов](/enterprise-cloud@latest/rest/secret-scanning).
 
{% ifversion ghes or ghae or ghec %} {% note %}

**Примечание.** Вы также можете определить пользовательские шаблоны {% data variables.product.prodname_secret_scanning %} для репозитория, организации или предприятия. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning).

{% endnote %} {% endif %}

{% data reusables.secret-scanning.partner-secret-list-private-repo %} {% endif %}

{% ifversion secret-scanning-push-protection %}
## Секреты, поддерживаемые функцией защиты от отправки

{% data variables.product.prodname_secret_scanning_caps %} для защиты отправок в настоящее время проверяет репозитории на наличие секретов, выданных приведенными ниже поставщиками услуг.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.secret-list-private-push-protection %}

{% endif %}
## Дополнительные материалы

- [Защита репозитория](/code-security/getting-started/securing-your-repository)
- [Обеспечение безопасности учетной записи и данных](/github/authenticating-to-github/keeping-your-account-and-data-secure) {%- ifversion fpt or ghec %}
- [Партнерская программа {% data variables.product.prodname_secret_scanning_caps %}](/developers/overview/secret-scanning-partner-program) {%- else %}
- [Партнерская программа {% data variables.product.prodname_secret_scanning_caps %}](/free-pro-team@latest/developers/overview/secret-scanning-partner-program) в документации по {% data variables.product.prodname_ghe_cloud %} {% endif %}
