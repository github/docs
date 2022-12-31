---
title: Зашифрованные секреты
intro: 'Зашифрованные секреты позволяют хранить конфиденциальную информацию в вашей организации{% ifversion fpt or ghes or ghec %}, репозитории или средах репозитория{% else %} или репозитории{% endif %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets
  - /actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
  - /actions/reference/encrypted-secrets
  - /actions/managing-workflows/storing-secrets
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4f45a2e0a3ac0c93215f7e4a095c2b8033450808
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162802'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Сведения о зашифрованных секретах

Секреты — это зашифрованные переменные среды, создаваемые в организации, репозитории или среде репозитория. Создаваемые секреты доступны для использования в рабочих процессах {% data variables.product.prodname_actions %}. {% data variables.product.prodname_dotcom %} использует [запечатанный прямоугольник libsodium](https://libsodium.gitbook.io/doc/public-key_cryptography/sealed_boxes), чтобы обеспечить шифрование секретов до того, как они достигнут {% data variables.product.prodname_dotcom %}, и остается зашифрованным, пока вы не используете их в рабочем процессе.

{% data reusables.actions.secrets-org-level-overview %}

Для секретов, хранящихся на уровне среды, можно включить нужных проверяющих для управления доступом к секретам. Доступ к секретам среды предоставляется заданию только после создания утверждения требуемыми проверяющими.

{% ifversion fpt or ghec or ghes > 3.4 %}

{% note %}

**Примечание.** {% data reusables.actions.about-oidc-short-overview %}

{% endnote %}

{% endif %}

### Присвоение имен секретам

{% data reusables.codespaces.secrets-naming %}

  Например, секрет, созданный на уровне среды, должен иметь уникальное имя в этой среде, секрет, созданный на уровне репозитория, должен иметь уникальное имя в этом репозитории, а секрет, созданный на уровне организации, должен иметь уникальное имя на этом уровне.

  {% data reusables.codespaces.secret-precedence %} Аналогичным образом, если организация, репозиторий и среда содержат секрет с одним и тем же именем, приоритет имеет секрет на уровне среды.

Чтобы гарантировать, что {% data variables.product.prodname_dotcom %} изменит секрет в журналах, не используйте структурированные данные в качестве значений секретов. Например, не создавайте секреты, содержащие BLOB-объекты JSON или закодированные BLOB-объекты Git.

### Доступ к секретам

Чтобы сделать секрет доступным для действия, необходимо задать секрет как входные данные или переменную среды в файле рабочего процесса. Просмотрите файл сведений о действии, чтобы узнать, каких входных данных и переменных среды ожидает действие. Дополнительные сведения см. в статье [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv).

Вы можете использовать и считывать зашифрованные секреты в файле рабочего процесса, если у вас есть доступ для редактирования файла. Дополнительные сведения см. в разделе [Разрешения на доступ к {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github).

{% data reusables.actions.secrets-redaction-warning %}

Секреты организации и репозитория считываются при выполнении рабочего процесса в очереди, а секреты среды считываются при запуске задания, ссылающегося на среду.

Вы также можете управлять секретами с помощью REST API. Дополнительные сведения см. в разделе [Секреты](/rest/reference/actions#secrets).

### Ограничение разрешений для учетных данных

При создании учетных данных рекомендуется предоставить минимальные разрешения. Например, вместо использования личных учетных данных используйте [ключи развертывания](/developers/overview/managing-deploy-keys#deploy-keys) или учетную запись службы. Попробуйте предоставить разрешения только для чтения, если это необходимо, и максимально ограничить доступ. При создании {% data variables.product.pat_v1 %} выберите наименьшее необходимое количество областей. {% ifversion pat-v2 %} При создании {% data variables.product.pat_v2 %} выберите минимальный необходимый доступ к репозиторию. {% endif %}

{% note %}

**Примечание.** Для управления секретами можно использовать REST API. Дополнительные сведения см. в статье [API секретов {% data variables.product.prodname_actions %}](/rest/reference/actions#secrets).

{% endnote %}

## Создание зашифрованных секретов для репозитория

{% data reusables.actions.permissions-statement-secrets-repository %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-secret %}
1. Выберите **Новый секрет репозитория**.
1. Введите имя секрета в поле ввода **Имя**.
1. Введите значение секрета.
1. Щелкните **Добавить секрет**.

Если в репозитории есть секреты среды или доступ к секретам из родительской организации, эти секреты также отображаются на этой странице.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Чтобы добавить секрет репозитория, используйте подкоманду `gh secret set`. Замените `secret-name` именем своего секрета.

```shell
gh secret set SECRET_NAME
```

CLI предложит ввести значение секрета. Кроме того, можно считать значение секрета из файла.

```shell
gh secret set SECRET_NAME < secret.txt
```

Чтобы получить список всех секретов для репозитория, используйте подкоманду `gh secret list`.

{% endcli %}

## Создание зашифрованных секретов для среды

{% data reusables.actions.permissions-statement-secrets-environment %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.actions.sidebar-environment %}
1. Щелкните среду, в которую нужно добавить секрет.
2. В разделе **Секреты среды** нажмите кнопку **Добавить секрет**.
3. Введите имя секрета в поле ввода **Имя**.
4. Введите значение секрета.
5. Щелкните **Добавить секрет**.

{% endwebui %}

{% cli %}

Чтобы добавить секрет для среды, используйте `gh secret set` подкоманду с флагом `--env` или `-e`, за которым следует имя среды.

```shell
gh secret set --env ENV_NAME SECRET_NAME
```

Чтобы создать список всех секретов для среды, используйте `gh secret list` подкоманду с флагом `--env` или `-e`, за которым следует имя среды.

```shell
gh secret list --env ENV_NAME
```

{% endcli %}

## Создание зашифрованных секретов для организации

При создании секрета в организации можно использовать политику, чтобы ограничить для репозиториев доступ к секрету. Например, можно предоставить доступ ко всем репозиториям или ограничить доступ только частными репозиториями или указанным списком репозиториев.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% webui %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Щелкните **Создать секрет организации**.
1. Введите имя секрета в поле ввода **Имя**.
1. Введите **значение** для своего секрета.
1. В раскрывающемся списке **Доступ к репозиторию** выберите политику доступа.
1. Щелкните **Добавить секрет**.

{% endwebui %}

{% cli %}

{% note %}

**Примечание.** По умолчанию {% data variables.product.prodname_cli %} выполняет проверку подлинности в областях `repo` и `read:org`. Для управления секретами организации необходимо дополнительно авторизовать область `admin:org`.

```
gh auth login --scopes "admin:org"
```

{% endnote %}

Чтобы добавить секрет для организации, используйте подкоманду `gh secret set` с флагом `--org` или `-o`, за которым следует имя организации.

```shell
gh secret set --org ORG_NAME SECRET_NAME
```

По умолчанию секрет доступен только частным репозиториям. Чтобы указать, что секрет должен быть доступен для всех репозиториев в организации, используйте флаг `--visibility` или `-v`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --visibility all
```

Чтобы указать, что секрет должен быть доступен для выбранных репозиториев в организации, используйте флаг `--repos` или `-r`.

```shell
gh secret set --org ORG_NAME SECRET_NAME --repos REPO-NAME-1, REPO-NAME-2"
```

Чтобы создать список всех секретов для организации, используйте подкоманду `gh secret list` с флагом `--org` или `-o`, за которым следует имя организации.

```shell
gh secret list --org ORG_NAME
```

{% endcli %}

## Проверка доступа к секретам на уровне организации

Вы можете проверить, какие политики доступа применяются к секрету в вашей организации.

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Список секретов включает все настроенные разрешения и политики. Например: ![список секретов](/assets/images/help/settings/actions-org-secrets-list.png)
1. Для получения дополнительных сведений о настроенных разрешениях для каждого секрета щелкните **Обновить**.

## Использование зашифрованных секретов в рабочем процессе

{% note %}

**Примечания.**

* {% data reusables.actions.forked-secrets %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

* Секреты не передаются автоматически повторно используемым рабочим процессам. Дополнительные сведения см. в статье [Многократное использование рабочих процессов](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow).

{% endif %}

{% endnote %}

Чтобы указать действие с секретом в качестве входных данных или переменной среды, можно использовать контекст `secrets` для доступа к секретам, созданным в репозитории. Дополнительные сведения см. в разделе [Контексты](/actions/learn-github-actions/contexts) и [Синтаксис рабочего процесса для {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions).

{% raw %}
```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```
{% endraw %}

На секреты нельзя напрямую ссылаться в условных выражениях `if:`. Вместо этого рекомендуется задать секреты в качестве переменных среды на уровне задания, а затем создать ссылки на переменные среды для условного выполнения шагов в задании. Подробнее см. в разделе [Доступность контекста](/actions/learn-github-actions/contexts#context-availability) и [`jobs.<job_id>.steps[*].if`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsif).

Если секрет не задан, возвращаемое значение выражения, которое ссылается на этот секрет (например, {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} в примере) будет пустой строкой.

По возможности избегайте передачи секретов между процессами из командной строки. Процессы командной строки могут быть видимы для других пользователей (с помощью команды `ps`) или сканируются [событиями аудита безопасности](https://docs.microsoft.com/windows-server/identity/ad-ds/manage/component-updates/command-line-process-auditing). Чтобы обеспечить защиту секретов, рассмотрите возможность использования переменных среды, `STDIN`или других механизмов, поддерживаемых целевым процессом.

Если необходимо передать секреты в командной строке, добавьте их в соответствующие правила . Секреты зачастую содержат специальные символы, которые могут непреднамеренно повлиять на оболочку. Чтобы экранировать эти специальные символы, заключайте переменные среды в кавычки. Пример:

### Пример с использованием Bash

{% raw %}
```yaml
steps:
  - shell: bash
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$SUPER_SECRET"
```
{% endraw %}

### Пример с использованием PowerShell

{% raw %}
```yaml
steps:
  - shell: pwsh
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "$env:SUPER_SECRET"
```
{% endraw %}

### Пример с использованием Cmd.exe

{% raw %}
```yaml
steps:
  - shell: cmd
    env:
      SUPER_SECRET: ${{ secrets.SuperSecret }}
    run: |
      example-command "%SUPER_SECRET%"
```
{% endraw %}

## Ограничения для секретов

Можно хранить до 1000 секретов организации, 100 секретов репозитория и 100 секретов среды.

Рабочий процесс, созданный в репозитории, может получить доступ к следующему количеству секретов:

* Все 100 секретов в репозитории
* Если репозиторию назначен доступ к более чем 100 секретам организации, рабочий процесс может использовать только первые 100 секретов организации (отсортированные по имени в алфавитном порядке).
* Все 100 секретов среды.

Размер секретов ограничен 64 КБ. Сведения о хранении больших секретов см. в описании обходного решения [Хранение больших секретов](#storing-large-secrets) ниже.

### Хранение больших секретов

Чтобы использовать секреты размером более 64 КБ, можно использовать обходное решение — хранить зашифрованные секреты в репозитории и сохранять парольную фразу расшифровки в виде секрета на {% data variables.product.prodname_dotcom %}. Например, можно использовать `gpg` для локального шифрования файла, содержащего секрет, прежде чем добавлять файл в репозиторий на {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе [gpg manpage](https://www.gnupg.org/gph/de/manual/r1023.html).

{% warning %}

**Внимание!** Будьте внимательны, чтобы секреты не выводились на печать при выполнении рабочего процесса. При использовании этого временного решения {% data variables.product.prodname_dotcom %} не редактирует секреты, которые выводятся на печать в журналах.

{% endwarning %}

1. Выполните следующую команду на терминале, чтобы зашифровать файл, содержащий секрет, с помощью `gpg` и алгоритма шифра AES256. В этом примере секрет содержит файл `my_secret.json`.

   ```bash
   gpg --symmetric --cipher-algo AES256 my_secret.json
   ```

1. Вам будет предложено ввести парольную фразу. Запомните парольную фразу, так как вам потребуется создать новый секрет в {% data variables.product.prodname_dotcom %}, который использует парольную фразу как значение.

1. Создайте новый секрет, который содержит парольную фразу. Например, создайте новый секрет с именем `LARGE_SECRET_PASSPHRASE` и задайте для секрета парольную фразу, использованную на предыдущем шаге.

1. Скопируйте зашифрованный файл в путь в репозитории и выполните его фиксацию. В этом примере зашифрованный файл имеет значение `my_secret.json.gpg`.

   {% warning %}

   **Внимание!** Обязательно скопируйте зашифрованный файл `my_secret.json.gpg`, заканчивающийся расширением `.gpg`, а **не** незашифрованный файл `my_secret.json`.

   {% endwarning %}

   ```bash
   git add my_secret.json.gpg
   git commit -m "Add new encrypted secret JSON file"
   ```

1. Создайте скрипт оболочки в репозитории для расшифровки файла секрета. В этом примере секрет называется `decrypt_secret.sh`.

   ```bash
   #!/bin/sh

   # Decrypt the file
   mkdir $HOME/secrets
   # --batch to prevent interactive command
   # --yes to assume "yes" for questions
   gpg --quiet --batch --yes --decrypt --passphrase="$LARGE_SECRET_PASSPHRASE" \
   --output $HOME/secrets/my_secret.json my_secret.json.gpg
   ```

1. Перед возвратом в репозиторий убедитесь, что скрипт оболочки является исполняемым.

   ```bash
   chmod +x decrypt_secret.sh
   git add decrypt_secret.sh
   git commit -m "Add new decryption script"
   git push
   ```

1. В рабочем процессе {% data variables.product.prodname_actions %} используйте `step` для вызова скрипта оболочки и расшифровки секрета. Чтобы создать копию репозитория в среде, в которой выполняется рабочий процесс, необходимо использовать действие [`actions/checkout`](https://github.com/actions/checkout). Создайте ссылку на сценарий оболочки с помощью команды `run` относительно корня репозитория.

   ```yaml
   name: Workflows with large secrets
 
   on: push
 
   jobs:
     my-job:
       name: My Job
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Decrypt large secret
           run: ./decrypt_secret.sh
           env:
             LARGE_SECRET_PASSPHRASE: {% raw %}${{ secrets.LARGE_SECRET_PASSPHRASE }}{% endraw %}
         # This command is just an example to show your secret being printed
         # Ensure you remove any print statements of your secrets. GitHub does
         # not hide secrets that use this workaround.
         - name: Test printing your secret (Remove this step in production)
           run: cat $HOME/secrets/my_secret.json
   ```

## Хранение двоичных BLOB-объектов Base64 в виде секретов

Кодировку Base64 можно использовать для хранения небольших BLOB-объектов в виде секретов. Затем можно создать ссылку на секрет в рабочем процессе и декодировать его для использования в средстве выполнения тестов. Сведения об ограничении по размеру см. в разделе [Ограничения для секретов](/actions/security-guides/encrypted-secrets#limits-for-secrets).

{% note %}

**Примечание**. Обратите внимание, что Base64 просто преобразует двоичный файл в текст и не заменяет фактическое шифрование.

{% endnote %}

1. Используйте `base64` для кодирования файла в строку Base64. Пример:

   ```
   $ base64 -i cert.der -o cert.base64
   ```

1. Создайте секрет, который содержит строку Base64. Пример:

   ```
   $ gh secret set CERTIFICATE_BASE64 < cert.base64
   ✓ Set secret CERTIFICATE_BASE64 for octocat/octorepo
   ```

1. Чтобы получить доступ к строке Base64 из средства выполнения тестов, передайте секрет в `base64 --decode`.  Пример: 

   ```yaml
   name: Retrieve Base64 secret
   on:
     push:
       branches: [ octo-branch ]
   jobs:
     decode-secret:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - name: Retrieve the secret and decode it to a file
           env:
             {% raw %}CERTIFICATE_BASE64: ${{ secrets.CERTIFICATE_BASE64 }}{% endraw %}
           run: |
             echo $CERTIFICATE_BASE64 | base64 --decode > cert.der
         - name: Show certificate information
           run: |
             openssl x509 -in cert.der -inform DER -text -noout
   ```
