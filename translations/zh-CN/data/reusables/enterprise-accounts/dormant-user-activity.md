---
ms.openlocfilehash: ae3a6c6743e497213f23230a4f78d98a1ab9a110
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192927"
---
如果用户在 {% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} 上执行了以下任何活动，则认为用户处于活动状态。

- 登录到 {% data variables.location.product_location %}
- 创建仓库
- 推送到存储库
- 被添加到存储库
- 更改存储库的可见性
- 创建议题或拉取请求
- 评论问题或拉取请求
- 关闭或重新打开问题或拉取请求
- 将标签应用于问题或拉取请求，或删除标签
- 分配或取消分配问题或拉取请求
- 请求对拉取请求进行评审或删除评审请求
- 在拉取请求评审中创建或编辑评论
- 在拉取请求中消除评论 
- 同步拉取请求
- 对提交进行评论
- 发布版本
- 推送到 Wiki
- 关注仓库
- 对仓库标星
- 删除仓库
- 使用 {% data variables.product.pat_generic %} 或 SSH 密钥访问资源
- 加入组织

{% ifversion ghes %} 如果用户的帐户已通过 LDAP 更新，则认为该用户是活动用户。
{% endif %}
