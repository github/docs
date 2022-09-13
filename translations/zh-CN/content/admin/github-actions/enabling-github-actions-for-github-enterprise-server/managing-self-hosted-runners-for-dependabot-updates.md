---
title: 管理企业中 Dependabot 更新的自托管运行器
intro: '可以为 {% data variables.product.product_location %} 创建专用运行器，{% data variables.product.prodname_dependabot %} 使用它来创建拉取请求，以帮助保护和维护企业存储库中使用的依赖项。'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 68fa6772ea2312f3cc0440d76808ee6816eead8e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146681067'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## 关于 {% data variables.product.prodname_dependabot_updates %} 的自托管运行器

可以通过设置 {% data variables.product.prodname_dependabot %} 安全性和版本更新来帮助 {% data variables.product.product_location %} 的用户创建和维护安全代码。 借助 {% data variables.product.prodname_dependabot_updates %}，开发人员可以配置存储库，以便其依赖项自动更新并保持安全性。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。

要在 {% data variables.product.product_location %} 上使用 {% data variables.product.prodname_dependabot_updates %}，必须配置自托管运行器来创建将更新依赖项的拉取请求。

## 先决条件

{% ifversion dependabot-updates-github-connect %} 配置自托管运行器只是启用 {% data variables.product.prodname_dependabot_updates %} 过程中的一个步骤。 在这些步骤之前必须先执行几个步骤，包括配置 {% data variables.product.product_location %} 以将 {% data variables.product.prodname_actions %} 与自托管运行器配合使用。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
{% else %} 在为 {% data variables.product.prodname_dependabot_updates %} 配置自托管运行器之前，必须：

- 配置 {% data variables.product.product_location %} 以将 {% data variables.product.prodname_actions %} 与自托管运行器配合使用。 有关详细信息，请参阅“[适用于 GitHub Enterprise Server 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”。
- 为企业启用 {% data variables.product.prodname_dependabot_alerts %}。 有关详细信息，请参阅“[为企业启用 {% data variables.product.prodname_dependabot %}](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”。
{% endif %}

## 为 {% data variables.product.prodname_dependabot_updates %} 配置自托管运行器

将 {% data variables.product.product_location %} 配置为使用 {% data variables.product.prodname_actions %} 后，需要为 {% data variables.product.prodname_dependabot_updates %} 添加自托管运行器。

### {% data variables.product.prodname_dependabot %} 运行器的系统要求

用于 {% data variables.product.prodname_dependabot %} 运行器的任何 VM 都必须满足自托管运行器的要求。 此外，它们还必须满足以下要求。

- Linux 操作系统{% ifversion ghes < 3.5 %}
- 已安装 Git{% endif %}
- 安装有运行器用户访问权限的 Docker：
  - 建议在无根模式下安装 Docker，并将运行器配置为在没有 `root` 特权的情况下访问 Docker。
  - 或者，安装 Docker 并授予运行器用户提升的权限来运行 Docker。

CPU 和内存要求将取决于在给定 VM 上部署的并发运行器的数量。 作为指导，我们已在一台 2 CPU 8GB 的计算机上成功设置了 20 个运行器，但最终，CPU 和内存要求将在很大程度上取决于正在更新的存储库。 某些生态系统需要比其他生态系统更多的资源。

如果在 VM 上指定了 14 个以上的并发运行器，则还必须更新 Docker `/etc/docker/daemon.json` 配置，以增加 Docker 可以创建的默认网络数。

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### {% data variables.product.prodname_dependabot %} 运行器的网络要求

{% data variables.product.prodname_dependabot %} 运行器需要访问公共 Internet、{% data variables.product.prodname_dotcom_the_website %} 以及将在 {% data variables.product.prodname_dependabot %} 更新中使用的任何内部注册表。 为了最大程度地降低内部网络的风险，应该限制虚拟机 (VM) 对内部网络的访问。 如果运行器下载了一个被劫持的依赖项，这将减少内部系统损坏的可能性。

### 为 {% data variables.product.prodname_dependabot %} 添加自托管运行器

1. 在存储库、组织或企业帐户级别预配自托管运行器。 有关自托管运行器的信息，请参阅“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”和“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。

2. 按照上述要求设置自托管运行器。 例如，在运行 Ubuntu 20.04 的 VM 上，你可以：{% ifversion ghes < 3.5 %}

   - 验证是否已安装 Git：`command -v git`{% endif %}
   - 安装 Docker 并确保运行器用户有权访问 Docker。 有关详细信息，请参阅 Docker 文档。
     - [在 Ubuntu 上安装 Docker 引擎](https://docs.docker.com/engine/install/ubuntu/)
     - 建议方法：[以非根用户身份运行 Docker 守护程序（无根模式）](https://docs.docker.com/engine/security/rootless/)
     - 替代方法：[以非根用户身份管理 Docker](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - 验证运行器是否有权访问公共 Internet，并且只能访问 {% data variables.product.prodname_dependabot %} 所需的内部网络。

3. 将 `dependabot` 标签分配给希望 {% data variables.product.prodname_dependabot %} 使用的每个运行器。 有关详细信息，请参阅“[将标签与自托管运行器配合使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)”。

4. （可选）允许 {% data variables.product.prodname_dependabot %} 触发的工作流使用只读权限以外的权限，并有权访问通常可用的任何机密。 有关详细信息，请参阅[排查企业 {% data variables.product.prodname_actions %} 问题](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)。
