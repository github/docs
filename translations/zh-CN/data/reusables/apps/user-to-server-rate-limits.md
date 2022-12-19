---
ms.openlocfilehash: 3bc47303cbc18b4d40a76fd12e6f692990f66c54
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145098339"
---
{% ifversion ghes %}默认情况下，用户到服务器{% else %}用户到服务器{% endif %}请求的速率限制为每个经验证的用户每小时最多发送 {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} 个请求。 来自用户授权的 OAuth 应用程序或用户拥有的个人访问令牌的所有请求，以及以及使用任何用户的身份验证凭据进行身份验证的请求，都共享该用户每小时 {% ifversion ghae %}15,000{% elsif fpt or ghec or ghes %}5,000{% endif %} 个请求的配额。
