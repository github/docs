---
title: 使用对 GitHub Codespaces 的支持
intro: '有关从 {% data variables.product.prodname_github_codespaces %} 的支持中获得最佳帮助的提示。'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159434'
---
在支持人员帮助你解决 codespace 问题之前，你需要知道 codespace 的永久名称及其 codespace ID（标识符）。 此外，支持人员可能会要求您与他们共享一些日志。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”和“[关于 GitHub 支持](/github/working-with-github-support/about-github-support)”。

## 代码空间名称

每个 codespace 都有一个唯一的名称，该名称是 {% data variables.product.company_short %} 句柄、两三个自动生成的单词和一些随机字符的组合。 例如：`octocat-literate-space-parakeet-mld5`。 两个或三个自动生成的单词也构成了 codespace 的初始显示名称，在本例中为 `literate-space-parakeet`。 可以更改 codespace 的显示名称，但这不会影响永久名称。 有关详细信息，请参阅“[重命名 codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)”。

要查找代码空间的名称：

- 在浏览器中打开代码空间。 URL 的子域是代码空间的名称。 例如：`https://octocat-literate-space-parakeet-mld5.github.dev` 是 `octocat-literate-space-parakeet-mld5` codespace 的 URL。
- 如果无法打开 codespace，可以在 https://github.com/codespaces 上访问 {% data variables.product.product_name %} 中的名称。 将鼠标悬停在 https://github.com/codespaces 上的 codespace 的显示名称上时，该名称将在弹出项中显示。 
  ![将鼠标悬停在上方时显示的 codespace 名称](/assets/images/help/codespaces/find-codespace-name-github.png)

代码空间的名称也包含在许多日志文件中。 例如，在 codespace 日志中是作为 `friendlyName` 的值；在 {% data variables.product.prodname_github_codespaces %} 扩展日志中，是位于 `making GET request for` 之后；在浏览器控制台日志中，是位于 `clientUrl` 之后。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs)”。

## 代码空间 ID

每个代码空间还有一个 ID（标识符）。 默认情况下，这在 {% data variables.product.prodname_vscode %} 中不显示，因此您可能需要先更新 {% data variables.product.prodname_github_codespaces %} 扩展的设置，然后才能访问该 ID。

1. 在 {% data variables.product.prodname_vscode %}、浏览器或桌面中的左侧活动栏中，单击“远程资源管理器”以显示 codespace 的详细信息。
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. 如果侧边栏包含“Codespace Performance（代码空间性能）”部分，请将鼠标悬停在“Codespace ID（代码空间 ID）”上，然后单击剪贴板图标以复制 ID。
1. 如果未显示信息，请单击活动栏左下角的 {% octicon "gear" aria-label="The gear icon" %} 以显示“Settings（设置）”选项卡。
1. 展开“扩展”，然后单击“{% data variables.product.prodname_github_codespaces %}”以显示扩展的设置 。 然后启用“显示性能资源管理器”，在边栏中显示“codespace 性能”部分。
  ![显示性能信息所需的 codespace ID 和设置](/assets/images/help/codespaces/find-codespace-id.png)
