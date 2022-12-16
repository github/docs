---
title: Создание скрипта перехватчика предварительного получения
intro: 'Используйте скрипты перехватчика предварительного получения, чтобы создать требования для принятия или отклонения принудительной отправки на основе содержимого.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /enterprise/admin/developer-workflow/creating-a-pre-receive-hook-script
  - /enterprise/admin/policies/creating-a-pre-receive-hook-script
  - /admin/policies/creating-a-pre-receive-hook-script
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Pre-receive hook scripts
ms.openlocfilehash: ec0ccda77a2bb1a02ffcc3c53d22c3bff5ee3833
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093532'
---
Примеры перехватчиков предварительного получения для {% data variables.product.prodname_ghe_server %} можно просмотреть в [репозитории `github/platform-samples`](https://github.com/github/platform-samples/tree/master/pre-receive-hooks).

## Написание скрипта перехватчика предварительного получения
Скрипт обработчика предварительного получения выполняется в среде обработчика предварительного получения на {% данных variables.location.product_location %}. При создании скрипта перехватчика предварительного получения учитывайте доступные входные и выходные данные, состояние выхода и переменные среды.

### Входные данные (`stdin`)
После принудительной отправки и до обновления ссылок для удаленного репозитория `git-receive-pack` процесс на {% данных variables.location.product_location %} вызывает скрипт обработчика предварительного получения. Стандартные входные данные для скрипта `stdin` — это строка, содержащая строку для каждой обновляемой ссылки. Каждая строка содержит старое имя объекта для ссылки, новое имя объекта для ссылки и полное имя ссылки.

```
<old-value> SP <new-value> SP <ref-name> LF
```

Эта строка представляет следующие аргументы.

| Аргумент | Описание     |
| :------------- | :------------- |
| `<old-value>` | Старое имя объекта, хранящееся в ссылке.<br> При создании новой ссылки это значение представляет собой 40 нулей. |
| `<new-value>` | Новое имя объекта для сохранения в ссылке.<br> При удалении ссылки это значение представляет собой 40 нулей. |
| `<ref-name>`  | Полное имя ссылки. |

Дополнительные сведения о процессе `git-receive-pack` см. в разделе [git-receive-pack](https://git-scm.com/docs/git-receive-pack) в документации Git. Дополнительные сведения о ссылках см. в разделе [Ссылки Git](https://git-scm.com/book/en/v2/Git-Internals-Git-References) в *Pro Git*.

### Выходные данные (`stdout`)

Стандартные выходные данные для скрипта `stdout`передаются обратно в клиент. Все инструкции `echo` будут видны пользователю в командной строке или пользовательском интерфейсе.

### Состояние выхода

Состояние выхода скрипта предварительного получения определяет, будет ли принята отправка.

| Значение состояния выхода | Действие |
| :- | :- |
| 0 | Отправка будет принята. |
| ненулевое значение | Отправка будет отклонена. |

### Переменные среды

Помимо стандартных входных данных для скрипта перехватчика предварительного получения `stdin` {% data variables.product.prodname_ghe_server %} делает следующие переменные доступными в среде Bash для выполнения вашего скрипта. Дополнительные сведения о `stdin` для скрипта перехватчика предварительного получения см. в разделе [Входные данные (`stdin`)](#input-stdin).

Для скрипта перехватчика предварительного получения доступны разные переменные, в зависимости от того, что запускает скрипт.

- [Доступные всегда](#always-available)
- [Доступные для отправок из веб-интерфейса или API](#available-for-pushes-from-the-web-interface-or-api)
- [Доступные для слияний запросов на вытягивание](#available-for-pull-request-merges)
- [Доступные для отправок с использованием проверки подлинности SSH](#available-for-pushes-using-ssh-authentication)

#### Доступна всегда

Следующие переменные всегда доступны в среде перехватчика предварительного получения.

| Переменная | Описание | Пример значения |
| :- | :- | :- |
|  <pre>$GIT_DIR</pre> | Путь к удаленному репозиторию в экземпляре | /data/user/repositories/a/ab/<br>a1/b2/34/100001234/1234.git |
|  <pre>$GIT_PUSH_OPTION_COUNT</pre> | Количество параметров отправки, отправленных клиентом с помощью `--push-option`. Дополнительные сведения см. в разделе [git-push](https://git-scm.com/docs/git-push#Documentation/git-push.txt---push-optionltoptiongt) документации Git. | 1 |
| <pre>$GIT\_PUSH\_OPTION\_N</pre> | Если _N_ является целым числом от 0 и выше, эта переменная содержит строку параметра отправки, отправленную клиентом. Первый отправленный параметр сохраняется в `GIT_PUSH_OPTION_0`, второй отправленный параметр — в `GIT_PUSH_OPTION_1`и т. д. Дополнительные сведения о параметрах отправки см. в разделе ["git-push](https://git-scm.com/docs/git-push#git-push---push-optionltoptiongt) документации Git. | abcd |{% ifversion ghes %}
|  <pre>$GIT_USER_AGENT</pre> | Строка агента пользователя, отправленная клиентом Git, которая отправляет изменения | git/2.0.0{% endif %}
|  <pre>$GITHUB_REPO_NAME</pre> | Имя обновляемого репозитория в формате _NAME_/_OWNER_ | octo-org/hello-enterprise |
|  <pre>$GITHUB_REPO_PUBLIC</pre> | Логическое значение, указывающее, является ли обновляемый репозиторий общедоступным | <ul><li>true: репозиторий видим всем</li><li>false: репозиторий является частным или внутренним</li></ul>
|  <pre>$GITHUB_USER_IP</pre> | IP-адрес клиента, который инициировал отправку | 192.0.2.1 |
|  <pre>$GITHUB_USER_LOGIN</pre> | Имя пользователя учетной записи, которая инициировала отправку | octocat |

#### Доступные для отправок из веб-интерфейса или API

Переменная `$GITHUB_VIA` доступна в среде перехватчика предварительного получения, когда обновление ссылки, активирующее перехватчик, происходит через веб-интерфейс или API для {% data variables.product.prodname_ghe_server %}. Значение описывает действие, которое обновило ссылку.

| Значение | Действие | Дополнительные сведения |
| :- | :- | :- |
| <pre>auto-merge deployment api</pre> | Автоматическое слияние базовой ветви через развертывание, созданное с помощью API | Раздел [Создание развертывания](/rest/reference/deployments#create-a-deployment) в документации по REST API |
| <pre>blob#save</pre> | Изменение содержимого файла в веб-интерфейсе | Раздел [Изменение файлов](/repositories/working-with-files/managing-files/editing-files) |
| <pre>branch merge api</pre> | Слияние ветви с помощью API | Раздел [Слияние ветви](/rest/reference/branches#merge-a-branch) в документации по REST API |
| <pre>branches page delete button</pre> | Удаление ветви в веб-интерфейсе | Раздел [Создание и удаление ветвей в репозитории](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#deleting-a-branch) |
| <pre>git refs create api</pre> | Создание ссылки с помощью API | Раздел [База данных Git](/rest/reference/git#create-a-reference) в документации по REST API |
| <pre>git refs delete api</pre> | Удаление ссылки с помощью API | Раздел [База данных Git](/rest/reference/git#delete-a-reference) в документации по REST API |
| <pre>git refs update api</pre> | Обновление ссылки с помощью API | Раздел [База данных Git](/rest/reference/git#update-a-reference) в документации по REST API |
| <pre>git repo contents api</pre> | Изменение содержимого файла с помощью API | Раздел [Создание или обновление содержимого файла](/rest/reference/repos#create-or-update-file-contents) в документации по REST API |
{%- ifversion ghes %} | `merge ` | Слияние запроса на вытягивание путем автоматического слияния | "[Автоматическое слияние запроса на вытягивание](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)" | {%- endif %} | <pre>merge base into head</pre> | Обновление тематической ветки из базовой ветви, когда базовая ветвь требует строгих проверок состояния (например, через **обновление ветви** в запросе на вытягивание) | [Сведения о защищенных ветвях](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging) | | <pre>pull request branch delete button</pre> | Удаление тематической ветки из запроса на вытягивание в веб-интерфейсе | [Удаление и восстановление ветвей в запросе на вытягивание](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#deleting-a-branch-used-for-a-pull-request) | | <pre>pull request branch undo button</pre> | Восстановление тематической ветки из запроса на вытягивание в веб-интерфейсе | [Удаление и восстановление ветвей в запросе на вытягивание](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request#restoring-a-deleted-branch) | | <pre>pull request merge api</pre> | Слияние запроса на вытягивание с помощью API | [Запросы](/rest/reference/pulls#merge-a-pull-request) в документации по REST API | | <pre>pull request merge button</pre> | Слияние запроса на вытягивание в веб-интерфейсе | [Слияние запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/merging-a-pull-request#merging-a-pull-request-on-github) | | <pre>pull request revert button</pre> | Восстановление запроса на вытягивание | [Восстановление запроса на вытягивание](/github/collaborating-with-issues-and-pull-requests/reverting-a-pull-request) | | <pre>releases delete button</pre> | Удаление выпуска | [Управление выпусками в репозитории](/github/administering-a-repository/managing-releases-in-a-repository#deleting-a-release) | | <pre>stafftools branch restore</pre> | Восстановление ветви с панели мониторинга администратора сайта | [Панель мониторинга администратора сайта](/admin/configuration/site-admin-dashboard#repositories) | | <pre>tag create api</pre> | Создание тега с помощью API | [База данных Git](/rest/reference/git#create-a-tag-object) в документации по REST API | | <pre>slumlord (#SHA)</pre> | Фиксация с помощью Subversion | [Поддержка клиентов Subversion](/github/importing-your-projects-to-github/support-for-subversion-clients#making-commits-to-subversion) | | <pre>web branch create</pre> | Создание ветви с помощью веб-интерфейса | [Создание и удаление ветвей в репозитории](/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository#creating-a-branch) |

#### Доступные для слияний запросов на вытягивание

Следующие переменные доступны в среде перехватчика предварительного получения, когда отправка, которая активирует перехватчик, является отправкой вследствие слияния запроса на вытягивание.

| Переменная | Описание | Пример значения |
| :- | :- | :- |
|  <pre>$GITHUB_PULL_REQUEST_AUTHOR_LOGIN</pre> | Имя пользователя учетной записи, создающей запрос на вытягивание | octocat |
|  <pre>$GITHUB_PULL_REQUEST_HEAD</pre> | Имя тематической ветки запроса на вытягивание в формате `USERNAME:BRANCH` | <nobr>octocat:fix-bug</nobr> |
|  <pre>$GITHUB_PULL_REQUEST_BASE</pre> | Имя базовой ветви запроса на вытягивание в формате `USERNAME:BRANCH` | octocat:main |

#### Доступные для отправок с использованием проверки подлинности SSH

| Переменная | Описание | Пример значения |
| :- | :- | :- |
|  <pre>$GITHUB_PUBLIC_KEY_FINGERPRINT</pre> | Отпечаток открытого ключа для пользователя, который отправил изменения | a1:b2:c3:d4:e5:f6:g7:h8:i9:j0:k1:l2:m3:n4:o5:p6 |

## Задание разрешений и отправка перехватчика предварительного получения в {% data variables.product.prodname_ghe_server %}

Скрипт перехватчика предварительного получения содержится в репозитории на {% данных variables.location.product_location %}. Администратор сайта должен учитывать разрешения репозитория и обеспечить, чтобы доступ имелся только у соответствующих пользователей.

Рекомендуется объединить перехватчики в один репозиторий. Если консолидированный репозиторий перехватчиков является общедоступным, можно использовать `README.md` для объяснения применения политик. Кроме того, вклады можно принимать с помощью запросов на вытягивание. Однако перехватчики предварительного получения можно добавлять только из ветви по умолчанию. Для рабочего процесса тестирования следует использовать вилки репозитория с конфигурацией.

1. Для пользователей Mac убедитесь, что скрипты имеют разрешения на выполнение:

   ```shell
   $ sudo chmod +x SCRIPT_FILE.sh
   ```
   Для пользователей Windows убедитесь, что скрипты имеют разрешения на выполнение:

   ```shell
   git update-index --chmod=+x SCRIPT_FILE.sh
   ```

2. Фиксация и отправка в указанный репозиторий для перехватчиков предварительного получения данных на {% variables.location.product_location %}.

   ```shell
   $ git commit -m "YOUR COMMIT MESSAGE"
   $ git push
   ```

3. [Создайте перехватчик предварительного получения](/enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance/#creating-pre-receive-hooks) в экземпляре {% data variables.product.prodname_ghe_server %}.

## Локальное тестирование скриптов предварительного получения
Перед созданием или обновлением скрипта предварительного перехватчика можно протестировать на {% данных variables.location.product_location %}. Один из способов — создать локальную среду Docker для работы в качестве удаленного репозитория, который может выполнять перехватчик предварительного получения.

{% data reusables.linux.ensure-docker %}

2. Создайте файл с именем `Dockerfile.dev` и следующим содержимым:

   ```dockerfile
   FROM gliderlabs/alpine:3.3
   RUN \
     apk add --no-cache git openssh bash && \
     ssh-keygen -A && \
     sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g" /etc/ssh/sshd_config && \
     adduser git -D -G root -h /home/git -s /bin/bash && \
     passwd -d git && \
     su git -c "mkdir /home/git/.ssh && \
     ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P '' && \
     mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && \
     mkdir /home/git/test.git && \
     git --bare init /home/git/test.git"

   VOLUME ["/home/git/.ssh", "/home/git/test.git/hooks"]
   WORKDIR /home/git

   CMD ["/usr/sbin/sshd", "-D"]
   ```

3. Создайте тестовый скрипт предварительного получения с именем `always_reject.sh`. В этом примере скрипт отклоняет все отправки, что полезно для блокировки репозитория:

   ```
   #!/usr/bin/env bash

   echo "error: rejecting all pushes"
   exit 1
   ```

4. Убедитесь, что скрипты `always_reject.sh` имеют разрешения на выполнение:

   ```shell
   $ chmod +x always_reject.sh
   ```

5. Из каталога, содержащего `Dockerfile.dev`, создайте образ:

   ```shell
   $ docker build -f Dockerfile.dev -t pre-receive.dev .
   > Sending build context to Docker daemon 3.584 kB
   > Step 1 : FROM gliderlabs/alpine:3.3
   >  ---> 8944964f99f4
   > Step 2 : RUN apk add --no-cache git openssh bash && ssh-keygen -A && sed -i "s/#AuthorizedKeysFile/AuthorizedKeysFile/g"  /etc/ssh/sshd_config && adduser git -D -G root -h /home/git -s /bin/bash && passwd -d git && su git -c "mkdir /home/git/.ssh && ssh-keygen -t ed25519 -f /home/git/.ssh/id_ed25519 -P ' && mv /home/git/.ssh/id_ed25519.pub /home/git/.ssh/authorized_keys && mkdir /home/git/test.git && git --bare init /home/git/test.git"
   >  ---> Running in e9d79ab3b92c
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/main/x86_64/APKINDEX.tar.gz
   > fetch http://alpine.gliderlabs.com/alpine/v3.3/community/x86_64/APKINDEX.tar.gz
   ....truncated output....
   > OK: 34 MiB in 26 packages
   > ssh-keygen: generating new host keys: RSA DSA ECDSA ED25519
   > Password for git changed by root
   > Generating public/private ed25519 key pair.
   > Your identification has been saved in /home/git/.ssh/id_ed25519.
   > Your public key has been saved in /home/git/.ssh/id_ed25519.pub.
   ....truncated output....
   > Initialized empty Git repository in /home/git/test.git/
   > Successfully built dd8610c24f82
   ```

6. Запустите контейнер данных, содержащий созданный ключ SSH:

   ```shell
   $ docker run --name data pre-receive.dev /bin/true
   ```

7. Скопируйте тестовый перехватчик предварительного получения `always_reject.sh` в контейнер данных:

   ```shell
   $ docker cp always_reject.sh data:/home/git/test.git/hooks/pre-receive
   ```

8. Запустите контейнер приложения, который запускает `sshd` и выполняет перехватчик. Запишите возвращенный идентификатор контейнера:

   ```shell
   $ docker run -d -p 52311:22 --volumes-from data pre-receive.dev
   > 7f888bc700b8d23405dbcaf039e6c71d486793cad7d8ae4dd184f4a47000bc58
   ```

9. Скопируйте созданный ключ SSH из контейнера данных на локальный компьютер:

   ```shell
   $ docker cp data:/home/git/.ssh/id_ed25519 .
   ```

10. Измените удаленный репозиторий тестов и отправьте его в репозиторий `test.git` в контейнере Docker. В этом примере используется `git@github.com:octocat/Hello-World.git`, но вы можете использовать любой подходящий репозиторий. В этом примере предполагается, что локальный компьютер (127.0.0.1) является портом привязки 52311, но вы можете использовать другой IP-адрес, если Docker работает на удаленном компьютере.

   ```shell
   $ git clone git@github.com:octocat/Hello-World.git
   $ cd Hello-World
   $ git remote add test git@127.0.0.1:test.git
   $ GIT_SSH_COMMAND="ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -p 52311 -i ../id_ed25519" git push -u test main
   > Warning: Permanently added '[192.168.99.100]:52311' (ECDSA) to the list of known hosts.
   > Counting objects: 7, done.
   > Delta compression using up to 4 threads.
   > Compressing objects: 100% (3/3), done.
   > Writing objects: 100% (7/7), 700 bytes | 0 bytes/s, done.
   > Total 7 (delta 0), reused 7 (delta 0)
   > remote: error: rejecting all pushes
   > To git@192.168.99.100:test.git
   >  ! [remote rejected] main -> main (pre-receive hook declined)
   > error: failed to push some refs to 'git@192.168.99.100:test.git'
   ```

   Обратите внимание, что отправка была отклонена после выполнения перехватчика предварительного получения и повторения выходных данных скрипта.

## Дополнительные материалы
 - [Настройка Git — пример политики, применяемой Git](https://git-scm.com/book/en/v2/Customizing-Git-An-Example-Git-Enforced-Policy) на *веб-сайте Pro Git*
