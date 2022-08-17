---
title: 为代码空间计算机设置最低规范
shortTitle: 设置最低计算机规范
intro: '您可以避免资源不足的计算机类型用于存储库的 {% data variables.product.prodname_github_codespaces %}。'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
product: '{% data reusables.gated-features.codespaces %}'
---

## 概览

您创建的每个代码空间都托管在单独的虚拟机上，您通常可以从不同类型的虚拟机中进行选择。 每种计算机类型都有不同的资源（CPU、内存、存储），默认情况下，使用资源最少的计算机类型。 更多信息请参阅“[更改代码空间的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”。

如果项目需要一定程度的计算能力，则可以配置 {% data variables.product.prodname_github_codespaces %} 以便默认情况下只能使用满足这些要求的计算机类型，或者由用户选择。 您可以在 `devcontainer.json` 文件中配置此内容。

{% note %}

**重要提示：**在组织级别可能会限制对某些计算机类型的访问。 通常，这样做是为了防止人们选择以较高费率计费的资源较高的计算机。 如果您的存储库受到组织级计算机类型策略的影响，则应确保不要设置最低规范，因为该规范不会留下任何可用的计算机类型供人们选择。 更多信息请参阅“[限制对机器类型的访问](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)”。

{% endnote %}

## 设置最低计算机规范

1. 存储库的 {% data variables.product.prodname_github_codespaces %} 在 `devcontainer.json` 文件中配置。 如果您的存储库尚未包含 `devcontainer.json` 文件，请立即添加一个。 请参阅“[将开发容器配置添加到存储库](/free-pro-team@latest/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)”。
1. 编辑 `devcontainer.json` 文件，添加 `hostRequirements` 属性，如下所示：

   ```json{:copy}
   "hostRequirements": {
      "cpus": 8,
      "memory": "8gb",
      "storage": "32gb" 
   }
   ```

   您可以指定任意或所有选项：`cpus`、`memory` 和 `storage`。

   要检查当前可用于存储库的 {% data variables.product.prodname_github_codespaces %} 计算机类型的规范，请逐步完成创建代码空间的过程，直到看到选择的计算机类型。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)”。

1. 保存文件并将更改提交到存储库的所需分支。

   现在，当您为存储库的该分支创建代码空间并转到创建配置选项时，只能选择与指定资源匹配或超过指定资源的计算机类型。

   ![显示有限计算机类型选择的对话框](/assets/images/help/codespaces/machine-types-limited-choice.png)

## 延伸阅读

- "[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)"
