---
title: Настройка шаблонов проблем для репозитория
intro: 'Вы можете настроить шаблоны, доступные участникам для использования при открытии новых проблем в репозитории.'
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431995'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Создание шаблонов проблем

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. В разделе "Компоненты" под заголовком "Проблемы" щелкните **Настройка шаблонов**.
![Кнопка запуска настройки шаблонов](/assets/images/help/repository/set-up-templates.png)
4. В раскрывающемся меню добавления шаблона выберите тип шаблона, который хотите создать.
![Раскрывающееся меню добавления шаблона](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Чтобы просмотреть или изменить шаблон перед его фиксацией в репозитории, нажмите кнопку **Просмотреть и изменить**.
![Кнопка предварительного просмотра и изменения](/assets/images/help/repository/preview-and-edit-button.png)
6. Чтобы изменить шаблон, щелкните {% octicon "pencil" aria-label="The edit icon" %} и внесите необходимые изменения в соответствующих полях.
![Кнопка изменения шаблона проблемы](/assets/images/help/repository/issue-template-edit-button.png)
7. Чтобы автоматически задать заголовок проблемы по умолчанию, назначьте проблему людям с доступом на чтение к репозиторию или примените метки к шаблону проблемы, введя эти сведения в разделе "Необязательные дополнительные сведения". Эти сведения также можно добавить в шаблон проблемы с помощью `title`, `labels` или `assignees` в формате титульного листа YAML.
![Дополнительные сведения для шаблона проблемы](/assets/images/help/repository/additional-issue-template-info.png)
8. Завершив редактирование и предварительный просмотр шаблона, нажмите кнопку **Предложить изменения** в правом верхнем углу страницы.
![Кнопка "Предложить изменения"](/assets/images/help/repository/propose-changes-button.png)
9. Введите сообщение фиксации, описывающее ваши изменения.
![Поле сообщения фиксации шаблона проблемы](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Под полями сообщения фиксации укажите, где следует зафиксировать шаблон — непосредственно в ветви по умолчанию или создать новую ветвь и открыть запрос на вытягивание. Дополнительные сведения о запросах на вытягивание см. в разделе [Сведения о запросах на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
![Выбор фиксации шаблона проблемы в главной ветви или открытия запроса на вытягивание](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Щелкните **Зафиксировать изменения**. После объединения этих изменений в ветвь по умолчанию шаблон будет доступен участникам для использования при открытии новых проблем в репозитории.

{% ifversion fpt or ghec %}

## Создание форм проблем

{% data reusables.community.issue-forms-beta %}

С помощью форм проблем можно создавать шаблоны проблем с настраиваемыми полями веб-формы. Вы можете стимулировать участников включать конкретные структурированные сведения с помощью форм проблем в вашем репозитории. Формы проблем создаются в YAML с помощью схемы формы {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [Синтаксис схемы формы {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema). {% data reusables.actions.learn-more-about-yaml %}

Чтобы использовать форму проблем в репозитории, необходимо создать новый файл и добавить его в папку `.github/ISSUE_TEMPLATE` в этом репозитории.

Ниже приведен пример файла конфигурации формы проблем.

{% data reusables.community.issue-forms-sample %}

Ниже приведена преобразованная для просмотра версия формы проблем.
  ![Форма проблем, преобразованная для просмотра](/assets/images/help/repository/sample-issue-form.png)

1. Выберите репозиторий, в котором хотите создать форму проблем. Вы можете использовать существующий репозиторий, к которому у вас есть доступ для записи, или создать репозиторий. Дополнительные сведения о создании репозитория см. в разделе [Создание репозитория](/articles/creating-a-new-repository).
2. В репозитории создайте файл с именем `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, заменив `FORM-NAME` на имя вашей формы проблем. Дополнительные сведения о создании новых файлов в GitHub см. в разделе [Создание новых файлов](/github/managing-files-in-a-repository/creating-new-files).
3. В тексте нового файла введите содержимое формы проблем. Дополнительные сведения см. в разделе [Синтаксис форм проблем](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms).
4. Зафиксируйте этот файл в ветви по умолчанию вашего репозитория. Дополнительные сведения см. в статье "[Создание файлов](/github/managing-files-in-a-repository/creating-new-files)".

{% endif %}

## Настройка выбора шаблона

{% data reusables.repositories.issue-template-config %}

Вы можете стимулировать участников использовать шаблоны проблем, задав для `blank_issues_enabled` значение `false`. Если задать для `blank_issues_enabled` значение `true`, люди смогут открывать пустую проблему.

{% note %}

**Примечание.** Если вы использовали устаревший рабочий процесс для создания файла `issue_template.md` вручную в папке `.github` и включения пустых проблем в файл *config.yml*, шаблон в `issue_template.md` будет использоваться, когда пользователи решат открыть пустую проблему. Если отключить пустые проблемы, этот шаблон никогда не будет использоваться.

{% endnote %}

Если вы предпочитаете получать некоторые отчеты вне {% data variables.product.product_name %}, то можете направлять людей на внешние сайты с помощью `contact_links`.

Ниже приведен пример файла *config.yml*.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Ваш файл конфигурации будет настраивать выбор шаблонов при включении файла в ветвь репозитория по умолчанию.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. В поле имени файла введите `.github/ISSUE_TEMPLATE/config.yml`.
  ![Имя файла конфигурации](/assets/images/help/repository/template-config-file-name.png)
4. В тексте нового файла введите содержимое вашего файла конфигурации.
  ![Содержимое файла конфигурации](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Дополнительные материалы

- [Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates)
- [Создание одного шаблона проблем для репозитория вручную](/articles/manually-creating-a-single-issue-template-for-your-repository)
