---
ms.openlocfilehash: bd2ea7e2ff0c8e9f60c3d011ee30573e3702cbed
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876116"
---
{% ifversion ghae %} 要允许自托管运行器与 {% data variables.product.prodname_dotcom %} 通信，请将自托管运行器的 IP 地址或 IP 地址范围添加到 IP 允许列表。 有关详细信息，请参阅“[添加允许的 IP 地址](#adding-an-allowed-ip-address)”。
{% else %} {% warning %}

警告：如果使用 IP 允许列表，并且还希望使用 {% data variables.product.prodname_actions %}，则必须使用自托管运行器。 有关详细信息，请参阅“[托管自己的运行器](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)”。

{% endwarning %}

要允许自托管运行器与 {% data variables.product.prodname_dotcom %} 通信，请将自托管运行器的 IP 地址或 IP 地址范围添加到 IP 允许列表。 有关详细信息，请参阅“[添加允许的 IP 地址](#adding-an-allowed-ip-address)”。
{% endif %}
