---
title: 更新 OSX 密钥链中的凭据
intro: '如果在 {% data variables.product.product_name %} 上更改你的{% ifversion not ghae %}用户名、密码或{% endif %} 个人访问令牌，你需要在 `git-credential-osxkeychain` 帮助程序中更新保存的凭据。'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128979'
---
{% tip %}

**注意：** 从 macOS 密钥链更新凭据仅适用于使用内置到 macOS 的  `osxkeychain` 帮助程序手动配置 PAT 的用户。 

建议改为[配置 SSH](/articles/generating-an-ssh-key) 或升级到 [Git 凭据管理器](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM)。 GCM 可以代表您管理身份验证（不再需要手动 PAT），包括 2FA（双重身份验证）。

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## 通过 Keychain Access 更新凭据

1. 单击菜单栏右侧的 Spotlight 图标（放大镜）。 键入 `Keychain access`，然后按 Enter 键启动应用。
   ![Spotlight 搜索栏](/assets/images/help/setup/keychain-access.png)
2. 在密钥链访问中，搜索 {% data variables.command_line.backticks %}。
3. 查找 `{% data variables.command_line.backticks %}` 的“Internet 密码”条目。
4. 相应地编辑或删除该条目。

## 通过命令行删除凭据

通过命令行，您可以使用凭据小助手直接擦除密钥链条目。

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

如果成功，则不会打印出任何内容。若要测试它是否正常工作，请尝试从 {% data variables.product.product_location %} 克隆专用存储库。 如果提示您输入密码，则该密钥链条目已删除。

## 延伸阅读

- [在 Git 中缓存 {% data variables.product.prodname_dotcom %} 凭据](/github/getting-started-with-github/caching-your-github-credentials-in-git/)
