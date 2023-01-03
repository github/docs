---
title: Краткое руководство по GitHub REST API
intro: 'Узнайте, как начать работу с REST API {% data variables.product.prodname_dotcom %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Quickstart
topics:
  - API
redirect_from:
  - /guides/getting-started
  - /v3/guides/getting-started
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 001c4e3291e697be034579525d9f0bc6da8c0c88
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192884'
---
В этой статье описывается начало работы с REST API {% data variables.product.prodname_dotcom %} с помощью {% data variables.product.prodname_cli %}, JavaScript или cURL. Дополнительные сведения см. в статье [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api).

{% cli %}

## Начало работы с {% data variables.product.prodname_cli %}

### Использование {% data variables.product.prodname_cli %} в командной строке

{% data variables.product.prodname_cli %} — это самый простой способ использовать REST API {% data variables.product.prodname_dotcom %} из командной строки.

1. Установите {% data variables.product.prodname_cli %}, если еще не установили. Инструкции по установке см. в [репозитории {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).
1. Используйте подкоманду `auth login` для проверки подлинности в {% data variables.product.prodname_cli %}: Дополнительные сведения см. в [документации по `auth login`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

   ```shell
   gh auth login
   ```

1. Используйте подкоманду `api` для выполнения запроса к API. Дополнительные сведения см. в [документации по `api`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_api).

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### Использование {% data variables.product.prodname_cli %} в {% data variables.product.prodname_actions %}

Вы можете использовать {% data variables.product.prodname_cli %} в рабочих процессах {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Использование GitHub CLI в рабочих процессах](/actions/using-workflows/using-github-cli-in-workflows).

Вместо того, чтобы использовать команду `gh auth login`, передайте маркер доступа в качестве переменной среды `GH_TOKEN`. {% data variables.product.prodname_dotcom %} рекомендует использовать встроенный `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

При проверке подлинности с помощью {% data variables.product.prodname_github_app %} можно создать маркер доступа к установке в рабочем процессе:

1. Храните идентификатор {% data variables.product.prodname_github_app %} как секрет. В следующем примере замените `APP_ID` именем секрета. Идентификатор приложения можно найти на странице параметров приложения или через API. Дополнительные сведения см. в [разделе Приложения в](/rest/apps/apps#get-an-app) документации по REST API. Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).
1. Создайте закрытый ключ для приложения. Храните содержимое получившегося файла как секрет. (Сохраните все содержимое файла, включая `-----BEGIN RSA PRIVATE KEY-----` и `-----END RSA PRIVATE KEY-----`.) В следующем примере замените `APP_PEM` именем секрета. Дополнительные сведения см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Добавьте шаг для создания маркера и используйте его вместо `GITHUB_TOKEN`. Обратите внимание, что срок действия этого маркера истекает через 60 минут. Пример:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          gh api repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

## Начало работы с JavaScript

Вы можете использовать Octokit.js для взаимодействия с REST API {% data variables.product.prodname_dotcom %} в скриптах JavaScript. Дополнительные сведения см. в [Octokit.js README](https://github.com/octokit/octokit.js/#readme).

### Использование Octokit.js

1. Создание маркера доступа Например, создайте маркер доступа пользователя к серверу {% data variables.product.pat_generic %} или {% data variables.product.prodname_github_app %}. Дополнительные сведения см. в [разделах Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)или [Идентификация и авторизация пользователей для приложений GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

   {% warning %}

   **Предупреждение**. Считайте маркер доступа своим паролем.

   Чтобы обеспечить безопасность маркера, вы можете хранить маркер в виде секрета и запустить скрипт с помощью {% data variables.product.prodname_actions %}. Дополнительные сведения см. в разделе [Использование Octokit.js в {% data variables.product.prodname_actions %}](#using-octokitjs-in-github-actions).

   {%- ifversion fpt or ghec %}

   Вы также можете сохранить маркер в виде секрета {% data variables.product.prodname_codespaces %} и запустить скрипт в {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

   Если эти варианты недоступны, рассмотрите возможность безопасного хранения маркера с помощью другой службы, например [1Password CLI](https://developer.1password.com/docs/cli/secret-references/).

   {% endwarning %}

1. Установить службы `octokit`. Например, `npm install octokit`. Другие способы установки или загрузки `octokit` см. в [Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Импортируйте `octokit` в скрипт. Например, `import { Octokit } from "octokit";`. Другие способы импорта `octokit` см. в [Octokit.js README](https://github.com/octokit/octokit.js/#readme).
1. Создайте экземпляр `Octokit` с помощью маркера. Замените `YOUR-TOKEN` собственным маркером.

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. Используйте `octokit.request` для выполнения запроса. Отправьте метод HTTP и путь в качестве первого аргумента. Укажите любой путь, запрос и параметры текста в объекте в качестве второго аргумента. Например, в следующем запросе используется метод HTTP `GET`, путь — `/repos/{owner}/{repo}/issues`и параметры `owner: "octocat"` и `repo: "Spoon-Knife"`.

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### Использование Octokit.js в {% data variables.product.prodname_actions %}

Вы также можете выполнять скрипты JavaScript в рабочих процессах {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} рекомендует использовать встроенный `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

См. следующий пример рабочего процесса:

1. Извлекает содержимое репозитория.
1. Настраивает Node.js.
1. Устанавливает `octokit`.
1. Сохраняет значение `GITHUB_TOKEN` как переменную среды `TOKEN` и выполняет `.github/actions-scripts/use-the-api.mjs`, которые могут получить доступ к этой переменной среды в качестве `process.env.TOKEN`

Пример рабочего процесса:

```yaml
on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

Пример скрипта JavaScript с путем к файлу `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env.TOKEN
});

try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
      owner: "octocat",
      repo: "Spoon-Knife",
    });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

При проверке подлинности с помощью {% data variables.product.prodname_github_app %} можно создать маркер доступа к установке в рабочем процессе:

1. Храните идентификатор {% data variables.product.prodname_github_app %} как секрет. В следующем примере замените `APP_ID` именем секрета. Идентификатор приложения можно найти на странице параметров приложения или через API приложений. Дополнительные сведения см. в разделе [Приложения ](/rest/apps/apps#get-an-app). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).
1. Создайте закрытый ключ для приложения. Храните содержимое получившегося файла как секрет. (Сохраните все содержимое файла, включая `-----BEGIN RSA PRIVATE KEY-----` и `-----END RSA PRIVATE KEY-----`.) В следующем примере замените `APP_PEM` именем секрета. Дополнительные сведения см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Добавьте шаг для создания маркера и используйте его вместо `GITHUB_TOKEN`. Обратите внимание, что срок действия этого маркера истекает через 60 минут. Например:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repo content
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '16.17.0'
          cache: npm

      - name: Install dependencies
        run: npm install octokit

      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Run script
        run: |
          node .github/actions-scripts/use-the-api.mjs
        env:
          TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
```

{% endjavascript %}

{% curl %}

## Начало работы с cURL

### Использование cURL в командной строке

{% note %}

**Примечание.** Если вы хотите выполнять запросы API из командной строки, {% data variables.product.prodname_dotcom %} рекомендует использовать {% data variables.product.prodname_cli %}, что упрощает проверку подлинности и запросы. Дополнительные сведения о начале работы с REST API с помощью {% data variables.product.prodname_cli %} см. в версии этой статьи для {% data variables.product.prodname_cli %}.

{% endnote %}

1. Установите cURL, если cURL еще не установлен на компьютере. Чтобы проверить, установлен ли cURL, выполните `curl --version` в командной строке. Если выходные данные содержат сведения о версии cURL, cURL устанавливается. Если появится сообщение, аналогичное `command not found: curl`, необходимо скачать и установить cURL. Дополнительные сведения см на [странице загрузки проекта cURL](https://curl.se/download.html).
1. Создание маркера доступа Например, создайте маркер доступа пользователя к серверу {% data variables.product.pat_generic %} или {% data variables.product.prodname_github_app %}. Дополнительные сведения см. в [разделах Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)или [Идентификация и авторизация пользователей для приложений GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

   {% warning %}

   **Предупреждение**. Считайте маркер доступа своим паролем.

   {%- ifversion fpt or ghec %}

   В целях безопасности вы можете хранить маркер в виде секрета {% data variables.product.prodname_codespaces %} и использовать командую строку в {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

   Кроме того, вместо cURL можно использовать {% data variables.product.prodname_cli %}. {% data variables.product.prodname_cli %} выполнит задачи по проверке подлинности. Дополнительные сведения см. в версии этой страницы для {% data variables.product.prodname_cli %}.

   Если эти варианты недоступны, рассмотрите возможность безопасного хранения маркера с помощью другой службы, например [1Password CLI](https://developer.1password.com/docs/cli/secret-references/).

   {% endwarning %}

1. Используйте команду `cURL` для выполнения запроса. Передайте маркер в заголовок `Authorization`. Замените `YOUR-TOKEN` собственным маркером.

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   **Примечание.** {% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### Использование cURL в {% data variables.product.prodname_actions %}

Вы также можете использовать cURL в рабочих процессах {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_dotcom %} рекомендует использовать встроенный `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

```yaml
on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions:
      issues: read
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

При проверке подлинности с помощью {% data variables.product.prodname_github_app %} можно создать маркер доступа к установке в рабочем процессе:

1. Храните идентификатор {% data variables.product.prodname_github_app %} как секрет. В следующем примере замените `APP_ID` именем секрета. Идентификатор приложения можно найти на странице параметров приложения или через API приложений. Дополнительные сведения см. в разделе [Приложения ](/rest/apps/apps#get-an-app). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).
1. Создайте закрытый ключ для приложения. Храните содержимое получившегося файла как секрет. (Сохраните все содержимое файла, включая `-----BEGIN RSA PRIVATE KEY-----` и `-----END RSA PRIVATE KEY-----`.) В следующем примере замените `APP_PEM` именем секрета. Дополнительные сведения см. в разделе [Проверка подлинности с помощью {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key).
1. Добавьте шаг для создания маркера и используйте его вместо `GITHUB_TOKEN`. Обратите внимание, что срок действия этого маркера истекает через 60 минут. Например:

```yaml
{% data reusables.actions.actions-not-certified-by-github-comment %}

on:
  workflow_dispatch:
jobs:
  use_api:
    runs-on: ubuntu-latest
    steps:
      - name: Generate token
        id: generate_token
        uses: tibdex/github-app-token@36464acb844fc53b9b8b2401da68844f6b05ebb0
        with:
          app_id: {% raw %}${{ secrets.APP_ID }}{% endraw %}
          private_key: {% raw %}${{ secrets.APP_PEM }}{% endraw %}

      - name: Use API
        env:
          GH_TOKEN: {% raw %}${{ steps.generate_token.outputs.token }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
          --header "Accept: application/vnd.github+json" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Дальнейшие действия

Дополнительные сведения см. в статье [Начало работы с REST API](/rest/guides/getting-started-with-the-rest-api).
