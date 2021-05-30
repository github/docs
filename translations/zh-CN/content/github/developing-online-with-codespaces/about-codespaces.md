---
title: 关于 Codespaces
intro: '{% data variables.product.prodname_codespaces %} 是一个在线开发环境，由 {% data variables.product.prodname_dotcom %} 托管并由 {% data variables.product.prodname_vscode %} 支持，允许您完全在云端开发。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% note %}

**注：**{% data variables.product.prodname_codespaces %} 目前是有限公测版，可能会有变动。 在公测期间，{% data variables.product.prodname_dotcom %} 不对 {% data variables.product.prodname_codespaces %} 的可用性做任何保证。 有关加入公测的更多信息，请参阅“[加入公测](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)”。

{% endnote %}

### 关于 {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} 是适用于浏览器的云开发环境。 代码空间包括为特定仓库开发所需的一切，其中包括具有语法突出显示和自动完成功能的文本编辑器、终端、调试工具和 Git 命令，所有这些都集成在 {% data variables.product.prodname_dotcom %} 中。 您也可以在代码空间中安装 {% data variables.product.prodname_vscode %} 扩展以添加更多功能。

{% data variables.product.prodname_codespaces %} 使开发人员更容易加入新公司或开始为开源项目做出贡献。 项目维护员可以配置仓库，以便在为仓库创建代码空间时自动包含项目的依赖项。 减少配置环境所用的时间，可以更快地开始编码。

{% data variables.product.prodname_codespaces %} 允许您在云端开发，而不是本地开发。 开发者可以随时随地任何机器（包括平板电脑或 Chromebooks）上参与项目开发，无需维护知识产权的本地副本。

![开放的代码空间](/assets/images/help/codespaces/codespace-overview.png)

### 使用 {% data variables.product.prodname_codespaces %}

每个开发者都可以为任何公共仓库或其用户帐户拥有的任何私有仓库创建一个或多个代码空间。 {% data reusables.codespaces.unsupported-repos %} {% data reusables.codespaces.codespaces-are-personal %}

{% data reusables.codespaces.codespaces-are-per-branch %} {% data reusables.codespaces.concurrent-codespace-limit %} 更多信息请参阅“[删除代码空间](/github/developing-online-with-codespaces/deleting-a-codespace)”。

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.about-configuration %} 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

{% data reusables.codespaces.about-personalization %} 更多信息请参阅“[个性化您帐户的 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)”。

您可以配置设置以添加加密密码、启用 GPG 验证以及允许代码空间访问其他仓库。 更多信息请参阅“[管理 {% data variables.product.prodname_codespaces %} 的加密密码](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”、“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”以及“[管理 {% data variables.product.prodname_codespaces %} 的访问权限和设置](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces)”。

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.beta-functionality-limited %}

### 关于 {% data variables.product.prodname_codespaces %} 的计费

{% data reusables.codespaces.about-billing-for-codespaces %} 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %} 的计费](/github/developing-online-with-codespaces/about-billing-for-codespaces)”。

### 加入公测

将邀请有限数量的人加入公测。 要加入等待列表，请参阅[注册代码空间测试版](https://github.com/features/codespaces/signup)。

### 就 {% data variables.product.prodname_codespaces %} 联系我们

如果在使用 {% data variables.product.prodname_codespaces %} 时遇到问题，请参阅“[代码空间故障排除](/github/developing-online-with-codespaces/troubleshooting-your-codespace)”。

如果您仍需帮助或对 {% data variables.product.prodname_codespaces %} 有反馈，请使用 [Codespaces 反馈](https://github.com/github/feedback/discussions/categories/codespaces-feedback)。
