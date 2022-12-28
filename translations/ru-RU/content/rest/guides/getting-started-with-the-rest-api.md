---
title: Начало работы с REST API
intro: 'Узнайте, как использовать REST API {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Using the API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 66620b01bb488f8c74111b56255ff06702e402e8
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184264'
---
## Сведения о REST API {% data variables.product.prodname_dotcom %}

В этой статье описывается использование REST API {% data variables.product.prodname_dotcom %} с помощью {% data variables.product.prodname_cli %}, JavaScript или cURL. Краткое руководство см. в разделе [Краткое руководство по REST API GitHub](/rest/quickstart).

При выполнении запроса к REST API вы укажете метод HTTP и путь. Кроме того, можно также указать заголовки запросов и путь, запрос или параметры текста. API вернет код состояния ответа, заголовки ответа и потенциально текст ответа.

Справочная документация по REST API описывает метод HTTP, путь и параметры для каждой операции. Здесь также отображаются примеры запросов и ответов для каждой операции. Дополнительные сведения см. в [справочной документации по REST](/rest).

Дополнительные сведения об API{% data variables.product.company_short %}см. в разделе [Сведения об API {% data variables.product.company_short %}](/developers/overview/about-githubs-apis).

## Выполнение запроса

Чтобы выполнить запрос, сначала найдите метод HTTP и путь для операции, которую вы хотите использовать. Например, операция Get Octocat использует метод `GET` и путь `/octocat`. Полную справочную документацию по этой операции см. в разделе [Get Octocat](/rest/meta#get-octocat).

{% cli %}

{% note %}

**Примечание.** Для использования команд в примерах {% data variables.product.prodname_cli %} необходимо установить {% data variables.product.prodname_cli %}. Инструкции по установке см. в [репозитории {% data variables.product.prodname_cli %}](https://github.com/cli/cli#installation).

{% endnote %}

Если вы еще не прошли проверку подлинности в {% data variables.product.prodname_cli %}, необходимо использовать подкоманду `gh auth login` для проверки подлинности перед выполнением запросов. Дополнительные сведения см. в разделе [Проверка подлинности](#authenticating).

Чтобы выполнить запрос с помощью {% data variables.product.prodname_cli %}, используйте подкоманду `api` вместе с путем. Используйте флаг `--method` или `-X`, чтобы указать метод.

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

**Примечание.** Чтобы использовать библиотеку Octokit.js, используемую в примерах JavaScript, необходимо установить и импортировать `octokit`. Дополнительные сведения см. в [Octokit.js README](https://github.com/octokit/octokit.js/#readme).

{% endnote %}

Для выполнения запроса с помощью JavaScript можно использовать Octokit.js. Дополнительные сведения см. в [Octokit.js README](https://github.com/octokit/octokit.js/#readme).

Сначала создайте экземпляр `Octokit`.{% ifversion ghes or ghae %} Задайте базовый URL-адрес `{% data variables.product.api_url_code %}`. Замените `[hostname]` именем {% data variables.location.product_location %}.{ % endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

Затем используйте метод `request` для выполнения запросов. Передайте метод HTTP и путь в качестве первого аргумента.

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

Добавьте базовый URL-адрес для REST API `{% data variables.product.api_url_code %}`{% data variables.product.prodname_dotcom %} к пути, чтобы получить полный URL-адрес: `{% data variables.product.api_url_code %}/octocat`.{ % ifversion ghes or ghae %} Замените `[hostname]` именем {% data variables.location.product_location %}.{ % endif %}

Используйте команду `curl` в командной строке. Используйте флаг `--request` или `-X`, за которым следует метод HTTP. Используйте флаг `--url`, за которым следует полный URL-адрес.

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

**Примечание.** Если вы получаете сообщение "команда не найдена: curl", может потребоваться скачать и установить cURL. Дополнительные сведения см на [странице загрузки проекта cURL](https://curl.se/download.html).

{% endnote %}

{% endcurl %}

Читайте дальше, чтобы узнать, как выполнять проверку подлинности, отправлять параметры и использовать ответ.

## Аутентификация

Для многих операций требуется проверка подлинности или возврат дополнительных сведений при проверке подлинности. Кроме того, при проверке подлинности можно выполнять больше запросов в час. {% cli %} Хотя некоторые операции REST API доступны без проверки подлинности, для использования подкоманды `api` необходимо пройти проверку подлинности для входа в {% data variables.product.prodname_cli %}. {% endcli %}

### Сведения о маркерах

Вы можете выполнить проверку подлинности запроса, добавив маркер.

Если вы хотите использовать REST API {% data variables.product.company_short %} для личного использования, можно создать {% data variables.product.pat_generic %}. Для операций REST API, используемых в этой статье, требуется `repo` область {% data variables.product.pat_v1_plural %}{% ifversion pat-v2 %} или, если не указано иное, доступ только для чтения к общедоступным репозиториям для {% data variables.product.pat_v2 %}s{% endif %}. Для других операций могут потребоваться другие области{% ifversion pat-v2%} или разрешения{% endif %}. Дополнительные сведения о создании {% data variables.product.pat_generic %} см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

Если вы хотите использовать API от имени организации или другого пользователя, {% data variables.product.company_short %} рекомендует использовать {% data variables.product.prodname_github_app %}. Если операция доступна для {% data variables.product.prodname_github_apps %}, в справочной документации по REST для этой операции будет указано "Работает с приложениями GitHub". Для операций REST API, используемых в этой статье, требуются разрешения на чтение и запись `issues` для {% data variables.product.prodname_github_apps %}. Для других операций могут потребоваться другие разрешения. Дополнительные сведения см. в разделе [Создание приложения GitHub](/developers/apps/building-github-apps/creating-a-github-app), [Проверка подлинности при входе в приложения GitHub](/developers/apps/building-github-apps/authenticating-with-github-apps) и [Идентификация и авторизация пользователей для приложений GitHub](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps).

Если вы хотите использовать API в рабочем процессе {% data variables.product.prodname_actions %}, {% data variables.product.company_short %} рекомендует выполнять проверку подлинности с помощью встроенного `GITHUB_TOKEN` вместо создания маркера. Вы можете предоставить разрешения для `GITHUB_TOKEN` с помощью ключа `permissions`. Дополнительные сведения см. в разделе [Автоматическая проверка подлинности токенов](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).

### Пример проверки подлинности

{% cli %}

При использовании {% data variables.product.prodname_cli %} вам не нужно заранее создавать маркер доступа. Используйте подкоманду `auth login` для проверки подлинности в {% data variables.product.prodname_cli %}:

```shell
gh auth login
```

С помощью флага `--scopes` можно указать нужные области. Если вы хотите пройти проверку подлинности с помощью созданного маркера, можно использовать флаг `--with-token`. Дополнительные сведения см. в [документации по `auth login`{% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_auth_login).

{% endcli %}

{% javascript %}

{% warning %}

**Предупреждение**. Считайте маркер доступа своим паролем.

Чтобы обеспечить безопасность маркера, вы можете хранить маркер в виде секрета и запустить скрипт с помощью {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

{% ifversion ghec or fpt %} Вы также можете сохранить маркер в виде секрета {% data variables.product.prodname_codespaces %} и запустить скрипт в {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Если эти варианты недоступны, рассмотрите возможность безопасного хранения маркера с помощью другой службы, например [1Password CLI](https://developer.1password.com/docs/cli/secret-references/).

{% endwarning %}

Чтобы выполнить проверку подлинности с помощью библиотеки Octokit.js, вы можете передать маркер при создании экземпляра `Octokit`. Замените `YOUR-TOKEN` маркером.{ % ifversion ghes or ghae %} Замените `[hostname]` именем {% data variables.location.product_location %}.{ % endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

**Предупреждение**. Считайте маркер доступа своим паролем.

Чтобы обеспечить безопасность учетной записи, можно использовать {% data variables.product.prodname_cli %} вместо cURL. {% data variables.product.prodname_cli %} выполнит задачи по проверке подлинности. Дополнительные сведения см. в версии этой страницы для {% data variables.product.prodname_cli %}.

{% ifversion ghec or fpt %} Вы также можете сохранить маркер в виде секрета {% data variables.product.prodname_codespaces %} и использовать командую строку в {% data variables.product.prodname_codespaces %}. Дополнительные сведения см. в разделе [Управление зашифрованными секретами для ваших кодовых пространств](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces).{% endif %}

Если эти варианты недоступны, рассмотрите возможность безопасного хранения маркера с помощью другой службы, например [1Password CLI](https://developer.1password.com/docs/cli/secret-references/).

{% endwarning %}

С помощью cURL вы отправите заголовок `Authorization` с маркером. Замените `YOUR-TOKEN` собственным маркером:

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

**Примечание.** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### Пример проверки подлинности для {% data variables.product.prodname_actions %}

{% cli %}

Вы также можете использовать ключевое слово `run` для выполнения команд {% data variables.product.prodname_cli %} в рабочих процессах {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

Вместо того, чтобы использовать команду `gh auth login`, передайте маркер в качестве переменной среды `GH_TOKEN`. {% data variables.product.prodname_dotcom %} рекомендует выполнять проверку подлинности с помощью встроенного `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          gh api /octocat
```

{% endcli %}

{% javascript %}

Вы также можете использовать ключевое слово `run` для выполнения скриптов JavaScript в рабочих процессах {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} рекомендует выполнять проверку подлинности с помощью встроенного `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

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
    permissions: {}
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
        env:
          TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          node .github/actions-scripts/use-the-api.mjs
```

Пример скрипта JavaScript с путем к файлу `.github/actions-scripts/use-the-api.mjs`:

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

Вместо хранения скрипта в отдельном файле и выполнения скрипта из рабочего процесса можно использовать действие `actions/github-script` для запуска скрипта. Дополнительные сведения см. в [actions/github-script README](https://github.com/actions/github-script).

```yaml
jobs:
  use_api_via_script:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            await github.request('GET /octocat', {})
```

{% endjavascript %}

{% curl %}

Вы также можете использовать ключевое слово `run` для выполнения команд cURL в рабочих процессах {% data variables.product.prodname_actions %}. Дополнительные сведения см. в статье "[Синтаксис рабочего процесса для GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)".

{% data variables.product.prodname_dotcom %} рекомендует выполнять проверку подлинности с помощью встроенного `GITHUB_TOKEN` вместо создания маркера. Если это невозможно, сохраните маркер в качестве секрета и замените `GITHUB_TOKEN` в приведенном ниже примере именем секрета. Дополнительные сведения о `GITHUB_TOKEN` см. в разделе [Автоматическая проверка подлинности маркера](/actions/security-guides/automatic-token-authentication). Дополнительные сведения о секретах см. в разделе [Зашифрованные секреты](/actions/security-guides/encrypted-secrets).

```yaml
jobs:
  use_api:
    runs-on: ubuntu-latest
    permissions: {}
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
        run: |
          curl --request GET \
          --url "https://api.github.com/octocat" \
          --header "Authorization: Bearer $GH_TOKEN"
```

{% endcurl %}

## Использование заголовков

Большинство операций указывают, что следует передать заголовок `Accept` со значением `application/vnd.github+json`. Другие операции могут указывать, что следует отправлять другой заголовок `Accept` или дополнительные заголовки.

{% cli %}

Чтобы отправить заголовок с {% data variables.product.prodname_cli %}, используйте флаг `--header` или `-H`, за которым следует заголовок в формате `key: value`.

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

Библиотека Octokit.js автоматически передает заголовок `Accept: application/vnd.github+json`. Чтобы передать дополнительные заголовки или другой заголовок `Accept`, добавьте свойство `headers` в объект, который передается в качестве второго аргумента в метод `request`. Значение свойства `headers` — это объект с именами заголовков в качестве ключей и значениями заголовков в качестве значений. Например, чтобы отправить заголовок `content-type` со значением `text/plain`:

```javascript
await octokit.request("GET /octocat", {
  headers: {
    "content-type": "text/plain",{% ifversion api-date-versioning %}
    "X-GitHub-Api-Version": "{{ allVersions[currentVersion].latestApiVersion }}",{% endif %}
  },
});
```

{% endjavascript %}

{% curl %}

Чтобы отправить заголовок cURL, используйте флаг `--header` или `-H`, за которым следует заголовок в формате `key: value`.

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## Использование параметров пути

Параметры пути изменяют путь операции. Например, путь "Вывод проблем в репозитории" — это `/repos/{owner}/{repo}/issues`. Фигурные скобки `{}` указывают параметры пути, которые необходимо указать. В этом случае необходимо указать владельца и имя репозитория. Справочную документацию по этой операции см. в разделе [Вывод проблем в репозитории](/rest/issues/issues#list-repository-issues).

{% cli %}

{% ifversion ghes or ghae %} {% note %}

**Примечание:** Чтобы эта команда работала для {% data variables.location.product_location %}, замените `octocat/Spoon-Knife` репозиторием, принадлежащим {% data variables.location.product_location %}. В противном случае повторно выполните `gh auth login` команду для проверки подлинности в {% data variables.product.prodname_dotcom_the_website %} вместо {% data variables.location.product_location %}.

{% endnote %} {% endif %}

Чтобы извлечь проблемы из репозитория `octocat/Spoon-Knife`, замените `{owner}` на `octocat` и `{repo}` на `Spoon-Knife`.

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

**Примечание:** Чтобы этот пример работал для {% data variables.location.product_location %}, замените `octocat/Spoon-Knife` репозиторием, принадлежащим {% data variables.location.product_location %}. В противном случае создайте новый экземпляр `Octokit` и не указывайте `baseURL`.

{% endnote %} {% endif %}

При выполнении запроса с Octokit.js все параметры, включая параметры пути, передаются в объект в качестве второго аргумента для метода `request`. Чтобы извлечь проблемы из репозитория `octocat/Spoon-Knife`, укажите `owner` как `octocat` и `repo` как `Spoon-Knife`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

Чтобы извлечь проблемы из репозитория `octocat/Spoon-Knife`, замените `{owner}` на `octocat` и `{repo}` на `Spoon-Knife`. Чтобы создать полный путь, дополните базовый URL-адрес для REST API {% data variables.product.prodname_dotcom %}, `https://api.github.com`: `https://api.github.com/repos/octocat/Spoon-Knife/issues`.

{% ifversion ghes or ghae %} {% note %}

**Примечание:** Если вы хотите использовать {% data variables.location.product_location %} вместо {% data variables.product.prodname_dotcom_the_website %}, используйте `{% data variables.product.api_url_code %}` вместо `https://api.github.com` и замените `[hostname]` именем {% data variables.location.product_location %}. Замените `octocat/Spoon-Knife` репозиторием, принадлежащим {% data variables.location.product_location %}.

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Операция возвращает список проблем и данных о каждой проблеме. Дополнительные сведения об использовании ответа см. в разделе [Использование ответа](#using-the-response).

## Использование параметров запроса

Параметры запроса позволяют контролировать, какие данные возвращаются для запроса. Например, с помощью параметра запроса можно указать, сколько элементов возвращается при разбиении ответа на страницы.

По умолчанию операция "Вывод проблем в репозитории" возвращает 30 проблем, отсортированных по убыванию по дате создания. Параметр `per_page` можно использовать для возврата двух проблем вместо 30. Параметр `sort` можно использовать для сортировки проблем по дате последнего обновления, а не по дате создания. Параметр `direction` можно использовать для сортировки результатов по возрастанию, а не убыванию.

{% cli %}

Для {% data variables.product.prodname_cli %} используйте флаг `-F` для передачи параметра, который является числом, логическим значением или null. Используйте `-f` для передачи строковых параметров.

{% note %}

**Примечание.** {% data variables.product.prodname_cli %} в настоящее время не принимает параметры, которые являются массивами. Дополнительные сведения см. в [этой проблеме](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

При выполнении запроса с Octokit.js все параметры, включая параметры запроса, передаются в объект в качестве второго аргумента для метода `request`.

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
  sort: "updated",
  direction: "asc",
});
```

{% endjavascript %}

{% curl %}

Для cURL добавьте в `?` конец пути, а затем добавьте имя и значение параметра запроса в форме `parameter_name=value`. Разделите несколько параметров запроса с помощью `&`.

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

Операция возвращает список проблем и данных о каждой проблеме. Дополнительные сведения об использовании ответа см. в разделе [Использование ответа](#using-the-response).

## Использование параметров запроса

Параметры запроса позволяют передавать дополнительные данные в API. Например, для операции "Создание проблемы" требуется указать заголовок новой проблемы. Кроме того, он позволяет указывать другие сведения, например текст проблемы. Полную справочную документацию по этой операции см. в разделе [Создание проблемы](/rest/issues/issues#create-an-issue).

Операция "Создание проблемы" использует тот же путь, что и операция "Вывод проблем в репозитории" в приведенных выше примерах, но использует метод `POST` вместо `GET`.

{% cli %}

Для {% data variables.product.prodname_cli %} используйте флаг `-F` для передачи параметра, который является числом, логическим значением или null. Используйте `-f` для передачи строковых параметров.

{% note %}

**Примечание.** {% data variables.product.prodname_cli %} в настоящее время не принимает параметры, которые являются массивами. Дополнительные сведения см. в [этой проблеме](https://github.com/cli/cli/issues/1484).

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

Если вы используете {% data variables.product.pat_v2 %}, необходимо заменить `octocat/Spoon-Knife` репозиторием, владельцем или принадлежащим организации, членом которых вы являетесь. Маркер должен иметь доступ к такому репозиторию и иметь разрешения на чтение и запись для проблем с репозиторием. Дополнительные сведения о создании репозитория см. в разделе [Создание репозитория](/get-started/quickstart/create-a-repo). Дополнительные сведения о предоставлении доступа и разрешений для {% data variables.product.pat_v2 %} см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

При выполнении запроса с Octokit.js все параметры, включая параметры текста, передаются в объект в качестве второго аргумента для метода `request`.

```javascript
await octokit.request("POST /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  title: "Created with the REST API",
  body: "This is a test issue created by the REST API",
});
```

{% endjavascript %}

{% curl %}

{% ifversion pat-v2 %}

{% note %}

Если вы используете {% data variables.product.pat_v2 %}, необходимо заменить `octocat/Spoon-Knife` репозиторием, владельцем или принадлежащим организации, членом которых вы являетесь. Маркер должен иметь доступ к такому репозиторию и иметь разрешения на чтение и запись для проблем с репозиторием. Дополнительные сведения о создании репозитория см. в разделе [Создание репозитория](/get-started/quickstart/create-a-repo). Дополнительные сведения о предоставлении доступа и разрешений для {% data variables.product.pat_v2 %} см. в разделе [Создание {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

{% endnote %}

{% endif %}

Для cURL используйте флаг `--data` для передачи параметров текста в объект JSON.

```shell
curl --request POST \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--data '{
  "title": "Created with the REST API",
  "body": "This is a test issue created by the REST API"
}'
```

{% endcurl %}

Операция создает проблему и возвращает данные о новой проблеме. В ответе найдите `html_url` проблемы и перейдите к проблеме в браузере. Дополнительные сведения об использовании ответа см. в разделе [Использование ответа](#using-the-response).

## Использование ответа

### Сведения о коде ответа и заголовках

Каждый запрос возвращает код состояния HTTP, указывающий на успешность ответа. Дополнительные сведения о кодах ответов см. [в документации по кодам состояния ответов MDN HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Кроме того, ответ будет содержать заголовки, которые предоставляют дополнительные сведения об ответе. Заголовки, начинающиеся с `X-` или `x-`, являются пользовательскими для {% data variables.product.company_short %}. Например, заголовки `x-ratelimit-remaining` и `x-ratelimit-reset` сообщают, сколько запросов можно выполнить за период времени.

{% cli %}

Чтобы просмотреть код состояния и заголовки, используйте флаг `--include` или `--i` при отправке запроса.

Например, этот запрос:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

возвращает код ответа и заголовки, например:

```shell
HTTP/2.0 200 OK
Access-Control-Allow-Origin: *
Access-Control-Expose-Headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
Cache-Control: private, max-age=60, s-maxage=60
Content-Security-Policy: default-src 'none'
Content-Type: application/json; charset=utf-8
Date: Thu, 04 Aug 2022 19:56:41 GMT
Etag: W/"a63dfbcfdb73621e9d2e89551edcf9856731ced534bd7f1e114a5da1f5f73418"
Link: <https://api.github.com/repositories/1300192/issues?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=1&page=14817>; rel="last"
Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin
Server: GitHub.com
Strict-Transport-Security: max-age=31536000; includeSubdomains; preload
Vary: Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With
X-Accepted-Oauth-Scopes: repo
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Github-Api-Version-Selected: 2022-08-09
X-Github-Media-Type: github.v3; format=json
X-Github-Request-Id: 1C73:26D4:E2E500:1EF78F4:62EC2479
X-Oauth-Client-Id: 178c6fc778ccc68e1d6a
X-Oauth-Scopes: gist, read:org, repo, workflow
X-Ratelimit-Limit: 15000
X-Ratelimit-Remaining: 14996
X-Ratelimit-Reset: 1659645499
X-Ratelimit-Resource: core
X-Ratelimit-Used: 4
X-Xss-Protection: 0
```

В этом примере код ответа — `200`, что указывает на успешный запрос.

{% endcli %}

{% javascript %}

При выполнении запроса с Octokit.js метод `request` возвращает обещание. Если запрос выполнен успешно, обещание разрешается в объект, включающий код состояния HTTP ответа (`status`) и заголовки ответа (`headers`). Если возникла ошибка, обещание разрешается в объект, включающий код состояния HTTP ответа (`status`) и заголовки ответа (`response.headers`).

При возникновении ошибки можно использовать блок `try/catch` для ее перехвата. Например, если запрос в следующем скрипте выполнен успешно, скрипт занесет в журнал код состояния и значение заголовка `x-ratelimit-remaining`. Если запрос не выполнен, скрипт занесет в журнал код состояния, значение заголовка `x-ratelimit-remaining` и сообщение об ошибке.

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  console.log(`Success! Status: ${result.status}. Rate limit remaining: ${result.headers["x-ratelimit-remaining"]}`)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Rate limit remaining: ${error.headers["x-ratelimit-remaining"]}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Чтобы просмотреть код состояния и заголовки, используйте флаг `--include` или `--i` при отправке запроса.

Например, этот запрос:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

возвращает код ответа и заголовки, например:

```shell
HTTP/2 200
server: GitHub.com
date: Thu, 04 Aug 2022 20:07:51 GMT
content-type: application/json; charset=utf-8
cache-control: public, max-age=60, s-maxage=60
vary: Accept, Accept-Encoding, Accept, X-Requested-With
etag: W/"7fceb7e8c958d3ec4d02524b042578dcc7b282192e6c939070f4a70390962e18"
x-github-media-type: github.v3; format=json
link: <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=2>; rel="next", <https://api.github.com/repositories/1300192/issues?per_page=2&sort=updated&direction=asc&page=7409>; rel="last"
access-control-expose-headers: ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset
access-control-allow-origin: *
strict-transport-security: max-age=31536000; includeSubdomains; preload
x-frame-options: deny
x-content-type-options: nosniff
x-xss-protection: 0
referrer-policy: origin-when-cross-origin, strict-origin-when-cross-origin
content-security-policy: default-src 'none'
x-ratelimit-limit: 15000
x-ratelimit-remaining: 14996
x-ratelimit-reset: 1659645535
x-ratelimit-resource: core
x-ratelimit-used: 4
accept-ranges: bytes
content-length: 4936
x-github-request-id: 14E0:4BC6:F1B8BA:208E317:62EC2715
```

В этом примере код ответа — `200`, что указывает на успешный запрос.

{% endcurl %}

### Сведения о тексте ответа

Многие операции возвращают текст ответа. Если не указано иное, текст ответа имеет формат JSON. Например, этот запрос возвращает список проблем с данными о каждой проблеме:

{% cli %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2
```

{% endcli %}

{% javascript %}

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife",
  per_page: 2,
});
```

{% endjavascript %}

{% curl %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

В отличие от API GraphQL, в котором вы указываете желаемую информацию, REST API обычно возвращает больше информации, чем требуется. При необходимости можно проанализировать ответ, чтобы извлечь определенные данные.

{% cli %}

Например, можно использовать `>` для перенаправления ответа в файл:

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

Затем можно использовать jq, чтобы получить заголовок и идентификатор автора каждой проблемы:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Две предыдущие команды возвращают примерно следующее:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Дополнительные сведения о jq см. [в документации по jq](https://stedolan.github.io/jq/) и [jq play](https://jqplay.org/).

{% endcli %}

{% javascript %}

Например, вы можете получить заголовок и идентификатор автора каждой проблемы:

```javascript
try {
  const result = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "octocat",
    repo: "Spoon-Knife",
    per_page: 2,
  });

  const titleAndAuthor = result.data.map(issue => {title: issue.title, authorID: issue.user.id})

  console.log(titleAndAuthor)

} catch (error) {
  console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
}
```

{% endjavascript %}

{% curl %}

Например, можно использовать `>` для перенаправления ответа в файл:

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

Затем можно использовать jq, чтобы получить заголовок и идентификатор автора каждой проблемы:

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

Две предыдущие команды возвращают примерно следующее:

```
{
  "title": "Update index.html",
  "authorID": 10701255
}
{
  "title": "Edit index file",
  "authorID": 53709285
}
```

Дополнительные сведения о jq см. [в документации по jq](https://stedolan.github.io/jq/) и [jq play](https://jqplay.org/).

{% endcurl %}

## Дальнейшие действия

В этой статье показано, как перечислить и создать проблемы в репозитории. Попрактикуйтесь, прокомментировав проблему, изменив заголовок проблемы или закрыв проблему. Дополнительные сведения об этих операциях см. в разделе [Создание комментария к проблеме](/rest/issues#create-an-issue-comment) и [Обновление проблемы](/rest/issues/issues#update-an-issue).

Дополнительные сведения о доступных операциях см. в [справочной документации по REST](/rest).
