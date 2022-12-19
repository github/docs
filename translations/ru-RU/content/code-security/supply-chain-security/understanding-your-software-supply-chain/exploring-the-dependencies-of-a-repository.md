---
title: Изучение зависимостей репозитория
intro: 'Граф зависимостей позволяет выяснить, от каких пакетов зависит ваш проект{% ifversion fpt or ghec %} и какие репозитории зависят от этого проекта{% endif %}. Кроме того, вы сможете узнать, какие уязвимости обнаружены в его зависимостях.'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Explore dependencies
ms.openlocfilehash: f3735844ad8bcb8fba799723f30a3d55e41ec158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882734'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## Просмотр графа зависимостей

Граф зависимостей показывает зависимости{% ifversion fpt or ghec %} и зависимые объекты{% endif %} вашего репозитория. Сведения об обнаружении зависимостей и о поддерживаемых экосистемах см. в разделе [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %} {% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. При желании в разделе "Граф зависимостей" щелкните **Зависимые**.
![Вкладка "Зависимые" на странице графа зависимостей](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes %} Владельцы предприятия могут настроить граф зависимостей на корпоративном уровне. Дополнительные сведения см. в разделе [Включение графа зависимостей для предприятия](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise).
{% endif %}

### Представление зависимостей

{% ifversion fpt or ghec %} Зависимости группируются по экосистемам. Вы можете развернуть зависимость, чтобы просмотреть ее зависимости.  Зависимости в частных репозиториях, частных пакетах или нераспознанных файлах отображаются в виде обычного текста. Если диспетчер пакетов для зависимости находится в общедоступном репозитории, {% data variables.product.product_name %} отобразит ссылку на этот репозиторий.

{% ifversion dependency-submission-api %} Зависимости, отправленные в проект с помощью API отправки зависимостей (бета-версия) также группируются по экосистемам, но отображаются отдельно от зависимостей, обнаруженных в файлах манифеста или блокировки в репозитории. Эти отправленные зависимости отображаются в графе зависимостей как "Зависимости моментальных снимков", так как они отправляются в составе моментального снимка (набора) зависимостей. Дополнительные сведения об использовании API отправки зависимостей см. в статье [Использование API отправки зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).
{% endif %}

Если в репозитории обнаружены уязвимости, они отображаются в верхней части представления для пользователей с доступом к {% data variables.product.prodname_dependabot_alerts %}.

![График зависимостей](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %} Все прямые и косвенные зависимости, указанные в файлах манифеста или блокировки репозитория, сгруппированы по экосистеме. Если в репозитории обнаружены уязвимости, они отображаются в верхней части представления для пользователей с доступом к {% data variables.product.prodname_dependabot_alerts %}.

![График зависимостей](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Примечание.** {% data variables.product.product_name %} не заполняет представление **Зависимые**.

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### Представление "Зависимые"

Для общедоступных репозиториев представление зависимых объектов показывает, как репозиторий используется другими репозиториями. Чтобы отобразить только репозитории, содержащие библиотеку в диспетчере пакетов, щелкните **NUMBER Packages** непосредственно над списком зависимых репозиториев. Количество зависимых объектов являются приблизительным и не всегда может соответствовать перечисленным зависимым объектам.

![Диаграмма зависимостей](/assets/images/help/graphs/dependents_graph.png)

## Включение и отключение графа зависимостей для частного репозитория

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}

## Изменение пакета раздела "Кем используется"

Вы могли заметить, что некоторые репозитории имеют раздел "Кем используется" в боковой панели вкладки **Код**. Репозиторий будет иметь раздел "Кем используется", если:
  * для репозитория включен граф зависимостей (дополнительные сведения см. в разделе выше);
  * репозиторий содержит пакет, опубликованный в [поддерживаемой экосистеме пакетов](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems);
  * в экосистеме пакет имеет ссылку на _общедоступный_ репозиторий, в котором хранится источник.

В разделе "Кем используется" отображается количество обнаруженных общедоступных ссылок на пакет, а также аватары некоторых владельцев зависимых проектов.

![Раздел боковой панели "Кем используется"](/assets/images/help/repository/used-by-section.png)

Щелкнув любой элемент в этом разделе, вы перейдете на вкладку **Зависимые** графа зависимостей.

Раздел "Кем используется" представляет один пакет из репозитория. Если у вас есть разрешения администратора на репозиторий, содержащий несколько пакетов, можно выбрать, какой пакет представляет раздел "Кем используется".

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. В разделе "Безопасность и анализ кода" щелкните раскрывающееся меню в разделе "Используется счетчиком" и выберите пакет.
  ![Выбор пакета "Кем используется"](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## Устранение неполадок графа зависимостей

Если ваш граф зависимостей пуст, возможно, имеется проблема с файлом, содержащим зависимости. Проверьте файл, чтобы убедиться, что его формат соответствует типу файла.

{% ifversion fpt or ghec %} Если формат файла правильный, проверьте его размер. Граф зависимостей игнорирует отдельные файлы манифеста и блокировки, размер которых превышает 1,5 МБ, если вы не являетесь пользователем {% data variables.product.prodname_enterprise %}. Он обрабатывает до 20 файлов манифеста или блокировки для каждого репозитория по умолчанию, поэтому можно разделить зависимости на файлы меньшего размера в подкаталогах репозитория.{% endif %}

Если манифест или файл блокировки не обработан, его зависимости исключены из графа зависимостей, и невозможно проверить файл на наличие небезопасных зависимостей.

## Дополнительные материалы

- [Сведения о графе зависимостей](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% ifversion ghec %}
- «[Просмотр аналитических сведений для организации](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)»{% endif %}{% ifversion fpt or ghec %}
- [Основные сведения о том, как {% data variables.product.prodname_dotcom %} использует и защищает ваши данные](/get-started/privacy-on-github) {% endif %}
