---
title: Удаление конфиденциальных данных из репозитория
intro: 'При фиксации конфиденциальных данных, таких как пароль или ключ SSH, в репозиторий Git, его можно удалить из журнала. Чтобы полностью удалить ненужные файлы из журнала репозитория, можно использовать средство `git filter-repo` или инструмент с открытым кодом BFG Repo-Cleaner.'
redirect_from:
  - /remove-sensitive-data
  - /removing-sensitive-data
  - /articles/remove-sensitive-data
  - /articles/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/removing-sensitive-data-from-a-repository
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Remove sensitive data
ms.openlocfilehash: ab8d5cd8f5c1b61666cc43a6071114ef4eda51de
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093764'
---
Средство `git filter-repo` и BFG Repo-Cleaner перезаписывают журнал репозитория, что меняет агенты работоспособности системы для существующих фиксаций, которые вы изменяете, и всех зависимых фиксаций. Измененные агенты работоспособности системы фиксации могут затронуть открытые запросы на вытягивание в репозитории. Перед удалением файлов из репозитория рекомендуется объединить или закрыть все открытые запросы на вытягивание.

Файл можно удалить из последней фиксации с помощью `git rm`. Сведения об удалении файла, добавленного с последней фиксацией, см. в разделе [Сведения о больших файлах на сайте {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github#removing-files-from-a-repositorys-history).

{% warning %}

**Предупреждение.** В этой статье описывается, как сделать фиксации конфиденциальными данными недоступными из любых ветвей или тегов в репозитории на {% ifversion ghae %}{% данных variables.product.product_name %}{% else %}{% данных variables.location.product_location %}{% endif %}. Однако эти фиксации по-прежнему могут быть доступны в любых клонах или вилках репозитория непосредственно через хэши SHA-1 в кэшированных представлениях в {% data variables.product.product_name %}, а также через любые запросы на вытягивание, ссылающиеся на них. Вы не можете удалить конфиденциальные данные из клонов репозитория других пользователей, но вы можете окончательно удалить кэшированные представления и ссылки на конфиденциальные данные в запросах на вытягивание на {% данных variables.product.product_name %} путем обращения к {% данных variables.contact.contact_support %}. 

Если фиксация, которая представила конфиденциальные данные, существует в любых разветвлениях репозитория, она будет по-прежнему доступна, если владелец вилки не удаляет конфиденциальные данные из вилки или полностью удаляет вилку. 

После отправки фиксации в {% data variables.product.product_name %} любые конфиденциальные данные в фиксации следует рассматривать как скомпрометированные. Если вы зафиксировали пароль, его следует изменить. Если вы зафиксировали ключ, создайте новый ключ. Удаление скомпрометированных данных не устраняет начальную уязвимость, особенно в существующих клонах или вилках репозитория. 

Учитывайте эти ограничения при принятии решения переписать журнал репозитория.

{% endwarning %}

## Очистка файла из журнала репозитория

Вы можете очистить файл из журнала репозитория с помощью средства `git filter-repo` или средства BFG Repo-Cleaner с открытым исходным кодом.

### Использование BFG

[BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) — это инструмент, созданный и обслуживаемый сообществом разработчиков открытого кода. Он является более быстрой и простой альтернативой `git filter-branch` для удаления нежелательных данных. 

Чтобы удалить файл с конфиденциальными данными и оставить последнюю фиксацию без изменений, выполните следующую команду:

```shell
$ bfg --delete-files YOUR-FILE-WITH-SENSITIVE-DATA
```

Чтобы заменить все вхождения текста, представленного в `passwords.txt`, в журнале репозитория, выполните:

```shell
$ bfg --replace-text passwords.txt
```

После удаления конфиденциальных данных необходимо принудительно отправить изменения в {% data variables.product.product_name %}. В этом случае выполняется перезапись журнала репозитория, в результате которой конфиденциальные данные удаляются из журнала фиксации. При принудительной отправке могут быть перезаписаны фиксации, над которыми работают другие пользователи.

```shell
$ git push --force
```

Полные инструкции по использованию и загрузке см. в документации по [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/).

### Использование git filter-repo

{% warning %}

**Внимание!** При выполнении `git filter-repo` после того, как вы спрятали изменения, вы не сможете получить изменения с помощью других команд для скрытия. Перед выполнением `git filter-repo` рекомендуется показать все внесенные изменения. Чтобы показать последний набор спрятанных изменений, выполните команду `git stash show -p | git apply -R`. Дополнительные сведения см. в разделе [Средства Git — скрытие и очистка](https://git-scm.com/book/en/v2/Git-Tools-Stashing-and-Cleaning).

{% endwarning %}

Чтобы продемонстрировать, как работает `git filter-repo`, мы покажем, как удалить файл с конфиденциальными данными из журнала репозитория, добавить его в `.gitignore` и убедиться, что он не был случайно зафиксирован повторно.

1. Установите последнюю версию средства [git filter-repo](https://github.com/newren/git-filter-repo). Можно установить `git-filter-repo` вручную или с помощью диспетчера пакетов. Например, чтобы установить средство с помощью HomeBrew, используйте команду `brew install`.
  ```
  brew install git-filter-repo
  ```
  Дополнительные сведения см. в файле [*INSTALL.md*](https://github.com/newren/git-filter-repo/blob/main/INSTALL.md) в репозитории `newren/git-filter-repo`.

2. Если у вас еще нет локальной копии репозитория с конфиденциальными данными в журнале, [клонируйте репозиторий](/articles/cloning-a-repository/) на локальный компьютер.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/YOUR-REPOSITORY
  > Initialized empty Git repository in /Users/YOUR-FILE-PATH/YOUR-REPOSITORY/.git/
  > remote: Counting objects: 1301, done.
  > remote: Compressing objects: 100% (769/769), done.
  > remote: Total 1301 (delta 724), reused 910 (delta 522)
  > Receiving objects: 100% (1301/1301), 164.39 KiB, done.
  > Resolving deltas: 100% (724/724), done.
  ```
3. Перейдите в рабочую папку репозитория.
  ```shell
  $ cd YOUR-REPOSITORY
  ```
4. Выполните следующую команду, заменив `PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA` **путем к файлу, который необходимо удалить, а не только именем файла**. Эти аргументы:
    - заставят Git обработать, но не извлечь весь журнал каждой ветви и тега;
    - удалить указанный файл, а также все пустые фиксации, сформированные в результате;
    - удалить некоторые конфигурации, например удаленный URL-адрес, хранящийся в файле *.git/config*. Возможно, потребуется заранее выполнить резервное копирование этого файла для последующего восстановления.
    - **Перезапись существующих тегов**
        ```shell
        $ git filter-repo --invert-paths --path PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA
        Parsed 197 commits
        New history written in 0.11 seconds; now repacking/cleaning...
        Repacking your repo and cleaning out old unneeded objects
        Enumerating objects: 210, done.
        Counting objects: 100% (210/210), done.
        Delta compression using up to 12 threads
        Compressing objects: 100% (127/127), done.
        Writing objects: 100% (210/210), done.
        Building bitmaps: 100% (48/48), done.
        Total 210 (delta 98), reused 144 (delta 75), pack-reused 0
        Completely finished after 0.64 seconds.
        ```

  {% note %}

  **Примечание.** Если файл с конфиденциальными данными существовал в других путях (в результате перемещения или переименования), необходимо также выполнить данную команду для этих путей.

  {% endnote %}

5. Добавьте файл с конфиденциальными данными в `.gitignore`, чтобы предотвратить случайную фиксацию.

  ```shell
  $ echo "YOUR-FILE-WITH-SENSITIVE-DATA" >> .gitignore
  $ git add .gitignore
  $ git commit -m "Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore"
  > [main 051452f] Add YOUR-FILE-WITH-SENSITIVE-DATA to .gitignore
  >  1 files changed, 1 insertions(+), 0 deletions(-)
  ```
6. Внимательно проверьте, удалили ли вы все, что требуется, из журнала репозитория и все ли ветви извлечены.
7. Когда вы будете довольны состоянием репозитория, принудительно отправьте локальные изменения, чтобы перезаписать репозиторий на {% ifversion ghae %}{% данных variables.product.product_name %}{% остальных %}{% данных variables.location.product_location %}{% endif %}, а также все ветви, которые вы добавили. Для удаления конфиденциальных данных из журнала фиксаций требуется принудительная отправка.
  ```shell
  $ git push origin --force --all
  > Counting objects: 1074, done.
  > Delta compression using 2 threads.
  > Compressing objects: 100% (677/677), done.
  > Writing objects: 100% (1058/1058), 148.85 KiB, done.
  > Total 1058 (delta 590), reused 602 (delta 378)
  > To https://{% data variables.command_line.codeblock %}/YOUR-USERNAME.YOUR-REPOSITORY.git
  >  + 48dc599...051452f main -> main (forced update)
  ```
8. Чтобы удалить конфиденциальный файл из [выпусков с тегами](/articles/about-releases), потребуется также выполнить принудительную отправку в теги Git:
  ```shell
  $ git push origin --force --tags
  > Counting objects: 321, done.
  > Delta compression using up to 8 threads.
  > Compressing objects: 100% (166/166), done.
  > Writing objects: 100% (321/321), 331.74 KiB | 0 bytes/s, done.
  > Total 321 (delta 124), reused 269 (delta 108)
  > To https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/YOUR-REPOSITORY.git
  >  + 48dc599...051452f main -> main (forced update)
  ```

## Полное удаление данных с сайта {% data variables.product.prodname_dotcom %}

После удаления конфиденциальных данных с помощью средства BFG или `git filter-repo` и отправки изменений в {% data variables.product.product_name %} необходимо выполнить ряд действий, чтобы полностью удалить данные из {% data variables.product.product_name %}.

1. Обратитесь в {% data variables.contact.contact_support %} с просьбой удалить кэшированные представления и ссылки на конфиденциальные данные в запросах на вытягивание в {% data variables.product.product_name %}. Укажите имя репозитория и/или ссылку на фиксацию, которую необходимо удалить. {% ifversion ghes %} Дополнительные сведения о том, как администраторы сайта могут удалять недоступные объекты Git, см. в разделе [Утилиты командной строки](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-repo-gc).{% endif %}

2. Сообщите участникам совместной работы о необходимости [переместить изменения из одной ветви в другую](https://git-scm.com/book/en/Git-Branching-Rebasing) и *не* объединять, какие-либо ветви, созданные из старого (испорченного) журнала репозитория. Одна фиксация слияния может снова вернуть некоторые или все испорченные журналы, которые вам только что пришлось очистить.

3. Через некоторое время, когда вы уверены, что в работе средства BFG/`git filter-repo` не было непредвиденных побочных эффектов, можно принудительно разыменовывать все объекты в локальном репозитории и собрать мусор с помощью следующих команд (в Git 1.8.5 или более поздней версии):
  ```shell
  $ git for-each-ref --format="delete %(refname)" refs/original | git update-ref --stdin
  $ git reflog expire --expire=now --all
  $ git gc --prune=now
  > Counting objects: 2437, done.
  > Delta compression using up to 4 threads.
  > Compressing objects: 100% (1378/1378), done.
  > Writing objects: 100% (2437/2437), done.
  > Total 2437 (delta 1461), reused 1802 (delta 1048)
  ```
  {% note %}

   **Примечание:** Для этого можно также отправить отфильтрованный журнал в новый или пустой репозиторий, а затем сделать новый клон из {% data variables.product.product_name %}.

  {% endnote %}

## Предотвращение случайных фиксаций в будущем

Существует несколько простых приемов, позволяющих избежать фиксации данных, которые не хотите фиксировать:

- Используйте для фиксации изменений визуальную программу, такую как [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) или [gitk](https://git-scm.com/docs/gitk). Как правило, визуальные программы упрощают просмотр файлов, которые будут добавляться, удаляться и изменяться при каждой фиксации.
- Избегайте использования в командной строе команд catch-all `git add .` и `git commit -a` — используйте `git add filename` и `git rm filename`, чтобы подготовить каждый файл по отдельности.
- Используйте `git add --interactive` для проверки и подготовки каждого отдельного изменения в каждом файле.
- Используйте `git diff --cached` для проверки изменений, подготовленных для фиксации. Это точное несовпадение, которое `git commit` будет производить до тех пор, пока вы не используете флаг `-a`.

## Дополнительные материалы

- [Главная страница `git filter-repo`](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html)
- [Pro Git: средства Git — перезапись журнала](https://git-scm.com/book/en/Git-Tools-Rewriting-History)
- [Сведения о проверке секретов](/code-security/secret-security/about-secret-scanning)
