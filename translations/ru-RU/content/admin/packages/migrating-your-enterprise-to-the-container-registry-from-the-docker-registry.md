---
title: Миграция предприятия в реестр контейнеров из реестра Docker
intro: 'Образы Docker, ранее хранящиеся в реестре Docker, можно перенести на {% данных variables.location.product_location %} в {% данных variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106384'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Сведения о {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Дополнительные сведения см. в разделе "[Работа с {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

Дополнительные сведения о настройке {% данных variables.product.prodname_registry %} для {% данных variables.location.product_location %}см. в разделе "[Начало работы с {% данных variables.product.prodname_registry %} для вашего предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

## Сведения о миграции из реестра Docker

{% данных reusables.package_registry.container-registry-replaces-docker-registry %} Если реестр Docker на {% данных variables.location.product_location %} содержит образы, необходимо вручную перенести образы в {% данных variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Примечание.** {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Дополнительные сведения о влиянии миграции на {% data variables.product.prodname_container_registry %} см. в разделе [Миграция в {% data variables.product.prodname_container_registry %} из реестра Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry).

## Миграция организаций в {% data variables.product.prodname_container_registry %}

Вы можете начать миграцию всех образов Docker в вашей организации в {% data variables.product.prodname_container_registry %}. Продолжительность операции миграции зависит от общего количества образов для миграции, а также от общей нагрузки на {% ifversion ghes %}ваш экземпляр{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. После успешной миграции {% data variables.product.product_name %} отобразит сводку, а все будущие отправки образов Docker будут использовать {% data variables.product.prodname_container_registry %}.

Если {% ifversion ghes %}администратор сайта{% elsif ghae %}владелец предприятия{% endif %} настроил уведомления по электронной почте для {% данных variables.location.product_location %}, вы получите сообщение электронной почты после завершения миграции. Дополнительные сведения см. в разделе [Настройка электронной почты для уведомлений](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications).

{% note %}

**{% ifversion ghes %}Примечания{% elsif ghae %}Примечание{% endif %}** .

{%- ifversion ghes %}
- Во время миграции загрузка ЦП и памяти для вашего экземпляра возрастает. Чтобы обеспечить производительность экземпляра для пользователей, {% data variables.product.company_short %} рекомендует начать миграцию в период снижения активности.
{%- endif %} {% ifversion ghes %}- {% endif %}В процессе миграции не следует изменять параметры предприятия{% ifversion ghes %} и запускать`ghe-config-apply` из административного сеанса SSH{% endif %}. {% ifversion ghes %} Эти действия активируют запуск конфигурации, который может перезапускать службы, а {% elsif ghae %}изменение этих параметров {% endif %} может прервать миграцию.
{%- ifversion ghes %}
- После миграции дефицит объема хранилища на вашем экземпляре возрастет из-за дублирования файлов образов в реестре Docker и {% data variables.product.prodname_container_registry %}. В будущем выпуске {% data variables.product.product_name %} будут удалены дубликаты файлов после завершения всех операций миграции.

Дополнительные сведения о мониторинге производительности и хранения данных {% variables.location.product_location %}см. в разделе "[Доступ к панели мониторинга".](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. На боковой панели слева нажмите **Пакеты**.
1. Справа от количества пакетов для миграции нажмите кнопку **Начать миграцию**. Во время миграции {% data variables.product.product_name %} отображает на этой странице сведения о ходе выполнения.

По завершении миграции на странице отобразятся результаты. Если миграция завершается сбоем, на странице отобразятся организации, владеющие пакетом, из-за которых возник сбой.

## Повторное выполнение неудачной миграции организации

Если до миграции пользователь создал пакет в {% data variables.product.prodname_container_registry %} с идентичным именем существующего пакета в реестре Docker, миграция завершается ошибкой.

1. Удаление затрагиваемого контейнера в {% data variables.product.prodname_container_registry %}. Дополнительные сведения см. в статье [Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github).
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. Справа от количества пакетов для миграции нажмите кнопку **Повторно выполнить миграцию**. Во время миграции {% data variables.product.product_name %} отображает на этой странице сведения о ходе выполнения.
1. Если миграция снова завершается ошибкой, начните с шага 1 и повторно выполните миграцию.
