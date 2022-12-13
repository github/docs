---
title: Начало работы с GitHub Packages для вашего предприятия
shortTitle: Getting started with GitHub Packages
intro: 'Вы можете начать использовать {% данных variables.product.prodname_registry %} для {% данных variables.location.product_location %}, включив эту функцию, настроив стороннее хранилище, настроив экосистемы, которые вы хотите поддерживать, и обновив сертификат TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: d437b69ecbe3a7c3f9221e7495cf8b01b9faa0b3
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098676'
---
{% data reusables.package_registry.packages-cluster-support %}

## Шаг 1. Проверка доступности {% data variables.product.prodname_registry %} для вашего предприятия

{% data variables.product.prodname_registry %} доступен в {% data variables.product.prodname_ghe_server %} 3.0 или более поздней версии. Если вы используете более раннюю версию {% data variables.product.prodname_ghe_server %}, вам придется выполнить обновление для использования {% data variables.product.prodname_registry %}. Дополнительные сведения об обновлении экземпляра {% data variables.product.prodname_ghe_server %} см. в статье [Сведения об обновлениях до новых выпусков](/admin/overview/about-upgrades-to-new-releases).
## Шаг 2. Включение {% data variables.product.prodname_registry %} и настройка внешнего хранилища

{% data variables.product.prodname_registry %} на {% data variables.product.prodname_ghe_server %} использует внешнее хранилище BLOB-объектов для хранения пакетов.

После включения {% данных variables.product.prodname_registry %} для {% данных variables.location.product_location %}необходимо подготовить контейнер хранилища сторонних производителей. Требуемый объем хранилища зависит от использования {% data variables.product.prodname_registry %}, а рекомендации по настройке зависят от поставщика хранилища.

Поддерживаемые внешние поставщики хранилища:
- Amazon Web Services (AWS) S3; {% ifversion ghes %}
- Хранилище BLOB-объектов Azure; {% endif %}
- MinIO

Чтобы включить {% data variables.product.prodname_registry %} и настроить стороннее хранилище, см.:
  - [Включение GitHub Packages с использованием AWS](/admin/packages/enabling-github-packages-with-aws){% ifversion ghes %}
  - [Включение GitHub Packages с использованием Хранилища BLOB-объектов Azure](/admin/packages/enabling-github-packages-with-azure-blob-storage){% endif %}
  - [Включение GitHub Packages с использованием MinIO](/admin/packages/enabling-github-packages-with-minio)

## Шаг 3. Указание экосистем пакетов для поддержки экземпляра

Выберите экосистемы пакетов, которые вы хотите включить, отключить или задать только для чтения для {% данных variables.location.product_location %}. Доступные параметры: {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle или NuGet.  Дополнительные сведения см. в статье [Настройка поддержки экосистем пакетов для предприятия](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise).

## Шаг 4. Проверка наличия сертификата TLS для URL-адреса узла пакета

Если изоляция поддомена включена для {% данных variables.location.product_location %}, необходимо создать и отправить СЕРТИФИКАТ TLS, который позволяет URL-адрес узла пакета для каждой экосистемы, которую вы хотите использовать, например `{% data reusables.package_registry.container-registry-hostname %}`. Убедитесь, что каждый URL-адрес узла пакета содержит `https://`.

  Сертификат можно создать вручную или использовать _Let's Encrypt_. Если вы уже используете _Let's Encrypt_, необходимо запросить новый сертификат TLS после включения {% data variables.product.prodname_registry %}. Дополнительные сведения об URL-адресах узла пакета см. в статье [Включение изоляции поддомена](/enterprise/admin/configuration/enabling-subdomain-isolation). Дополнительные сведения о передаче сертификатов TLS в {% data variables.product.product_name %} см. в статье [Настройка TLS](/enterprise/admin/configuration/configuring-tls).

## Шаг 5. Проверка и переименование зарезервированных имен

Если вы хотите использовать экосистему Docker с отключенной изоляцией поддомена, **необходимо** сначала переименовать любого пользователя или организацию с именем `v2` {% данных variables.location.product_location %}, прежде чем включить поддержку экосистемы Docker в {% данных variables.enterprise.management_console %}. Docker использует имя учетной записи `v2` для управления конфликтами путей с помощью API Docker. После включения поддержки реестра Docker вы больше не сможете использовать это имя.

Полный список имен для входа, зарезервированных для внутреннего использования, можно просмотреть, перейдя на страницу "Зарезервированные имена для входа" на панели мониторинга администратора сайта. Дополнительные сведения см. в разделе [Зарезервированные имена для входа](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins).
