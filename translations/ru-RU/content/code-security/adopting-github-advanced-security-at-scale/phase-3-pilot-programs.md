---
title: "Этап\_3. Пилотные программы"
intro: 'Вы можете начать с нескольких важных проектов и команд, с которыми можно провести пилотное развертывание. Таким образом, начальная группа специалистов сможет ознакомиться с инструментами GHAS, узнать, как включать и настраивать их. Это позволит построить фундамент для развертывания GHAS в масштабе всей организации.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 3. Pilot programs
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d56427173580558a192d0709ae700cbd497e2935
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109111'
---
{% note %}

Эта статья является частью серии "Внедрение {% data variables.product.prodname_GH_advanced_security %} в большом масштабе". Предыдущая статья этой серии: [Этап 2. Подготовка к включению в большом масштабе](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale).

{% endnote %}

## О пилотных программах

Мы рекомендуем определить несколько проектов или команд с высоким уровнем влияния для использования в пилотном запуске GHAS. Это позволит первой группе в вашей компании познакомиться с GHAS и создать надежный фундамент для GHAS перед развертыванием в оставшейся части компании.

Действия этого этапа помогут вам включить GHAS на предприятии, приступить к использованию его функций и изучить результаты. Если вы работаете с {% data variables.product.prodname_professional_services %}, они могут оказать дополнительную помощь в рамках этого процесса посредством сессий адаптации, семинаров GHAS и устранения неполадок по мере необходимости.

Перед запуском пилотных проектов мы рекомендуем запланировать ряд совещаний для ваших команд, например стартовое совещание, проверку в середине этапа и завершающее совещание по пилотному проекту. Такие совещания помогут вам внести необходимые изменения и убедиться, что ваши команды подготовлены и располагают достаточной поддержкой для успешного выполнения пилотного проекта.

{% ifversion ghes %}

Если вы еще не включили GHAS для вашего экземпляра {% data variables.product.prodname_ghe_server %}, см. информацию в разделе [Включение расширенной безопасности GitHub для вашего предприятия](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

Необходимо включить GHAS для каждого пилотного проекта, включив функцию GHAS для каждого репозитория или для всех репозиториев во всех организациях, участвующих в проекте. Дополнительные сведения см. в разделах [Управление параметрами безопасности и анализа для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) или [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

## Пилотный запуск {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Инструкции по включении {% data variables.product.prodname_code_scanning %} в экземпляре {% data variables.product.prodname_ghe_server %} см. в разделе [Настройка сканирования кода для устройства](/admin/advanced-security/configuring-code-scanning-for-your-appliance).

{% elsif ghae %}

Чтобы включить {% data variables.product.prodname_code_scanning %} с помощью {% data variables.product.prodname_actions %}, необходимо сделать средства выполнения доступными для выполнения рабочих процессов в {% data variables.product.prodname_ghe_managed %}. См. раздел [Начало работы с {% data variables.product.prodname_actions %} для {% data variables.product.prodname_ghe_managed %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae).

{% endif %}

Вы можете выполнять проверку кода в репозитории, создав рабочий процесс {% data variables.product.prodname_actions %} для запуска [действия CodeQL](https://github.com/github/codeql-action/). {% ifversion ghec %}{% data variables.product.prodname_code_scanning_capc %} использует [Размещенные в GitHub средства выполнения тестов](/actions/using-github-hosted-runners/about-github-hosted-runners) по умолчанию, но проверку можно настроить под ваши нужды, если вы планируете размещать собственное средство выполнения тестов с собственными спецификациями оборудования. Дополнительные сведения см. в разделе «[Локальные средства выполнения тестов](/actions/hosting-your-own-runners)». {% endif %}

Дополнительные сведения о {% data variables.product.prodname_actions %} см. в следующем разделе:
  - [Изучение GitHub Actions](/actions/learn-github-actions)
  - [Принципы работы GitHub Actions](/actions/learn-github-actions/understanding-github-actions)
  - [События, запускающие рабочие процессы](/actions/learn-github-actions/events-that-trigger-workflows)
  - [Краткий справочник по шаблонам фильтров](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

в рамках пилотной программы мы рекомендуем включать {% data variables.product.prodname_code_scanning %} для конкретных репозиториев. Дополнительные сведения см. в разделе [Настройка сканирования кода для репозитория](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository).

Если вы хотите включить проверку кода для нескольких репозиториев, может потребоваться создать сценарий процесса.

Пример сценария для создания запросов на вытягивание, которые добавляют рабочий процесс {% data variables.product.prodname_actions %} сразу в несколько репозиториев, см. пример с использованием PowerShell в репозитории [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) или [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement), если у команды нет PowerShell, и вместо него она хочет использовать NodeJS.

При выполнении начальных проверок кода может оказаться, что результаты не найдены или возвращается необычное количество результатов. Может потребоваться настроить объекты для помечания флагами при будущих проверках. Дополнительные сведения см. в статье [Настройка сканирования кода для Управляемого экземпляра Базы данных SQL Azure](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning).

Если ваша компания хочет использовать другие сторонние средства анализа кода для сканирования кода GitHub, можно использовать действия для запуска этих средств в GitHub. Кроме того, можно отправить в проверку кода результаты, созданные сторонними средствами в виде SARIF-файлов. Дополнительные сведения см. в разделе [Интеграция с процессами сканирования кода](/code-security/code-scanning/integrating-with-code-scanning).

## Пилотный запуск {% data variables.product.prodname_secret_scanning %}

GitHub сканирует репозитории на наличие известных типов секретов, чтобы предотвратить случайную фиксацию секретов.

{% ifversion ghes %}

Инструкции по включению сканирования секретов для экземпляра {% data variables.product.prodname_ghe_server %} см. в разделе [Настройка сканирования секретов для устройства](/admin/advanced-security/configuring-secret-scanning-for-your-appliance).

{% endif %}

Необходимо включить сканирование секрета для каждого пилотного проекта, включив эту функцию для каждого репозитория или для всех репозиториев в любых организациях, участвующих в проекте. Дополнительные сведения см. в разделах [Управление параметрами безопасности и анализа для репозитория](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) и [Управление параметрами безопасности и анализа для организации](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

Если вы добавили какие-либо пользовательские шаблоны, характерные для вашего предприятия, особенно связанные с пилотными проектами {% data variables.product.prodname_secret_scanning %}, вы можете настроить их. Дополнительные сведения см. в разделе [Определение пользовательских шаблонов для сканирования секретов](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning).

Сведения о просмотре и устранении оповещений о секретах, возвращаемых в репозитории, см. в разделе [Управление оповещениями из службы сканирования секретов](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

{% note %}

Следующая статья этой серии: [Этап 4. Создание внутренней документации](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation).

{% endnote %}
