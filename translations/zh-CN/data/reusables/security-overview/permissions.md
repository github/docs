---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/27/2022
ms.locfileid: "148113974"
---
{% ifversion not fpt %}组织所有者和安全管理员可以访问组织级安全概览{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}，还可以通过企业级安全概览跨多个组织查看警报。 企业所有者只能查看添加为组织所有者或安全管理员的组织的存储库和警报{% endif %}。 {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}组织成员可以访问组织级安全概览，以查看他们拥有管理员权限或已被授予安全警报访问权限的存储库的结果。{% else %}团队成员可以查看团队拥有管理员权限的存储库的安全概览。{% endif %}{% endif %}
