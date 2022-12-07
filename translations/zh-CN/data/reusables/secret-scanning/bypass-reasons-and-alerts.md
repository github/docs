---
ms.openlocfilehash: eb4b729cf490728306961ff3d2ef2835700c8735
ms.sourcegitcommit: 80edcdbff4726de4d196584fcb603bca2efffd1f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/24/2022
ms.locfileid: "148181799"
---
此表显示了用户可以绕过推送保护块的每种方式的警报行为。

| 绕过原因         | 警报行为                                              |
|-----------------------|------------------------------------------------------|
| 它在测试中使用    | {% data variables.product.prodname_dotcom %} 创建已关闭的警报，该警报解析为“在测试中使用”  |
| 这是假正 | {% data variables.product.prodname_dotcom %} 创建已关闭的警报，该警报解析为“假正” |
| 我稍后会修复它     | {% data variables.product.prodname_dotcom %} 创建未结警报                                |