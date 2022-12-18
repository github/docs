---
ms.openlocfilehash: f88150299e77eff08e5db75a7ef5bf5bd460328b
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184061"
---
启用允许列表时，您配置的 IP 地址将立即添加到企业中的组织允许列表中。 如果禁用允许列表，则地址将从组织允许列表中删除。 

{% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %}有关详细信息，请参阅“[管理组织允许的 IP 地址](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)”。

您可以选择将为组织中安装的 {% data variables.product.prodname_github_apps %} 配置的任何 IP 地址自动添加到允许列表中。 {% data variables.product.prodname_github_app %} 的创建者可以为其应用程序配置允许列表，指定应用程序运行的 IP 地址。 通过将允许列表继承到您的列表中，您可以避免申请中的连接请求被拒绝。 有关详细信息，请参阅“[允许 GitHub 应用进行访问](#allowing-access-by-github-apps)”。
