---
title: 管理 GitHub Codespaces 的 GPG 验证
intro: '您可以允许 {% data variables.product.company_short %} 自动使用 GPG 对在代码空间中所做的提交进行签名，以便其他人可以确信更改来自受信任的源。'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167099'
---
启用 GPG 验证后，{% data variables.product.company_short %} 将自动对你在 {% data variables.product.prodname_github_codespaces %} 中所做的提交进行签名，并且该提交在 {% data variables.product.product_name %} 上具有已验证状态。 默认情况下，GPG 验证对您创建的代码空间禁用。 您可以选择对所有仓库或特定仓库允许 GPG 验证。 仅对您信任的仓库启用 GPG 验证。 有关 {% data variables.product.product_name %} 签名提交的更多信息，请参阅[关于提交签名验证](/github/authenticating-to-github/about-commit-signature-verification)。

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

注意：如果已将点文件存储库链接到 {% data variables.product.prodname_github_codespaces %}，则点文件中的 Git 配置可能与 {% data variables.product.prodname_github_codespaces %} 签署提交所需的配置冲突。 有关详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 的 GPG 验证疑难解答](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)”。

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“GPG verification（GPG 验证）”下，选择您想要的 GPG 验证设置。
  ![管理 GPG 验证的单选按钮](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. 如果选择“所选存储库”，请选择下拉菜单，然后单击要为其启用 GPG 验证的存储库。 对您要启用 GPG 验证的所有仓库重复此操作。
  ![“所选存储库”下拉菜单](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


为 {% data variables.product.prodname_github_codespaces %} 启用 GPG 验证后，默认情况下所有提交都会在 codespace 中进行签名。
