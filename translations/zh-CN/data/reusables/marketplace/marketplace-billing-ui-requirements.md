---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145100689"
---
- 取消从 {% data variables.product.prodname_marketplace %} 购买的付费计划的客户应自动降级到该应用程序的免费计划（如果有）。 {% data reusables.marketplace.cancellation-clarification %} 强烈建议允许客户重新启用他们以前的计划。
- 如果提供以下格式的[升级 URL](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls)，客户应该能够从应用的用户界面进行升级：`https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- 如果客户购买了席位（单位定价计划）或支持无限协作者的计划，他们应该能够修改哪些用户可以从应用程序的网站访问应用程序。
- 客户应该能够在应用程序网站的帐单、个人资料或帐户设置部分立即看到其帐户的以下变动：
  - 当前计划和价格。
  - 购买的新计划。
  - 升级、降级、取消以及免费试用剩余天数。
  - 结算周期的变化（每月或每年）。
  - 固定费用和每单位计划的使用情况和剩余资源。 例如，如果定价计划是按单位计费，则应用程序的网站应显示已用单位和可用单位。
