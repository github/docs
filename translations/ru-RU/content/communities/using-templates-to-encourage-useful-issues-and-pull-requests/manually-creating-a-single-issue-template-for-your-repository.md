---
title: Создание одного шаблона проблем для репозитория вручную
intro: 'Когда вы добавите шаблон созданной вручную проблемы в репозиторий, участники проекта автоматически увидят содержимое шаблона в текстовой области проблемы.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092337'
---
{% data reusables.repositories.legacy-issue-template-tip %}

Можно создать подкаталог *ISSUE_TEMPLATE/* в любой из поддерживаемых папок, чтобы он содержал шаблоны для нескольких проблем, и использовать параметр запроса `template`, чтобы указать шаблон, который будет заполнять текст проблемы. Дополнительную информацию см. в разделе [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).

Можно добавить титульный лист YAML в каждый шаблон проблемы, чтобы предварительно заполнить заголовок проблемы, автоматически добавлять метки и назначаемые элементы, а также присваивать шаблону имя и описание, которые будут отображаться в средстве выбора шаблона, который пользователи видят при создании новой проблемы в репозитории.

Ниже приведен пример титульного листа YAML.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Примечание.** Если значение титульного листа содержит зарезервированный символ YAML, например `:`, необходимо поместить все значения в кавычки. Например, `":bug: Bug"` или `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Добавление шаблона проблемы

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла:
    -  Чтобы сделать шаблон проблемы видимым в корневом каталоге репозитория, введите имя *issue_template*. Например, `issue_template.md`.
  ![Имя нового шаблона проблемы в корневом каталоге](/assets/images/help/repository/issue-template-file-name.png)
    - Чтобы сделать шаблон проблемы видимым в корневом каталоге репозитория `docs`, введите *docs/* , а затем имя *issue_template*. Например, `docs/issue_template.md`, ![ проблемы в каталоге документации](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Чтобы сохранить файл в скрытом каталоге, введите *.github/* , а затем имя *issue_template*. Например, `.github/issue_template.md`.
  ![Шаблон новой проблемы в скрытом каталоге](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Чтобы создать шаблоны для нескольких проблем и использовать параметр запроса `template`, чтобы указать шаблон для заполнения текста проблемы, введите *.github/ISSUE_TEMPLATE/,* , а затем имя шаблона проблемы. Например, `.github/ISSUE_TEMPLATE/issue_template.md`. Можно также хранить шаблоны для нескольких проблем в подкаталоге `ISSUE_TEMPLATE` в корне или каталогах `docs/`. Дополнительную информацию см. в разделе [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).
  ![Шаблон для нескольких новых проблем в скрытом каталоге](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. Добавьте шаблон проблемы в текст нового файла. Это может быть:
    - Титульный лист YAML
    - Ожидаемое поведение и фактическое поведение
    - Шаги по воспроизведению проблемы
    - Спецификации, такие как версия проекта, операционной системы или оборудования {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Шаблоны доступны участникам совместной работы при слиянии их в ветвь по умолчанию репозитория.
{% data reusables.files.propose_new_file %}

## Дополнительные материалы

- [Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates)
- [Настройка шаблонов проблем для репозитория](/articles/configuring-issue-templates-for-your-repository)
- [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Создание проблемы](/articles/creating-an-issue)
