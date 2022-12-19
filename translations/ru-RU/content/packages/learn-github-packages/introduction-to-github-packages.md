---
title: Введение в GitHub Packages
intro: "{% data variables.product.prodname_registry %}\_— это служба размещения пакетов программного обеспечения, которая позволяет размещать пакеты программного обеспечения для частного{% ifversion ghae %} использования отдельными пользователями или всей организацией{% else %} или общедоступного использования{% endif %} в качестве зависимостей в проектах."
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Introduction
ms.openlocfilehash: 1ad319ead16f10186b330f876ccaa83bc44bdbcd
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193028'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## Сведения о {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} — это платформа для размещения пакетов, включая контейнеры и другие зависимости, и управления ими. {% data variables.product.prodname_registry %} объединяет исходный код и пакеты в одном месте, чтобы предоставить возможность интегрированного управления разрешениями{% ifversion fpt or ghec %} и выставления счетов{% endif %}, что позволяет централизировать разработку программного обеспечения в {% data variables.product.product_name %}.

Вы можете интегрировать {% data variables.product.prodname_registry %} с {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}API {% data variables.product.product_name %}{% endif %}, {% data variables.product.prodname_actions %} и веб-перехватчиками, чтобы создать комплексный рабочий процесс DevOps, включающий решения для разработки кода, непрерывной интеграции и развертывания.

{% data variables.product.prodname_registry %} предлагает различные реестры пакетов для часто используемых диспетчеров пакетов, таких как npm, RubyGems, Apache Maven, Gradle, Docker и NuGet. {% ifversion fpt or ghec %}Реестр {% data variables.product.prodname_container_registry %} приложения {% data variables.product.prodname_dotcom %} оптимизирован для контейнеров и поддерживает образы Docker и OCI.{% endif %} Дополнительные сведения о различных реестрах пакетов, поддерживаемых {% data variables.product.prodname_registry %}, см. в статье [Работа с реестром {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry).

{% ifversion fpt or ghec %}

![Схема, показывающая поддержку пакетов для реестра контейнеров, RubyGems, npm, Apache Maven, NuGet и Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registry.png)

{% else %}

![Схема, показывающая поддержку пакетов для реестра Docker, RubyGems, npm, Apache Maven, Gradle, NuGet и Docker](/assets/images/help/package-registry/packages-diagram-without-container-registry.png)

{% endif %}

Вы можете посмотреть файл сведений пакета, а также метаданные, такие как лицензирование, статистику скачиваний, журнал версий, и многое другое для {% data variables.product.product_name %}. Дополнительные сведения см. в статье "[Просмотр пакетов](/packages/manage-packages/viewing-packages)".

{% ifversion ghes %}

Дополнительные сведения о конфигурации {% data variables.product.prodname_registry %} для {% data variables.product.product_name %} см. в статье [Начало работы с {% data variables.product.prodname_registry %} для вашего предприятия](/admin/packages/getting-started-with-github-packages-for-your-enterprise).

{% endif %}

### Обзор разрешений и видимости пакета

|                    |        |
|--------------------|--------------------|
| Разрешения        | {% ifversion packages-registries-v2 %} Разрешения для пакета либо наследуются из репозитория, в котором размещен пакет, либо могут быть определены для определенных учетных записей пользователей или организаций. Некоторые реестры поддерживают только разрешения, унаследованные от репозитория. Список этих реестров см. в разделе [Сведения о разрешениях для {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages). Дополнительные сведения о доступе к пакету см. в разделе [Настройка управления доступом и видимости пакета](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility). {% else %}Каждый пакет наследует разрешения репозитория, в котором он размещен. <br> <br> Например, любой пользователь с разрешениями на чтение для репозитория может установить пакет в качестве зависимости в проекте, и любой пользователь с разрешениями на запись может опубликовать новую версию пакета.{% endif %} |
| Видимость         | {% data reusables.package_registry.public-or-private-packages %} |

{% ifversion fpt or ghec %}
## Сведения о выставлении счетов за {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} Дополнительные сведения см. в статье [О выставлении счетов за {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

{% endif %}

## Поддерживаемые клиенты и форматы
<!-- If you make changes to this feature, check whether any of the changes affect languages listed in /get-started/learning-about-github/github-language-support. If so, please update the language support article accordingly. -->

{% data variables.product.prodname_registry %} использует собственные команды инструментов для работы пакетами, с которыми вы уже знакомы, для публикации и установки версий пакетов.
### Поддержка реестров пакетов

| Язык | Описание | Формат пакета | Клиент пакета |
| --- | --- | --- | --- |
| JavaScript | Диспетчер пакетов узла | `package.json`  | `npm` |
| Ruby |  Диспетчер пакетов RubyGems | `Gemfile` |  `gem` |
| Java | Средство управления и анализа проектов Apache Maven | `pom.xml` |  `mvn` |
| Java | Средство автоматизации сборки Gradle для Java | `build.gradle` или `build.gradle.kts`  | `gradle`  |
| .NET | Управление пакетами NuGet для .NET | `nupkg`  |  `dotnet` CLI |
| Н/Д | Управление контейнерами Docker | `Dockerfile` | `Docker` |

{% ifversion ghes %} {% note %}

**Примечание:** При включении реестра Docker настоятельно рекомендуется также включить изоляцию поддомена. Дополнительные сведения см. в разделе [Включение изоляции поддомена](/admin/configuration/configuring-network-settings/enabling-subdomain-isolation).

{% endnote %}

{% endif %}

Дополнительные сведения о настройке клиента пакета для использования с {% data variables.product.prodname_registry %} приведены в статье [Работа с реестром {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry).

{% ifversion fpt or ghec %} Дополнительные сведения о Docker и {% data variables.product.prodname_container_registry %} см. в статье [Работа с реестром контейнеров](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).
{% endif %}
## Проверка подлинности в {% data variables.product.prodname_registry %}

{% data reusables.package_registry.authenticate-packages %}

{% data reusables.package_registry.authenticate-packages-github-token %}

## Управление пакетами

Пакет можно удалить в пользовательском интерфейсе {% data variables.product.product_name %} {% ifversion fpt or ghec %} или с помощью REST API. Дополнительные сведения см. в [разделах Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package) и [API{% data variables.product.prodname_registry %}](/rest/reference/packages). {% else %}. {% endif %} {% data reusables.package_registry.about-graphql-support %}

При использовании API GraphQL для запроса и удаления частных пакетов необходимо использовать тот же {% data variables.product.pat_v1 %}, который используется для проверки подлинности в {% data variables.product.prodname_registry %}.

Дополнительные сведения см. в статье {% ifversion ghes or ghae %}[Удаление и восстановление пакета](/packages/learn-github-packages/deleting-and-restoring-a-package) и {% endif %}[Создание вызовов с помощью GraphQL](/graphql/guides/forming-calls-with-graphql).

Вы можете настроить веб-перехватчики, чтобы подписаться на события, связанные с пакетом, например на публикацию или обновление пакета. Дополнительные сведения см. в статье [Событие веб-перехватчика `package`](/webhooks/event-payloads/#package).

## Обращение в службу поддержки

{% ifversion fpt or ghec %} Если у вас есть отзывы или запросы функций для {% data variables.product.prodname_registry %}, используйте [обсуждение {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/actions-and-packages).

Свяжитесь {% data variables.contact.github_support %} по поводу {% data variables.product.prodname_registry %}, используя [нашу форму обратной связи](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages), если:

* Вы наблюдаете что-либо, что противоречит документации.
* Возникают непонятные ошибки.
* Ваш опубликованный пакет содержит конфиденциальные данные, такие как нарушения GDPR, ключи API или личные сведения.

{% else %} Если вам нужна поддержка для {% data variables.product.prodname_registry %}, обратитесь к своим администраторам.

{% endif %}
