---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145087225"
---
{% ifversion fpt or ghec %} {% note %}

**Remarque :** Les exécutions de workflow déclenchées par les demandes de tirage de {% data variables.product.prodname_dependabot %} s’exécutent comme si elles provenaient d’un dépôt dupliqué et utilisent donc un `GITHUB_TOKEN` en lecture seule. Ces exécutions de workflow ne peuvent pas accéder à des secrets. Consultez [« Maintien de la sécurité de votre instance GitHub Actions et vos workflows : Prévention des demandes pwn »](https://securitylab.github.com/research/github-actions-preventing-pwn-requests) pour connaître les stratégies permettant de sécuriser ces workflows.

{% endnote %} {% endif %}
