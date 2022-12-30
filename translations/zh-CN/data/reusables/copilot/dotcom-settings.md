---
ms.openlocfilehash: 6946b53d41210f3e5ec43a06e0917d60fe959096
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148192871"
---
## 在 {% data variables.product.prodname_dotcom_the_website %} 上配置 {% data variables.product.prodname_copilot %} 设置

在拥有处于活动状态的 {% data variables.product.prodname_copilot %} 试用版或订阅后，可以在 {% data variables.product.prodname_dotcom %} 上的 [{% data variables.product.prodname_copilot %} 设置](https://github.com/settings/copilot)中为你的个人帐户调整 {% data variables.product.prodname_copilot %} 设置。 无论在何处使用 {% data variables.product.prodname_copilot %}，这些设置都适用。 可以配置 {% data variables.product.prodname_copilot %} 提供的建议，以及 {% data variables.product.company_short %} 使用你的遥测数据的方式。

### 启用或禁用重复检测

{% data reusables.copilot.duplication-setting-org %}

{% data variables.product.prodname_copilot %} 包含筛选器，该筛选器用于检测与 {% data variables.product.prodname_dotcom %} 上的公共代码匹配的代码建议。 可以选择启用或禁用筛选器。 启用筛选器后，{% data variables.product.prodname_copilot %} 会根据 {% data variables.product.prodname_dotcom %} 上的公共代码检查代码建议及其周围约 150 个字符的代码。 如果存在匹配或接近匹配，不会向你显示建议。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. 在“与公共代码匹配的建议”下，选择下拉菜单，然后单击“允许”以允许与公共代码匹配的建议，或单击“阻止”以阻止与公共代码匹配的建议  。
  ![重复检测选项的屏幕截图](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

### 启用或禁用遥测

{% data reusables.copilot.telemetry-setting-org %}

通过调整你的用户设置，你可以选择代码片段是否由 GitHub 收集和保留，并进一步通过 Microsoft 和 OpenAI 进行处理和共享。 有关 {% data variables.product.prodname_copilot %} 可能根据你的遥测设置收集的数据的更多信息，请参阅“[{% data variables.product.company_short %} 附加产品和功能条款](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)”以及“[{% data variables.product.prodname_copilot %} 隐私常见问题解答”](https://github.com/features/copilot/#faq-privacy)。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. 若要允许或阻止 {% data variables.product.prodname_dotcom %} 使用你的遥测数据，请选择或取消选择“允许 {% data variables.product.prodname_dotcom %} 使用我的代码片段进行产品改进”。
  ![遥测选项的屏幕截图](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## 延伸阅读

- [{% data variables.product.prodname_copilot %} 常见问题解答](https://github.com/features/copilot/#faq)
