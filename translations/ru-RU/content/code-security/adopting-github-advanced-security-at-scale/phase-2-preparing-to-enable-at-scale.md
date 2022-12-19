---
title: "Этап\_2. Подготовка к включению в большом масштабе"
intro: 'На этом этапе вы подготовите разработчиков и соберете данные о репозиториях, чтобы убедиться, что ваши команды готовы, и у вас есть все необходимое для пилотных программ и развертывания {% data variables.product.prodname_code_scanning %} и {% data variables.product.prodname_secret_scanning %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110091'
---
{% note %}

Эта статья является частью серии "Внедрение {% data variables.product.prodname_GH_advanced_security %} в большом масштабе". Предыдущая статья этой серии: [Этап 1. Согласование стратегии и целей развертывания](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals).

{% endnote %}

## Подготовка к включению {% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} Дополнительные сведения см. в разделе [Сведения о проверке кода](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning).

Развертывание {% data variables.product.prodname_code_scanning %} в сотнях репозиториев может оказаться трудной задачей, особенно если делать это неэффективно. Следуя этим шагам, вы обеспечите эффективность и успешность развертывания. В рамках подготовки вы будете работать с командами, использовать автоматизацию для сбора данных о репозиториях и включать {% data variables.product.prodname_code_scanning %}. 

### Подготовка команд к {% data variables.product.prodname_code_scanning %}

Сначала подготовьте команды к использованию {% data variables.product.prodname_code_scanning %}. Чем больше команд используют {% data variables.product.prodname_code_scanning %}, тем больше данных у вас будет для реализации планов исправления и отслеживания хода развертывания. На этом этапе сосредоточьтесь на использовании API и проведении внутренних событий для включения.

Основной фокус должен быть направлен на подготовку к использованию {% data variables.product.prodname_code_scanning %} как можно большего числа команд. Вы также можете предложить командам внести соответствующие исправления, но мы рекомендуем на этом этапе отдавать приоритет включению и использованию {% data variables.product.prodname_code_scanning %}, а не устранению проблем.
  
### Сбор сведений о репозиториях

Вы можете программно собирать сведения о различных языках программирования, используемых в репозиториях, и использовать эти данные для включения {% data variables.product.prodname_code_scanning %} во всех репозиториях, использующих один и тот же язык, с помощью API GraphQL в {% data variables.product.product_name %}.

{% note %}

**Примечание.** Чтобы собрать эти данные без ручного выполнения запросов GraphQL, описанных в этой статье, можно использовать наш общедоступный инструмент. Дополнительные сведения см. в репозитории инструмента [ghas-enablement](https://github.com/NickLiffen/ghas-enablement).

{% endnote %}

Если вы хотите собрать сведения из репозиториев, принадлежащих нескольким организациям в предприятии, можно использовать приведенный ниже запрос, чтобы получить имена организаций, а затем передать их в запрос репозиториев. Замените OCTO-ENTERPRISE на имя вашего предприятия.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Вы можете определить, какие языки используют репозитории, с помощью сортировки репозиториев по языкам на уровне организации. Вы можете изменить приведенный ниже пример запроса GraphQL, заменив OCTO-ORG именем организации.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Дополнительные сведения о выполнении запросов GraphQL см. в разделе [Формирование вызовов с помощью GraphQL](/graphql/guides/forming-calls-with-graphql).

Затем преобразуйте данные из запроса GraphQL в доступный для чтения формат, например в таблицу.

| Язык                | Кол-во репозиториев | Имя репозиториев                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

В этой таблице вы можете отфильтровать языки, которые в настоящее время не поддерживаются {% data variables.product.prodname_GH_advanced_security %}.

Если у вас есть репозитории с несколькими языками, можно отформатировать результаты GraphQL, как показано в таблице ниже. Отфильтруйте языки, которые не поддерживаются, но оставьте репозитории с по крайней мере одним поддерживаемым языком. Вы можете включить {% data variables.product.prodname_code_scanning %} в этих репозиториях, и все поддерживаемые языки будут проверяться.

| Языки            | Кол-во репозиториев | Имя репозиториев                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

Понимание того, какие языки используют репозитории, помогут определить потенциальные репозитории для пилотных программ на этапе 3, и подготовит вас к включению {% data variables.product.prodname_code_scanning %} на этапе 5 во всех репозиториях, по одному языку за раз.

{% ifversion ghes %}

### Включение {% data variables.product.prodname_code_scanning %} для устройства

Прежде чем внедрять пилотные программы и развертывать {% data variables.product.prodname_code_scanning %} на предприятии, необходимо сначала включить {% data variables.product.prodname_code_scanning %} для устройства. Дополнительные сведения см. в разделе [Настройка проверки кода для устройства](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance).

{% endif %}

## Подготовка к включению {% data variables.product.prodname_secret_scanning %}

Если проект взаимодействует с внешней службой, для проверки подлинности можно использовать токен или закрытый ключ. Если зафиксировать секрет в репозитории, то любой пользователь с правами на чтение в репозитории сможет использовать этот секрет для доступа к внешней службе с вашими привилегиями. {% data variables.product.prodname_secret_scanning_caps %} сканирует весь журнал Git во всех ветвях, присутствующих в репозиториях {% data variables.product.prodname_dotcom %} для секретов и оповещает вас{% ifversion secret-scanning-push-protection %} или блокирует отправку, содержащую секрет{% endif %}. Дополнительные сведения см. в статье [Сведения о сканировании секретов](/code-security/secret-scanning/about-secret-scanning).

### Рекомендации о времени включения {% data variables.product.prodname_secret_scanning %}

Возможность {% data variables.product.prodname_secret_scanning %} {% data variables.product.product_name %} немного отличается от {% data variables.product.prodname_code_scanning %}, так как для начала работы не требуется определенная конфигурация для каждого языка программирования или одного репозитория и в целом требуется меньше настроек. Это означает, что включение {% data variables.product.prodname_secret_scanning %} на уровне организации может быть простой задачей, однако простое нажатие кнопки **Включить все** на уровне организации и включение параметра **Автоматически включать {% data variables.product.prodname_secret_scanning %} для всех новых репозиториев** имеет некоторые последствия, о которых следует знать.

- **Использование лицензий**  
  Включение {% data variables.product.prodname_secret_scanning %} для всех репозиториев будет использовать все ваши лицензии, даже если никто не использует проверку кода. Это нормально, если вы не планируете увеличивать число активных разработчиков в организации. Если число активных разработчиков, вероятно, увеличится в ближайшие месяцы, вы можете превысить ограничение лицензии, а затем не сможете использовать {% data variables.product.prodname_GH_advanced_security %} во вновь создаваемых репозиториях.
- **Начальный большой объем обнаруженных секретов**  
  Если вы включите {% data variables.product.prodname_secret_scanning %} в большой организации, будьте готовы увидеть большое количество найденных секретов. Иногда это вызывает у организации шок, и они поднимают тревогу. Если вы хотите включить {% data variables.product.prodname_secret_scanning %} во всех репозиториях одновременно, спланируйте, как будете реагировать в организации на большое количество оповещений.

{% data variables.product.prodname_secret_scanning_caps %} можно включить для отдельных репозиториев. Дополнительные сведения см. в разделе [Настройка {% data variables.product.prodname_secret_scanning %} для репозиториев](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories). {% data variables.product.prodname_secret_scanning_caps %} также можно включить для всех репозиториев в организации, как описано выше. Дополнительные сведения о включении для всех репозиториев см. в разделе [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

### Пользовательские шаблоны для {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %} {% note %}

**Примечание.** Пользовательские шаблоны {% data variables.product.prodname_secret_scanning %} в настоящее время доступны в виде бета-версии и могут быть изменены.

{% endnote %} {% endif %}

{% data variables.product.prodname_secret_scanning_caps %} обнаруживает большое количество шаблонов по умолчанию, но также может быть настроено для обнаружения пользовательских шаблонов, таких как форматы секретов, уникальные для вашей инфраструктуры или используемые интеграторами, которые {% data variables.product.prodname_secret_scanning %} {% data variables.product.product_name %} в настоящее время не обнаруживает. Дополнительные сведения о поддерживаемых секретах для шаблонов партнеров см. в разделе [Шаблоны сканирования секретов](/code-security/secret-scanning/secret-scanning-patterns). 

При аудите репозиториев и обсуждении с командами по безопасности и разработке создайте список типов секретов, которые позже будут использоваться для настройки пользовательских шаблонов для {% data variables.product.prodname_secret_scanning %}. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).


{% note %}

Следующая статья этой серии: [Этап 3. Пилотные программы](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs).

{% endnote %}
