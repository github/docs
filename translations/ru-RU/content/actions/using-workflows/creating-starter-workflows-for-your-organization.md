---
title: Создание начальных рабочих процессов для организации
shortTitle: Create starter workflows
intro: 'Узнайте, как создавать начальные рабочие процессы, чтобы упростить для пользователей в команде добавление новых рабочих процессов.'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
  - /actions/learn-github-actions/creating-workflow-templates
  - /actions/learn-github-actions/creating-starter-workflows-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
ms.openlocfilehash: 77c220a06ac8d27db1c54a5a6c6c8c17662ed958
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/05/2022
ms.locfileid: '148010068'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Обзор

{% data reusables.actions.workflow-organization-templates %}

{% data reusables.actions.starter-workflow-categories %}

## Создание начального рабочего процесса

Начальные рабочие процессы могут создаваться пользователями с доступом на запись в репозиторий `.github` организации. Затем их могут использовать члены организации, имеющие разрешение на создание рабочих процессов.

{% ifversion fpt %} Начальные рабочие процессы, созданные пользователями, можно использовать только для создания рабочих процессов в общедоступных репозиториях. Организации, использующие {% data variables.product.prodname_ghe_cloud %}, также могут использовать начальные рабочие процессы для создания рабочих процессов в частных репозиториях. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/learn-github-actions/creating-starter-workflows-for-your-organization).
{% endif %}

{% ifversion fpt или ghes > 3.3 или ghae > 3.3 или ghec %} {% примечания %}

**Примечание.** Чтобы избежать дублирования между начальными рабочими процессами, можно вызывать повторно используемые рабочие процессы из рабочего процесса. Это позволяет упростить обслуживание рабочих процессов. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/learn-github-actions/reusing-workflows).

{% endnote %} {% endif %}

В этой процедуре показано, как создать начальный рабочий процесс и файл метаданных. Файл метаданных описывает способ представления начальных рабочих процессов пользователям при создании рабочего процесса.

1. Если у организации нет общедоступного репозитория с именем `.github`, создайте его.
2. Создайте каталог с именем `workflow-templates`.
3. Создайте новый файл рабочего процесса в каталоге `workflow-templates`.

   Если необходимо сослаться на ветвь репозитория по умолчанию, можно использовать заполнитель `$default-branch`. При создании рабочего процесса этот заполнитель автоматически заменяется именем ветви по умолчанию репозитория.

   Например, этот файл с именем `octo-organization-ci.yml` демонстрирует базовый рабочий процесс.

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: {% data reusables.actions.action-checkout %}

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
4. Создайте файл метаданных в каталоге `workflow-templates`. Файл метаданных должен иметь то же имя, что и файл рабочего процесса, однако вместо расширения `.yml` должно быть добавлено `.properties.json`. Например, файл с именем `octo-organization-ci.properties.json` содержит метаданные для файла рабочего процесса с именем `octo-organization-ci.yml`.
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI starter workflow.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **Требуется.** Имя рабочего процесса. Отображается в списке доступных рабочих процессов.
   * `description` - **Требуется.** Описание рабочего процесса. Отображается в списке доступных рабочих процессов.
   * `iconName` - **Необязательно.** Указывает значок рабочего процесса, отображаемого в списке рабочих процессов. В качестве `iconName` следует использовать имя SVG-файла без расширения имени файла, хранящегося в каталоге `workflow-templates`. Например, на файл SVG с именем `example-icon.svg` будет даваться ссылка `example-icon`.
   * `categories` - **Необязательно.** Определяет категорию языка рабочего процесса. Когда пользователь просматривает доступные начальные рабочие процессы для репозитория, рабочие процессы, соответствующие определенному языку проекта, выделяются из общей массы. Сведения о доступных языковых категориях см. в разделе https://github.com/github/linguist/blob/master/lib/linguist/languages.yml.
   * `filePatterns` - **Необязательно.** Позволяет использовать рабочий процесс, если репозиторий пользователя содержит файл в корневом каталоге, соответствующий определенному регулярному выражению.

Чтобы добавить еще один начальный рабочий процесс, добавьте файлы в тот же каталог `workflow-templates`. Пример:

![Файлы рабочего процесса](/assets/images/help/images/workflow-template-files.png)

## Дальнейшие действия

Дополнительные сведения о {% data variables.product.prodname_actions %} см. в разделе [Создание начальных рабочих процессов](/actions/using-workflows/using-starter-workflows).
