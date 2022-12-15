---
title: GitHub REST API 快速入门
intro: '了解如何开始使用 {% data variables.product.prodname_dotcom %} REST API。'
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
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192879'
---
本文介绍如何快速地通过 {% data variables.product.prodname_cli %}、JavaScript 或 cURL 开始使用 {% data variables.product.prodname_dotcom %} REST API。 有关更详细的指南，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api)”。

{% cli %}

## 开始使用 {% data variables.product.prodname_cli %}

### 在命令行中使用 {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} 是从命令行使用 {% data variables.product.prodname_dotcom %} REST API 的最简单方式。

1. 如果尚未安装 {% data variables.product.prodname_cli %}，请进行安装。 有关安装说明，请参阅 [{% data variables.product.prodname_cli %} 存储库](https://github.com/cli/cli#installation)。
1. 使用 `auth login` 子命令向 {% data variables.product.prodname_cli %} 进行身份验证。 有关详细信息，请参阅 [{% data variables.product.prodname_cli %} `auth login` 文档](https://cli.github.com/manual/gh_auth_login)。

   ```shell
   gh auth login
   ```

1. 使用 `api` 子命令发出 API 请求。 有关详细信息，请参阅 [{% data variables.product.prodname_cli %} `api` 文档](https://cli.github.com/manual/gh_api)。

   ```shell
   gh api repos/octocat/Spoon-Knife/issues
   ```

### 在 {% data variables.product.prodname_actions %} 中使用 {% data variables.product.prodname_cli %}

还可以在 {% data variables.product.prodname_actions %} 工作流中使用 {% data variables.product.prodname_cli %}。 有关详细信息，请参阅“[在工作流中使用 GitHub CLI](/actions/using-workflows/using-github-cli-in-workflows)”。

不要使用 `gh auth login` 命令，而是将访问令牌作为名为 `GH_TOKEN` 的环境变量进行传递。 {% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN`，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

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

如果使用 {% data variables.product.prodname_github_app %} 进行身份验证，则可以在工作流中创建安装访问令牌：

1. 将 {% data variables.product.prodname_github_app %} 的 ID 作为机密进行存储。 在以下示例中，将 `APP_ID` 替换为机密的名称。 可以在应用的设置页面上或通过 API 找到应用 ID。 有关详细信息，请参阅 REST API 文档中的“[应用](/rest/apps/apps#get-an-app)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。
1. 为应用生成私钥。 将所生成文件的内容作为机密进行存储。 （存储文件的全部内容，包括 `-----BEGIN RSA PRIVATE KEY-----` 和 `-----END RSA PRIVATE KEY-----`。）在以下示例中，将 `APP_PEM` 替换为机密的名称。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”。
1. 添加用于生成令牌的步骤，并使用该令牌而不是 `GITHUB_TOKEN`。 请注意，此令牌会在 60 分钟后过期。 例如：

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

## 开始使用 JavaScript

可以在 JavaScript 脚本中使用 Octokit.js 与 {% data variables.product.prodname_dotcom %} REST API 进行交互。 有关详细信息，请参阅 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。

### 使用 Octokit.js

1. 创建访问令牌。 例如，创建 {% data variables.product.pat_generic %} 或 {% data variables.product.prodname_github_app %} 用户到服务器访问令牌。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”或“[识别和授权 GitHub 应用的用户](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)”。

   {% warning %}

   警告：将访问令牌视为密码。

   若要确保令牌安全，可以将令牌存储为机密，并通过 {% data variables.product.prodname_actions %} 运行脚本。 有关详细信息，请参阅“[在 {% data variables.product.prodname_actions %} 中使用 Octokit.js](#using-octokitjs-in-github-actions)”部分。

   {%- ifversion fpt or ghec %}

   还可以将令牌存储为 {% data variables.product.prodname_codespaces %} 机密，并在 {% data variables.product.prodname_codespaces %} 中运行脚本。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”{% endif %}

   如果无法使用这些选项，请考虑使用其他服务（如 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)）安全地存储令牌。

   {% endwarning %}

1. 安装 `octokit`。 例如，`npm install octokit`。 有关安装或加载 `octokit` 的其他方式，请参阅 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。
1. 在脚本中导入 `octokit`。 例如，`import { Octokit } from "octokit";`。 有关导入 `octokit` 的其他方式，请参阅 [Octokit.js 自述文件](https://github.com/octokit/octokit.js/#readme)。
1. 使用密钥创建 `Octokit` 的实例。 将 `YOUR-TOKEN` 替换为你的令牌。

   ```javascript
   const octokit = new Octokit({
     auth: 'YOUR-TOKEN'
   });
   ```

1. 使用 `octokit.request` 执行请求。 将 HTTP 方法和路径作为第一个参数发送。 将对象中的任何路径、查询和正文参数指定为第二个参数。 例如，在以下请求中，HTTP 方法为 `GET`，路径为 `/repos/{owner}/{repo}/issues`，参数为 `owner: "octocat"` 和 `repo: "Spoon-Knife"`。

   ```javascript
   await octokit.request("GET /repos/{owner}/{repo}/issues", {
     owner: "octocat",
     repo: "Spoon-Knife",
   });
   ```

### 在 {% data variables.product.prodname_actions %} 中使用 Octokit.js

还可以在 {% data variables.product.prodname_actions %} 工作流中执行 JavaScript 脚本。 有关详细信息，请参阅“[GitHub Actions 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun)”。

{% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN`，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

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

文件路径为 `.github/actions-scripts/use-the-api.mjs` 的示例 JavaScript 脚本：

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

如果使用 {% data variables.product.prodname_github_app %} 进行身份验证，则可以在工作流中创建安装访问令牌：

1. 将 {% data variables.product.prodname_github_app %} 的 ID 作为机密进行存储。 在以下示例中，将 `APP_ID` 替换为机密的名称。 您可以在应用的设置页面上或通过应用 API 找到应用 ID。 有关详细信息，请参阅“[应用](/rest/apps/apps#get-an-app)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。
1. 为应用生成私钥。 将所生成文件的内容作为机密进行存储。 （存储文件的全部内容，包括 `-----BEGIN RSA PRIVATE KEY-----` 和 `-----END RSA PRIVATE KEY-----`。）在以下示例中，将 `APP_PEM` 替换为机密的名称。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”。
1. 添加用于生成令牌的步骤，并使用该令牌而不是 `GITHUB_TOKEN`。 请注意，此令牌会在 60 分钟后过期。 例如：

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

## 开始使用 cURL

### 在命令行中使用 cURL

{% note %}

注意：如果要从命令行发出 API 请求，{% data variables.product.prodname_dotcom %} 建议使用 {% data variables.product.prodname_cli %}，这可简化身份验证和请求。 有关通过 {% data variables.product.prodname_cli %} 开始使用 REST API 的详细信息，请参阅本文的 {% data variables.product.prodname_cli %} 版本。

{% endnote %}

1. 如果计算机上尚未安装 cURL，请安装 cURL。 若要检查是否安装了 cURL，请在命令行中执行 `curl --version`。 如果输出是有关 cURL 版本的信息，则 cURL 已安装。 如果收到类似于 `command not found: curl` 的消息，则需要下载并安装 cURL。 有关详细信息，请参阅 [cURL 项目下载页面](https://curl.se/download.html)。
1. 创建访问令牌。 例如，创建 {% data variables.product.pat_generic %} 或 {% data variables.product.prodname_github_app %} 用户到服务器访问令牌。 有关详细信息，请参阅“[创建 {% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”或“[识别和授权 GitHub 应用的用户](/developers/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps)”。

   {% warning %}

   警告：将访问令牌视为密码。

   {%- ifversion fpt or ghec %}

   若要确保令牌安全，可以将令牌存储为 {% data variables.product.prodname_codespaces %} 机密，并通过 {% data variables.product.prodname_codespaces %} 使用命令行。 有关详细信息，请参阅“[管理 codespace 的加密机密](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)。”{% endif %}

   还可以使用 {% data variables.product.prodname_cli %}，而不是 cURL。 {% data variables.product.prodname_cli %} 会为你处理身份验证。 有关详细信息，请参阅此页面的 {% data variables.product.prodname_cli %} 版本。

   如果无法使用这些选项，请考虑使用其他服务（如 [1Password CLI](https://developer.1password.com/docs/cli/secret-references/)）安全地存储令牌。

   {% endwarning %}

1. 使用 `cURL` 命令发出请求。 在 `Authorization` 标头中传递令牌。 将 `YOUR-TOKEN` 替换为你的令牌。

   ```shell
   curl --request GET \
   --url "https://api.github.com/repos/octocat/Spoon-Knife/issues" \
   --header "Accept: application/vnd.github+json" \
   --header "Authorization: Bearer YOUR-TOKEN"
   ```

   {% note %}

   注意：{% data reusables.getting-started.bearer-vs-token %}

   {% endnote %}

### 在 {% data variables.product.prodname_actions %} 中使用 cURL

还可以在 {% data variables.product.prodname_actions %} 工作流中使用 cURL。

{% data variables.product.prodname_dotcom %} 建议使用内置 `GITHUB_TOKEN`，而不是创建令牌。 如果无法执行此操作，请将令牌存储为机密，并将以下示例中的 `GITHUB_TOKEN` 替换为机密的名称。 有关 `GITHUB_TOKEN` 的详细信息，请参阅“[自动令牌身份验证](/actions/security-guides/automatic-token-authentication)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。

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

如果使用 {% data variables.product.prodname_github_app %} 进行身份验证，则可以在工作流中创建安装访问令牌：

1. 将 {% data variables.product.prodname_github_app %} 的 ID 作为机密进行存储。 在以下示例中，将 `APP_ID` 替换为机密的名称。 您可以在应用的设置页面上或通过应用 API 找到应用 ID。 有关详细信息，请参阅“[应用](/rest/apps/apps#get-an-app)”。 有关机密的详细信息，请参阅“[已加密的机密](/actions/security-guides/encrypted-secrets)”。
1. 为应用生成私钥。 将所生成文件的内容作为机密进行存储。 （存储文件的全部内容，包括 `-----BEGIN RSA PRIVATE KEY-----` 和 `-----END RSA PRIVATE KEY-----`。）在以下示例中，将 `APP_PEM` 替换为机密的名称。 有关详细信息，请参阅“[使用 {% data variables.product.prodname_github_apps %} 进行身份验证](/developers/apps/building-github-apps/authenticating-with-github-apps#generating-a-private-key)”。
1. 添加用于生成令牌的步骤，并使用该令牌而不是 `GITHUB_TOKEN`。 请注意，此令牌会在 60 分钟后过期。 例如：

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

## 后续步骤

有关更详细的指南，请参阅“[REST API 入门](/rest/guides/getting-started-with-the-rest-api)”。
