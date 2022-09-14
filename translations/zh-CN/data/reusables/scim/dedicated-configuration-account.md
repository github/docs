---
ms.openlocfilehash: 49888e7031e048c77d405b1e65d9e06510e3c789
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147063408"
---
若要将 SCIM 用于你的组织，必须使用第三方拥有的 {% data variables.product.prodname_oauth_app %}。 {% data variables.product.prodname_oauth_app %} 必须由特定 {% data variables.product.prodname_dotcom %} 用户授权，然后代表该用户执行操作。 如果上次授权此 {% data variables.product.prodname_oauth_app %} 的用户离开或者被从组织中移除，SCIM 将停止工作。 为避免此问题，我们建议创建一个专用用户帐户来配置 SCIM。 此用户帐户必须是组织所有者，并且将使用许可证。
