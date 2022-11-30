---
title: GitHub 市场
allowTitleToDifferFromFilename: true
shortTitle: Marketplace
intro: ''
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: acbdb60fc93898dd7c56c21f60e12fb9dbadb31d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145129186'
---
## 关于 {% data variables.product.prodname_marketplace %} API

有关 {% data variables.product.prodname_marketplace %} 的详细信息，请参阅“[GitHub Marketplace](/marketplace/)”。

{% data variables.product.prodname_marketplace %} API 允许您查看哪些客户正在使用定价计划，查看客户的购买情况，以及查看帐户是否具有有效订阅。

### 使用存根端点进行测试

此 API 包含的终结点允许使用“存根数据”[测试 {% data variables.product.prodname_github_app %}](/marketplace/integrating-with-the-github-marketplace-api/testing-github-marketplace-apps/)。 存根数据是硬编码的假数据，不会根据实际订阅而更改。

要使用存根数据进行测试，请使用存根端点代替其对应的生产端点。 这允许您在 {% data variables.product.prodname_marketplace %} 上列出 {% data variables.product.prodname_github_apps %} 之前测试 API 逻辑是否成功。

在部署您的 {% data variables.product.prodname_github_app %} 之前，请务必将存根端点替换为生产端点。
