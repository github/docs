---
title: Создание проблемы
intro: 'Проблемы можно создавать различными способами, поэтому вы можете выбрать наиболее удобный метод для рабочего процесса.'
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410086'
---
С помощью проблем можно отслеживать ошибки, улучшения и другие запросы. Дополнительные сведения см. в разделе [Сведения о проблемах](/issues/tracking-your-work-with-issues/about-issues).

{% data reusables.repositories.administrators-can-disable-issues %}

## Создание проблемы из репозитория

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. Если в вашем репозитории используются шаблоны проблем, щелкните **Начать работу** рядом с типом проблемы, который хотите создать.
  ![Выбор типа проблемы, которую необходимо создать](/assets/images/help/issues/issue_template_get_started_button.png) Или щелкните **Создать пустую проблему**, если среди доступных вариантов отсутствует тип проблемы, которую вы хотите создать.
   ![Ссылка на создание пустой проблемы](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Создание проблемы с помощью {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Дополнительные сведения о {% data variables.product.prodname_cli %} см. в статье ["Общие сведения о {% data variables.product.prodname_cli %}"](/github-cli/github-cli/about-github-cli).

Чтобы создать проблему, используйте подкоманду `gh issue create`. Чтобы пропустить интерактивные подсказки, включите флаги `--body` и `--title`.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

Также можно указать уполномоченных пользователей, метки, вехи и проекты.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## Создание проблемы из комментария

Новую проблему можно создать из комментария в существующей проблеме или запросе на вытягивание. При создании проблемы из комментария она будет содержать фрагмент, отображающий комментарий в исходном расположении.

1. Перейдите к комментарию, из которого хотите создать проблему.
2. В этом комментарии щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
  ![Значок многоточия в комментарии к запросу на вытягивание](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Щелкните **Создать ссылку в новой проблеме**.
  ![Пункт меню "Создать ссылку в новой проблеме"](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. В раскрывающемся меню "Репозиторий" выберите репозиторий, в котором хотите открыть проблему.
  ![Раскрывающееся меню "Репозиторий" для новой проблемы](/assets/images/help/pull_requests/new-issue-repository.png)
5. Введите содержательное название и текст проблемы.
  ![Название и текст новой проблемы](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Щелкните **Создать проблему**.
  ![Кнопка создания проблемы](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## Создание проблемы из кода

Новую проблему можно создать из конкретной строки или нескольких строк кода в файле или запросе на вытягивание. При создании проблемы из кода она будет содержать фрагмент, отображающий выбранную строку или диапазон кода. Создать такую проблему можно только в том репозитории, в котором хранится код.

![Проблема, созданная из кода, с исходным фрагментом кода](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. Найдите код, на который хотите сослаться в проблеме:
    - Чтобы создать проблему по коду из файла, откройте этот файл.
    - Чтобы создать проблему по коду из запроса на вытягивание, откройте этот запрос и щелкните {% octicon "diff" aria-label="The file diff icon" %} **Измененные файлы**. Затем откройте файл, содержащий код, который необходимо включить в комментарий, и щелкните **Просмотреть**.
{% data reusables.repositories.choose-line-or-range %}
4. Щелкните значок {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %} слева от диапазона кода. В раскрывающемся меню выберите **Создать ссылку в новой проблеме**.
  ![Создание проблемы из выбранной строки в раскрывающемся меню](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## Создание проблемы из обсуждения

Пользователи с разрешением на рассмотрение в репозитории могут создавать проблемы из обсуждений.

При создании проблемы из обсуждения содержимое записи обсуждения будет автоматически включено в текст проблемы с сохранением меток. Создание проблемы из обсуждения не преобразует обсуждение в проблему и не удаляет его. Дополнительные сведения о {% data variables.product.prodname_discussions %} см. в статье ["Общие сведения об обсуждениях"](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. На правой боковой панели щелкните {% octicon "issue-opened" aria-label="The issues icon" %} **Создать проблему из обсуждения**.
   ![Кнопка создания проблемы из обсуждения](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## Создание проблемы из заметки на доске проекта

Если для отслеживания работы и расстановки приоритетов вы используете доску проекта, заметки на ней можно преобразовать в проблемы. Дополнительные сведения см. в статье ["Общие сведения о досках проектов"](/github/managing-your-work-on-github/about-project-boards) и разделе ["Добавление заметок на доску проекта"](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue).

{% ifversion fpt or ghec %}

## Создание проблемы из элемента списка задач

При обработке проблемы можно использовать списки задач, чтобы разбить работу на небольшие задачи и отслеживать весь комплекс работ до их завершения. Если задача требует дальнейшего отслеживания или обсуждения, вы можете преобразовать задачу в проблему. Для этого наведите указатель на задачу и щелкните значок {% octicon "issue-opened" aria-label="The issue opened icon" %} в правом верхнем углу задачи. Дополнительные сведения см. в разделе [Сведения о списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).

{% endif %}

## Создание проблемы из запроса URL-адреса

Для создания проблем можно использовать параметры запроса. Параметры запроса — это необязательные части URL-адреса, которые можно настроить для совместного использования определенного представления веб-страницы, например результатов поиска с фильтрами или шаблона проблемы на {% data variables.product.prodname_dotcom %}. Чтобы создать собственные параметры запроса, необходимо сопоставить пару ключа и значения.

{% tip %}

**Подсказка.** Также можно создавать шаблоны проблем, по умолчанию содержащие метки, уполномоченных пользователей и название проблемы. Дополнительные сведения см. в разделе "[Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% endtip %}

Чтобы использовать эквивалентный параметр запроса, необходимо иметь соответствующие разрешения для любого действия. Например, потребуется разрешение, чтобы добавить метку в проблему для использования параметра запроса `labels`. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Если вы создадите недопустимый URL-адрес, используя параметры запроса, или если у вас нет соответствующих разрешений, URL-адрес вернет страницу ошибки `404 Not Found`. Если вы создаете URL-адрес, превышающий ограничения сервера, он вернет страницу ошибки `414 URI Too Long`.

Параметр запроса | Пример
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` создает проблему с меткой "ошибка" и названием "Новый отчет об ошибках".
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.` создает проблему с названием "Новый отчет об ошибках" и комментарием "Описание проблемы" в тексте проблемы.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug` создает проблему с метками "нужна помощь" и "ошибка".
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` создает проблему с вехой "Тестирование вех".
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` создает проблему и назначает ее пользователю @octocat.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` создает проблему с названием "Исправление ошибок" и добавляет ее на доску проекта организации 1.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` создает проблему с шаблоном в тексте проблемы. Параметр запроса `template` поддерживает шаблоны, хранящиеся в корневом подкаталоге `ISSUE_TEMPLATE`, а также в каталогах `docs/` и `.github/` в репозитории. Дополнительные сведения см. в разделе "[Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion code-scanning-task-lists %}
## Создание проблемы из оповещения {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} Если для отслеживания работы и расстановки приоритетов вы используете проблемы, с их помощью можно также отслеживать оповещения {% data variables.product.prodname_code_scanning %}.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## Дополнительные материалы

- ["Создание документов на GitHub"](/github/writing-on-github)
