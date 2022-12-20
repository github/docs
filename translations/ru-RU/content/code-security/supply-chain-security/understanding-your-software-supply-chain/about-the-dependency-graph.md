---
title: Сведения о графе зависимостей
intro: Граф зависимостей можно использовать для обнаружения всех зависимостей проекта. Граф зависимостей поддерживает ряд популярных экосистем пакетов.
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106496'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## Сведения о графе зависимостей

{% data reusables.dependabot.about-the-dependency-graph %}

При отправке в {% data variables.product.product_name %} фиксации, которая изменяет или добавляет поддерживаемый манифест или файл блокировки в ветвь по умолчанию, граф зависимостей автоматически обновляется. {% ifversion fpt or ghec %} Кроме того, граф обновляется, когда кто-либо отправляет изменение в репозиторий одной из зависимостей.{% endif %} Сведения о поддерживаемых экосистемах и файлах манифеста см. в разделе [Поддерживаемые экосистемы пакетов](#supported-package-ecosystems) ниже.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Когда вы создаете запрос на вытягивание, содержащий изменения зависимостей, предназначенные для ветви по умолчанию, {% data variables.product.prodname_dotcom %} использует граф зависимостей для добавления проверок зависимостей в запрос на вытягивание. Они указывают, содержат ли зависимости уязвимости и если да, то версию зависимости, в которой была исправлена уязвимость. Дополнительные сведения см. в статье "[Сведения о проверке зависимостей](/code-security/supply-chain-security/about-dependency-review)".

## Доступность графа зависимостей

{% ifversion fpt or ghec %} Граф зависимостей доступен для каждого общедоступного репозитория, который определяет зависимости в поддерживаемой экосистеме пакетов, используя поддерживаемый формат файла. Администраторы репозиториев также могут настраивать граф зависимостей для частных репозиториев. {% endif %} Дополнительные сведения {% ifversion ghes %}о конфигурации графа зависимостей{% endif %}см. в разделе "[Настройка графа зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)".

{% данных reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## Включенные зависимости

Граф зависимостей включает все зависимости репозитория, которые определены в файлах манифеста и блокировки или другим способом, для поддерживаемых экосистем{% ifversion dependency-submission-api %}, а также все зависимости, отправленные через API отправки зависимостей (бета-версия){% endif %}. В том числе:

- Прямые зависимости, явно определенные в файле манифеста или блокировки{% ifversion dependency-submission-api %} или отправленные через API отправки зависимостей (бета-версия){% endif %}.
- Косвенные зависимости этих прямых зависимостей, также известные как транзитивные зависимости или подзависимости

Граф зависимостей определяет косвенные зависимости{% ifversion fpt or ghec %} либо явным образом из файла блокировки, либо путем проверки зависимостей ваших прямых зависимостей. Чтобы получить наиболее надежный граф, вам следует использовать файлы блокировки (или их эквивалент), так как они определяют именно те версии прямых и косвенных зависимостей, которые вы используете в настоящее время. Если вы используете файлы блокировки, убедитесь, что все участники репозитория используют одни и те же версии, что упрощает тестирование и отладку кода{% else %} из файлов блокировки{% endif %}.

Дополнительную информацию о том, как {% data variables.product.product_name %} помогает понять зависимости в среде, см. в разделе [Сведения о безопасности цепочки поставок](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

{% ifversion fpt or ghec %}

## Включенные зависимые компоненты

Для общедоступного репозитория сообщаются только общедоступные репозитории, зависящие от него или от пакетов, которые он публикует. Для частных репозиториев эти сведения не сообщаются.{% endif %}

## Использование графа зависимостей

Граф зависимостей можно использовать для следующих целей.

- Изучение репозиториев, от которых зависит ваш код{% ifversion fpt or ghec %}, и репозиториев, которые зависят от вашего кода{% endif %}. Дополнительные сведения см. в разделе [Изучение зависимостей репозитория](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository). {% ifversion ghec %}
- Просмотр сводки зависимостей, используемых в репозиториях организации, на одной панели мониторинга. Дополнительные сведения см. в разделе [Просмотр аналитических сведений для организации](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights).{% endif %}
- Просмотр и обновление уязвимых зависимостей для репозитория. Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).{% ifversion fpt or ghes or ghec %}
- Просмотр сведений об уязвимых зависимостях в запросах на вытягивание. Дополнительные сведения см. в разделе [Проверка изменений зависимостей в запросе на вытягивание](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request).{% endif %}

## Поддерживаемые экосистемы пакетов

Рекомендуемые форматы явно определяют, какие версии используются для всех прямых и косвенных зависимостей. При использовании этих форматов график зависимостей будет более точным. Он также отражает текущую настройку сборки и позволяет графу зависимостей сообщать об уязвимостях как в прямых, так и косвенных зависимостях.{% ifversion fpt or ghec %} Косвенные зависимости, выводимые из файла манифеста (или его эквивалента), исключаются из проверок на наличие небезопасных зависимостей.{% endif %}

| Диспетчер пакетов | Языки | Рекомендуемые форматы | Все поддерживаемые форматы |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`, `Cargo.lock` | {%- endif %} | | Composer | PHP `composer.lock` | `composer.json`, `composer.lock` | | Языки NuGet | .NET (C#, F#, VB), C++ |   `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj` |  `.csproj`, `.vbproj`, `.nuspec`, `.vcxproj`, `.fsproj`, `packages.config` | {%- ifversion github-actions-in-dependency-graph %} | Рабочие процессы {% данных variables.product.prodname_actions %} <sup>[†]</sup> | | YAML `.yml`, `.yaml` | `.yml`, `.yaml` | {%- endif %} | Модули Go | Перейти | `go.sum` | `go.mod`, `go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | | JavaScript            `package-lock.json` | `package-lock.json`, `package.json`| | pip | | Python `requirements.txt`, `pipfile.lock` | `requirements.txt``pipfile`, <sup>,</sup> `pipfile.lock``setup.py` []] | {%- ifversion dependency-graph-dart-support %} | | pub Дарт | `pubspec.lock` | `pubspec.yaml`, `pubspec.lock` | {%- endif %} {%- ifversion fpt или ghec или ghes > 3.3 или ghae > 3,3 %} | | поэзии Python | Python `poetry.lock` | `poetry.lock`, `pyproject.toml` | {%- endif %} | | RubyGems Руби | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | | JavaScript `yarn.lock` | `package.json`,`yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] Рабочие процессы {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %} должны находиться в каталоге `.github/workflows/` репозитория, чтобы их можно было распознать как манифесты. Любые действия или рабочие процессы, для ссылок на которые используется синтаксис `jobs[*].steps[*].uses` или `jobs.<job_id>.uses`, будут анализироваться как зависимости. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-syntax-for-github-actions).

{% endif %}

[‡] Если вы перечисляете зависимости Python в файле `setup.py`, то нам, возможно, не удастся проанализировать и перечислить каждую зависимость в вашем проекте.

{% ifversion github-actions-in-dependency-graph %} {% note %}

**Примечание.** Зависимости рабочих процессов {% data variables.product.prodname_actions %} отображаются в графе зависимостей в целях информирования. В настоящее время для рабочих процессов {% data variables.product.prodname_actions %} оповещения Dependabot не поддерживаются.

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}API отправки зависимостей (бета-версия) можно использовать для добавления зависимостей из выбранного диспетчера пакетов или экосистемы в граф зависимостей, даже если эта экосистема отсутствует в предоставленном выше списке поддерживаемых экосистем. Граф зависимостей будет отображать отправленные зависимости, сгруппированные по экосистеме, но отдельно от зависимостей, проанализированных из файлов манифеста или блокировки. Вы будете получать {% data variables.product.prodname_dependabot_alerts %} только для тех зависимостей, которые относятся к одной из [поддерживаемых экосистем](https://github.com/github/advisory-database#supported-ecosystems) {% data variables.product.prodname_advisory_database %}. Дополнительные сведения об API отправки зависимостей см. в статье [Использование API отправки зависимостей](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).{% endif %}
## Дополнительные материалы

- [Граф зависимостей](https://en.wikipedia.org/wiki/Dependency_graph) в Википедии
- [Изучение зависимостей репозитория](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
- [Просмотр и обновление {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [Устранение неполадок обнаружения уязвимых зависимостей](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
