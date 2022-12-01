---
title: REST API 入门
intro: '了解如何使用 {% data variables.product.prodname_dotcom %} REST API。'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184259'
---
## 关于 {% data variables.product.prodname_dotcom %} REST API

本文介绍如何通过 {% data variables.product.prodname_cli %}、JavaScript 或 cURL 使用 {% data variables.product.prodname_dotcom %} REST API。 有关快速入门指南，请参阅“[GitHub REST API 快速入门](/rest/quickstart)”。

向 REST API 发出请求时，会指定 HTTP 方法和路径。 此外，还可以指定请求头和路径、查询或正文参数。 API 会返回响应状态代码、响应头，并可能返回响应正文。

REST API 参考文档介绍了每个操作的 HTTP 方法、路径和参数。 它还显示每个操作的示例请求和响应。 有关详细信息，请查看 [REST 参考文档](/rest)。

若要详细了解 {% data variables.product.company_short %} 的 API，请参阅“[关于 {% data variables.product.company_short %} 的 API 的信息](/developers/overview/about-githubs-apis)”。

## 发出请求

若要发出请求，请先找到要使用的操作的 HTTP 方法和路径。 例如，“获取 Octocat”操作使用 `GET` 方法和 `/octocat` 路径。 有关此操作的完整参考文档，请参阅“[获取 Octocat](/rest/meta#get-octocat)”。

{% cli %}

{% note %}

注意：必须安装 {% data variables.product.prodname_cli %} 才能使用 {% data variables.product.prodname_cli %} 示例中的命令。 有关安装说明，请参阅 [{% data variables.product.prodname_cli %} 存储库](https://github.com/cli/cli#installation)。

{% endnote %}

如果尚未向 {% data variables.product.prodname_cli %} 进行身份验证，则必须在发出任何请求之前使用 `gh auth login` 子命令进行身份验证。 有关详细信息，请参阅“[身份验证](#authenticating)”。

若要使用 {% data variables.product.prodname_cli %} 发出请求，请使用 `api` 子命令以及路径。 使用 `--method` 或 `-X` 标志指定方法。

```shell
gh api /octocat --method GET
```

{% endcli %}

{% javascript %}

{% note %}

注意：必须安装和导入 `octokit` 才能使用 JavaScript 示例中使用的 Octokit.js 库。 有关详细信息，请参阅 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。

{% endnote %}

若要使用 JavaScript 发出请求，可以使用 Octokit.js。 有关详细信息，请参阅 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。

首先，创建 `Octokit` 的实例。{% ifversion ghes or ghae %}将基 URL 设置为 `{% data variables.product.api_url_code %}`。 将 `[hostname]` 替换为 {% data variables.location.product_location %} 的名称。{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",
{% endif %}});
```

然后，使用 `request` 方法发出请求。 将 HTTP 方法和路径作为第一个参数传递。

```javascript
await octokit.request("GET /octocat", {});
```

{% endjavascript %}

{% curl %}

在路径前面附加 {% data variables.product.prodname_dotcom %} REST API 的基 URL `{% data variables.product.api_url_code %}`，以获取完整 URL：`{% data variables.product.api_url_code %}/octocat`。{% ifversion ghes or ghae %}将 `[hostname]` 替换为 {% data variables.location.product_location %} 的名称。{% endif %}

在命令行中使用 `curl` 命令。 使用 `--request` 或 `-X` 标志，后跟 HTTP 方法。 使用 `--url` 标志，后跟完整 URL。

```shell
curl --request GET \
--url "https://api.github.com/octocat"
```

{% note %}

注意：如果收到类似于“找不到命令: curl”的消息，则可能需要下载并安装 cURL。 有关详细信息，请参阅 [cURL 项目下载页面](https://curl.se/download.html)。

{% endnote %}

{% endcurl %}

继续阅读，了解如何进行身份验证、发送参数和使用响应。

## 身份验证

许多操作需要身份验证或是在进行身份验证后返回其他信息。 此外，在进行身份验证时，可以每小时发出更多请求。{% cli %}尽管某些 REST API 操作在未进行身份验证的情况下可访问，但你必须向 {% data variables.product.prodname_cli %} 进行身份验证才能使用 `api` 子命令。{% endcli %}

### 关于令牌

可以通过添加令牌对请求进行身份验证。

如果要将 {% data variables.product.company_short %} REST API 用于个人用途，可以创建 {% data variables.product.pat_generic %}。 本文中使用的 REST API 操作需要 {% data variables.product.pat_v1_plural %} 的 `repo` 范围，{% ifversion pat-v2 %}或者在另有说明的情况下具有对 {% data variables.product.pat_v2 %} 的公共存储库的只读访问权限{% endif %}。 其他操作可能需要不同的范围{% ifversion pat-v2%} 或权限{% endif %}。 有关创建 {% data variables.product.pat_generic %} 的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

如果要代表组织或其他用户使用 API，{% data variables.product.company_short %} 建议使用 {% data variables.product.prodname_github_app %}。 如果某个操作可用于 {% data variables.product.prodname_github_apps %}，则该操作的 REST 参考文档会显示“适用于 GitHub 应用”。 本文中使用的 REST API 操作需要将 `issues` 读取和写入权限用于 {% data variables.product.prodname_github_apps %}。 其他操作可能需要不同的权限。 有关详细信息，请参阅“[创建 GitHub 应用](/developers/apps/building-github-apps/creating-a-github-app)”、“[使用 GitHub 应用进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps)”和“[识别和授权 GitHub 应用用户](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)”。

如果要在 {% data variables.product.prodname_actions %} 工作流中使用 API，则 {% data variables.product.company_short %} 建议使用内置 `GITHUB_TOKEN` 进行身份验证，而不是创建令牌。 可以使用 `permissions` 密钥向 `GITHUB_TOKEN` 授予权限。 有关详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)”。

### 身份验证示例

{% cli %}

借助 {% data variables.product.prodname_cli %}，无需提前创建访问令牌。 使用 `auth login` 子命令向 {% data variables.product.prodname_cli %} 进行身份验证：

```shell
gh auth login
```

可以使用 `--scopes` 标志指定所需的范围。 如果要使用创建的令牌进行身份验证，可以使用 `--with-token` 标志。 有关详细信息，请参阅 [{% data variables.product.prodname_cli %} `auth login` 文档](https://cli.github.com/manual/gh_auth_login)。

{% endcli %}

{% javascript %}

{% warning %}

警告：将访问令牌视为密码。

若要确保令牌安全，可以将令牌存储为机密，并通过 {% data variables.product.prodname_actions %} 运行脚本。 有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets)”。

{% ifversion ghec or fpt %}还可以将令牌存储为 {% data variables.product.prodname_codespaces %} 机密，并在 {% data variables.product.prodname_codespaces %} 中运行脚本。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”{% endif %}

如果无法使用这些选项，请考虑使用其他服务（如 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)）安全地存储令牌。

{% endwarning %}

若要使用 Octokit.js 库进行身份验证，可以在创建 `Octokit` 的实例时传递令牌。 将 `YOUR-TOKEN` 替换为令牌。{% ifversion ghes or ghae %}将 `[hostname]` 替换为 {% data variables.location.product_location %} 的名称。{% endif %}

```javascript
const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: 'YOUR-TOKEN',
});
```

{% endjavascript %}

{% curl %}

{% warning %}

警告：将访问令牌视为密码。

若要帮助确保帐户安全，可以使用 {% data variables.product.prodname_cli %} 而不是 cURL。 {% data variables.product.prodname_cli %} 会为你处理身份验证。 有关详细信息，请参阅此页面的 {% data variables.product.prodname_cli %} 版本。

{% ifversion ghec or fpt %}还可以将令牌存储为 {% data variables.product.prodname_codespaces %} 机密，并通过 {% data variables.product.prodname_codespaces %} 使用命令行。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”{% endif %}

如果无法使用这些选项，请考虑使用其他服务（如 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)）安全地存储令牌。

{% endwarning %}

使用 cURL 时，会发送包含令牌的 `Authorization` 标头。 将 `YOUR-TOKEN` 替换为你的令牌：

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% note %}

注意：{% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

{% endcurl %}

### 适用于 {% data variables.product.prodname_actions %} 的身份验证示例

{% cli %}

还可以使用 `run` 关键字在 {% data variables.product.prodname_actions %} 工作流中执行 {% data variables.product.prodname_cli %} 命令。 有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

不要使用 `gh auth login` 命令，而是将令牌作为名为 `GH_TOKEN` 的环境变量进行传递。 {% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN` 进行身份验证，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

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

还可以在 {% data variables.product.prodname_actions %} 工作流中使用 `run` 关键字执行 JavaScript 脚本。 有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

{% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN` 进行身份验证，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

以下示例工作流：

1. 签出存储库内容
1. 设置 Node.js
1. 安装 `octokit`
1. 将 `GITHUB_TOKEN` 的值存储为名为 `TOKEN` 的环境变量，并运行 `.github/actions-scripts/use-the-api.mjs`（它可以将该环境变量作为 `process.env.TOKEN` 进行访问）。

示例工作流：

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

文件路径为 `.github/actions-scripts/use-the-api.mjs` 的示例 JavaScript 脚本：

```javascript
import { Octokit } from "octokit";

const octokit = new Octokit({ {% ifversion ghes or ghae %}
  baseUrl: "{% data variables.product.api_url_code %}",{% endif %}
  auth: process.env.TOKEN,
});

await octokit.request("GET /octocat", {});
```

可以使用 `actions/github-script` 操作运行脚本，而不是将脚本存储在单独文件中并从工作流中执行脚本。 有关详细信息，请参阅 [actions/github-script README](https://github.com/actions/github-script)。

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

还可以在 {% data variables.product.prodname_actions %} 工作流中使用 `run` 关键字执行 cURL 命令。 有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

{% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN` 进行身份验证，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

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

## 使用标头

大多数操作会指定应传递包含 `application/vnd.github+json` 值的 `Accept` 标头。 其他操作可能会指定应发送不同的 `Accept` 标头或其他标头。

{% cli %}

若要使用 {% data variables.product.prodname_cli %} 发送标头，请使用 `--header` 或 `-H` 标志，后跟采用 `key: value` 格式的标头。

```shell
gh api --header 'Accept: application/vnd.github+json'{% ifversion api-date-versioning %} --header 'X-GitHub-Api-Version:{{ allVersions[currentVersion].latestApiVersion }}'{% endif %} --method GET /octocat
```

{% endcli %}

{% javascript %}

Octokit.js 库会自动传递 `Accept: application/vnd.github+json` 标头。 若要传递其他标头或不同的 `Accept` 标头，请将 `headers` 属性添加到对象，该属性会作为第二个参数传递给 `request` 方法。 `headers` 属性的值是将标头名称作为键并将标头值作为值的对象。 例如，若要发送具有 `text/plain` 值的 `content-type` 标头：

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

若要使用 cURL 发送标头，请使用 `--header` 或 `-H` 标志，后跟采用 `key: value` 格式的标头。

```shell
curl --request GET \
--url "https://api.github.com/octocat" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer <em>YOUR-TOKEN</em>"{% ifversion api-date-versioning %}\
--header "X-GitHub-Api-Version: {{ allVersions[currentVersion].latestApiVersion }}"{% endif %}
```

{% endcurl %}

## 使用路径参数

路径参数会修改操作路径。 例如，“列出存储库问题”路径为 `/repos/{owner}/{repo}/issues`。 大括号 `{}` 表示需要指定的路径参数。 在这种情况下，必须指定存储库所有者和名称。 有关此操作的参考文档，请参阅“[列出存储库问题](/rest/issues/issues#list-repository-issues)”。

{% cli %}

{% ifversion ghes or ghae %} {% note %}

注意：若要使此命令适用于 {% data variables.location.product_location %}，请将 `octocat/Spoon-Knife` 替换为 {% data variables.location.product_location %} 拥有的存储库。 否则，请重新运行 `gh auth login` 命令以向 {% data variables.product.prodname_dotcom_the_website %} 进行身份验证，而不是 {% data variables.location.product_location %}。

{% endnote %} {% endif %}

若要从 `octocat/Spoon-Knife` 存储库获取问题，请将 `{owner}`替换为 `octocat`，并将 `{repo}` 替换为 `Spoon-Knife`。

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues
```

{% endcli %}

{% javascript %}

{% ifversion ghes or ghae %} {% note %}

注意：若要使此示例适用于 {% data variables.location.product_location %}，请将 `octocat/Spoon-Knife` 替换为 {% data variables.location.product_location %} 拥有的存储库。 否则，请创建新 `Octokit` 实例，但不指定 `baseURL`。

{% endnote %} {% endif %}

使用 Octokit.js 发出请求时，所有参数（包括路径参数）都会在对象中作为第二个参数传递给 `request` 方法。 若要从 `octocat/Spoon-Knife` 存储库获取问题，请将 `owner` 指定为 `octocat`，并将 `repo` 指定为 `Spoon-Knife`。

```javascript
await octokit.request("GET /repos/{owner}/{repo}/issues", {
  owner: "octocat",
  repo: "Spoon-Knife"
});
```

{% endjavascript %}

{% curl %}

若要从 `octocat/Spoon-Knife` 存储库获取问题，请将 `{owner}`替换为 `octocat`，并将 `{repo}` 替换为 `Spoon-Knife`。 若要生成完整路径，请在前面附加 {% data variables.product.prodname_dotcom %} REST API 的基 URL `https://api.github.com`：`https://api.github.com/repos/octocat/Spoon-Knife/issues`。

{% ifversion ghes or ghae %} {% note %}

注意：如果要使用 {% data variables.location.product_location %} 而不是 {% data variables.product.prodname_dotcom_the_website %}，请使用 `{% data variables.product.api_url_code %}` 而不是 `https://api.github.com`，并将 `[hostname]` 替换为 {% data variables.location.product_location %} 的名称。 将 `octocat/Spoon-Knife` 替换为 {% data variables.location.product_location %} 拥有的存储库。

{% endnote %} {% endif %}

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

该操作返回问题列表以及有关每个问题的数据。 有关使用响应的详细信息，请参阅“[使用响应](#using-the-response)”部分。

## 使用查询参数

查询参数使你可以控制为请求返回的数据。 例如，查询参数可用于指定响应进行分页时返回的项数。

默认情况下，“列出存储库问题”操作返回三十个问题，按创建日期的降序排序。 可以使用 `per_page` 参数返回 2 个问题，而不是 30 个问题。 可以使用 `sort` 参数按上次更新日期（而不是创建日期）对问题进行排序。 可以使用 `direction` 参数按升序（而不是降序）对结果进行排序。

{% cli %}

对于 {% data variables.product.prodname_cli %}，使用 `-F` 标志传递作为数字、布尔值或 null 的参数。 使用 `-f` 传递字符串参数。

{% note %}

注意：{% data variables.product.prodname_cli %} 当前不接受数组参数。 有关详细信息，请参阅[此问题](https://github.com/cli/cli/issues/1484)。

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 -f sort=updated -f direction=asc
```

{% endcli %}

{% javascript %}

使用 Octokit.js 发出请求时，所有参数（包括查询参数）都会在对象中作为第二个参数传递给 `request` 方法。

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

对于 cURL，向路径末尾添加 `?` ，然后采用 `parameter_name=value` 形式追加查询参数名称和值。 使用 `&` 分隔多个查询参数。

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2&sort=updated&direction=asc" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN"
```

{% endcurl %}

该操作返回问题列表以及有关每个问题的数据。 有关使用响应的详细信息，请参阅“[使用响应](#using-the-response)”部分。

## 使用正文参数

正文参数使你可以将其他数据传递给 API。 例如，“创建问题”操作要求为新问题指定标题。 它还使你可以指定其他信息，例如要放入问题正文中的文本。 有关此操作的完整参考文档，请参阅“[创建问题](/rest/issues/issues#create-an-issue)”。

“创建问题”操作使用的路径与上面示例中的“列出存储库问题”操作相同，但它使用 `POST` 方法而不是 `GET` 方法。

{% cli %}

对于 {% data variables.product.prodname_cli %}，使用 `-F` 标志传递作为数字、布尔值或 null 的参数。 使用 `-f` 传递字符串参数。

{% note %}

注意：{% data variables.product.prodname_cli %} 当前不接受数组参数。 有关详细信息，请参阅[此问题](https://github.com/cli/cli/issues/1484)。

{% endnote %}

```shell
gh api --header 'Accept: application/vnd.github+json' --method POST /repos/octocat/Spoon-Knife/issues -f title="Created with the REST API" -f body="This is a test issue created by the REST API"
```

{% endcli %}

{% javascript %}

{% ifversion pat-v2 %}

{% note %}

如果使用的是 {% data variables.product.pat_v2 %}，则必须将 `octocat/Spoon-Knife` 替换为属于你或你所在的组织的存储库。 令牌必须有权访问该存储库，并且对存储库问题具有读取和写入权限。 有关创建存储库的详细信息，请参阅“[创建存储库](/get-started/quickstart/create-a-repo)”。 有关向 {% data variables.product.pat_v2 %} 授予访问权限和特权的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% endnote %}

{% endif %}

使用 Octokit.js 发出请求时，所有参数（包括正文参数）都会在对象中作为第二个参数传递给 `request` 方法。

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

如果使用的是 {% data variables.product.pat_v2 %}，则必须将 `octocat/Spoon-Knife` 替换为属于你或你所在的组织的存储库。 令牌必须有权访问该存储库，并且对存储库问题具有读取和写入权限。 有关创建存储库的详细信息，请参阅“[创建存储库](/get-started/quickstart/create-a-repo)”。 有关向 {% data variables.product.pat_v2 %} 授予访问权限和特权的详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

{% endnote %}

{% endif %}

对于 cURL，使用 `--data` 标志在 JSON 对象中传递正文参数。

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

该操作创建一个问题并返回有关新问题的数据。 在响应中，找到问题的 `html_url` 并在浏览器中导航到问题。 有关使用响应的详细信息，请参阅“[使用响应](#using-the-response)”部分。

## 使用响应

### 关于响应代码和标头

每个请求都会返回 HTTP 状态代码，以指示响应是否成功。 有关响应代码的详细信息，请参阅 [MDN HTTP 响应状态代码文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)。

此外，响应会包含标头，以提供有关响应的更多详细信息。 以 `X-` 或 `x-` 开头的标头对于 {% data variables.product.company_short %} 是自定义的。 例如，`x-ratelimit-remaining` 和 `x-ratelimit-reset` 标头会告知你在一段时间内可以发出的请求数。

{% cli %}

若要查看状态代码和标头，请在发送请求时使用 `--include` 或 `--i` 标志。

例如，以下请求：

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 --include
```

返回响应代码和标头，如下所示：

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

在此示例中，响应代码为 `200`，指示请求成功。

{% endcli %}

{% javascript %}

使用 Octokit.js 发出请求时，`request` 方法会返回承诺。 如果请求成功，则承诺会解析为包含响应的 HTTP 状态代码 (`status`) 和响应标头 (`headers`) 的对象。 如果发生错误，则承诺会解析为包含响应的 HTTP 状态代码 (`status`) 和响应标头 (`response.headers`) 的对象。

如果发生错误，则可以使用 `try/catch` 块进行捕获。 例如，如果以下脚本中的请求成功，则脚本会记录状态代码和 `x-ratelimit-remaining` 标头的值。 如果请求未成功，脚本会记录状态代码、标头的 `x-ratelimit-remaining` 值和错误消息。

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

若要查看状态代码和标头，请在发送请求时使用 `--include` 或 `--i` 标志。

例如，以下请求：

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" \
--include
```

返回响应代码和标头，如下所示：

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

在此示例中，响应代码为 `200`，指示请求成功。

{% endcurl %}

### 关于响应正文

许多操作会返回响应正文。 除非另外指定，否则响应正文会采用 JSON 格式。 例如，此请求返回问题列表以及有关每个问题的数据：

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

与指定所需信息的 GraphQL API 不同，REST API 通常会返回比所需信息更多的信息。 如果需要，可以分析响应以拉取特定信息片段。

{% cli %}

例如，可使用 `>` 将响应重定向到文件：

```shell
gh api --header 'Accept: application/vnd.github+json' --method GET /repos/octocat/Spoon-Knife/issues -F per_page=2 > data.json
```

然后可以使用 jq 获取每个问题的标题和创建者 ID：

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

前面两个命令返回类似于下面这样的内容：

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

有关 jq 的详细信息，请参阅 [jq 文档](https://stedolan.github.io/jq/)和 [jq play](https://jqplay.org/)。

{% endcli %}

{% javascript %}

例如，可以获取每个问题的标题和创建者 ID：

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

例如，可使用 `>` 将响应重定向到文件：

```shell
curl --request GET \
--url "https://api.github.com/repos/octocat/Spoon-Knife/issues?per_page=2" \
--header "Accept: application/vnd.github+json" \
--header "Authorization: Bearer YOUR-TOKEN" > data.json
```

然后可以使用 jq 获取每个问题的标题和创建者 ID：

```shell
jq '.[] | {title: .title, authorID: .user.id}' data.json
```

前面两个命令返回类似于下面这样的内容：

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

有关 jq 的详细信息，请参阅 [jq 文档](https://stedolan.github.io/jq/)和 [jq play](https://jqplay.org/)。

{% endcurl %}

## 后续步骤

本文演示了如何在存储库中列出和创建问题。 有关更多做法，请尝试对问题添加注释、编辑问题的标题或关闭问题。 有关这些操作的详细信息，请参阅“[创建问题注释](/rest/issues#create-an-issue-comment)”和“[更新问题](/rest/issues/issues#update-an-issue)”。

有关可以使用的操作的详细信息，请参阅 [REST 参考文档](/rest)。
