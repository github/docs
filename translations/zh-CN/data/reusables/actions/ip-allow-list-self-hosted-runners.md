---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180107"
---
{% ifversion ghae %} 要允许自托管运行器与 {% data variables.product.prodname_dotcom %} 通信，请将自托管运行器的 IP 地址或 IP 地址范围添加到 IP 允许列表。 有关详细信息，请参阅“[添加允许的 IP 地址](#adding-an-allowed-ip-address)”。
{% else %} {% warning %}

警告：如果你使用 IP 允许列表并且还想使用 {% data variables.product.prodname_actions %}，则必须使用自托管的运行器{% ifversion actions-hosted-runners %}或具有静态 IP 地址范围的 {% data variables.product.prodname_dotcom %} 托管的大型运行器{% endif %}。 有关详细信息，请参阅“[托管你自己的运行器](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”{% ifversion actions-hosted-runners %}或“[使用大型运行器](/actions/using-github-hosted-runners/using-larger-runners)”{% endif %}。

{% endwarning %}

若要允许自托管{% ifversion actions-hosted-runners %}或大型托管{% endif %}运行器与 {% data variables.product.prodname_dotcom %} 通信，请将你的运行器的 IP 地址或 IP 地址范围添加到你为企业配置的 IP 允许列表中。 {% endif %}
