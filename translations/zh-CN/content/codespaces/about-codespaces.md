---
title: 关于 Codespaces
intro: '{% data variables.product.prodname_codespaces %} 是一个可配置的在线开发环境，由 {% data variables.product.prodname_dotcom %} 托管并由 {% data variables.product.prodname_vscode %} 支持，允许您完全在云端开发。'
redirect_from:
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
versions:
  free-pro-team: '*'
type: overview
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### 关于 {% data variables.product.prodname_codespaces %}

{% data variables.product.prodname_codespaces %} 是一个可配置的云开发环境，在 {% data variables.product.prodname_dotcom %} 上的浏览器或通过 {% data variables.product.prodname_vscode %} 提供。

![开放的代码空间](/assets/images/help/codespaces/codespace-overview.png)

代码空间包括开发者为特定仓库进行开发所需的一切，包括 {% data variables.product.prodname_vscode %} 编辑体验和常见的语言、工具和实用程序。 {% data variables.product.prodname_codespaces %} 是完全可配置的，允许您为项目创建自定义开发环境，并允许开发者通过扩展和 dotfile 设置个性化他们的体验。

通过在整个团队中提供一致的环境、快速启动和创建安全的开发空间，代码空间可为团队提供许多好处。

### 一致的环境

您可以创建单个代码空间配置，以定义任何人为仓库创建的每个新代码空间的环境（或_开发容器_）。 一旦您完成了配置，开发者就不必担心安装合适的工具进行评论、审查或贡献。 一旦他们从仓库创建代码空间，就已经为他们提供了标准化的环境。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project)”。

有关特定语言配置入门的帮助，请参阅[入门](/codespaces/getting-started-with-codespaces)教程。

虽然从仓库创建的每个代码空间都有一致的开发环境，但开发者可以在需要时在 {% data variables.product.prodname_dotcom %} 上或通过 {% data variables.product.prodname_vscode %} 使用 {% data variables.product.prodname_codespaces %}。

### 快速和个性化启动

在您的仓库中配置[开发容器](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#about-dev-containers)后，任何新开发者都可以通过使用 {% octicon "download" aria-label="The download icon" %} **Code（代码）**下拉菜单并选择 **Open with Codespaces（使用代码空间打开）**，快速为项目启动正确的开发环境。

![使用 Codespaces 打开按钮](/assets/images/help/codespaces/open-with-codespaces-button.png)

由于标准化了可重复的开发者环境，开发者可以在不做任何手动配置的情况下开始使用新的代码空间，并且不需要继续维护其开发者环境。 启动新功能时可以创建新的代码空间。

开发者也可以通过使用 [dotfiles](https://dotfiles.github.io/tutorials/) 仓库和 [Settings Sync（设置同步）](https://code.visualstudio.com/docs/editor/settings-sync)来个性化其代码空间环境的各个方面。 个性化可以包括 shell 首选项、其他工具、编辑器设置和扩展，例如 Live Share。 个性化定制是按用户存储的，因此开发者打开的每个代码空间都有即时可用的环境。 更多信息请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account)”。

因为可以在浏览器中访问 {% data variables.product.prodname_codespaces %}，所以开发者可以通过在选项卡之间切换来处理多个项目。

### 安全的环境

{% data variables.product.prodname_codespaces %} 允许开发者在云端开发，而不是本地开发。 这将创造单一、可跟踪的真相来源。 开发者可以随时随地任何机器（包括平板电脑或 Chromebooks）上参与项目开发，无需维护知识产权的本地副本。 开发人员必须始终登录并有权访问 {% data variables.product.prodname_codespaces %} 和特定仓库。 这些权限可以随时撤销。 只要您撤销访问权限，这些开发者就会失去对受保护资源的所有访问权限。 此外，经过验证的开发者创建审核跟踪，以便您知道谁在做什么。 有关访问和安全的更多信息，请参阅“[管理您组织的代码空间的访问和安全](/codespaces/managing-codespaces-for-your-organization/managing-access-and-security-for-your-organizations-codespaces)”。

当团队的所有成员都使用它时，使用 {% data variables.product.prodname_codespaces %} 是最安全的。 这意味着没有必要将仓库克隆到本地机器上，开发者也不需要本地安装为 `root`。

开发者和组织管理员还可以配置设置以添加加密密码并启用 GPG 验证。 更多信息请参阅“[管理 {% data variables.product.prodname_codespaces %} 的加密密码](/github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces)”、“[管理 {% data variables.product.prodname_codespaces %} 的 GPG 验证](/github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces)”。

### 关于 {% data variables.product.prodname_codespaces %} 的计费

{% data reusables.codespaces.about-billing-for-codespaces %} 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %} 的计费](/github/developing-online-with-codespaces/about-billing-for-codespaces)”。

### 加入公测

将邀请有限数量的人加入公测。 要加入等待列表，请参阅[注册代码空间测试版](https://github.com/features/codespaces/signup)。

### 就 {% data variables.product.prodname_codespaces %} 联系我们

如果在使用 {% data variables.product.prodname_codespaces %} 时遇到问题，请参阅“[代码空间故障排除](/github/developing-online-with-codespaces/troubleshooting-your-codespace)”。

如果您仍需帮助或对 {% data variables.product.prodname_codespaces %} 有反馈，请使用 [Codespaces 反馈](https://github.com/github/feedback/discussions/categories/codespaces-feedback)。
