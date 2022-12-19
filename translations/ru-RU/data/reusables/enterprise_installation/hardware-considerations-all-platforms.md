---
ms.openlocfilehash: a692ea55fd8c3d849c3058d9bab155341b701ef3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: "148097891"
---
- [Минимальные требования](#minimum-requirements)
- [Память](#storage)
- [ЦП и память](#cpu-and-memory)

### Минимальные требования

Рекомендуется использовать разные конфигурации оборудования в зависимости от количества пользовательских лицензий для {% данных variables.location.product_location %}. Если подготовить больше ресурсов, чем минимальные требования, экземпляр будет работать и масштабировать лучше.

{% data reusables.enterprise_installation.hardware-rec-table %}

{% data reusables.actions.more-resources-for-ghes %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

### Память

Рекомендуется использовать высокопроизводительный SSD с высокой скоростью операций ввода-вывода в секунду (IOPS) и низкой задержкой для {% data variables.product.prodname_ghe_server %}. Рабочие нагрузки интенсивно используют ввод-вывод. Если используется гипервизор без операционной системы, рекомендуется напрямую подключить диск или использовать диск из сети хранения данных (SAN).

Для экземпляра требуется постоянный диск данных, отделенный от корневого диска. Подробнее см. в статье [Обзор системы](/enterprise/admin/guides/installation/system-overview).

{% ifversion ghes %}

Чтобы настроить {% data variables.product.prodname_actions %}, необходимо предоставить внешнее хранилище BLOB-объектов. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server##external-storage-requirements).

{% endif %}

Доступное пространство в корневой файловой системе будет составлять 50 % от общего размера диска. Можно изменить размер корневого диска экземпляра, создав новый экземпляр или используя существующий. Дополнительные сведения см. в разделе [Обзор системы](/enterprise/admin/guides/installation/system-overview#storage-architecture) и [Увеличение емкости хранилища](/enterprise/admin/guides/installation/increasing-storage-capacity).

### ЦП и память

Ресурсы ЦП и памяти, необходимые {% data variables.product.prodname_ghe_server %}, зависят от уровней действий пользователей, автоматизации и интеграции.

{% ifversion ghes %}

Если планируется включить {% data variables.product.prodname_actions %} для пользователей экземпляра {% data variables.product.prodname_ghe_server %}, может потребоваться подготовка дополнительных ресурсов ЦП и памяти для экземпляра. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations).

{% endif %}

{% data reusables.enterprise_installation.increasing-cpus-req %}

{% warning %}

**Предупреждение.** Пользователям рекомендуется настраивать события веб-перехватчика для уведомления внешних систем о действиях на {% data variables.product.prodname_ghe_server %}. Автоматические проверки изменений или _опрос_ будут негативно влиять на производительность и масштабируемость экземпляра. Дополнительные сведения см. в статье [Сведения о веб-перехватчиках](/github/extending-github/about-webhooks).

{% endwarning %}

Дополнительные сведения о мониторинге емкости и производительности {% data variables.product.prodname_ghe_server %} см. в разделе [Мониторинг устройства](/admin/enterprise-management/monitoring-your-appliance).

Ресурсы ЦП или памяти экземпляра можно увеличить. Дополнительные сведения см. в разделе [Увеличение объема ресурсов ЦП или памяти](/enterprise/admin/installation/increasing-cpu-or-memory-resources).
