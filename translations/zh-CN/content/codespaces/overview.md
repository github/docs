---
title: GitHub Codespaces 概述
shortTitle: 概览
product: '{% data reusables.gated-features.codespaces %}'
intro: '本指南介绍了 {% data variables.product.prodname_codespaces %} ，并详细介绍了它的工作原理和使用方法。'
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
---

## 什么是代码空间？

代码空间是托管在云中的开发环境。 您可以通过将[配置文件](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project)提交到存储库（通常称为“配置即代码”）来自定义 {% data variables.product.prodname_codespaces %} 的项目，这将为项目的所有用户创建可重复的代码空间配置。

{% data variables.product.prodname_codespaces %} 在 {% data variables.product.product_location %}托管的各种基于 VM 的计算选项上运行，您最少可以配置 2 台核心计算机，最多可以配置 32 台。 您可以从浏览器或使用 {% data variables.product.prodname_vscode %} 本地连接到代码空间。

![显示 {% data variables.product.prodname_codespaces %} 工作原理的图表](/assets/images/help/codespaces/codespaces-diagram.png)

## 使用 Codespaces

您可以从存储库中的任何分支或提交创建代码空间，并使用基于云的计算资源开始开发。 {% data reusables.codespaces.links-to-get-started %}

要自定义代码空间中的运行时和工具，可以创建自定义配置来定义特定于存储库的环境（或_开发容器_）。 使用开发容器，可以使用定义明确的工具和运行时堆栈指定 Docker 环境进行开发，这些工具和运行时堆栈可以引用映像、Dockerfile 或 docker-compose。 这意味着使用存储库的任何人在创建代码空间时都将拥有相同的工具。

如果不执行任何自定义配置，{% data variables.product.prodname_codespaces %} 会将存储库克隆到具有默认代码空间映像的环境中，该映像包含许多工具、语言和运行时环境。 更多信息请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。

您还可以通过使用公共 [dotfiles](https://dotfiles.github.io/tutorials/) 存储库和[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)来个性化代码空间环境的各个方面。 个性化设置可以包括 shell 首选项、其他工具、编辑器设置和 VS Code 扩展。 更多信息请参阅“[自定义代码空间](/codespaces/customizing-your-codespace)”。

## 关于 {% data variables.product.prodname_codespaces %} 的计费

有关 {% data variables.product.prodname_codespaces %} 的定价、存储和使用情况的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的计费](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)”。

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 有关组织所有者和帐单管理员如何管理组织的 {% data variables.product.prodname_codespaces %} 支出限制的信息，请参阅“[管理 {% data variables.product.prodname_codespaces %} 的支出限制](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)”。
