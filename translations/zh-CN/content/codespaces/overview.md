---
title: GitHub Codespaces 概述
shortTitle: Overview
intro: '本指南介绍了 {% data variables.product.prodname_github_codespaces %}，并详细介绍了它的工作原理和使用方法。'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164321'
---
## 什么是代码空间？

代码空间是托管在云中的开发环境。 可通过将[配置文件](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)提交到存储库（通常称为“配置即代码”）来为 {% data variables.product.prodname_github_codespaces %} 自定义项目，这将为项目的所有用户创建可重复的 codespace 配置。

每个 codespace 都在由 {% data variables.product.prodname_dotcom %} 托管的虚拟机上运行。 可以根据需要的资源选择要使用的计算机类型。 有各种类型的计算机可供选择，从 2 核处理器、4 GB RAM 和 32 GB 存储开始。 

可以从浏览器、{% data variables.product.prodname_vscode %}、JetBrains Gateway 应用程序或使用 {% data variables.product.prodname_cli %} 连接到 codespaces。

![显示 {% data variables.product.prodname_github_codespaces %} 工作原理的示意图](/assets/images/help/codespaces/codespaces-diagram.png)

## 使用 {% data variables.product.prodname_github_codespaces %}

要开始使用基于云的计算资源进行开发，可以通过模板或存储库中的任何分支或提交创建 codespace。 通过模板创建 codespace 时，可以从空白模板开始，也可以选择适合你正在做的工作的模板。

{% data reusables.codespaces.links-to-get-started %}

### 使用个人帐户拥有的 codespaces

所有个人 {% data variables.product.prodname_dotcom_the_website %} 帐户都有免费或专业版计划中包含的 {% data variables.product.prodname_github_codespaces %} 的每月免费使用配额。 无需更改任何设置或提供付款详细信息，即可在个人帐户上开始使用 {% data variables.product.prodname_github_codespaces %}。

可为可以克隆的任何存储库创建和使用 codespace。 还可以使用模板来创建最初不与存储库关联的 codespaces。 如果通过组织拥有的存储库创建 codespace，则 codespace 的使用按照组织（如果组织对此进行了配置）或个人帐户进行计费。 通过模板创建的 codespaces 始终按照个人帐户进行计费。 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### 使用组织拥有的 codespaces

组织所有者可以启用 {% data variables.product.prodname_github_codespaces %}，后者可按照组织或企业帐户计费。 这适用于通过组织拥有的存储库创建的 codespaces。 有关详细信息，请参阅“[为组织启用 {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”。 可以对组织或企业帐户上的 {% data variables.product.prodname_github_codespaces %} 使用设置支出限制。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”。

如果按照组织或企业对 codespace 的使用进行计费，则会在创建 codespace 时显示。 有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)”。 按照组织或其父企业计费的 codespace 归组织所有，且可被组织所有者删除。 有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)”。 

### 自定义 {% data variables.product.prodname_github_codespaces %}

若要自定义 codespace 中的运行时和工具，可以为存储库创建一个或多个开发容器配置。 将开发容器配置添加到存储库后，可以定义适合用户将在存储库中执行的工作的不同开发环境选择。 

如果通过没有任何开发容器配置的存储库创建 codespace，{% data variables.product.prodname_github_codespaces %} 会将存储库克隆到具有默认 codespace 映像的环境中，该映像包含许多工具、语言和运行时环境。 如果通过模板创建 codespace，则可以从默认映像之上的一些初始配置开始。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

可使用公共[点文件](https://dotfiles.github.io/tutorials/)存储库对 codespace 环境的各个方面进行个性化设置。 可使用点文件设置 shell 别名和首选项，也可安装喜欢使用的工具的个人首选项。 如果在浏览器或 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %}，则可以使用[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)为 codespace 编辑器提供在本地安装 {% data variables.product.prodname_vscode %} 中设置的相同设置、键盘快捷方式、片段和扩展。 

有关详细信息，请参阅“[自定义代码空间](/codespaces/customizing-your-codespace)”。

## {% data variables.product.prodname_codespaces %} 的计费

有关 {% data variables.product.prodname_github_codespaces %} 的定价、存储和使用情况的信息，请参阅“[有关 {% data variables.product.prodname_github_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”。

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} 有关组织所有者和计费管理员如何管理组织的 {% data variables.product.prodname_github_codespaces %} 的支出限制的信息，请参阅“[管理 {% data variables.product.prodname_github_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)”。
