---
title: Создание запроса на включение изменений
intro: 'Создайте запрос на вытягивание, чтобы предложить изменения в репозитории и совместно работать над ними. Эти изменения предлагаются в *ветви*, что гарантирует, что ветвь по умолчанию содержит только завершенную и утвержденную работу.'
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110996'
---
Если вы хотите создать новую ветвь для запроса на вытягивание и у вас нет разрешений на запись в репозитории, можно сначала создать вилку репозитория. Дополнительные сведения см. в разделах [Создание запроса на вытягивание из вилки](/articles/creating-a-pull-request-from-a-fork) и [Сведения о вилках](/articles/about-forks).

Вы можете указать ветвь, с которой хотите объединить изменения при создании запроса на вытягивание. Запросы на вытягивание можно открывать только между двумя различными ветвями.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Изменение диапазона ветвей и целевого репозитория

By default, pull requests are based on the parent repository's <a href="/articles/setting-the-default-branch">default branch</a>. Дополнительные сведения см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch).

Если родительский репозиторий по умолчанию не является правильным, можно изменить родительский репозиторий и ветвь с помощью раскрывающегося списка. Вы также можете заменить головные и базовые ветви в раскрывающемся списке, чтобы установить различия между контрольными точками. Контрольными точками здесь должны быть имена ветвей в репозитории GitHub.

![Запрос на вытягивание, изменение ветвей](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

При работе с ветвями помните, что *базовая ветвь* — это то, **куда** должны применяться изменения, а *головная ветвь* — это то, **откуда** берутся изменения.

При изменении базового репозитория также изменяются уведомления о запросе на вытягивание. Все, кто может отправлять запросы в базовый репозиторий, получат уведомление по электронной почте и увидят новый запрос на вытягивание на панели мониторинга при следующем входе.

Когда вы изменяете какую-либо информацию в диапазоне ветвей, области предварительного просмотра "Фиксация" и "Файлы изменены" обновляются и показывают новый диапазон.

{% tip %}

**Совет**.
- С помощью представления сравнения можно настроить сравнения в любом временном интервале. Дополнительные сведения см. в статье [Сравнение фиксаций](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits).
- Сопровождающие проекта могут добавлять шаблон запроса на вытягивание для репозитория. Шаблоны включают запросы на ввод сведений в тексте запроса на вытягивание. Дополнительные сведения см. в статье "[Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates).

{% endtip %}

## Создание запроса на вытягивание

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. В меню "Ветвь" выберите ветвь, содержащую фиксации.
  ![Раскрывающееся меню "Ветвь"](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. В раскрывающемся меню _базовой_ ветви выберите ветвь, в которую вы хотите объединить изменения, а затем в раскрывающемся меню ветви _сравнения_ выберите ветвь раздела, в которую вы внесли изменения.
  ![Раскрывающиеся меню для выбора базовой ветви и ветви сравнения](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

После проверки запроса на вытягивание его можно [объединить в репозиторий](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы создать запрос на вытягивание, используйте подкоманду `gh pr create`.

```shell
gh pr create
```

Чтобы назначить запрос на вытягивание отдельному пользователю, используйте флаги `--assignee` или `-a`. Можно использовать `@me` для назначения запроса на вытягивание самому себе.

```shell
gh pr create --assignee "@octocat"
```

Чтобы указать ветвь, в которую требуется объединить запрос на вытягивание, используйте флаги `--base` или `-B`. Чтобы указать ветвь, содержащую фиксации для запроса на вытягивание, используйте флаги `--head` или `-H`.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

Чтобы включить заголовок и текст нового запроса на вытягивание, используйте флаги `--title` и `--body`.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

Чтобы пометить запрос на вытягивание как черновик, используйте флаг `--draft`.

```shell
gh pr create --draft
```

Чтобы добавить метки или вехи в новый запрос на вытягивание, используйте флаги `--label` и `--milestone`.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

Чтобы добавить новый запрос на вытягивание в конкретный проект, используйте флаг `--project`.

```shell
gh pr create --project octocat-project
```

Чтобы назначить отдельного пользователя или команду в качестве рецензентов, используйте флаг `--reviewer`.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

Чтобы создать запрос на вытягивание в веб-браузере по умолчанию, используйте флаг `--web`.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. Переключитесь на ветвь, для которой требуется создать запрос на вытягивание. Дополнительные сведения см. в разделе [Коммутация между ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Щелкните **Создать запрос на вытягивание**. {% data variables.product.prodname_desktop %} откроет браузер по умолчанию, чтобы вы могли перейти к {% data variables.product.prodname_dotcom %}.
  ![Кнопка "Создать запрос на вытягивание"](/assets/images/help/desktop/mac-create-pull-request.png).
4. На {% data variables.product.prodname_dotcom %} убедитесь, что ветвь в раскрывающемся меню **база:**  — это ветвь, в которой требуется выполнить слияние изменения. Убедитесь, что ветвь в раскрывающемся меню **сравнить:**  — это тематическая ветвь, в которой вы внесли изменения.
  ![Раскрывающиеся меню для выбора базы и сравнения ветвей](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Переключитесь на ветвь, для которой требуется создать запрос на вытягивание. Дополнительные сведения см. в разделе [Коммутация между ветвями](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches).
2. Щелкните **Создать запрос на вытягивание**. {% data variables.product.prodname_desktop %} откроет браузер по умолчанию, чтобы вы могли перейти к {% data variables.product.prodname_dotcom %}.
  ![Кнопка "Создать запрос на вытягивание"](/assets/images/help/desktop/windows-create-pull-request.png).
3. На {% data variables.product.prodname_dotcom %} убедитесь, что ветвь в раскрывающемся меню **база:**  — это ветвь, в которой требуется выполнить слияние изменения. Убедитесь, что ветвь в раскрывающемся меню **сравнить:**  — это тематическая ветвь, в которой вы внесли изменения.
  ![Раскрывающиеся меню для выбора базы и сравнения ветвей](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. После фиксации изменений в локальной копии репозитория щелкните значок **Создать запрос на вытягивание**.
![Боковая панель управления исходным кодом с выделенной кнопкой подготовки](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Убедитесь в том, что локальная ветвь и репозиторий, из которых выполняется слияние, а также удаленная ветвь и репозиторий, с которыми выполняется слияние, выбраны правильно. Затем задайте для запроса на вытягивание название и описание.
![Боковая панель запроса на вытягивание GitHub](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Нажмите кнопку **Создать**.

Дополнительные сведения о создании запросов на вытягивание в {% data variables.product.prodname_github_codespaces %} см. в разделе [Использование {% data variables.product.prodname_github_codespaces %} для запросов на вытягивание](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests).

{% endcodespaces %}

{% endif %}
## Дополнительные материалы

- [Создание запроса на вытягивание из вилки](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Синхронизация запроса на вытягивание с базовой ветвью](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)
- [Изменение базовой ветви запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)
- [Добавление проблем и запросов на вытягивание на доску проекта из боковой панели](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)
- [Сведения об автоматизации проблем и запросов на вытягивание с параметрами запроса](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Назначение проблем и запросов на вытягивание другим пользователям GitHub](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)
- [Написание содержимого на GitHub](/github/writing-on-github)
