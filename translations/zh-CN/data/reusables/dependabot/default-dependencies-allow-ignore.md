---
ms.openlocfilehash: 082f3b30b23ed6c8b2a7a4261cace89e32f0a8c9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145129902"
---
默认情况下，清单或锁定文件中明确定义的所有依赖项都将保持最新。 可以使用 `allow` 和 `ignore` 自定义要通过版本更新维护的依赖项。 {% data variables.product.prodname_dependabot %} 可检查所有被允许的依赖项，然后过滤到任何被忽略的依赖项或版本。 因此，将忽略由 `allow` 和 `ignore` 匹配的依赖项。
