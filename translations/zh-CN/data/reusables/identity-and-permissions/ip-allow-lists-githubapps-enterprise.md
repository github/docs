---
ms.openlocfilehash: 130c705dad9367dbecb144ac281e8e58fa6d6cb7
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880370"
---
如果您使用允许列表，还可以选择将为企业中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

有关如何为已创建的 {% data variables.product.prodname_github_app %} 创建允许列表的详细信息，请参阅“[管理 GitHub 应用的允许 IP 地址](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)”。

为 {% data variables.product.prodname_github_apps %} 启用自动添加 IP 地址：

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. 在“IP 允许列表”下，选择“为已安装的 GitHub 应用启用 IP 允许列表配置”。
  ![允许 GitHub 应用 IP 地址的复选框](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. 单击“保存” 。
