---
title: GitHub Codespaces 概述
shortTitle: Overview
product: '{% data reusables.gated-features.codespaces %}'
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
ms.openlocfilehash: ea92784b32d63e5f5d9268a1077009ea7bf8b382
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147111216'
---
## 什么是代码空间？

代码空间是托管在云中的开发环境。 可通过将[配置文件](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)提交到存储库（通常称为“配置即代码”）来为 {% data variables.product.prodname_github_codespaces %} 自定义项目，这将为项目的所有用户创建可重复的 codespace 配置。

{% data variables.product.prodname_github_codespaces %} 在 {% data variables.product.product_location %} 托管的各种基于 VM 的计算选项上运行，你最少可以配置 2 台核心计算机，最多可以配置 32 台核心计算机。 您可以从浏览器或使用 {% data variables.product.prodname_vscode %} 本地连接到代码空间。

![显示 {% data variables.product.prodname_codespaces %} 工作原理的图表](/assets/images/help/codespaces/codespaces-diagram.png)

## 使用 {% data variables.product.prodname_github_codespaces %}

您可以从存储库中的任何分支或提交创建代码空间，并使用基于云的计算资源开始开发。 {% data reusables.codespaces.links-to-get-started %}

若要自定义 codespace 中的运行时和工具，可以为存储库创建一个或多个开发容器配置。 将开发容器配置添加到存储库后，可以定义适合用户将在存储库中执行的工作的不同开发环境选择。 

如果不添加开发容器配置，{% data variables.product.prodname_github_codespaces %} 会将存储库克隆到具有默认 codespace 映像的环境中，该映像包含许多工具、语言和运行时环境。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。

还可通过使用公共[点文件](https://dotfiles.github.io/tutorials/)存储库和[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)来对 codespace 环境的各个方面进行个性化设置。个性化设置可以包括 shell 首选项、其他工具、编辑器设置和 {% data variables.product.prodname_vscode_shortname %} 扩展。 有关详细信息，请参阅“[自定义代码空间](/codespaces/customizing-your-codespace)”。

## 关于 {% data variables.product.prodname_codespaces %} 的计费

有关 {% data variables.product.prodname_codespaces %} 的定价、存储和使用情况的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”。

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 有关组织所有者和计费管理员如何管理组织的 {% data variables.product.prodname_codespaces %} 的支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
