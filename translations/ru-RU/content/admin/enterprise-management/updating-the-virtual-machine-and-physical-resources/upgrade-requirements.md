---
title: Требования к обновлению
intro: 'Перед обновлением {% data variables.product.prodname_ghe_server %} ознакомьтесь с этими рекомендациями и требованиями, чтобы спланировать стратегию обновления.'
redirect_from:
  - /enterprise/admin/installation/upgrade-requirements
  - /enterprise/admin/guides/installation/finding-the-current-github-enterprise-release
  - /enterprise/admin/enterprise-management/upgrade-requirements
  - /admin/enterprise-management/upgrade-requirements
  - /enterprise/admin/guides/installation/about-upgrade-requirements
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Upgrades
ms.openlocfilehash: 23ac63dd30c11f4c29cd17313a583579d2e2cea1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106880'
---
{% note %}

**Примечания.**
- Пакеты обновления доступны в [enterprise.github.com](https://enterprise.github.com/releases) для поддерживаемых версий. Убедитесь в доступности пакетов обновления, которые вам потребуются для обновления. Если пакет недоступен, обратитесь к {% data variables.contact.contact_ent_support %} для получения помощи.
- Если вы используете кластеризацию {% data variables.product.prodname_ghe_server %}, см. раздел [Обновление кластера](/enterprise/admin/guides/clustering/upgrading-a-cluster/) в руководстве по кластеризации {% data variables.product.prodname_ghe_server %}, где приведены конкретные инструкции по кластеризации.
- Заметки о выпуске для {% data variables.product.prodname_ghe_server %} предоставляют полный список новых возможностей для каждой версии {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. на [страницах, посвященных выпускам](https://enterprise.github.com/releases).

{% endnote %}

## Рекомендации

- Включите как можно меньше обновлений в процесс обновления. Например, вместо обновления версии {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} до {{ enterpriseServerReleases.supported[1] }} до {{ enterpriseServerReleases.latest }}, можно выполнить обновление версии {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[2] }} до {{ enterpriseServerReleases.latest }}. Используйте [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade), чтобы найти путь обновления текущей версии.
- Если у вас несколько версий, обновите {% data variables.location.product_location %} как можно дальше с каждым этапом процесса обновления. Использование самой актуальной версии в каждом обновлении позволяет использовать преимущества повышенной производительности и исправления ошибок. Например, можно выполнить обновление с {% data variables.product.prodname_enterprise %} 2.7 до 2.8 и 2.10, однако для обновления с {% data variables.product.prodname_enterprise %} 2.7 до 2.9 и 2.10 на втором этапе используется более поздняя версия.
- При обновлении используйте последний выпуск исправлений. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %}
- Используйте промежуточный экземпляр для проверки шагов обновления. Дополнительные сведения см. в разделе [Настройка экземпляра промежуточного процесса](/enterprise/admin/guides/installation/setting-up-a-staging-instance/).
- При запуске нескольких обновлений подождите по крайней мере 24 часа между обновлениями компонентов, чтобы обеспечить полноценное выполнение миграции данных и задач обновления в фоновом режиме.
- Создайте моментальный снимок перед обновлением виртуальной машины. Дополнительные сведения см. в разделе [Создание моментального снимка](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server#taking-a-snapshot). 
- Убедитесь, что у вас есть последняя успешная резервная копия экземпляра. Дополнительные сведения см. в [файле README.md {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Требования

- Необходимо выполнить обновление выпуска, версия которого отстает **не более**, чем на две версии. Например, для обновления до версии {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.latest }}, требуется установленная версия {% data variables.product.prodname_enterprise %} {{ enterpriseServerReleases.supported[1] }} или {{ enterpriseServerReleases.supported[2] }}.
- При обновлении с помощью пакета обновления запланируйте период обслуживания для пользователей {% data variables.product.prodname_ghe_server %}.
- {% data reusables.enterprise_installation.hotpatching-explanation %}
- Для горячего исправления может потребоваться время простоя, если затрагиваемые службы (например, ядро, MySQL или Elasticsearch) требуют перезагрузки виртуальной машины или перезапуска службы. Вы получите уведомление о необходимости перезагрузки или перезапуска. Вы можете выполнить перезагрузку или перезапуск позднее.
- Дополнительное корневое хранилище должно быть доступно при обновлении посредством горячего исправления, так как при этом до завершения обновления будет установлено несколько версий определенных служб. По результатам предварительной проверки вы получите уведомление в случае, если у вас недостаточно пространства корневого дискового хранилища.
- При обновлении посредством горячего исправления экземпляр нельзя слишком загружать, так как это может повлиять на процесс горячего исправления.
- В процессе обновления до версии {% data variables.product.prodname_ghe_server %} 2.17 выполняется миграция журналов аудита из Elasticsearch в MySQL. Эта миграция также увеличивает время и место на диске, необходимое для восстановления моментального снимка. Перед миграцией проверьте число байтов в индексах журнала аудита Elasticsearch с помощью следующей команды:
``` shell
curl -s http://localhost:9201/audit_log/_stats/store | jq ._all.primaries.store.size_in_bytes
```
Используйте это число для оценки объема дискового пространства, необходимого для журналов аудита MySQL. Скрипт также отслеживает свободное место на диске в процессе импорта. Отслеживать это число особенно полезно, если свободное место на диске близко к объему дискового пространства, необходимого для миграции.

## Дальнейшие действия

После просмотра этих рекомендаций и требований можно обновить {% data variables.product.prodname_ghe_server %}. Дополнительные сведения см. в разделе [Обновление {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/).
