---
ms.openlocfilehash: bd2ea7e2ff0c8e9f60c3d011ee30573e3702cbed
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875606"
---
{% ifversion ghae %} Para permitir que os executores auto-hospedados se comuniquem com o {% data variables.product.prodname_dotcom %}, adicione o endereço IP ou o intervalo de endereços IP dos seus executores auto-hospedados à lista de IPs permitidos. Para obter mais informações, confira "[Como adicionar um endereço IP permitido](#adding-an-allowed-ip-address)".
{% else %} {% warning %}

**Aviso**: se você usar uma lista de IPs permitidos e desejar usar o {% data variables.product.prodname_actions %}, use executores auto-hospedados. Para obter mais informações, confira ["Como hospedar seus executores](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners)".

{% endwarning %}

Para permitir que seus executores auto-hospedados se comuniquem com {% data variables.product.prodname_dotcom %}, adicione o endereço IP ou o intervalo de endereços IP dos seus executores auto-hospedados para à lista de permitir IP. Para obter mais informações, confira "[Como adicionar um endereço IP permitido](#adding-an-allowed-ip-address)".
{% endif %}
