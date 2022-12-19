---
title: Установка CodeQL CLI в системе CI
shortTitle: Install CodeQL CLI
intro: 'Вы можете установить {% data variables.product.prodname_codeql_cli %} и использовать его для выполнения {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} в сторонней системе непрерывной интеграции.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: e84921073dfcf791cedcebf9cd8b512b534f6e06
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098146'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Сведения об использовании {% data variables.product.prodname_codeql_cli %} для {% data variables.product.prodname_code_scanning %}

Используйте {% data variables.product.prodname_codeql_cli %} для запуска {% data variables.product.prodname_code_scanning %} в коде, который вы обрабатываете в сторонней системе непрерывной интеграции (CI). {% data reusables.code-scanning.about-code-scanning %} Дополнительные сведения см. в статье [Сведения о {% data variables.product.prodname_code_scanning %} с {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql). Рекомендуемые спецификации (ОЗУ, ядра ЦП и диск) для выполнения анализа {% data variables.product.prodname_codeql %} см. на странице [Рекомендуемые аппаратные ресурсы для запуска{% data variables.product.prodname_codeql %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql).

{% data reusables.code-scanning.what-is-codeql-cli %}

Кроме того, можно использовать {% data variables.product.prodname_actions %} для запуска {% data variables.product.prodname_code_scanning %} в {% data variables.product.product_name %}. Дополнительные сведения о {% data variables.product.prodname_code_scanning %} с использованием действий см. в разделе [Настройка {% data variables.product.prodname_code_scanning %} для репозитория](/code-security/secure-coding/setting-up-code-scanning-for-a-repository). Общие сведения о параметрах для систем CI см. в разделе [Сведения о CodeQL {% data variables.product.prodname_code_scanning %} в системе CI](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system).

{% data reusables.code-scanning.licensing-note %}

## Загрузка {% data variables.product.prodname_codeql_cli %}

Загрузите пакет {% data variables.product.prodname_codeql %} из https://github.com/github/codeql-action/releases. Содержимое пакета:

- Продукт {% data variables.product.prodname_codeql_cli %}
- совместимая версия запросов и библиотек из https://github.com/github/codeql;
- предварительно скомпилированные версии всех запросов, включенных в пакет.

{% ifversion ghes or ghae %}

{% примечания %} Для {% данных variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }}{% endif %}, рекомендуется {% данных variables.product.prodname_codeql_cli %} версии {% данных variables.product.codeql_cli_ghes_recommended_version %}.
{% endnote %}

{% endif %}

Следует всегда использовать пакет {% data variables.product.prodname_codeql %}, так как это обеспечивает совместимость и более высокую производительность по сравнению с отдельной загрузкой {% data variables.product.prodname_codeql_cli %} и возвратом запросов {% data variables.product.prodname_codeql %}. Если вы будете запускать CLI только на одной конкретной платформе, скачайте соответствующий файл `codeql-bundle-PLATFORM.tar.gz`. Кроме того, можно скачать файл `codeql-bundle.tar.gz`, содержащий CLI для всех поддерживаемых платформ.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## Настройка {% data variables.product.prodname_codeql_cli %} в системе CI

Необходимо предоставить доступ ко всему содержимому пакета {% data variables.product.prodname_codeql_cli %} для каждого сервера CI, на котором будет выполняться анализ CodeQL {% data variables.product.prodname_code_scanning %}. Например, можно настроить каждый сервер для копирования пакета из центрального внутреннего расположения и извлечения его. Кроме того, можно использовать REST API для получения пакета непосредственно из {% data variables.product.prodname_dotcom %}, чтобы использовать преимущества последних улучшений запросов. Обновления для {% data variables.product.prodname_codeql_cli %} выходят каждые 2–3 недели. Пример:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

После извлечения пакета {% data variables.product.prodname_codeql_cli %} можно запустить исполняемый файл `codeql` на сервере:

- Выполнив `/<extraction-root>/codeql/codeql`, где `<extraction-root>` — папка, в которую вы извлекли пакет {% data variables.product.prodname_codeql_cli %}.
- Добавив `/<extraction-root>/codeql` в `PATH`, чтобы можно было запустить исполняемый файл просто как `codeql`.

{% ifversion fpt или ghec или ghes > 3.7 или ghae > 3,7 %} {% примечания %}

Если для анализа кода, написанного на Python, используется {% данных variables.product.prodname_codeql_cli %}, необходимо убедиться, что в системе CI установлен Python 3.

{% endnote %} {% endif %}

## Тестирование настройки {% data variables.product.prodname_codeql_cli %}

После извлечения пакета {% data variables.product.prodname_codeql_cli %} можно выполнить следующую команду, чтобы убедиться, что CLI настроен для создания и анализа баз данных.

- `codeql resolve qlpacks`, если `/<extraction-root>/codeql` находится в `PATH`.
- В противном случае — значение `/<extraction-root>/codeql/codeql resolve qlpacks`.

**Извлечение из успешных выходных данных:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

Убедитесь, что выходные данные содержат ожидаемые языки, а расположение каталога для файлов qlpack указано верно. Расположение должно находиться в извлеченном пакете данных {% data variables.product.prodname_codeql_cli %}, как показано выше в виде `<extraction root>`, если вы не используете извлечение `github/codeql`. Если {% data variables.product.prodname_codeql_cli %} не удается найти qlpacks для ожидаемых языков, убедитесь, что скачали пакет {% data variables.product.prodname_codeql %}, а не отдельную копию {% data variables.product.prodname_codeql_cli %}.

## Создание маркера для проверки подлинности с помощью {% data variables.product.product_name %}

Каждому серверу CI требуется {% данных variables.product.prodname_github_app %} или {% данных variables.product.pat_generic %}, чтобы данные {% variables.product.prodname_codeql_cli %} использовались для отправки результатов в {% данных variables.product.product_name %}. Необходимо использовать маркер доступа или {% data variables.product.prodname_github_app %} с разрешением на запись `security_events`. Если серверы CI уже используют маркер с этой областью для извлечения репозиториев из {% data variables.product.product_name %}, вы можете позволить {% data variables.product.prodname_codeql_cli %} использовать тот же маркер. В противном случае создайте новый маркер с разрешением на запись `security_events` и добавьте его в хранилище секретов системы CI. Дополнительные сведения см. в разделе "[Построение данных {% variables.product.prodname_github_apps %}](/developers/apps/building-github-apps)" и "[Создание {% данных variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

## Дальнейшие действия

Теперь все готово для настройки системы CI для анализа {% data variables.product.prodname_codeql %}, создания результатов и отправки их в {% data variables.product.product_name %}, где результаты будут сопоставляться с ветвью или запросом на вытягивание и отображаться как оповещения {% data variables.product.prodname_code_scanning %}. Дополнительные сведения см. в статье [Настройка {% data variables.product.prodname_codeql_cli %} в системе CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system).
