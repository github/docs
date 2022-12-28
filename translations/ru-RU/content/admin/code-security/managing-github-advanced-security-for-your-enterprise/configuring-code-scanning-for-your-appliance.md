---
title: Настройка сканирования кода на устройстве
shortTitle: Configuring code scanning
intro: 'Вы можете включить, настроить и отключить {% data variables.product.prodname_code_scanning %} для {% data variables.location.product_location %}. {% data variables.product.prodname_code_scanning_capc %} позволяет пользователям проверять код на наличие уязвимостей и ошибок.'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/configuration/configuring-code-scanning-for-your-appliance
  - /admin/advanced-security/configuring-code-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Security
ms.openlocfilehash: 11ad9bfe108d339af3992277cab0918998eb54fb
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161089'
---
{% data reusables.code-scanning.beta %}

## Сведения о {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %}

Вы можете настроить {% data variables.product.prodname_code_scanning %} для выполнения анализа {% data variables.product.prodname_codeql %}, а также стороннего анализа. {% data variables.product.prodname_code_scanning_capc %} также поддерживает выполнение анализа в собственном коде с помощью {% data variables.product.prodname_actions %} или извне, используя существующую инфраструктуру CI/CD. В приведенной ниже таблице перечислены все параметры, доступные пользователям при настройке {% data variables.location.product_location %}, чтобы разрешить {% data variables.product.prodname_code_scanning %} использовать действия.

{% data reusables.code-scanning.enabling-options %}

## Проверка того, включает ли ваша лицензия {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.check-for-ghas-license %}

## Предварительные требования для {% data variables.product.prodname_code_scanning %}

- Лицензия {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (см. раздел [Сведения о выставлении счетов {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)"){% endif %}

- {% data variables.product.prodname_code_scanning_capc %} на консоли управления (см. на странице [Включение {% data variables.product.prodname_GH_advanced_security %} для предприятия](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise))

- Виртуальная машина или контейнер для выполнения анализа {% data variables.product.prodname_code_scanning %}.

## Выполнение {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_actions %}

### Настройка локального средства выполнения

{% data variables.product.prodname_ghe_server %} может выполнять {% data variables.product.prodname_code_scanning %} с помощью рабочего процесса {% data variables.product.prodname_actions %}. Во-первых, необходимо подготовить одно или несколько локальных средств выполнения {% data variables.product.prodname_actions %} в вашей среде. Вы можете предоставить локальные средства выполнения на уровне репозитория, организации или корпоративной учетной записи. Дополнительные сведения см. в разделах [Сведения о локальных средствах выполнения](/actions/hosting-your-own-runners/about-self-hosted-runners) и [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Необходимо убедиться, что GIT находится в переменной PATH для любых локальных средств выполнения, которые используются для выполнения действий {% data variables.product.prodname_codeql %}.

{% ifversion ghes > 3.7 or ghae > 3.7 %} {% примечание %}

Если вы используете {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} для анализа кода, написанного на Python на предприятии, необходимо убедиться, что в локальном средстве выполнения тестов установлен Python 3.

{% endnote %} {% endif %}

### Подготовка действий для {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %} Если вы хотите использовать действия для выполнения {% data variables.product.prodname_code_scanning %} на {% data variables.product.prodname_ghe_server %}, эти действия должны быть доступны на устройстве.

Действие {% data variables.product.prodname_codeql %} включается в установку {% data variables.product.prodname_ghe_server %}. Если {% data variables.product.prodname_ghe_server %} {{ allVersions[currentVersion].currentRelease }} и {% data variables.product.prodname_actions %} имеют доступ к Интернету, действие автоматически скачает пакет {% data variables.product.prodname_codeql %} {% data variables.product.codeql_cli_ghes_recommended_version %}, необходимый для выполнения анализа. Кроме того, можно использовать средство синхронизации, чтобы сделать локально доступной последнюю версию пакета анализа {% data variables.product.prodname_codeql %}. Дополнительные сведения см. ниже в разделе [Настройка анализа данных {% data variables.product.prodname_codeql %} на сервере без доступа к Интернету](#configuring-codeql-analysis-on-a-server-without-internet-access).

Вы также можете сделать сторонние действия доступными пользователям для {% data variables.product.prodname_code_scanning %}, настроив {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. ниже в разделе [Настройка {% data variables.product.prodname_github_connect %} для синхронизации {% data variables.product.prodname_actions %}](/enterprise/admin/configuration/configuring-code-scanning-for-your-appliance#configuring-github-connect-to-sync-github-actions).

### Настройка анализа {% data variables.product.prodname_codeql %} на сервере без доступа к Интернету
Если сервер, на котором выполняется {% data variables.product.prodname_ghe_server %}, не подключен к Интернету и вы хотите разрешить пользователям включать {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} для своих репозиториев, необходимо использовать средство синхронизации действий {% data variables.product.prodname_codeql %} для копирования пакета анализа {% data variables.product.prodname_codeql %} из {% data variables.product.prodname_dotcom_the_website %} на ваш сервер. Средство и сведения о его использовании доступны по адресу [https://github.com/github/codeql-action-sync-tool](https://github.com/github/codeql-action-sync-tool/).

Если вы настроили средство синхронизации действий {% data variables.product.prodname_codeql %}, его можно использовать для синхронизации последних выпусков действия {% data variables.product.prodname_codeql %} и связанного пакета анализа {% data variables.product.prodname_codeql %}. Они совместимы с {% data variables.product.prodname_ghe_server %}.

{% endif %}

### Настройка {% data variables.product.prodname_github_connect %} для синхронизации {% data variables.product.prodname_actions %}
1. Если вы хотите скачать рабочие процессы действий по запросу из {% data variables.product.prodname_dotcom_the_website %}, необходимо включить {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в разделе [Включение {% data variables.product.prodname_github_connect %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud#enabling-github-connect).
2. Также необходимо включить {% data variables.product.prodname_actions %} для {% data variables.location.product_location %}. Дополнительные сведения см. в разделе [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server).
3. Следующим шагом является настройка доступа к действиям в {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}. Дополнительные сведения см. в статье "[Включение автоматического доступа к действиям {% data variables.product.prodname_dotcom_the_website %} с помощью {% data variables.product.prodname_github_connect %}](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)".
4. Добавьте локальное средство выполнения в репозиторий, организацию или корпоративную учетную запись. Дополнительные сведения см. в разделе [Добавление локальных средств выполнения](/actions/hosting-your-own-runners/adding-self-hosted-runners).

## Выполнение сканирования кода с помощью {% data variables.product.prodname_codeql_cli %}

Если вы не хотите использовать {% data variables.product.prodname_actions %}, необходимо запустить {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_codeql_cli %}. 

{% data variables.product.prodname_codeql_cli %} — это инструмент командной строки, который используется для анализа баз кода на любом компьютере, включая стороннюю систему CI/CD. Дополнительные сведения см. на странице [Установка CodeQL CLI в системе непрерывной интеграции](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system).

{% ifversion codeql-runner-supported %}

## Выполнение {% data variables.product.prodname_code_scanning %} с помощью {% data variables.code-scanning.codeql_runner %}

{% data reusables.code-scanning.deprecation-codeql-runner %}

Если вы не хотите использовать {% data variables.product.prodname_actions %}, можно запустить {% data variables.product.prodname_code_scanning %} с помощью {% data variables.code-scanning.codeql_runner %}. 

{% data variables.code-scanning.codeql_runner %} — это программа командной строки, которую можно добавить в стороннюю систему CI/CD. Средство выполняет анализ данных {% data variables.product.prodname_codeql %} при извлечении из репозитория {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Запуск {% data variables.product.prodname_code_scanning %} в системе непрерывной интеграции](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system).

{% endif %}
