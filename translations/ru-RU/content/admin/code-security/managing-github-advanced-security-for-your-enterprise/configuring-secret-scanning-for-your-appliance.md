---
title: Настройка проверки секретов на ваших устройствах
shortTitle: Configuring secret scanning
intro: 'Вы можете включить, настроить и отключить {% данных variables.product.prodname_secret_scanning %} для {% данных variables.location.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} позволяет пользователям проверять код на наличие случайно зафиксированных секретов.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: 2ab9c158fe3f6724f8a90b490d1359d8bfb4e48d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098089'
---
{% data reusables.secret-scanning.beta %}

## Сведения о {% data variables.product.prodname_secret_scanning %}

Если кто-то возвращает в репозиторий секрет, используя известный шаблон, {% data variables.product.prodname_secret_scanning %} перехватывает секрет в момент возврата и помогает устранить последствия утечки. Администраторы репозитория получают уведомления о любой фиксации, которая содержит секрет. Кроме того, они могут быстро просмотреть все обнаруженные секреты на вкладке "Безопасность" для репозитория. Дополнительные сведения см. в разделе [Сведения о {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning).

## Проверка того, включает ли ваша лицензия {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Предварительные требования для {% data variables.product.prodname_secret_scanning %}

- Флаг ЦП [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (дополнительные расширения SIMD для потоковой передачи 3) должен быть включен на виртуальной машине или KVM, которая выполняет {% данных variables.location.product_location %}.

- Лицензия {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (см. раздел [Сведения о выставлении счетов {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_secret_scanning_caps %}, включенный на консоли управления (см. раздел [Включение {% data variables.product.prodname_GH_advanced_security %} для предприятия](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise))

### Проверка поддержки флага SSSE3 на виртуальных ЦП

Набор инструкций SSSE3 является обязательным, поскольку {% data variables.product.prodname_secret_scanning %} использует сопоставление шаблонов аппаратного ускорения для поиска учетных данных, которые могли быть зафиксированы в репозитории {% data variables.product.prodname_dotcom %}. SSSE3 включен для большинства современных ЦП. Вы можете проверить, включен ли флаг SSSE3 для виртуальных ЦП, доступных вашему экземпляру {% data variables.product.prodname_ghe_server %}.

1. Подключение к административной оболочке для экземпляра {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Доступ к административной оболочке (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
2. Введите следующую команду:

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   Если возвращается значение `0`, это означает, что флаг SSSE3 доступен и активен. Теперь можно включить {% данных variables.product.prodname_secret_scanning %} для {% данных variables.location.product_location %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning) ниже.

   Если при этом не возвращается `0`, SSSE3 не включается на виртуальной машине или KVM. Инструкции по установке флага или предоставлению доступа к нему для гостевых виртуальных машин доступны в документации по оборудованию или гипервизору.

## Включение {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. В разделе "Безопасность" нажмите **{% data variables.product.prodname_secret_scanning_caps %}** .
![Флажок, который позволяет включить или отключить {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Отключение {% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. В разделе "Безопасность" снимите флажок **{% data variables.product.prodname_secret_scanning_caps %}** .
![Флажок, который позволяет включить или отключить {% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}
