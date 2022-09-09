---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146458194"
---
依赖项关系图是存储在存储库{% ifversion dependency-submission-api %} 中的清单和锁定文件的摘要，以及所有提交给使用依赖项提交 API（beta 版）{% endif %} 的存储库的依赖关系。 对于每个存储库，它显示{% ifversion fpt or ghec %}：

- 依赖项、它依赖的生态系统和包
- 依赖项、依赖于它的仓库和包{% else %} 依赖项，即它所依赖的生态系统和包。 {% data variables.product.product_name %} 不计算有关依赖项、存储库和依赖于存储库的包的信息。{% endif %}
