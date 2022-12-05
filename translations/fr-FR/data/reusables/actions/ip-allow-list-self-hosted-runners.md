---
ms.openlocfilehash: 16f0a067759f387d360529b7c79b30558bf5f220
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/22/2022
ms.locfileid: "148180108"
---
{% ifversion ghae %} Pour permettre à vos exécuteurs auto-hébergés de communiquer avec {% data variables.product.prodname_dotcom %}, ajoutez l’adresse IP ou la plage d’adresses IP de vos exécuteurs auto-hébergés à la liste des adresses IP autorisées. Pour plus d’informations, consultez « [Ajout d’une adresse IP autorisée](#adding-an-allowed-ip-address) ».
{% else %} {% warning %}

**Avertissement** : Si vous utilisez une liste d’adresses IP autorisées et que vous souhaitez également utiliser {% data variables.product.prodname_actions %}, vous devez utiliser des exécuteurs auto-hébergés{% ifversion actions-hosted-runners %} ou des exécuteurs hébergés par {% data variables.product.prodname_dotcom %} plus grands avec une plage d’adresses IP statiques{% endif %}. Pour plus d’informations, consultez « [Hébergement de vos propres exécuteurs](/actions/automating-your-workflow-with-github-actions/about-self-hosted-runners) » {% ifversion actions-hosted-runners %} ou « [Utilisation d’exécuteurs plus grands](/actions/using-github-hosted-runners/using-larger-runners) »{% endif %}.

{% endwarning %}

Pour permettre à vos exécuteurs auto-hébergés {% ifversion actions-hosted-runners %}ou hébergés plus grands{% endif %} de communiquer avec {% data variables.product.prodname_dotcom %}, ajoutez l’adresse IP ou la plage d’adresses IP de vos exécuteurs à la liste d’adresses IP autorisées que vous avez configurée pour votre entreprise. {% endif %}
