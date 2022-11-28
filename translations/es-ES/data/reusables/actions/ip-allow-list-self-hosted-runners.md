---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180160"
---
{% ifversion ghae %} Para permitir que los ejecutores autohospedados se comuniquen con {% data variables.product.prodname_dotcom %}, agregue la dirección IP o intervalo de direcciones IP de los ejecutores autohospedados a la lista de IP permitidas. Para más información, vea "[Adición de una dirección IP permitida](#adding-an-allowed-ip-address)".
{% else %} {% warning %}

**Advertencia**: Si usas una lista de direcciones IP permitidas y también quieres usar {% data variables.product.prodname_actions %}, debes usar ejecutores autohospedados{% ifversion actions-hosted-runners %} o {% data variables.product.prodname_dotcom %} ejecutores más grandes hospedados con un intervalo de direcciones IP estático{% endif %}. Para obtener más información, consulta "[Hospedaje de ejecutores propios](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} o "[Uso de ejecutores más grandes](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}.

{% endwarning %}

Para permitir que los ejecutores hospedados {% ifversion actions-hosted-runners %}o los ejecutores más grandes{% endif %} se comuniquen con {% data variables.product.prodname_dotcom %}, agrega la dirección IP o el intervalo de direcciones IP de los ejecutores a la lista de direcciones IP permitidas que has configurado para tu empresa. {% endif %}
