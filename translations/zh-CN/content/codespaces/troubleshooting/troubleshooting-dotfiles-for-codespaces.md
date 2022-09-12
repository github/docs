---
title: Codespaces 的 dotfiles 疑难解答
intro: 常见 dotfiles 问题的疑难解答步骤。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 64b4873a36cbdc88b5df3129c2e73e016159032e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147382234'
---
如果代码空间无法从 dotfiles 中选取配置设置，则应执行以下调试步骤。

1. 通过在[个人 Codespaces 设置](https://github.com/settings/codespaces)中选择“自动安装点文件”来启用点文件。

   ![“自动安装点文件”选项](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. 检查 `/workspaces/.codespaces/.persistedshare/dotfiles` 以查看点文件是否被克隆。
   - 如果您的 dotfiles 被克隆，请尝试手动重新运行安装脚本以验证其可执行性。
   - 如果点文件未被克隆，请检查 `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` 是否存在克隆问题。
1. 检查 `/workspaces/.codespaces/.persistedshare/creation.log` 以了解可能出现的问题。 有关详细信息，请参阅[创建日志](/codespaces/troubleshooting/codespaces-logs#creation-logs)。

如果已正确选取点文件中的配置，但部分配置与 codespace 不兼容，请使用 `$CODESPACES` 环境变量为特定于 codespace 的配置设置添加条件逻辑。
