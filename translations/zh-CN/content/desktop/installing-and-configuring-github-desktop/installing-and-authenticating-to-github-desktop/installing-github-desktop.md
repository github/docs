---
title: 安装 GitHub Desktop
shortTitle: Installation
intro: 您可以在受支持的 Windows 或 macOS 操作系统上安装 GitHub Desktop。
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882777'
---
## 关于 {% data variables.product.prodname_desktop %} 安装

您可以在当前包含 {% data variables.desktop.mac-osx-versions %} 和 {% data variables.desktop.windows-versions %} 的支持操作系统上安装 {% data variables.product.prodname_desktop %}。 如果您在 {% data variables.product.prodname_dotcom %} 或 {% data variables.product.prodname_enterprise %}上有帐户，您可以将帐户连接到 {% data variables.product.prodname_desktop %}。 有关创建帐户的更多信息，请参阅“[注册新 {% data variables.product.prodname_dotcom %} 帐户](/articles/signing-up-for-a-new-github-account/)”或联系 {% data variables.product.prodname_enterprise %} 站点管理员。

{% windows %}

如果你是网络管理员，可以使用 Windows Installer 包文件 (`.msi`) 与组策略或其他远程安装系统一起将 {% data variables.product.prodname_desktop %} 部署到在 Active Directory 管理的网络上运行 Windows 的计算机。

当用户下次登录其工作站时，Windows Installer 包将解压缩独立的安装程序 (`.exe`) 并配置 Windows 安装 {% data variables.product.prodname_desktop %}。 用户必须具有在其用户目录中安装 {% data variables.product.prodname_desktop %} 的权限。

如果用户直接运行 {% data variables.product.prodname_desktop %} 的 Windows 安装程序包，要完成安装，用户必须注销其工作站，然后重新登录。

{% endwindows %}

## 下载并安装 {% data variables.product.prodname_desktop %}

{% mac %}

您可以在 {% data variables.desktop.mac-osx-versions %} 上安装 {% data variables.product.prodname_desktop %}。

{% data reusables.desktop.download-desktop-page %}
2. 单击“下载 macOS 版”。
  ![“下载 macOS 版”按钮](/assets/images/help/desktop/download-for-mac.png)
3. 在计算机的 `Downloads` 文件夹中，双击 {% data variables.product.prodname_desktop %} zip 文件。
  ![GitHubDesktop.zip 文件](/assets/images/help/desktop/mac-zipfile.png)
4. 在文件解压缩之后，双击 {% data variables.product.prodname_desktop %}。
5. {% data variables.product.prodname_desktop %} 将在安装完成后启动。

{% endmac %}

{% windows %}

您可以在 {% data variables.desktop.windows-versions %} 上安装 {% data variables.product.prodname_desktop %}。

{% warning %}

警告：必须有 64 位操作系统才可运行 {% data variables.product.prodname_desktop %}。

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. 单击“下载 Windows 版”。
  ![“下载 Windows 版”按钮](/assets/images/help/desktop/download-for-windows.png)
3. 在计算机的 `Downloads` 文件夹中，双击 {% data variables.product.prodname_desktop %} 安装程序文件。
  ![GitHubDesktopSetup 文件](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} 将在安装完成后启动。

{% endwindows %}
