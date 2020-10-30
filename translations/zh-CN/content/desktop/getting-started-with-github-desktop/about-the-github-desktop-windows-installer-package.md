---
title: 关于 GitHub Desktop Windows Installer 包
intro: '作为网络管理员，可以使用 Windows Installer 包文件 (`.msi`) 结合组策略或其他远程安装系统，将 {% data variables.product.prodname_desktop %} 部署到 Active Directory 管理的网络中的 Microsoft Windows 计算机。'
versions:
  free-pro-team: '*'
---

当用户下次登录其工作站时，Windows Installer 包将解压缩独立的安装程序 (`.exe`) 并配置 Windows 安装 {% data variables.product.prodname_desktop %}。 用户必须具有在其用户目录中安装 {% data variables.product.prodname_desktop %} 的权限。

如果用户直接运行 {% data variables.product.prodname_desktop %} Windows Installer 包，他们将需要注销并再次登录到其工作站，才可完成安装。
