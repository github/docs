---
title: Локальное получение для изменения запросов на вытягивание
intro: 'Когда кто-то отправляет запрос на вытягивание из вилки или ветви репозитория, его можно объединить локально, чтобы разрешить конфликт слияния или протестировать и проверить изменения перед слиянием в {% data variables.product.product_name %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
  - /articles/checking-out-pull-requests-locally
  - /github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally
permissions: Anyone with write access to a repository can pull a remote pull request down locally.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Check out a PR locally
ms.openlocfilehash: 4102779dd822eb54105d26198f774de76d241f99
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009055'
---
{% note %}

  **Примечание.** Авторы запросов на вытягивание могут предоставить ответственным пользователям вышестоящего репозитория или тем, у кого есть доступ к отправке в вышестоящий репозиторий, разрешение делать фиксации в ветви сравнения их запроса на вытягивание в вилке, принадлежащей пользователю. Дополнительные сведения см. в разделе [Разрешение изменений в ветви запроса на вытягивание, созданной из вилки](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

  {% endnote %}

## Локальное изменение активного запроса на вытягивание

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. В списке запросов на вытягивание выберите тот, который хотите изменить.{% ifversion fpt or ghec %}
3. Чтобы выбрать, где вы хотите открыть запрос на вытягивание, выберите раскрывающийся список **Открыть с помощью {% octicon "triangle-down" aria-label="The down triangle icon" %}** и щелкните одну из вкладок.
  ![Ссылка для доступа к инструкциям по запросу на вытягивание из командной строки](/assets/images/help/pull_requests/open-with-button.png){% else %}
3. В поле слияния щелкните **инструкции по командной строке**. Выполните последовательность действий, чтобы закрыть предлагаемый запрос на вытягивание.
  ![Ссылка для доступа к инструкциям по запросу на вытягивание из командной строки](/assets/images/help/pull_requests/pull_request_show_command_line_merge.png)
4. При необходимости, чтобы просмотреть предлагаемые изменения в {% data variables.product.prodname_desktop %}, щелкните **открыть это в {% data variables.product.prodname_desktop %}** .
  ![Ссылка для локального открытия запроса на вытягивание на рабочем столе](/assets/images/help/desktop/open-pr-in-desktop.png){% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы извлечь запрос на вытягивание локально, используйте подкоманду `gh pr checkout`. Замените `pull-request` номером, URL-адресом или главной ветвью запроса на вытягивание.

```shell
gh pr checkout PULL-REQUEST
```

{% endcli %}

## Локальное изменение неактивного запроса на вытягивание

Если автор запроса на вытягивание не отвечает на запросы или удалил вилку, для запроса на вытягивание по-прежнему можно выполнить слияние. Однако если вы хотите внести изменения в запрос на вытягивание, а автор не отвечает, вам потребуется выполнить некоторые дополнительные действия, чтобы обновить запрос на вытягивание.

После открытия запроса на вытягивание {% data variables.product.product_name %} удаленно сохраняет все изменения. Другими словами, фиксации в запросе на вытягивание доступны в репозитории еще до того, как для запроса на вытягивание выполняется слияние. Можно получить открытый запрос на вытягивание и воссоздать его как свой собственный.

Любой пользователь может работать с ранее открытым запросом на вытягивание, чтобы продолжить работу над ним, протестировать его или даже открыть новый запрос на вытягивание с дополнительными изменениями. Однако выполнять слияние для запросов на вытягивание могут только участники совместной работы с доступом на отправку.

{% data reusables.repositories.sidebar-issue-pr %}
2. В списке "Запросы на вытягивание" щелкните тот, который требуется изменить.
3. Найдите идентификатор неактивного запроса на вытягивание. Это последовательность цифр сразу после заголовка запроса на вытягивание.
  ![Номер идентификатора запросов на вытягивание](/assets/images/help/pull_requests/pull_request_id_number.png) {% data reusables.command_line.open_the_multi_os_terminal %}
5. Получите ссылку на запрос на вытягивание по его номеру идентификатора, создав в процессе новую ветвь.
  ```shell
  $ git fetch origin pull/ID/head:BRANCH_NAME
  ```
6. Перейдите в новую ветвь, основанную на этом запросе на вытягивание:
  ```shell
  [main] $ git checkout BRANCH_NAME
  > Switched to a new branch 'BRANCH_NAME'
  ```
7. На этом этапе можно сделать все, что нужно, с помощью этой ветви. Можно выполнить некоторые локальные тесты или слияние других ветвей в ветвь.
8. Когда будете готовы, можно отправить новую ветвь вверх:
  ```shell
  [pull-inactive-pull-request] $ git push origin BRANCH_NAME
  > Counting objects: 32, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (26/26), done.
  > Writing objects: 100% (29/29), 74.94 KiB | 0 bytes/s, done.
  > Total 29 (delta 8), reused 0 (delta 0)
  > To https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  >  * [new branch]      BRANCH_NAME -> BRANCH_NAME
  ```
9. [Создайте новый запрос на вытягивание](/articles/creating-a-pull-request) с помощью новой ветви.

## Ошибка: не удалось отправить некоторые ссылки

Удаленное `refs/pull/` пространство имен доступно *только для чтения*. При попытке отправить туда фиксации вы увидите следующую ошибку:
```shell
! [remote rejected] HEAD -> refs/pull/1/head (deny updating a hidden ref)
error: failed to push some refs to 'git@github.local:USERNAME/REPOSITORY.git'
```

{% tip %}

**Совет.** Когда вы удаляете или переименовываете удаленную ссылку, ваше локальное пространство имен `refs/pull/origin/` не будет затронуто вызовами `git-remote`.

{% endtip %}
