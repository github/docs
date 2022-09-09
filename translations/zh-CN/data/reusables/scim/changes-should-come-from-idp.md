---
ms.openlocfilehash: dbc37853f288c92b80e2858c0e94b9a07ca9b60f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145127422"
---
如果为组织实现了 SCIM 配置，则应从标识提供者触发对用户组织成员身份的任何更改。 如果用户手动而不是通过现有的 SCIM 集成被邀请到组织，他们的用户帐户可能无法正确链接到其 SCIM 标识。 这可以防止将来通过 SCIM 取消配置用户帐户。 如果手动删除用户而不是通过现有 SCIM 集成删除，则将保留陈旧的链接身份，如果用户需要重新加入组织，这可能会导致问题。
