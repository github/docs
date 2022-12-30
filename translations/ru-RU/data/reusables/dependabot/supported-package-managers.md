---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169243"
---
В следующей таблице показано (для каждого диспетчера пакетов):
- Значение YAML, которое будет использоваться в файле *dependabot.yml*.
- Поддерживаемые версии диспетчера пакетов
- Поддержка зависимостей в частных репозиториях или реестрах {% data variables.product.prodname_dotcom %}
- Поддержка зависимостей, доступных в рамках вендоринга

Диспетчер пакетов | Значение YAML      | Поддерживаемые версии | Частные репозитории | Частные реестры | Вендоринг
---------------|------------------|------------------|:---:|:---:|:---:
Средство увязки программ в пакеты        | `bundler`        | версия 1, версия 2           | | **✓** | **✓** |
Грузовой          | `cargo`          | Версия 1               | **✓** | **✓** | |
Composer       | `composer`       | версия 1, версия 2           | **✓** | **✓** | |
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | Версия 1               | **✓** | **✓** | |
Hex            | `mix`            | Версия 1               | | **✓** | |
Пакет ELM    | `elm`            | Версия 0.19            | **✓** | **✓** | |
Субмодуль Git  | `gitsubmodule`   | Н/У (нет версии) | **✓** | **✓** | |
Действия GitHub | `github-actions` | Н/У (нет версии) | **✓** | **✓** | |
Модули Go     | `gomod`          | Версия 1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | Н/У (нет версии)<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | Н/Д (без версии)<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | версия 6, версия 7, версия 8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | версия 21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | Версия 1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
паб            | `pub`            | версия 2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | Версия 1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

**Совет.** Для диспетчеров пакетов, таких как `pipenv` и `poetry`, необходимо использовать значение YAML `pip`. Например, если вы используете `poetry` для управления зависимостями Python и хотите, чтобы {% data variables.product.prodname_dependabot %} отслеживал файл манифеста зависимостей для новых версий, используйте `package-ecosystem: "pip"` в файле *dependabot.yml*.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} может обновлять теги образов Docker в манифестах Kubernetes. Добавьте запись в элемент Docker `package-ecosystem` файла _dependabot.yml_ для каждого каталога, содержащего манифест Kubernetes, который ссылается на теги образа Docker. Манифесты Kubernetes могут быть YAML-файлами развертывания Kubernetes или диаграммами Helm. Сведения о настройке файла _dependabot.yml_ для `docker`см. в разделе "`package-ecosystem`" [статьи Параметры конфигурации для файла dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem).

   {% data variables.product.prodname_dependabot %} поддерживает как общедоступные, так и частные реестры Docker. Список поддерживаемых реестров см. в разделе "`docker-registry`Параметры [конфигурации для файла dependabot.yml](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)".
{% endif %}

[2] {% data variables.product.prodname_dependabot %} не запускает Gradle, но поддерживает обновления следующих файлов: `build.gradle`, `build.gradle.kts` (для проектов Kotlin) и файлов, включенных в `apply` объявление, которые содержатся `dependencies` в имени файла. Обратите внимание, что `apply` не поддерживает `apply to`, рекурсию или расширенные синтаксисы (например,`apply` в Kotlin с `mapOf`, имена файлов, определенные свойством).

[3] {% data variables.product.prodname_dependabot %} не запускает Maven, но поддерживает обновления `pom.xml` файлов.

[4] {% data variables.product.prodname_dependabot %} не запускает Интерфейс командной строки NuGet, но поддерживает большинство функций до версии 4.8.

{% ifversion dependabot-PEP621-support %} [5] Помимо поддержки обновлений `requirements.txt` файлов, {% data variables.product.prodname_dependabot %} поддерживает обновления `pyproject.toml` файлов, если они соответствуют стандарту PEP 621. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} [6] Поддержка {% ifversion ghes = 3,5 %}`pub` в настоящее время находится в бета-версии. Все известные ограничения могут быть изменены. Обратите внимание, что {% data variables.product.prodname_dependabot %}:
   - Не поддерживает обновление зависимостей Git для `pub`. 
   - Обновление не выполняется, если игнорируется версия, которую оно пытается обновить, даже если доступна более ранняя версия.

   Сведения о настройке файла _dependabot.yml_ для `pub` см. в разделе [Включение поддержки бета-версий экосистемы](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems).
   {%- else %}{% data variables.product.prodname_dependabot %} не будет выполнять обновление дл `pub`, когда версия, которую он пытается обновить, пропускается, даже если доступна более ранняя версия.{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot поддерживает зависимости поставщиков для версии 2 и более поздних версий. {% endif %}

