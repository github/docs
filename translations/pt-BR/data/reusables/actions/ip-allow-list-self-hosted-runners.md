---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180092"
---
{% ifversion ghae %} Para permitir que os executores auto-hospedados se comuniquem com o {% data variables.product.prodname_dotcom %}, adicione o endereço IP ou o intervalo de endereços IP dos seus executores auto-hospedados à lista de IPs permitidos. Para obter mais informações, confira "[Como adicionar um endereço IP permitido](#adding-an-allowed-ip-address)".
{% else %} {% warning %}

**Aviso**: se você usa uma lista de permissões de IP e também deseja adotar {% data variables.product.prodname_actions %}, você precisar usar executores auto-hospedados{% ifversion actions-hosted-runners %} ou executores maiores hospedados no {% data variables.product.prodname_dotcom %} com um intervalo de endereços IP estáticos{% endif %}. Para obter mais informações, confira "[Como hospedar executores próprios](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)" {% ifversion actions-hosted-runners %} ou "[Como usar executores maiores](/actions/using-github-hosted-runners/using-larger-runners)"{% endif %}.

{% endwarning %}

Para permitir que seus executores auto-hospedados {% ifversion actions-hosted-runners %}ou executores maiores hospedados{% endif %} se comuniquem com o {% data variables.product.prodname_dotcom %}, adicione o endereço IP (ou o intervalo de endereços IP) dos seus executores à lista de permissões de IP que você configurou para sua empresa. {% endif %}
