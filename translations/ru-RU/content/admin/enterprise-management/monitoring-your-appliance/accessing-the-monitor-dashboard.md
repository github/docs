---
title: Доступ к панели мониторинга
intro: '{% data variables.product.prodname_ghe_server %} включает в себя веб-панель мониторинга, которая отображает исторические данные о вашем устройстве {% data variables.product.prodname_ghe_server %}, например использование ЦП и хранилища, время отклика приложения и проверки подлинности, а также общее состояние системы.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: d5be8b2c6c4570069328e4f0bfafd6d2895603ca
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148097861'
---
## Доступ к панели мониторинга

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. В верхней части страницы щелкните **Мониторинг**.
![Ссылка "Панель мониторинга"](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Устранение распространенных проблем с выделением ресурсов на устройстве

{% note %}

**Примечание.** Так как регулярно опрос {% данных variables.location.product_location %} с непрерывной интеграцией (CI) или серверами сборки может привести к атаке типа "отказ в обслуживании", которая приводит к проблемам, рекомендуется использовать веб-перехватчики для отправки обновлений. Дополнительные сведения см. в статье "[Сведения о веб-перехватчиках](/enterprise/user/articles/about-webhooks/)".

{% endnote %}

Используйте панель мониторинга, чтобы следить за работоспособностью ресурсов устройства и принимать решения об устранении проблем, связанные с интенсивным использованием ресурсов.  

| Проблема | Возможные причины | Рекомендации |
| -------- | ----------------- | --------------- |
| Высокая загрузка ЦП | Состязание виртуальных машин из других служб или программ, работающих на том же узле | По возможности перенастройте другие службы или программы так, чтобы они использовали меньше ресурсов ЦП. Сведения об увеличении общего объема ресурсов ЦП для виртуальной машины см. в статье "[Увеличение ресурсов ЦП или памяти](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Использование большого объема памяти | Состязание виртуальных машин из других служб или программ, работающих на том же узле | По возможности перенастройте другие службы или программы так, чтобы они использовали меньший объем памяти. Сведения об увеличении общего объема доступной памяти на виртуальной машине см. в статье "[Увеличение ресурсов ЦП или памяти](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Недостаточный размер дискового пространства | Большие двоичные файлы или файлы журналов, потребляющие дисковое пространство | По возможности разместите большие двоичные файлы на отдельном сервере и сожмите или заархивируйте файлы журналов. При необходимости увеличьте размер дискового пространства на виртуальной машине, выполнив действия для платформы, описанные в статье "[Увеличение емкости хранилища](/enterprise/admin/guides/installation/increasing-storage-capacity/)". |
| Более длительное время отклика | Часто причиной является одна из указанных выше проблем. | Определите и исправьте базовые проблемы. Если длительность времени отклика не сокращается, обратитесь в {% data variables.contact.contact_ent_support %}. |
| Повышенная частота возникновения ошибок | Проблемы с программным обеспечением  | Обратитесь в {% данных variables.contact.contact_ent_support %} и приложите пакет поддержки. Дополнительные сведения см. в статье "[Предоставление данных в службу поддержки {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)". |
