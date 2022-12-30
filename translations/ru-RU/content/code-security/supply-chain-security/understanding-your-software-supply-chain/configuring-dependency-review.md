---
title: Настройка проверки зависимостей
intro: Вы можете использовать проверку зависимостей для перехвата уязвимостей перед их добавлением в проект.
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163355'
---
## Сведения о проверке зависимостей

{% data reusables.dependency-review.feature-overview %}   

Дополнительные сведения см. в разделе "[Сведения о проверке зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)" и "[Просмотр изменений зависимостей в запросе на включение внесенных изменений](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)".

## Сведения о настройке проверки зависимостей

{% ifversion fpt %} Проверка зависимостей доступна во всех общедоступных репозиториях во всех продуктах, и ее нельзя отключить. Проверка зависимостей доступна в частных репозиториях, принадлежащих организациям, которые используют облако GitHub Enterprise и имеют лицензию на [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} Проверка зависимостей включена в состав {% data variables.product.product_name %} для общедоступных репозиториев. Чтобы использовать проверку зависимостей в частных репозиториях, принадлежащих организациям, у вас должна быть лицензия на [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) и включенная схема зависимостей.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Если функция {% data variables.product.prodname_GH_advanced_security %} не включена, нажмите рядом с ней кнопку **Включить**.
   ![Снимок экрана: функция расширенной безопасности GitHub с выделенной кнопкой "Включить"](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

Проверка зависимостей доступна, если граф зависимостей включен для {% data variables.location.product_location %}, а {% data variables.product.prodname_advanced_security %} включен для организации или репозитория. {% ifversion ghes %} Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_GH_advanced_security %} для вашего предприятия](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise). {% endif %}

### Проверка включения схемы зависимостей

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. В разделе "Настройка функций безопасности и анализа" проверьте, включена ли схема зависимостей. 
1. Если схема зависимостей включена, нажмите **Включить** рядом с пунктом {% data variables.product.prodname_GH_advanced_security %}, чтобы включить функцию {% data variables.product.prodname_advanced_security %}, в том числе проверку зависимостей. Кнопка включить отключена, если у вашего предприятия нет доступных лицензий для {% data variables.product.prodname_advanced_security %}. {% ifversion ghes %} ![ Снимок экрана: функции "Безопасность и анализ кода"](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## Сведения о настройке {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

Доступны следующие параметры конфигурации.

| Параметр | Обязательно | Использование |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Необязательно | Определяет пороговое значение для уровня серьезности (`low`, `moderate`, `high`, `critical`).</br>Действие завершится сбоем для любых запросов на вытягивание, которые добавляют уязвимости указанного уровня серьезности или выше. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Необязательно | Содержит список разрешенных лицензий. Возможные значения этого параметра можно найти на странице [Лицензии](/rest/licenses) в документации по API.</br>Действие завершится сбоем для запросов на вытягивание, которые содержат зависимости с лицензиями, не включенными в этот список..| {% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Необязательно | Содержит список запрещенных лицензий. Возможные значения этого параметра можно найти на странице [Лицензии](/rest/licenses) в документации по API.</br>Действие завершится ошибкой в запросах на вытягивание, которые вводят зависимости с лицензиями, соответствующими list.| {% endif %} {% ifversion dependency-review-action-fail-on-scopes %} | `fail-on-scopes` | Необязательный | Содержит список строк, представляющих среды сборки, которые необходимо поддерживать (`development`, `runtime`, `unknown`). </br>Действие завершится ошибкой в запросах на вытягивание, которые представляют уязвимости в областях, соответствующих list.| {% endif %} | `allow-ghsas` | Необязательный | Содержит список идентификаторов {% data variables.product.prodname_advisory_database %}, которые можно пропустить во время обнаружения. Возможные значения для этого параметра можно найти в [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). | | `config-file` | Необязательный | Указывает путь к файлу конфигурации. Файл конфигурации может быть локальным для репозитория или файлом, расположенным во внешнем репозитории.| | `external-repo-token` | Необязательный | Указывает маркер для получения файла конфигурации, если файл находится в частном внешнем репозитории. Маркер должен иметь доступ на чтение к репозиторию repository.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**Важно.** Параметры `allow-licenses` и `deny-licenses` являются взаимоисключающими.

{% endtip %} {% endif %}

## Настройка {% data variables.product.prodname_dependency_review_action %}

Существует два метода настройки {% data variables.product.prodname_dependency_review_action %}: 
- Встраивание параметров конфигурации в файл рабочего процесса. 
- Ссылка на файл конфигурации в файле рабочего процесса.

Обратите внимание, что во всех примерах для действия (`v3`) используется короткий номер версии вместо номера выпуска semver (например, `v3.0.8`). Это гарантирует использование последней дополнительной версии действия.
### Использование встроенной конфигурации для настройки {% data variables.product.prodname_dependency_review_action %}

1. Добавьте новый рабочий процесс YAML в папку `.github/workflows` .   
   
   {% ifversion ghes %} Для `runs-on`по умолчанию используется `self-hosted`метка . Вы можете заменить метку по умолчанию меткой любого средства выполнения. {% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. Укажите нужные параметры.   

   В этом примере файла {% data variables.product.prodname_dependency_review_action %} показано, как можно использовать доступные параметры конфигурации.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### Использование файла конфигурации для настройки {% data variables.product.prodname_dependency_review_action %}

1. Добавьте новый рабочий процесс YAML в папку `.github/workflows` и используйте `config-file` , чтобы указать, что используется файл конфигурации.

   {% ifversion ghes %} Для `runs-on`по умолчанию используется `self-hosted`метка . Вы можете заменить метку по умолчанию меткой любого средства выполнения. {% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. Создайте файл конфигурации по указанному пути.   

   В этом примере файла YAML показано, как можно использовать доступные параметры конфигурации. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
Дополнительные сведения о параметрах конфигурации см. в разделе [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
