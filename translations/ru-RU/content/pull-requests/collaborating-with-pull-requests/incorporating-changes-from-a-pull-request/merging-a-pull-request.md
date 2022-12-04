---
title: Слияние запроса на вытягивание
intro: Слияние запроса на вытягивание в вышестоящей ветви после завершения работы. Любой пользователь с доступом для передачи данных к репозиторию может выполнить такое слияние.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
  - /articles/merging-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/merging-a-pull-request
  - /github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: a41d467fa765e54cb1cb9254394237cc32c9a7b0
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009159'
---
## Сведения о слиянии запросов на вытягивание

В запросе на вытягивание предлагается выполнить слияние изменений, внесенных в главную ветвь, в базовую. По умолчанию для любого запроса на вытягивание можно выполнить слияние в любое время, если главная ветвь не конфликтует с базовой. Однако при слиянии запроса на вытягивание в определенную ветвь могут быть ограничения. Например, можно выполнить слияние запроса на вытягивание только в ветвь по умолчанию, если проходят необходимые проверки состояния. Дополнительные сведения см. в разделе [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches).

{% data reusables.pull_requests.you-can-auto-merge %}

Если в запросе на вытягивание есть конфликты слияния или если вы хотите протестировать изменения перед слиянием, можно [проверить запрос на вытягивание локально](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally) и выполнить для него слияние с помощью командной строки.

Нельзя выполнить слияние для черновика запроса на вытягивание. Дополнительные сведения о черновиках запросов на вытягивание см. в разделе [Сведения о запросах на вытягивание](/articles/about-pull-requests#draft-pull-requests).

Репозиторий можно настроить таким образом, чтобы главная ветвь для запроса на вытягивание автоматически удалялась при его слиянии. Дополнительные сведения см. в разделе [Управление автоматическим удалением ветвей](/github/administering-a-repository/managing-the-automatic-deletion-of-branches).

{% note %}

**Примечание:** {% data reusables.pull_requests.retargeted-on-branch-deletion %} Дополнительную информацию см. в разделе [Сведения о ветвях](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches).

{% endnote %}

Слияние для запросов на вытягивание выполняется с помощью[ `--no-ff`параметра](https://git-scm.com/docs/git-merge#_fast_forward_merge), за исключением [запросов на вытягивание со сжатыми или перемещенными фиксациями](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges), для которых выполняется слияние с помощью параметра быстрого переадресации.

{% data reusables.pull_requests.close-issues-using-keywords %}

Если вы решили, что для изменений в ветви раздела не должно выполняться слияние с вышестоящей ветвью, можно [закрыть запрос на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/closing-a-pull-request) без слияния.

## Слияние запроса на вытягивание

{% webui %}

{% data reusables.repositories.sidebar-pr %}
2. В списке "Запросы на вытягивание" щелкните тот, который требуется изменить.
3. В зависимости от параметров слияния, включенных для репозитория, можно:
    - [Выполнить слияние всех фиксаций в базовую ветвь](/articles/about-pull-request-merges/), щелкнув **Выполнить слияние запросов на вытягивание**. Если параметр **Выполнить слияние запросов на вытягивание** не отображается, щелкните раскрывающееся меню слияния и выберите **Создание фиксации слияния**.
    ![кнопка объединения запросов на вытягивание](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Сожмите все фиксации в одну](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits), щелкнув раскрывающееся меню слияния и выбрав **Слияние со сжатием**, а затем нажмите кнопку **Слияние со сжатием**.
    ![click-squash-and-merge-button](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Переместите фиксации по отдельности в базовую ветвь](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits), щелкнув раскрывающееся меню слияния и выбрав **Переместить и выполнить слияние**, а затем нажмите кнопку **Переместить и выполнить слияние**.
    ![select-rebase-and-merge-from-drop-down-menu](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Примечание.** Перемещение и слияние всегда будут обновлять информацию о зафиксировавшем и создавать новые SHA фиксации. Дополнительную информацию см. в разделе [Сведения о слияниях запросов на вытягивание](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits).

    {% endnote %}
4. При появлении запроса введите сообщение о фиксации или примите сообщение по умолчанию.

   {% data reusables.pull_requests.default-commit-message-squash-merge %} ![Поле сообщения фиксации](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Примечание:** Селектор электронной почты недоступен для слияний повторной базы данных, которые не создают фиксацию слияния{% ifversion squash-merge-email %}. Для слияний сквошов селектор электронной почты отображается только в том случае, если вы автор запроса на вытягивание и имеете несколько адресов электронной почты, связанных с вашей учетной записью. {% else %}, или для слияний сквошов, которые зачисляют пользователя, создавшего запрос на вытягивание в качестве автора сквошной фиксации. {% endif %}

   {% endnote %}

6. Щелкните **Подтвердить слияние**, **Подтвердить слияние со сжатием** или **Подтвердить перемещение и слияние**.
6. При необходимости [удалите ветвь](/articles/deleting-unused-branches). Это позволяет сохранить список ветвей в репозитории чистым.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы выполнить слияние для запроса на вытягивание, используйте подкоманду `gh pr merge`. Замените `pull-request` номером, URL-адресом или главной ветвью запроса на вытягивание.

```shell
gh pr merge PULL-REQUEST
```

Следуйте интерактивным указаниям, чтобы завершить слияние. Дополнительную информацию о методах слияния, которые вы можете выбрать, см. в разделе [Сведения о слияниях запросов на вытягивание](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges).

Кроме того, можно использовать флаги для пропуска интерактивных запросов. Например, эта команда сожмет фиксации в одну с сообщением фиксации "моя сжатая фиксация", выполнит слияние для сжатой фиксации в базовую ветвь, а затем удалит локальную и удаленную ветви.

```shell
gh pr merge 523 --squash --body "my squash commit" --delete-branch
```

{% endcli %}

## Дополнительные материалы

- [Отмена запроса на вытягивание](/articles/reverting-a-pull-request)
- [Синхронизация ветви](/desktop/guides/contributing-to-projects/syncing-your-branch/) с помощью {% data variables.product.prodname_desktop %}
- [Сведения о слиянии запросов на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)
- [Разрешение конфликтов слияния](/github/collaborating-with-pull-requests/addressing-merge-conflicts)
