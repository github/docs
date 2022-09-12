---
ms.openlocfilehash: bd2ea7e2ff0c8e9f60c3d011ee30573e3702cbed
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879344"
---
{% ifversion ghae %} Para permitir que los ejecutores autohospedados se comuniquen con {% data variables.product.prodname_dotcom %}, agregue la dirección IP o intervalo de direcciones IP de los ejecutores autohospedados a la lista de IP permitidas. Para más información, vea "[Adición de una dirección IP permitida](#adding-an-allowed-ip-address)".
{% else %} {% warning %}

**Advertencia**: Si usa una lista de IP permitidas y también quiere utilizar {% data variables.product.prodname_actions %}, tendrá que usar ejecutores autohospedados. Para más información, vea "[Hospedaje de ejecutores propios](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% endwarning %}

Para permitir que los ejecutores auto-hospedados se comuniquen con {% data variables.product.prodname_dotcom %}, agrega la dirección o rango de direcciones IP de tus ejecutores auto-hospedados a la lista de IP permitidas. Para más información, vea "[Adición de una dirección IP permitida](#adding-an-allowed-ip-address)".
{% endif %}
