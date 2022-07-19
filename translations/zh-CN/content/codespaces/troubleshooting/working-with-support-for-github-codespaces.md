---
title: 使用对 GitHub Codespaces 的支持
intro: '有关从 {% data variables.product.prodname_github_codespaces %} 的支持中获得最佳帮助的提示。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: 使用支持
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
---

在支持人员帮助您解决代码空间问题之前，您需要知道代码空间的名称及其代码空间 ID（标识符）。 此外，支持人员可能会要求您与他们共享一些日志。 更多信息请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”和“[关于 GitHub 支持](/github/working-with-github-support/about-github-support)”。

### 代码空间名称

每个代码空间都有一个唯一的名称，该名称是 {% data variables.product.company_short %} 句柄、存储库名称和一些随机字符的组合。 附加字符允许您为同一存储库中的不同分支提供代码空间。 例如： `octocat-myrepo-gmc7`。

要查找代码空间的名称：

- 在浏览器中打开代码空间。 URL 的子域是代码空间的名称。 例如： `https://octocat-myrepo-gmc7.github.dev` 是 `octocat-myrepo-gmc7` 代码空间的 URL。
- 如果无法打开代码空间，则可以在 https://github.com/codespaces 上访问 {% data variables.product.product_name %} 中的名称。 当您将鼠标悬停在 https://github.com/codespaces 上的 **Open in browser（在浏览器中打开）**选项上时，该名称将显示在弹出窗口中。 ![将鼠标悬停在上方时显示的代码空间名称](/assets/images/help/codespaces/find-codespace-name-github.png)

代码空间的名称也包含在许多日志文件中。 例如，在代码空间日志中作为 `friendlyName` 的值，在 `发出 GET 请求`后的 {% data variables.product.prodname_github_codespaces %} 扩展日志中，以及在 `clientUrl` 之后的浏览器控制台日志中。 更多信息请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”。

### 代码空间 ID

每个代码空间还有一个 ID（标识符）。 默认情况下，这在 {% data variables.product.prodname_vscode %} 中不显示，因此您可能需要先更新 {% data variables.product.prodname_github_codespaces %} 扩展的设置，然后才能访问该 ID。

1. 在 {% data variables.product.prodname_vscode %}、浏览器或桌面中的左侧活动栏中，单击 **Remote Explorer（远程资源管理器）**以显示代码空间的详细信息。
2. 如果侧边栏包含“Codespace Performance（代码空间性能）”部分，请将鼠标悬停在“Codespace ID（代码空间 ID）”上，然后单击剪贴板图标以复制 ID。
3. 如果未显示信息，请单击活动栏左下角的 {% octicon "gear" aria-label="The gear icon" %} 以显示“Settings（设置）”选项卡。
4. 展开 **Extensions（扩展）**，然后单击 **{% data variables.product.prodname_github_codespaces %}** 以显示扩展的设置。 然后启用 **Show Performance Explorer（显示性能资源管理器）**在边栏中显示“Codespace Performance（代码空间性能）”部分。 ![显示性能信息所需的代码空间 ID 和设置](/assets/images/help/codespaces/find-codespace-id.png)
