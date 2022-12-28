---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180124"
---
{% ifversion ghae %} Damit Deine selbstgehosteten Runner mit {% data variables.product.prodname_dotcom %} kommunizieren können, füge die IP-Adresse oder den IP-Adressenbereich Deiner selbstgehosteten Runner zur IP-Zulassungsliste hinzu. Weitere Informationen findest Du „[Hinzufügen einer zulässigen IP-Adresse](#adding-an-allowed-ip-address)“.
{% else %} {% warning %}

**Warnung:** Wenn du eine Liste zugelassener IP-Adressen verwendest und auch {% data variables.product.prodname_actions %} verwenden möchtest, musst du selbstgehostete Runner{% ifversion actions-hosted-runners %} oder in {% data variables.product.prodname_dotcom %} gehostete größere Runner mit einem statischen IP-Adressbereich{% endif %} verwenden. Weitere Informationen findest du unter [Hosten deiner eigenen Runner](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners) {% ifversion actions-hosted-runners %} oder [Verwenden größerer Runner](/actions/using-github-hosted-runners/using-larger-runners).{% endif %}

{% endwarning %}

Damit deine selbstgehosteten{% ifversion actions-hosted-runners %} oder größeren gehosteten{% endif %} Runnern mit {% data variables.product.prodname_dotcom %} kommunizieren können, fügst du die IP-Adresse oder den IP-Adressbereich deiner Runner in der Liste zugelassener IP-Adressen hinzu, die du für dein Unternehmen konfiguriert hast. {% endif %}
